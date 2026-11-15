interface Env {
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
}

const SITE_ORIGIN = "https://evoolo.github.io";
const SITE_ID = "evoolo.github.io";
const SOURCE_REPO = "Evoolo/seamore-website";
const STATE_COOKIE = "seamore_oauth_state";
const VERIFIER_COOKIE = "seamore_oauth_verifier";
const MANIFEST_COOKIE = "seamore_manifest_state";

function randomString(size = 32) {
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function pkceChallenge(verifier: string) {
  const bytes = new TextEncoder().encode(verifier);
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return btoa(String.fromCharCode(...digest)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function cookieValue(request: Request, name: string) {
  const cookie = request.headers.get("Cookie") || "";
  return cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`))?.slice(name.length + 1);
}

function setCookie(name: string, value: string, path: string) {
  return `${name}=${value}; HttpOnly; Secure; SameSite=Lax; Path=${path}; Max-Age=600`;
}

function clearCookie(name: string, path: string) {
  return `${name}=; HttpOnly; Secure; SameSite=Lax; Path=${path}; Max-Age=0`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
}

function html(body: string, status = 200, cookies: string[] = []) {
  const headers = new Headers({
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; form-action https://github.com; base-uri 'none'; frame-ancestors 'none'",
  });
  for (const cookie of cookies) headers.append("Set-Cookie", cookie);
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sea More CMS</title><style>body{font:16px/1.6 system-ui,sans-serif;background:#f7f9f8;color:#071d34;margin:0}main{max-width:620px;margin:12vh auto;padding:40px;background:#d9eef4}h1{line-height:1.1}button,a.button{display:inline-block;background:#071d34;color:white;padding:12px 18px;border:0;cursor:pointer;text-decoration:none}code{overflow-wrap:anywhere}</style>${body}</html>`, { status, headers });
}

function callbackPage(message: string, cookies: string[]) {
  const nonce = randomString(18);
  const script = `(() => { const opener = window.opener; const origin = ${JSON.stringify(SITE_ORIGIN)}; const message = ${JSON.stringify(message).replace(/</g, "\\u003c")}; if (!opener) return; window.addEventListener("message", event => { if (event.origin === origin && event.data === "authorizing:github") opener.postMessage(message, origin); }); opener.postMessage("authorizing:github", origin); })();`;
  const response = html(`<main><h1>Finishing sign in…</h1><p>This window will close after the editor receives your GitHub authorization.</p></main><script nonce="${nonce}">${script}</script>`, 200, cookies);
  response.headers.set("Content-Security-Policy", `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'`);
  return response;
}

function errorPage(message: string, status = 400) {
  return html(`<main><h1>Sign in could not finish.</h1><p>${escapeHtml(message)}</p><p><a class="button" href="${SITE_ORIGIN}/seamore/admin/">Back to the editor</a></p></main>`, status);
}

function registerPage(request: Request) {
  const url = new URL(request.url);
  const state = randomString();
  const manifest = {
    name: "Sea More Expeditions Content Editor",
    url: `${SITE_ORIGIN}/seamore/`,
    description: "Edit Sea More Expeditions website content through Decap CMS.",
    redirect_url: `${url.origin}/app-created`,
    callback_urls: [`${url.origin}/callback`],
    setup_url: `${SITE_ORIGIN}/seamore/admin/`,
    public: true,
    default_permissions: { contents: "write", metadata: "read" },
    default_events: [],
    hook_attributes: { url: `${url.origin}/webhook`, active: false },
    request_oauth_on_install: false,
  };
  const body = `<main><h1>Create the Sea More GitHub App</h1><p>GitHub will ask you to approve this app registration. Afterward, install it for <strong>only ${SOURCE_REPO}</strong>.</p><form method="post" action="https://github.com/settings/apps/new?state=${state}"><input type="hidden" name="manifest" value="${escapeHtml(JSON.stringify(manifest))}"><button type="submit">Continue to GitHub</button></form></main>`;
  return html(body, 200, [setCookie(MANIFEST_COOKIE, state, "/app-created")]);
}

function appCreated(request: Request) {
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  if (!state || !code || state !== cookieValue(request, MANIFEST_COOKIE)) return errorPage("The GitHub App registration state did not match. Start again from /register.");
  const body = `<main><h1>App registration approved</h1><p>Send this one-time registration code to the site developer within one hour so the app credentials can be stored securely in Cloudflare:</p><p><code>${escapeHtml(code)}</code></p><p>The app still needs installation on <strong>${SOURCE_REPO}</strong> after credentials are saved.</p></main>`;
  return html(body, 200, [clearCookie(MANIFEST_COOKIE, "/app-created")]);
}

async function authorize(request: Request, env: Env) {
  const url = new URL(request.url);
  if (url.searchParams.get("provider") !== "github" || url.searchParams.get("site_id") !== SITE_ID) return errorPage("This login request is not for the Sea More editor.");
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) return errorPage("The GitHub App is not connected yet.", 503);
  const state = randomString();
  const verifier = randomString(48);
  const github = new URL("https://github.com/login/oauth/authorize");
  github.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  github.searchParams.set("redirect_uri", `${url.origin}/callback`);
  github.searchParams.set("state", state);
  github.searchParams.set("code_challenge", await pkceChallenge(verifier));
  github.searchParams.set("code_challenge_method", "S256");
  const headers = new Headers({ Location: github.toString(), "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" });
  headers.append("Set-Cookie", setCookie(STATE_COOKIE, state, "/callback"));
  headers.append("Set-Cookie", setCookie(VERIFIER_COOKIE, verifier, "/callback"));
  return new Response(null, { status: 302, headers });
}

async function callback(request: Request, env: Env) {
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const expectedState = cookieValue(request, STATE_COOKIE);
  const verifier = cookieValue(request, VERIFIER_COOKIE);
  const cookies = [clearCookie(STATE_COOKIE, "/callback"), clearCookie(VERIFIER_COOKIE, "/callback")];
  if (!state || !expectedState || state !== expectedState || !verifier) return errorPage("The login session expired or did not match. Please try again.");
  if (url.searchParams.has("error")) return callbackPage(`authorization:github:error:${JSON.stringify({ message: "GitHub authorization was cancelled." })}`, cookies);
  const code = url.searchParams.get("code");
  if (!code || !env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) return errorPage("The GitHub App has not been connected.", 503);
  const form = new URLSearchParams({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code, redirect_uri: `${url.origin}/callback`, code_verifier: verifier });
  const response = await fetch("https://github.com/login/oauth/access_token", { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "SeaMoreDecapAuth" }, body: form });
  const token = await response.json() as { access_token?: string; error?: string };
  if (!response.ok || !token.access_token) return callbackPage(`authorization:github:error:${JSON.stringify({ message: "GitHub could not issue an editor token." })}`, cookies);
  return callbackPage(`authorization:github:success:${JSON.stringify({ token: token.access_token })}`, cookies);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405, headers: { Allow: "GET" } });
    if (url.pathname === "/health") return Response.json({ ok: true, configured: Boolean(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) }, { headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": SITE_ORIGIN } });
    if (url.pathname === "/register") return env.GITHUB_CLIENT_ID ? new Response("Not found", { status: 404 }) : registerPage(request);
    if (url.pathname === "/app-created") return appCreated(request);
    if (url.pathname === "/auth") return authorize(request, env);
    if (url.pathname === "/callback") return callback(request, env);
    return new Response("Not found", { status: 404 });
  },
};
