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

The three speed lines beside LOFTUS are the site's motif. They run out of the
logo across the header, cross the photographs, and mark the current page.
They live in `components/Divider.tsx`. Colors are in `COLOR.md`. On a phone,
Menu opens the page list.
Headlines are Newsreader. Body and navigation are Public Sans. Navy `#222e61`
is the only dark field: header, footer, phone bar, and page plates. Brand blue
`#0014e0` is the thin accent on white. Content sections are white.

Palette:

| Token | Hex | Source |
|---|---|---|
| brand | `#0014e0` | current logo PNG, between interior blues `#0000c8` and `#0016e4` |
| navy | `#222e61` | dimensional sign, used for every dark surface |
| mist | `#c5cad3` | secondary text on navy |
| ink | `#1c1e22` | body text on white |
| rule | `#d5d8de` | hairlines |

The header uses `logos/current-logo-white.png`, the current wordmark recolored
white for the navy bar. The footer uses `logos/dimensional-letters-white.svg`.
The blue and navy source files stay in the repo and are not placed on the bar.
The 25th anniversary mark is not on the site. Photography is the jobsite set
listed in `ASSETS.md`. Older low-resolution files from loftusconstruction.com
are not used.
