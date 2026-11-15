# Sea More Expeditions

A Next.js website for Sea More Expeditions, using the refreshed logo, existing expedition photography, and content adapted from the archived Joomla site. It includes expedition themes, an about page, a journal with category filtering and individual articles, and a contact path.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. For a production check, run `npm run typecheck` and `npm run build`.

## Publishing

This repository is the website source: [Evoolo/seamore-website](https://github.com/Evoolo/seamore-website). The separate [Evoolo/seamore](https://github.com/Evoolo/seamore) repository builds this source with GitHub Actions, commits the static files, and deploys them to GitHub Pages at <https://evoolo.github.io/seamore/>. Its workflow can be run manually and checks for source updates hourly.

To test the GitHub Pages export locally:

```bash
NEXT_PUBLIC_BASE_PATH=/seamore NEXT_PUBLIC_SITE_URL=https://evoolo.github.io/seamore npm run build
```

The generated site is in `out/`.

## Content and assets

- `lib/content.ts` holds expedition themes, journal articles, and FAQs.
- `public/media/` holds selected images copied from the supplied `assets/images/` collection and the refreshed logo. The larger original image archive remains in the local workspace; the website repository contains only the images it uses.
- `CONTENT.md`, `BRAND_GUIDE.md`, and `CORPORATE_IDENTITY.md` remain the source reference documents.
- The pages deliberately avoid publishing old expedition dates, prices, or guaranteed sightings. Availability is handled by enquiry.

## UI

The hero, feature, blog, FAQ, and call-to-action sections began as Shadcnblocks registry blocks and were adapted to the Sea More identity. Shared shadcn/ui primitives are in `components/ui/`; site-specific components are in `components/`.

The Shadcnblocks registry token is read from `SHADCNBLOCKS_API_KEY` in `.env.local` when adding new blocks. This is only needed for registry access, not for running the website. Copy `.env.example` if you need to set it up in another environment.
