# Sea More Decap authentication Worker

This Cloudflare Worker provides the two routes Decap's GitHub backend needs: `/auth` starts a GitHub App user authorization, and `/callback` exchanges the code and completes Decap's popup handshake. `/health` reports whether the App credentials are configured.

Deploy with `npx wrangler deploy` from this directory. After the GitHub App is created, store its client ID and secret with `npx wrangler secret put GITHUB_CLIENT_ID` and `npx wrangler secret put GITHUB_CLIENT_SECRET`. Do not commit either secret.

The App must be installed for **only** `Evoolo/seamore-website` with Contents read/write permission. Each editor also needs GitHub write access to that repository: GitHub App user tokens can only act where both the app and the user have access. The rendered `Evoolo/seamore` repository does not need app access.
