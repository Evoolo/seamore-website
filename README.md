# Sea More Expeditions

A Next.js website for Sea More Expeditions, using the refreshed logo, existing expedition photography, and content adapted from the archived Joomla site. It includes expedition themes, an about page, a journal with category filtering and individual articles, and a contact path.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. For a production check, run `npm run typecheck` and `npm run build`.

## Publishing

This repository is the website source: [Evoolo/seamore-website](https://github.com/Evoolo/seamore-website). The separate [Evoolo/seamore](https://github.com/Evoolo/seamore) repository builds this source with GitHub Actions, commits the static files, and deploys them to GitHub Pages at <https://evoolo.github.io/seamore/>. Source commits trigger its workflow automatically; it can also be run manually and checks for updates daily as a fallback.

To test the GitHub Pages export locally:

```bash
NEXT_PUBLIC_BASE_PATH=/seamore NEXT_PUBLIC_SITE_URL=https://evoolo.github.io/seamore npm run build
```

The generated site is in `out/`.

## Content and assets

- `content/` holds page copy, expeditions, journeys, journal articles, and FAQs. `lib/content.ts` loads these files for the static build.
- `public/media/` holds selected images copied from the supplied `assets/images/` collection and the refreshed logo. The larger original image archive remains in the local workspace; the website repository contains only the images it uses.
- `CONTENT.md`, `BRAND_GUIDE.md`, and `CORPORATE_IDENTITY.md` remain the source reference documents.
- The pages deliberately avoid publishing old expedition dates, prices, or guaranteed sightings. Availability is handled by enquiry.
- The contact form opens an email draft in the visitor's email app with all entered fields. The visitor reviews and sends that draft from their email app.

## UI

The hero, feature, blog, FAQ, and call-to-action sections began as Shadcnblocks registry blocks and were adapted to the Sea More identity. Shared shadcn/ui primitives are in `components/ui/`; site-specific components are in `components/`.

The Shadcnblocks registry token is read from `SHADCNBLOCKS_API_KEY` in `.env.local` when adding new blocks. This is only needed for registry access, not for running the website. Copy `.env.example` if you need to set it up in another environment.

## Content editor

Decap CMS is served at <https://evoolo.github.io/seamore/admin/>. It edits `content/` in the source repository and uploads photos to `public/media/`. The editor offers website page sections, expeditions, journeys, articles, and FAQs. New expedition and journey entries receive their own page and appear in their respective overview after the GitHub Pages build finishes. A new expedition can also be featured on the home page by adding its URL name under **Website pages → Home page → Selected expeditions**.

Authentication uses the [Sea More GitHub App](https://github.com/apps/sea-more-expeditions-cms) and the Cloudflare Worker in `cloudflare/cms-auth/`. The App is installed on **only** `Evoolo/seamore-website`; the published `Evoolo/seamore` repository needs no editor access. Its client ID and secret are stored as Cloudflare Worker secrets.

To give a customer access, invite their GitHub account to `Evoolo/seamore-website` with **Write** permission. They can then open the admin URL, sign in with GitHub, edit an entry, and publish. The App's user token can edit only repositories available to both the App installation and that GitHub user. A source commit triggers the static GitHub Pages build.

The Worker accepts login requests only for this site's origin and the App has repository Contents read/write permission. Do not commit the App client secret or private key.
