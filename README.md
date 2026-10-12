# Loftus Construction, Inc. website

A preview site for Loftus Construction, built by MJL Collective. Public facts
still come from the sources in `PROFILE.md`. Logos and the Brownsville and
University Avenue photographs were supplied by Ryan Loftus on 8 Oct 2026.
Which files are on the page, and which were left out, is `ASSETS.md`.

Status stays `demo`: the site is noindexed, carries a preview banner naming
the builder, and contains no forms. Do not promote a preview deployment to
production.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, fully static. Fonts are
self-hosted subsets loaded through `next/font/local`. No CMS, no database, no
analytics, no third party requests at runtime.

## The one file that matters

`lib/business.ts` is the entire configuration surface. Every fact on the site
comes from it, and anything unverified is typed `null` so it renders nothing
rather than shipping a guess. Three fields are null on purpose right now:

- `hours` because no opening hours are published anywhere
- `rating` and `reviewCount` because the Google listing has not been read
- `social` because LinkedIn blocks automated reading and nothing else was found

`PROFILE.md` carries every fact with its source next to it.

## Commands

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build, all routes static
    python3 qa.py http://127.0.0.1:3000   # the QA gate

`qa.py` checks horizontal overflow at 390 and 1440, console errors, tap target
sizes, title and meta and Open Graph, noindex while demo, tel: correctness,
absence of forms, the preview banner, JSON-LD validity, a single h1, image alt
text and loading, robots.txt and sitemap.xml.

## Going from demo to sold

Set `status` in `lib/business.ts` to `sold`. That switches robots to allow
indexing, removes the preview banner and removes the footer disclosure. Nothing
else needs to change.

## Design notes

The design is built out of the Loftus wordmark.

- **Speed lines.** The three stepped rules beside LOFTUS (heavy, medium, light) are the
  structure of the site: the header rule, the line under the home headline that runs
  into the photograph, section breaks, the active page mark, and on the record page the
  contract amounts themselves, where the length of the rule is the size of the job.
  `components/SpeedLines.tsx`, `components/ValueBar.tsx`.
- **Type.** Tinos, the free metric match for the Times serif in the wordmark, for
  headlines; small caps set like CONSTRUCTION, INC. for sheet labels; Public Sans for
  reading.
- **Drawing cues.** Blueprint grid on navy panels, dimension lines for photo captions
  (`components/Dim.tsx`), and a title block job sheet on each project page.
- **Palette.** One navy `#222e61` (the dimensional letters sign) for every dark panel,
  white for content, the wordmark blue `#0014e0` only for links and thin rules.
- **Photographs.** Every photo is defined once in `lib/photos.ts` and used once on the
  site. Job photos are 2400 px web copies of Ryan's Drive originals (the home photo is
  3200 px from the original drone frame). The five contract photos on the record page
  and four capability thumbnails are the small originals from loftusconstruction.com
  and are only ever shown at or below their native size.
- **Phone menu.** A full screen dialog rendered into `<body>`, outside the header.
