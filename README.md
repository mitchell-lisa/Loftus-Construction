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

The header edge, the first screen, and the breaks between bands use three equal
speed lines, the stripes beside LOFTUS on the current wordmark. They live in
`components/Divider.tsx`. The first screen locks the headline and the phone to a
navy panel beside a Brownsville frame. On a phone, Menu opens the section list.
Headlines are Newsreader. Body and navigation are Public Sans. Navy `#222e61`
is the dimensional sign. Brand blue `#0014e0` is the current wordmark.

Palette, sampled rather than guessed:

| Token | Hex | Source |
|---|---|---|
| brand | `#0014e0` | current logo PNG, between interior blues `#0000c8` and `#0016e4` |
| girder | `#191d21` | near-black for the preview bar |
| steel | `#aab1b9` | neutral grey from the old stylesheet |
| concrete | `#d3d3d3` | photo placeholder behind images while they load |
| chalk | `#f4f3f0` | page background |

The header uses `logos/current-logo.png` in its own blue. The footer uses
`logos/dimensional-letters.svg`, which is navy `#222e61` and is not recolored.
The 25th anniversary mark is not on the site. Photography is the jobsite set
listed in `ASSETS.md`. Older low-resolution files from loftusconstruction.com
are not used.
