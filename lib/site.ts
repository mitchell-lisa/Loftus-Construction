// All site content. Every fact traces to PROFILE.md, the 2019 loftusconstruction.com pages
// (index, about, team, news, construction, design-build, pre-construction, careers,
// pre-qualifications, association) or to Ryan Loftus's photo folders. Nothing is estimated.

export const firm = {
  legalName: "Loftus Construction, Inc.",
  shortName: "Loftus Construction",
  descriptor: "Engineers and Contractors",
  founded: 1994,
  founder: "Kevin J. Loftus",
  phone: "(856) 786-6607",
  phoneHref: "tel:+18567866607",
  fax: "(856) 786-6641",
  email: "kloftus@loftusconstruction.com",
  careersEmail: "kdivece@loftusconstruction.com",
  careersContact: "Karin DiVece",
  street: "1903 Taylor's Lane",
  city: "Cinnaminson",
  state: "NJ",
  zip: "08077",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=1903+Taylors+Lane+Cinnaminson+NJ+08077",
  mission:
    "The purpose of Loftus Construction, Inc. is to complete difficult heavy construction projects, in a safe and timely fashion, and to provide a superior product to the client.",
  missionTail:
    "The short-term success of Loftus is attributable to the company's ability to constantly search for long-term success.",
};

export const addressLine = `${firm.street}, ${firm.city}, ${firm.state} ${firm.zip}`;

export const history = [
  { year: "1994", title: "Founded in Cinnaminson", text: "Kevin J. Loftus founded the firm to take on difficult, heavily engineered projects that call for innovative and aggressive approaches. Early work included the Exton Bypass and the reconstruction of the Philadelphia Art Museum steps." },
  { year: "1997", title: "Prequalified in two states", text: "Carmen J. Valerio, PE joined to run operations, and the firm gained prequalification from PennDOT and NJDOT, opening the markets it works in today." },
  { year: "2015", title: "Country Lakes Dam", text: "Dams 1 and 3 in Pemberton Township reopened to traffic, finished ahead of schedule despite contract changes, weather and flooding." },
  { year: "2016", title: "41st Street reopens", text: "The two span steel bridge over Amtrak and SEPTA opened after 18 months of construction and almost twenty years closed to traffic." },
  { year: "2019", title: "ASHE Project of the Year", text: "The SR 13 masonry arch rehabilitation, part of the Group T contract, won the ASHE Delaware Valley Section award for projects of $10 million and under." },
  { year: "2025", title: "Headquarters Road", text: "Tinicum Township awarded the Headquarters Road bridge rehabilitation after competitive bidding among seven firms." },
];

export const people = [
  { name: "Kevin J. Loftus", role: "Founder", text: "Founded the firm in 1994 after several years on heavy construction in the Delaware Valley and the Washington metropolitan area. Drexel University, 1987. Certified Design-Build Professional, DBIA." },
  { name: "Carmen J. Valerio, PE", role: "Operations, since 1997", text: "Fifteen years on large regional heavy civil work before joining. Penn State, 1979. Licensed Professional Engineer, responsible for operations, jobsite safety and the equipment fleet." },
  { name: "Jeffrey D. Given, PE", role: "Procurement, since 1997", text: "Joined as a Drexel student and worked as field engineer, project engineer, project manager and estimator. PE in Pennsylvania and New Jersey, Drexel MBA, Certified Design-Build Professional." },
];

export const prequalifications = [
  "Pennsylvania Department of Transportation",
  "Pennsylvania Turnpike Commission",
  "New Jersey Department of Transportation",
  "New Jersey Turnpike Commission",
  "New Jersey Transit",
  "New Jersey Department of Environmental Protection",
  "Delaware Department of Transportation",
  "City of Philadelphia, Bridges",
  "City of Philadelphia, Water Department",
  "State of New Jersey, Department of Treasury (DPMC)",
  "State of New Jersey, Schools Development Authority",
];

export const associations = [
  "American Road and Transportation Builders Association",
  "American Society of Highway Engineers, Delaware Valley Section",
  "Associated Pennsylvania Constructors, Bridge Committee",
  "Construction Financial Management Association",
  "Design-Build Institute of America",
  "Pile Driving Contractors Association",
  "Utility and Transportation Contractors Association of New Jersey",
];

export const clients = ["PennDOT", "Pennsylvania Turnpike Commission", "NJDOT", "SEPTA", "NJ Transit", "Burlington County Bridge Commission", "City of Philadelphia"];
export const dbClients = ["PennDOT", "Brandywine Realty Trust", "Heritage Building Group", "PA DCNR"];

export const award = {
  year: 2019,
  body: "American Society of Highway Engineers, Delaware Valley Section",
  title: "Project of the Year, $10 million and under",
  detail: "SR 13 masonry arch rehabilitation, Group T contract. Loftus describes the structure as the oldest bridge in the United States, dating to the late 1600s.",
};

export const careers = {
  program: "Bench Strength Program",
  blurb: "A one year training program for recent graduates, preferably in civil engineering.",
  rotations: ["Estimating", "Project engineering and management", "Equipment management", "Accounting", "Human resources", "Contract management", "Risk management", "Safety"],
  philosophy: "Grow From Within",
  path: ["Field engineer", "Project engineer", "Project manager", "Estimator"],
  service: [
    { years: 20, roles: "Carpenters" },
    { years: 15, roles: "Shop manager and lead carpenter" },
    { years: 10, roles: "Project manager and foreman" },
    { years: 5, roles: "Project manager" },
  ],
};

export const services = [
  { slug: "design-build", name: "Design-build", text: "A turn-key route from the first price to the finished structure, with one team accountable for both.", items: ["Budget pricing and conceptual structure options", "Value engineering of completed designs", "Design-build of new structures", "Structural evaluation and rehabilitation of existing structures", "Public meetings, permit applications and approvals", "Coordination with local, state and transportation department standards"] },
  { slug: "preconstruction", name: "Preconstruction", text: "The decisions that set cost and schedule, made before mobilization.", items: ["Site feasibility and conceptual design", "Detailed designs and constructability reviews", "Cost estimates and scheduling", "Material procurement and site logistics", "Project controls", "Value engineering"] },
];

export type CapKey = "bridges" | "culverts" | "walls" | "foundations" | "rehab" | "dams";
export const capabilities: { key: CapKey; name: string; items: string[]; text: string }[] = [
  { key: "bridges", name: "Bridges", text: "New structures and replacements over roads, railroads and water.", items: ["Steel girder bridges", "Precast concrete box beam and girder bridges", "Steel grating bridges", "Pre-engineered pedestrian bridges", "Timber bridges"] },
  { key: "rehab", name: "Structural rehabilitation", text: "Masonry arches, trusses and decks returned to service.", items: ["Concrete restoration and resurfacing", "Latex modified overlays", "Gunite resurfacing", "Underpinning", "Select demolition", "Streambank stabilization, gabions and Reno mattresses", "Rip rap lining and protection"] },
  { key: "walls", name: "Retaining walls", text: "Walls that hold roads, banks and excavations.", items: ["Cast-in-place concrete walls", "Precast modular walls", "Mechanically stabilized earth walls", "Steel and timber lagging walls", "Steel sheetpile walls", "Gabion walls"] },
  { key: "foundations", name: "Foundations", text: "Piles, caissons and footings under bridges and walls.", items: ["Steel pipe and H pile foundations", "Caissons and augered foundations", "Timber pile foundations", "Reinforced concrete foundations", "Support of excavation"] },
  { key: "culverts", name: "Culverts", text: "Box, arch and pipe culverts, precast or cast in place.", items: ["Precast concrete box culverts", "Cast-in-place concrete box culverts", "Precast concrete arch culverts", "Metal arch culverts", "Pipe culverts"] },
  { key: "dams", name: "Dams", text: "From emergency stabilization to complete reconstruction.", items: ["Emergency stabilization", "Rehabilitation", "Complete reconstruction"] },
];

export type RecordType = "Bridge replacement" | "Rehabilitation" | "Masonry arch" | "Design-build" | "Dam" | "Retaining wall" | "Highway";
export type Rec = {
  slug: string;
  name: string;
  type: RecordType;
  caps: CapKey[];
  owner: string | null;
  ownerGroup: "PennDOT" | "PA Turnpike" | "City of Philadelphia" | "Municipal and county" | "Private" | "Not published";
  location: string | null;
  state: "PA" | "NJ" | null;
  year: number | null;
  when: string | null;
  value: number | null;
  approx?: boolean;
  structure: string | null;
  note: string | null;
  study?: string;
};

// 23 entries. Every one is named by Loftus or a public record. Unknown fields stay null.
export const record: Rec[] = [
  { slug: "university-avenue", study: "university-avenue", name: "University Avenue Bridge over the Schuylkill River", type: "Rehabilitation", caps: ["bridges", "rehab"], owner: null, ownerGroup: "Not published", location: "Philadelphia, PA", state: "PA", year: 2026, when: "Photographed July to October 2026", value: null, structure: "Steel girders, open grated deck, stone piers", note: "New steel grating set, checked and fastened panel by panel on the riveted span." },
  { slug: "brownsville-road", study: "brownsville-road", name: "Brownsville Road over Neshaminy Creek", type: "Bridge replacement", caps: ["bridges", "foundations"], owner: null, ownerGroup: "Not published", location: null, state: null, year: 2026, when: "October 2024 to April 2026", value: null, structure: "Concrete deck on piers", note: "Old bridge out, abutments rebuilt, new deck poured April 23, 2026." },
  { slug: "st-peters-road", study: "st-peters-road", name: "St. Peters Road retaining wall", type: "Retaining wall", caps: ["walls"], owner: null, ownerGroup: "Not published", location: null, state: null, year: 2026, when: "May 2025 to May 2026", value: null, structure: "Retaining wall with guide rail", note: "A failing wall and dropping lane rebuilt along a wooded slope." },
  { slug: "headquarters-road", name: "Headquarters Road bridge rehabilitation", type: "Rehabilitation", caps: ["bridges", "rehab"], owner: "Tinicum Township, Bucks County", ownerGroup: "Municipal and county", location: "Tinicum Township, PA", state: "PA", year: 2025, when: "Awarded August 2025", value: 2300000, approx: true, structure: null, note: "Awarded after competitive bidding among seven firms." },
  { slug: "sr-52", name: "SR 52 masonry bridge rehabilitation", type: "Masonry arch", caps: ["rehab"], owner: null, ownerGroup: "Not published", location: null, state: null, year: 2019, when: "Awarded June 2019", value: 3439000, structure: "Seven span masonry arch", note: "Full restoration of a seven span masonry arch structure." },
  { slug: "main-street", name: "Main Street bridge over East Penn and SEPTA railroads", type: "Rehabilitation", caps: ["bridges", "rehab"], owner: null, ownerGroup: "Not published", location: null, state: "PA", year: 2019, when: "Awarded June 2019", value: 4695000, structure: "135 foot truss", note: "Full restoration of a 135 foot truss bridge over an active rail facility." },
  { slug: "sr-13-group-t", name: "SR 13 masonry arch rehabilitation, Group T", type: "Masonry arch", caps: ["rehab"], owner: null, ownerGroup: "Not published", location: null, state: null, year: 2019, when: "ASHE award April 2019", value: null, structure: "Masonry arch, late 1600s", note: "ASHE Delaware Valley Project of the Year. Loftus describes it as the oldest bridge in the United States." },
  { slug: "group-7", name: "Group 7 bridges rehabilitation", type: "Masonry arch", caps: ["rehab"], owner: "PennDOT District 6", ownerGroup: "PennDOT", location: "District 6-0", state: "PA", year: 2018, when: "Awarded February 2018", value: 7220000, structure: "Eight masonry arch bridges", note: "Rehabilitation of eight masonry arch bridges across District 6-0." },
  { slug: "group-s", name: "Group S bridges rehabilitation", type: "Rehabilitation", caps: ["bridges", "rehab"], owner: "PennDOT District 6", ownerGroup: "PennDOT", location: "District 6-0", state: "PA", year: 2017, when: "Awarded June 2017", value: 7296296, structure: "Nine bridges of various types", note: "Rehabilitation of nine bridges of various types across District 6-0." },
  { slug: "group-r", name: "Group R bridges rehabilitation", type: "Rehabilitation", caps: ["rehab"], owner: "PennDOT District 6", ownerGroup: "PennDOT", location: "District 6-0", state: "PA", year: 2017, when: "Awarded March 2017", value: 5505505, structure: "Eight bridges", note: "Rehabilitation and latex overlay of eight bridges." },
  { slug: "ashmead-road", name: "Ashmead Road bridge", type: "Rehabilitation", caps: ["rehab"], owner: null, ownerGroup: "Not published", location: "Cheltenham Township, PA", state: "PA", year: 2016, when: "Reopened December 2016", value: null, structure: null, note: "Latex concrete overlay and structural repairs, reopened after a six week detour." },
  { slug: "41st-street", name: "41st Street bridge over Amtrak and SEPTA", type: "Bridge replacement", caps: ["bridges"], owner: "City of Philadelphia", ownerGroup: "City of Philadelphia", location: "Philadelphia, PA", state: "PA", year: 2016, when: "April 2015 to November 2016", value: 10735000, structure: "Two span steel girder", note: "Opened after 18 months of construction and almost twenty years closed. Steel erected May 14, 2015." },
  { slug: "adams-avenue", name: "Adams Avenue bridge", type: "Masonry arch", caps: ["rehab", "foundations"], owner: null, ownerGroup: "Not published", location: null, state: null, year: 2016, when: "Reopened November 2016", value: null, structure: "Three barrel masonry arch", note: "Severe underpinning of the footings and shifting arch barrels changed the scope. Reopened after six months." },
  { slug: "country-lakes-dam", name: "Country Lakes Dam", type: "Dam", caps: ["dams"], owner: "Pemberton Township", ownerGroup: "Municipal and county", location: "Pemberton Township, NJ", state: "NJ", year: 2015, when: "July 2014 to December 2015", value: 6148976, structure: "Dams 1 and 3", note: "Traffic restored over Dams 1 and 3, ahead of schedule despite changes, weather and flooding." },
  { slug: "willow-grove-avenue", name: "Willow Grove Avenue bridge", type: "Bridge replacement", caps: ["bridges"], owner: "City of Philadelphia", ownerGroup: "City of Philadelphia", location: "Philadelphia, PA", state: "PA", year: 2015, when: "Completed January 2015", value: 3250000, structure: "Three span steel over SEPTA", note: "Reconstruction of a three span steel bridge over SEPTA tracks." },
  { slug: "db-155", name: "PA Turnpike bridge replacement DB-155", type: "Bridge replacement", caps: ["bridges"], owner: "Pennsylvania Turnpike Commission", ownerGroup: "PA Turnpike", location: "Willow Grove, PA", state: "PA", year: null, when: null, value: 12880527, structure: null, note: null },
  { slug: "nb-142", name: "PA Turnpike bridge replacement NB-142", type: "Bridge replacement", caps: ["bridges"], owner: "Pennsylvania Turnpike Commission", ownerGroup: "PA Turnpike", location: "Lansdale, PA", state: "PA", year: null, when: null, value: 12327393, structure: null, note: null },
  { slug: "henry-avenue", name: "Henry Avenue bridge over Wissahickon Creek", type: "Rehabilitation", caps: ["bridges", "rehab"], owner: "PennDOT District 6", ownerGroup: "PennDOT", location: "Philadelphia, PA", state: "PA", year: null, when: null, value: 12306782, structure: null, note: null },
  { slug: "sr-611", name: "SR 611 design-build", type: "Design-build", caps: ["walls"], owner: "PennDOT District 5", ownerGroup: "PennDOT", location: "Easton, PA", state: "PA", year: null, when: null, value: 1369884, structure: null, note: "Roadway and new wall, delivered design-build." },
  { slug: "chester-valley-trail", name: "Chester Valley Trail bridge over Boro Line Road", type: "Design-build", caps: ["bridges"], owner: "Montgomery County", ownerGroup: "Municipal and county", location: "Bridgeport, PA", state: "PA", year: null, when: null, value: null, structure: null, note: "Trail bridge delivered design-build for Montgomery County." },
  { slug: "strasburg-railroad", name: "Strasburg Railroad main track bridge replacement", type: "Bridge replacement", caps: ["bridges"], owner: "Strasburg Railroad", ownerGroup: "Private", location: "Gap, PA", state: "PA", year: null, when: null, value: 468000, structure: "Main track railroad bridge", note: null },
  { slug: "exton-bypass", name: "Exton Bypass", type: "Highway", caps: [], owner: null, ownerGroup: "Not published", location: "Exton, PA", state: "PA", year: null, when: "Early work, after 1994", value: null, structure: null, note: "Among the firm's first projects." },
  { slug: "art-museum-steps", name: "Philadelphia Art Museum steps reconstruction", type: "Rehabilitation", caps: ["rehab"], owner: null, ownerGroup: "Not published", location: "Philadelphia, PA", state: "PA", year: null, when: "Early work, after 1994", value: null, structure: null, note: "Among the firm's first projects." },
];

export const recordTypes = Array.from(new Set(record.map((r) => r.type)));
export const ownerGroups = ["PennDOT", "PA Turnpike", "City of Philadelphia", "Municipal and county", "Private", "Not published"] as const;
export const periods = [
  { key: "2020s", label: "2020s", test: (r: Rec) => (r.year ?? 0) >= 2020 },
  { key: "2015-2019", label: "2015 to 2019", test: (r: Rec) => (r.year ?? 0) >= 2015 && (r.year ?? 0) < 2020 },
  { key: "undated", label: "Undated", test: (r: Rec) => r.year === null },
];

export function usd(v: number, approx = false) {
  if (approx) return `About $${(v / 1e6).toFixed(1)}M`;
  return "$" + v.toLocaleString("en-US");
}
export function usdShort(v: number, approx = false) {
  const s = v >= 1e6 ? `$${(v / 1e6).toFixed(1)}M` : `$${Math.round(v / 1e3)}K`;
  return approx ? `About ${s}` : s;
}

export const publishedValue = record.reduce((s, r) => s + (r.value && !r.approx ? r.value : 0), 0);

// Case studies for the three jobs Ryan Loftus photographed.
export type Chapter = { key: string; title: string; date: string; text: string; candidates: string[]; take: number };
export type Study = {
  slug: string;
  name: string;
  short: string;
  place: string | null;
  waterway: string;
  structure: string;
  type: RecordType;
  summary: string;
  scope: string[];
  facts: { label: string; value: string }[];
  leadCandidates: string[];
  coverCandidates: string[];
  chapters: Chapter[];
};

export const studies: Study[] = [
  {
    slug: "brownsville-road",
    name: "Brownsville Road over Neshaminy Creek",
    short: "Brownsville Road",
    place: null,
    waterway: "Neshaminy Creek",
    structure: "Concrete deck bridge on piers",
    type: "Bridge replacement",
    summary: "An old concrete crossing replaced with a new deck on piers. Eighteen months from the first site photographs to the deck pour.",
    scope: ["Removal of the old bridge", "Demolition of the old abutments", "New concrete deck on piers", "Parapets along both edges"],
    facts: [
      { label: "Structure", value: "Concrete deck on piers" },
      { label: "Waterway", value: "Neshaminy Creek" },
      { label: "Before", value: "October 2024" },
      { label: "Demolition", value: "April 2025" },
      { label: "Deck pour", value: "April 23, 2026" },
      { label: "Owner", value: "Not published" },
    ],
    leadCandidates: ["brownsville-06", "brownsville-15", "brownsville-01"],
    coverCandidates: ["brownsville-16", "brownsville-07", "brownsville-17", "brownsville-09"],
    chapters: [
      { key: "before", title: "The old bridge", date: "October 2024", text: "Brownsville Road crossed the creek on an older concrete bridge, with debris packed against the pier.", candidates: ["brownsville-start-3450", "brownsville-start-3455", "brownsville-start-3454", "brownsville-start-3439", "brownsville-start-3442", "brownsville-start-3435"], take: 2 },
      { key: "demo", title: "Demolition", date: "April 2025", text: "The crew broke out the old abutments beside the water, with part of the old deck still standing.", candidates: ["brownsville-untitled-01", "brownsville-untitled-04", "brownsville-untitled-03"], take: 2 },
      { key: "pour", title: "Deck pour", date: "April 23, 2026", text: "Mixers fed the pump and the paver as the crew worked across the span.", candidates: ["brownsville-03", "brownsville-11", "brownsville-08", "brownsville-19", "brownsville-04", "brownsville-10", "brownsville-13", "brownsville-18", "brownsville-20"], take: 3 },
      { key: "span", title: "The new span", date: "April 2026", text: "The new deck carries the road across on its piers, bank to bank.", candidates: ["brownsville-02", "brownsville-22", "brownsville-09", "brownsville-14", "brownsville-21", "brownsville-12"], take: 2 },
    ],
  },
  {
    slug: "university-avenue",
    name: "University Avenue Bridge over the Schuylkill River",
    short: "University Avenue",
    place: "Philadelphia, PA",
    waterway: "Schuylkill River",
    structure: "Steel bridge with an open grated deck",
    type: "Rehabilitation",
    summary: "Deck work on a riveted steel bridge over the Schuylkill in Philadelphia. New open steel grating, set panel by panel.",
    scope: ["New open steel deck grating", "Bolted splices at deck openings", "Line and level checks on every panel", "Work from the deck and inside the bays"],
    facts: [
      { label: "Structure", value: "Riveted steel girders, open grated deck" },
      { label: "Piers", value: "Stone, with round openings" },
      { label: "Waterway", value: "Schuylkill River" },
      { label: "Location", value: "Philadelphia, PA" },
      { label: "Photographed", value: "July to October 2026" },
      { label: "Owner", value: "Not published" },
    ],
    leadCandidates: ["university-avenue-untitled-01", "university-avenue-untitled-02"],
    coverCandidates: ["university-avenue-untitled-02", "university-avenue-untitled-04", "university-avenue-untitled-01"],
    chapters: [
      { key: "water", title: "From the water", date: "July 2026", text: "Below the deck, riveted girders sit on stone piers a few feet above the river.", candidates: ["university-avenue-untitled-04", "university-avenue-untitled-02", "university-avenue-untitled-01"], take: 1 },
      { key: "deck", title: "On the deck", date: "August 2026", text: "Openings in the grated roadway expose the steel and the water below.", candidates: ["university-avenue-07", "university-avenue-06", "university-avenue-08", "university-avenue-09"], take: 2 },
      { key: "bays", title: "In the bays", date: "September 2026", text: "Crews work inside the bays with ladders and levels, setting each new panel to line.", candidates: ["university-avenue-11", "university-avenue-10", "university-avenue-12", "university-avenue-13"], take: 2 },
      { key: "grating", title: "New grating", date: "September to October 2026", text: "Panels are checked for level and fastened, beside the stone and glass operator's house.", candidates: ["university-avenue-15", "university-avenue-14", "university-avenue-untitled-03", "university-avenue-02", "university-avenue-03"], take: 2 },
    ],
  },
  {
    slug: "st-peters-road",
    name: "St. Peters Road retaining wall",
    short: "St. Peters Road",
    place: null,
    waterway: "Wooded slope above a creek",
    structure: "Retaining wall with guide rail",
    type: "Retaining wall",
    summary: "A failing wall and a dropping travel lane on a wooded curve, rebuilt in a year. New wall, new rail, new paving.",
    scope: ["Replacement of the failed wall", "New retaining wall along the full curve", "New guide rail", "New paving above the wall"],
    facts: [
      { label: "Structure", value: "Retaining wall with guide rail" },
      { label: "Setting", value: "Road above a steep wooded slope" },
      { label: "Before", value: "May 2025" },
      { label: "Completed", value: "May 2026" },
      { label: "Owner", value: "Not published" },
    ],
    leadCandidates: ["st-peters-6", "st-peters-12"],
    coverCandidates: ["st-peters-3", "st-peters-8", "st-peters-17"],
    chapters: [
      { key: "before", title: "Before", date: "May 2025", text: "The lane along the old wall had cracked along its length, and in places the edge had dropped toward the slope.", candidates: ["st-peters-before-3895", "st-peters-before-3902", "st-peters-before-3910", "st-peters-before-3883", "st-peters-before-3890", "st-peters-before-3898", "st-peters-before-3906", "st-peters-before-3912"], take: 3 },
      { key: "after", title: "Finished", date: "May 2026", text: "The new wall carries the road edge the full length of the curve, with new rail and fresh paving on top.", candidates: ["st-peters-17", "st-peters-12", "st-peters-8", "st-peters-3"], take: 2 },
    ],
  },
];

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
