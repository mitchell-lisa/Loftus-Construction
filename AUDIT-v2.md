# AUDIT-v2

Round 2 review of the preview on `cursor/loftus-brand-photos-19fb`, before the redesign. Mitchell's note stands: the page reads too plain and not branded enough. This audit is blunt on purpose.

The facts, the noindex banner, and Ryan's photographs are sound. The presentation is not. It looks like a careful document wearing Loftus's logo, not like a site built from that logo.

## Brand fit against the logo

The current wordmark is a heavy serif "LOFTUS", bright blue, with three speed lines on either side and a second set of rules around "CONSTRUCTION, INC." The dimensional sign is a different navy, `#222e61`, with a brick arch. Those are two real marks. The page uses neither as a system.

- The header drops the PNG on a white bar and stops. The speed lines are not the header. The navy is not a color on the page. It only exists inside the footer SVG.
- `#0014e0` is used as a link underline. That makes the brand blue look like a default hyperlink color, not like the ink of the mark.
- Every section heading is hugged by a small pair of tapered rules (`Flank` in `components/Rule.tsx`). Those proportions were measured off the old 367 by 88 logo, not Ryan's file. Repeated on every heading, they read as decoration. Mitchell already flagged that kind of marker.
- Nothing else on the page has the weight, the width, or the insistence of the word "LOFTUS". The logo is the only branded object, and it is small.

## Hierarchy

The page is one long stack of equal sections: hero, projects, capabilities, record, award, about, careers, contact. Same heading size, same rhythm, same importance.

The two jobs Ryan actually sent are a thumbnail grid under a plain "Projects" heading. They do not lead. There is no page for either job. A visitor cannot stay with Brownsville or University Avenue. They get five small frames and move on.

The hero is a 16/9 crop with the headline underneath in a modest size. The photograph is a banner. The sentence under it could sit on any contractor template.

Capabilities are six text groups with the same visual weight as a footer column. The record is a spreadsheet. The award is a paragraph. Contact is an address. Nothing asks for a bid.

## Typography

Source Serif 4 and Archivo are a common "quiet professional" pair. They do not match the wordmark. The wordmark is a bold inscriptional serif. The page sets headlines around 1.7rem in a literary text face.

The navigation is small, uppercase, and tracked out. That is a template habit, not Loftus's lettering.

Body copy is plain, which is right for this firm. The type does not give those plain sentences any authority.

## Color

Chalk, white, and near-black, plus one electric blue for lines and links. Large areas have no brand color at all. The navy of the wall sign is unused. The alternation of chalk and white sections is the default calm layout, and it washes the blue out.

## Photography

The files are the right files. The use is timid.

- Homepage galleries reduce drone frames to roughly 360 pixel tiles in a 3-column grid. A bridge span shot from the air does not survive that.
- Crops are the native 4/3 dropped into a box. Nothing is composed for the screen.
- Both jobs live on the homepage, so the page carries eleven photographs and most of them are small.
- The first desktop full-page capture showed flat `#d3d3d3` boxes on the University Avenue tiles. That was lazy loading during a capture that never scrolled, not a broken `src`. It still exposed how far down, and how small, those frames sit.
- Capability groups correctly have no photos. We do not have a dam or a culvert from Ryan, and the old 350 pixel crops were the wrong pictures. The result is a long text middle with almost no work in it.

## Credibility

What is real is in the data: the published contract record, the 2019 ASHE award (attributed, not asserted), prequalification, associations, named clients, the Bench Strength Program, the Cinnaminson office, the phone.

What the page does with it is flat. Clients are in `lib/business.ts` and never shown. The award does not look like an award. The record looks like an export.

The 2019 team bios (Kevin J. Loftus, Carmen J. Valerio, Jeffrey D. Given) are rendered as if they are the current firm. PROFILE.md already says that roster is stale and Ryan has not confirmed it. Putting three long bios on the page looks like certainty we do not have.

There is no license, insurance, testimonial, or bid path, because Ryan did not send them. The page also does not make a place for a bid. The only action is "call this number", repeated.

## Mobile

At 390 the logo is legible, nothing overflows, and the sticky phone bar is the right tool for this trade. The gallery is a 2-up of small crops. You cannot read a bridge on a phone at that size. The header nav is a second scrolling row of tracked capitals. It works. It does not look like their sign.

## Speed

`next/image` with AVIF and WebP, priority only on the hero, and lazy loading below the fold is the right setup. Fonts are self-hosted. There is no analytics and no third-party runtime request.

The cost is one homepage that asks the browser to lazy-load two full galleries. Project pages would put the weight where the photographs are.

## SEO basics

The homepage has one h1, a real title and description, a canonical, an Open Graph image, noindex, one JSON-LD block, `robots.txt` disallow, and a sitemap. That is correct for a preview and should stay.

It is also a single URL. The jobs have no titles and no canonicals. The layout hard-codes `canonical: "/"` and one Open Graph image, which will be wrong on any new route if it is left as is.

## What looks generic or made by a template

- Equal sections, chalk then white, serif heading, muted paragraph, repeat.
- Uppercase tracked navigation.
- The speed-line gadget on every heading. A real mark used as confetti.
- Thumbnail grid as the entire portfolio.
- No page for a job, no bid, no use of the navy, no type that can stand next to the wordmark.

The copy is not the problem. Words like "solutions" were already pulled. The layout is what makes a specific heavy-civil firm look interchangeable.

## What has to change

1. Build the page out of the mark: bright blue `#0014e0`, sign navy `#222e61`, and three equal speed lines used as the header edge and as section dividers, not as heading ornaments.
2. Set headlines in a heavier serif that can sit next to "LOFTUS", with a plain sans for navigation and body.
3. Lead with full-bleed crops of Brownsville and University Avenue. Give each job its own page.
4. Lay capabilities, the record, the award, prequalification, and named clients out as substance, from `PROFILE.md` and `lib/business.ts` only.
5. Make the bid path obvious: phone, email, and a request-for-quote form that is labeled as a demo and does not submit.
6. Take the 2019 bios off the page. Leave owner, scope, dates, current team, testimonials, and license and insurance as nulls in code, with no filler on the screen.
7. Keep noindex, the preview banner, alt text, one h1 per page, and Ryan's photographs only.

## Round 5 self-critique

Checked against the standard of a top-tier heavy civil site: a dark bar, a real wordmark, full-bleed work, and a record you can read without hunting. Three things fell short of that and were fixed.

The phone hero was river and sky. `brownsville-16.jpg` is a tall aerial, and a nearly square crop showed the whole frame, with the deck as a thin band. The mobile image now locks on the deck, the crew, and the truck. The wide desktop crop is unchanged. The headline, the phone number, and Request a bid stay on the first screen.

The record title used the same deep bottom padding as the full-viewport hero, which only exists so the bid button clears the phone bar. On this page that padding was empty navy, and the table started late. The padding is gone. At desktop width the contract table begins on the first screen. At phone width each contract is a stack, so the owner and the value are not cut off at the right edge.

The homepage followed the Brownsville hero with another Brownsville frame. The next frame is University Avenue.

The header wordmark was measured, not redrawn. It sits inside the bar, on the same left edge as the page grid, and it is the current logo with the ink set to white. The speed lines are still in the file. White and `#c5cad3` on chrome `#12162a` clear WCAG AA. Logo blue is not used as type on that bar.
