# Sea More Decap authentication Worker

This Cloudflare Worker provides the two routes Decap's GitHub backend needs: `/auth` starts a GitHub App user authorization, and `/callback` exchanges the code and completes Decap's popup handshake. `/health` reports whether the App credentials are configured.

Deploy with `npx wrangler deploy` from this directory. The [Sea More GitHub App](https://github.com/apps/sea-more-expeditions-cms) is already registered and installed on the source repository. Its client ID and secret are stored in the Worker as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`; `npx wrangler secret list` shows their names without revealing values. Do not commit either secret.

The App must be installed for **only** `Evoolo/seamore-website` with Contents read/write permission. Each editor also needs GitHub write access to that repository: GitHub App user tokens can only act where both the app and the user have access. The rendered `Evoolo/seamore` repository does not need app access.
