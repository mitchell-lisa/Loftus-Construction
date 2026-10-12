// Every photograph on the site, defined once.
// Each key is used on exactly one page position. scripts/check-photos.mjs fails the
// build if any photo path appears twice across the rendered site.

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Plain caption for the dimension line under the picture. */
  caption?: string;
};

const p = (src: string, width: number, height: number, alt: string, caption?: string): Photo => ({
  src: `/images/${src}`,
  width,
  height,
  alt,
  caption,
});

export const photos = {
  // Brownsville Road over Neshaminy Creek
  heroDeck: p(
    "work/brownsville-22-hero.jpg",
    3200,
    2400,
    "New concrete bridge deck across Neshaminy Creek, with a box truck on the span and the creek running away into the trees",
    "Brownsville Road over Neshaminy Creek, April 2026",
  ),
  bMixer: p(
    "work/brownsville-19.jpg",
    2400,
    1800,
    "Yellow concrete mixer and crew on the new Brownsville Road deck above the creek",
    "Deck pour, April 2026",
  ),
  bSpan: p(
    "work/brownsville-06.jpg",
    2400,
    1800,
    "The finished Brownsville Road span on its piers over Neshaminy Creek, seen from above",
    "April 2026",
  ),
  bOld: p(
    "work/brownsville-start-3450.jpg",
    2400,
    1800,
    "The old Brownsville Road bridge over Neshaminy Creek before the work started, with debris against the pier",
    "October 2024",
  ),
  bWide: p(
    "work/brownsville-05.jpg",
    2400,
    1800,
    "Wide aerial of the Brownsville Road deck pour, with a lift on the near approach and wooded hills beyond",
  ),
  bLead: p(
    "work/brownsville-10.jpg",
    2400,
    1800,
    "Side view of the Brownsville Road deck during the pour, with a paver and crew on the span and a red lift at the abutment",
  ),
  bOldBank: p(
    "work/brownsville-start-3455.jpg",
    2400,
    1800,
    "The old Brownsville Road bridge seen from the creek bank through late summer brush",
    "Before, October 2024",
  ),
  bApproach: p(
    "work/brownsville-start-3439.jpg",
    2400,
    1800,
    "Brownsville Road approaching the old bridge, before construction",
    "Before, October 2024",
  ),
  bDemo: p(
    "work/brownsville-untitled-01.jpg",
    2400,
    1800,
    "Excavator and loader on broken concrete beside the creek during removal of the old abutment",
    "Demolition, April 2025",
  ),
  bEarly: p(
    "work/brownsville-untitled-04.jpg",
    2400,
    1800,
    "High aerial of the Brownsville Road crossing in a bend of the creek during the first season of work",
    "April 2025",
  ),
  bPour: p(
    "work/brownsville-03.jpg",
    2400,
    1800,
    "Looking down the fresh concrete deck, with the pump, crew and rebar along the edge",
    "Deck pour, April 2026",
  ),
  bPaver: p(
    "work/brownsville-11.jpg",
    2400,
    1800,
    "Mixer truck feeding the paver on the fresh deck, crew in high visibility clothing",
    "Deck pour, April 2026",
  ),
  bPier: p(
    "work/brownsville-08.jpg",
    2400,
    1800,
    "Low side angle of the deck pour, with the mixer and pump above a pier and the rocky shore",
    "Deck pour, April 2026",
  ),
  bOblique: p(
    "work/brownsville-09.jpg",
    2400,
    1800,
    "Three quarter aerial of a concrete bridge deck with a pier in the water and the approach road",
  ),
  bCrew: p(
    "work/brownsville-13.jpg",
    2400,
    1800,
    "Crew in high visibility vests along the parapet of a bridge deck during a pour",
  ),
  bLength: p(
    "work/brownsville-02.jpg",
    2400,
    1800,
    "Aerial looking down the length of a new concrete bridge deck between two wooded banks",
  ),
  bLow: p(
    "work/brownsville-15.jpg",
    2400,
    1800,
    "Low side elevation of a concrete bridge on piers, reflected in the creek",
  ),
  bLift: p(
    "work/brownsville-21.jpg",
    2400,
    1800,
    "Aerial of a bridge deck under construction with an orange lift on the approach and a white pickup in the foreground",
  ),
  bContext: p(
    "work/brownsville-untitled-03.jpg",
    2400,
    1800,
    "High aerial of a bridge crossing a creek between houses and a ballfield, in low morning sun",
  ),

  // University Avenue Bridge over the Schuylkill River
  uUnder: p(
    "work/university-avenue-untitled-02.jpg",
    2400,
    1800,
    "Underside of the University Avenue Bridge, with steel girders above the stone control house pier and the Schuylkill River",
  ),
  uGirders: p(
    "work/university-avenue-untitled-01.jpg",
    2400,
    1800,
    "Riveted steel girders and open grating above a stone pier with round openings, from the water",
  ),
  uDeep: p(
    "work/university-avenue-untitled-04.jpg",
    2400,
    1800,
    "Rusted girder framing under the University Avenue span, with the stone pier and the river below",
  ),
  uHouse: p(
    "work/university-avenue-untitled-03.jpg",
    2400,
    1800,
    "Stone and glass operator's house beside the grated roadway of the University Avenue Bridge",
    "October 2026",
  ),
  uOpening: p(
    "work/university-avenue-07.jpg",
    2400,
    1800,
    "Steel grating around an opening in the deck, with a bolted splice and dark water below",
    "Deck grating, September 2026",
  ),
  uTag: p(
    "work/university-avenue-13.jpg",
    2400,
    1800,
    "Close view of new steel deck grating on the University Avenue Bridge",
    "Deck grating, September 2026",
  ),
  uLevel: p(
    "work/university-avenue-15.jpg",
    1800,
    2400,
    "A blue level resting on the steel grating of the deck",
    "Checking the grating, September 2026",
  ),

  // St. Peters Road retaining wall
  sAerial: p(
    "work/st-peters-3.jpg",
    2400,
    1800,
    "Straight down aerial of St. Peters Road curving through dense woods, the new wall following the road edge",
    "St. Peters Road, May 2026",
  ),
  sWall: p(
    "work/st-peters-12.jpg",
    2400,
    1800,
    "The finished St. Peters Road retaining wall and rail running along the road above the creek",
  ),
  sLead: p(
    "work/st-peters-6.jpg",
    2400,
    1800,
    "Aerial along St. Peters Road with the new retaining wall holding the road edge through the trees",
  ),
  sClimb: p(
    "work/st-peters-17.jpg",
    2400,
    1800,
    "St. Peters Road climbing through the woods with fresh paving and the new wall and rail",
    "Completed, May 2026",
  ),
  sRoad: p(
    "work/st-peters-8.jpg",
    2400,
    1800,
    "Freshly paved St. Peters Road curving along the new wall",
  ),
  sBefore: p(
    "work/st-peters-before-3895.jpg",
    2400,
    1800,
    "St. Peters Road before the work, with the old wall and cracked lane dropping away from the travel lane",
    "Before, May 2025",
  ),
  sCracks: p(
    "work/st-peters-before-3902.jpg",
    2400,
    1800,
    "Cracked pavement along the old wall on St. Peters Road",
    "Before, May 2025",
  ),
  sCurve: p(
    "work/st-peters-before-3910.jpg",
    2400,
    1800,
    "The curve on St. Peters Road with the old wall and guide rail, before construction",
    "Before, May 2025",
  ),
  sStart: p(
    "work/st-peters-before-3883.jpg",
    2400,
    1800,
    "St. Peters Road on a wet morning before the wall was rebuilt",
  ),

  // Older photographs from the current loftusconstruction.com. Small originals, shown small.
  rHenry: p("record/henry-avenue.jpg", 1140, 355, "Crew finishing a concrete deck on the Henry Avenue bridge"),
  rStrasburg: p(
    "record/strasburg-railroad.jpg",
    1140,
    355,
    "Strasburg Rail Road steam locomotive crossing the new main track bridge",
  ),
  rSr611: p("record/sr-611.jpg", 1140, 355, "SR 611 roadway and new wall after the design-build work"),
  rDb155: p(
    "record/turnpike-db-155.jpg",
    1140,
    355,
    "Aerial of the Pennsylvania Turnpike at Willow Grove with the DB-155 bridge in place",
  ),
  rNb142: p(
    "record/turnpike-nb-142.jpg",
    1140,
    355,
    "Aerial of the new NB-142 bridge over the Pennsylvania Turnpike near Lansdale",
  ),
  cCulverts: p("capabilities/culverts.jpg", 350, 260, "Stone faced arch culvert carrying a stream under a road"),
  cFoundations: p(
    "capabilities/foundations.jpg",
    350,
    260,
    "Crew tying a rebar mat for a footing inside a sheeted excavation",
  ),
  cRehab: p(
    "capabilities/rehabilitation.jpg",
    350,
    260,
    "Lifts working under a stone arch at dusk during rehabilitation",
  ),
  cDams: p("capabilities/dams.jpg", 350, 260, "Lake edge with new stone and erosion matting along a dam embankment"),
} as const;

export type PhotoKey = keyof typeof photos;
