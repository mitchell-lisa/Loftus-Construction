# Assets on this site

Supplied 8 Oct 2026 by Ryan Loftus. Web copies are already 2400 px on the long edge, JPEG quality 80, with EXIF and GPS removed. The site serves photographs through `next/image` (AVIF and WebP). The footer mark is the SVG itself.

Only the files in the first table are in the repo.

## Used

| File | Where |
|---|---|
| `public/images/logos/current-logo.png` | Header wordmark. `components/Header.tsx`. |
| `public/images/logos/dimensional-letters.svg` | Footer mark on the white footer. `components/Footer.tsx`. |
| `public/images/jobs/brownsville-06.jpg` | Homepage hero and the Open Graph image. Side elevation, so a short phone crop still shows the span. `components/Hero.tsx`, `app/layout.tsx`. Not repeated in the gallery. |
| `public/images/jobs/brownsville-05.jpg` | Brownsville lead photograph. `components/Projects.tsx` via `lib/business.ts`. |
| `public/images/jobs/brownsville-03.jpg` | Brownsville gallery. |
| `public/images/jobs/brownsville-11.jpg` | Brownsville gallery. |
| `public/images/jobs/brownsville-16.jpg` | Brownsville gallery. |
| `public/images/jobs/brownsville-untitled-01.jpg` | Brownsville gallery. Broken concrete and machines beside the river. |
| `public/images/jobs/university-avenue-untitled-01.jpg` | University Avenue lead photograph. |
| `public/images/jobs/university-avenue-untitled-02.jpg` | University Avenue gallery. |
| `public/images/jobs/university-avenue-untitled-03.jpg` | University Avenue gallery. |
| `public/images/jobs/university-avenue-untitled-04.jpg` | University Avenue gallery. |
| `public/images/jobs/university-avenue-07.jpg` | University Avenue gallery. One grating detail. |

## Left out

### Logos

| File | Why |
|---|---|
| `logos/25th-anniversary.png` | The mark reads 1994 to 2019. It is not a current anniversary, and the source is a raster with a fringe on dark backgrounds. |
| `logos/dimensional-letters.png` | Same art as `dimensional-letters.svg`. The SVG is the one on the page. |

### Brownsville

The hero and five gallery frames cover a side elevation, a wide view, the deck during the pour, crew and equipment, an overhead, and the broken-concrete frame. The rest of this pour day repeats those views.

| File | Why |
|---|---|
| `brownsville-01.jpg` | Same pour, closer to frames already used. |
| `brownsville-02.jpg` | Down-the-deck view. `brownsville-03.jpg` is the one used. |
| `brownsville-04.jpg` | Equipment detail. `brownsville-11.jpg` is the one used. |
| `brownsville-15.jpg` | Overhead of the deck with a wide band of sky and water. A phone crop of it showed almost no bridge. |
| `brownsville-07.jpg` | Bridge is small in a wide valley. Less of the structure. |
| `brownsville-08.jpg` | Same pour moment as 11 and 19. |
| `brownsville-09.jpg` | Three-quarter view close to the hero and to 05. |
| `brownsville-10.jpg` | Same pour moment as 08 and 11. |
| `brownsville-12.jpg` | Similar approach view, hazier sky. |
| `brownsville-13.jpg` | Crew along the deck. 11 shows the crew and the machines more clearly. |
| `brownsville-14.jpg` | Down the deck. 03 is the one used. |
| `brownsville-17.jpg` | Oblique from the approach. Close to frames already used. |
| `brownsville-18.jpg` | Low side of the paver. 11 is the equipment frame. |
| `brownsville-19.jpg` | Same pour moment as 08 and 11. |
| `brownsville-20.jpg` | Tighter paver frame. Faces are not identifiable, and 11 already shows the machine. |
| `brownsville-21.jpg` | Approach with trucks. Plates are not readable, and the view repeats the deck shots. |
| `brownsville-22.jpg` | Another side elevation. The homepage uses `brownsville-06.jpg`. |
| `brownsville/untitled/brownsville-untitled-02.jpg` | Backlit and hazy. Left out on purpose. |
| `brownsville/untitled/brownsville-untitled-03.jpg` | High context frame. The structure is clearer in the frames that are used. |
| `brownsville/untitled/brownsville-untitled-04.jpg` | Wide context of the same earlier visit. `untitled-01` is the frame that shows the work. |

### University Avenue

The four structure photographs in `untitled/` are the job. One grating frame stands in for the close-ups.

| File | Why |
|---|---|
| `university-avenue-01.jpg` | Handwritten field sketch. Do not publish. It is not in the repo. |
| `university-avenue-02.jpg` | Grating close-up. Near-duplicate of 03, 04 and 05. |
| `university-avenue-03.jpg` | Same grating a few seconds later. |
| `university-avenue-04.jpg` | Same grating, another angle. |
| `university-avenue-05.jpg` | Same grating joint. |
| `university-avenue-06.jpg` | Opening in the grating. `university-avenue-07.jpg` is the one used. |
| `university-avenue-08.jpg` | Grating edge over water. Covered by 07. |
| `university-avenue-09.jpg` | Tighter grating and concrete edge. |
| `university-avenue-10.jpg` | A hand is in the frame. |
| `university-avenue-11.jpg` | Tools and a ladder in the bay. Not needed next to the structure shots. |
| `university-avenue-12.jpg` | Work boots in the frame. |
| `university-avenue-13.jpg` | Legs and boots in the frame. |
| `university-avenue-14.jpg` | Level and tool bag. A detail, not the bridge. |
| `university-avenue-15.jpg` | Tighter shot of the same level. |

Older photographs that used to ship with this repo (the 1140 px slider and the 350 px capability crops, plus the previous small logo) are removed. They are not in the set Ryan sent, and they are not placeholders for these two jobs.
