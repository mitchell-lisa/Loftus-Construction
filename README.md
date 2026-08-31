# Loftus Construction, Inc. website

A speculative rebuild of loftusconstruction.com, built by MJL Collective from
public sources only. Status is `demo`: the site is noindexed, carries a preview
banner naming the builder, and contains no forms.

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

The separator running through the site is taken from the wordmark: three
horizontal rules, stepped so each is shorter than the one above, measured off
the logo file at roughly 100, 83 and 69 percent. It lives in `components/Rule.tsx`
and is the only ornament used.

Palette, sampled rather than guessed:

| Token | Hex | Source |
|---|---|---|
| girder | `#191d21` | oxidized steel in their own project photography |
| slate | `#364f6d` | already present in their existing stylesheet |
| steel | `#aab1b9` | already present in their existing stylesheet |
| concrete | `#d3d3d3` | new deck concrete, Strasburg Railroad photograph |
| chalk | `#f4f3f0` | fresh pour, bridge deck photograph |

Photography is the company's own, taken from their current site. It is genuine
but low resolution, capped at 1140 pixels wide, and the layout is built to sit
within that limit. Replacing these files with owner-supplied originals improves
every section without any code change.
