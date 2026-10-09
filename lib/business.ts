// The entire configuration surface for this site.
// Anything we could not verify from a public source is null, and null renders nothing.
// Every value here traces to a line in PROFILE.md with its source next to it.

export type Status = "demo" | "sold" | "client";

export type Project = {
  name: string;
  owner: string | null;
  location: string | null;
  /** Contract value in whole dollars, as published by the company. */
  value: number | null;
  /** True only for work confirmed in progress by a third party source. */
  current?: boolean;
};

export type JobPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * A job we can show in photographs.
 * owner, location, scope, value, and dates are null until Ryan supplies them.
 * Do not render those nulls, and do not write filler in their place.
 */
export type PhotoProject = {
  slug: string;
  name: string;
  summary: string;
  photos: JobPhoto[];
  owner: null;
  location: null;
  scope: null;
  value: null;
  dates: null;
};

export type Person = {
  name: string;
  title: string;
  bio: string;
};

export type CapabilityGroup = {
  name: string;
  items: string[];
  image: string | null;
  alt: string | null;
};

export type Business = {
  status: Status;
  legalName: string;
  shortName: string;
  descriptor: string;
  foundedYear: number | null;
  founder: string | null;
  phone: string;
  phoneHref: string;
  fax: string | null;
  email: string;
  careersEmail: string | null;
  careersContact: string | null;
  street: string;
  city: string;
  state: string;
  zip: string;
  /** Google Maps place link. A search link until we have the listing's own pin. */
  directionsUrl: string;
  /** Null because no hours are published anywhere. Do not guess. */
  hours: null;
  /** Null because we have not been able to read the Google listing. */
  rating: null;
  reviewCount: null;
  /** Null because LinkedIn blocks automated reading and nothing else was found. */
  social: null;
  mission: string;
  history: string[];
  /**
   * 2019 roster from the old team.php. Not the current team.
   * `currentTeam` stays null until Ryan confirms who is there now.
   * Do not render `team` on the site.
   */
  team: Person[];
  currentTeam: null;
  testimonials: null;
  license: null;
  insurance: null;
  prequalifications: string[];
  associations: string[];
  clients: string[];
  capabilities: CapabilityGroup[];
  services: { name: string; blurb: string; items: string[] }[];
  projects: Project[];
  /** Homepage photograph. One frame, named in the caption. */
  hero: JobPhoto;
  /**
   * Jobs Ryan photographed. Summaries describe the frames only.
   * Anything he did not send (owner, address, value, dates, scope) is absent.
   */
  photoProjects: PhotoProject[];
  award: { year: number; body: string; title: string; detail: string } | null;
  careers: { program: string; blurb: string; philosophy: string } | null;
  builder: { name: string; url: string | null };
};

export const business: Business = {
  // Stays demo so this preview stays noindexed, with the builder banner.
  // Loftus is a client. This deployment is not the public site.
  status: "demo",

  legalName: "Loftus Construction, Inc.",
  shortName: "Loftus Construction",
  descriptor: "Engineers and Contractors",

  foundedYear: 1994,
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
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=1903+Taylors+Lane+Cinnaminson+NJ+08077",

  hours: null,
  rating: null,
  reviewCount: null,
  social: null,
  currentTeam: null,
  testimonials: null,
  license: null,
  insurance: null,

  mission:
    "The purpose of Loftus Construction, Inc. is to complete difficult heavy construction projects, in a safe and timely fashion, and to provide a superior product to the client.",

  history: [
    "Kevin J. Loftus founded Loftus Construction in 1994 to build a firm that would take on difficult, heavily engineered projects requiring innovative and aggressive approaches. Early work included the Exton Bypass and the reconstruction of the Philadelphia Art Museum steps.",
    "Carmen J. Valerio, PE joined in 1997 to run operations. That year the firm gained prequalification from PennDOT and NJDOT, which opened the markets it works in today.",
    "Since then the firm has completed heavy construction for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, SEPTA, NJ Transit, the Burlington County Bridge Commission and the City of Philadelphia, alongside design-build work for PennDOT, Brandywine Realty Trust, Heritage Building Group and PA DCNR.",
  ],

  team: [
    {
      name: "Kevin J. Loftus",
      title: "President",
      bio: "Formed Loftus Construction in 1994 after several years on heavy construction projects in the Delaware Valley and the Washington metropolitan area. A 1987 graduate of Drexel University, he handles procurement, contract management, project cost accounting and financial management, and is certified as a Design-Build Professional by the Design-Build Institute of America.",
    },
    {
      name: "Carmen J. Valerio, PE",
      title: "Vice President",
      bio: "Joined in 1997 after fifteen years on some of the largest heavy civil projects in the region, including a senior project management role at a prominent regional firm. A 1979 graduate of Penn State and a licensed Professional Engineer, he is responsible for operations, jobsite safety and the equipment fleet, and is closely involved in construction engineering.",
    },
    {
      name: "Jeffrey D. Given, PE",
      title: "Director of Procurement",
      bio: "Joined in 1997 while still a student at Drexel and has worked as a field engineer, project engineer, project manager and estimator since graduating in 1998. Licensed as a Professional Engineer in Pennsylvania and New Jersey, he holds a Drexel MBA and is certified as a Design-Build Professional. He runs procurement and oversees the firm's construction engineering services.",
    },
  ],

  prequalifications: [
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
  ],

  associations: [
    "American Road and Transportation Builders Association",
    "American Society of Highway Engineers, Delaware Valley Section",
    "Associated Pennsylvania Constructors, Bridge Committee",
    "Construction Financial Management Association",
    "Design-Build Institute of America",
    "Pile Driving Contractors Association",
    "Utility and Transportation Contractors Association of New Jersey",
  ],

  clients: [
    "PennDOT",
    "Pennsylvania Turnpike Commission",
    "NJDOT",
    "SEPTA",
    "NJ Transit",
    "Burlington County Bridge Commission",
    "City of Philadelphia",
  ],

  services: [
    {
      name: "Design-build",
      blurb:
        "Pricing, conceptual options, value engineering, new structures and rehabilitation of existing structures, plus permits and agency coordination.",
      items: [
        "Budget pricing and conceptual structure options",
        "Value engineering of completed designs",
        "Design-build of new structures",
        "Structural evaluation and rehabilitation of existing structures",
        "Public meetings, permit applications and agency approvals",
        "Coordination with local, state and transportation department standards",
      ],
    },
    {
      name: "Preconstruction",
      blurb:
        "Feasibility, design, estimates, scheduling, procurement, logistics and constructability review before work starts.",
      items: [
        "Site feasibility and conceptual design",
        "Detailed designs and constructability reviews",
        "Cost estimates and scheduling",
        "Material procurement and site logistics",
        "Project controls",
        "Value engineering",
      ],
    },
  ],

  capabilities: [
    {
      name: "Bridges",
      items: [
        "Steel girder bridges",
        "Precast concrete box beam and girder bridges",
        "Steel grating bridges",
        "Pre-engineered pedestrian bridges",
        "Timber bridges",
      ],
      image: null,
      alt: null,
    },
    {
      name: "Culverts",
      items: [
        "Precast concrete box culverts",
        "Cast-in-place concrete box culverts",
        "Precast concrete arch culverts",
        "Metal arch culverts",
        "Pipe culverts",
      ],
      image: null,
      alt: null,
    },
    {
      name: "Retaining walls",
      items: [
        "Cast-in-place concrete walls",
        "Precast modular walls",
        "Mechanically stabilized earth walls",
        "Steel and timber lagging walls",
        "Steel sheetpile walls",
        "Gabion walls",
      ],
      image: null,
      alt: null,
    },
    {
      name: "Foundations",
      items: [
        "Steel pipe and H pile foundations",
        "Caissons and augered foundations",
        "Timber pile foundations",
        "Reinforced concrete foundations",
        "Support of excavation",
      ],
      image: null,
      alt: null,
    },
    {
      name: "Structural rehabilitation",
      items: [
        "Concrete restoration and resurfacing",
        "Latex modified overlays",
        "Gunite resurfacing",
        "Underpinning",
        "Select demolition",
        "Streambank stabilization, gabions and Reno mattresses",
        "Rip rap lining and protection",
      ],
      image: null,
      alt: null,
    },
    {
      name: "Dams",
      items: ["Emergency stabilization", "Rehabilitation", "Complete reconstruction"],
      image: null,
      alt: null,
    },
  ],

  projects: [
    {
      name: "Headquarters Road bridge rehabilitation",
      owner: "Tinicum Township, Bucks County",
      location: "Tinicum Township, PA",
      value: 2300000,
      current: true,
    },
    {
      name: "PA Turnpike bridge replacement DB-155",
      owner: "Pennsylvania Turnpike Commission",
      location: "Willow Grove, PA",
      value: 12880527,
    },
    {
      name: "PA Turnpike bridge replacement NB-142",
      owner: "Pennsylvania Turnpike Commission",
      location: "Lansdale, PA",
      value: 12327393,
    },
    {
      name: "Henry Avenue bridge over Wissahickon Creek",
      owner: "PennDOT District 6",
      location: "Philadelphia, PA",
      value: 12306782,
    },
    {
      name: "41st Street bridge over Amtrak and SEPTA",
      owner: "City of Philadelphia",
      location: "Philadelphia, PA",
      value: 10735000,
    },
    {
      name: "Group S bridges rehabilitation",
      owner: "PennDOT District 6",
      location: null,
      value: 7296296,
    },
    {
      name: "Group 7 bridges rehabilitation",
      owner: "PennDOT District 6",
      location: null,
      value: 7220000,
    },
    {
      name: "Country Lakes Dam",
      owner: "Pemberton Township",
      location: "Pemberton Township, NJ",
      value: 6148976,
    },
    {
      name: "Group R bridges rehabilitation",
      owner: "PennDOT District 6",
      location: null,
      value: 5505505,
    },
    {
      name: "Main Street bridge over East Penn and SEPTA railroads",
      owner: null,
      location: null,
      value: 4695000,
    },
    {
      name: "SR 52 masonry bridge rehabilitation",
      owner: null,
      location: null,
      value: 3439000,
    },
    {
      name: "Willow Grove Avenue bridge",
      owner: "City of Philadelphia",
      location: "Philadelphia, PA",
      value: 3250000,
    },
    {
      name: "SR 611 design-build",
      owner: "PennDOT District 5",
      location: "Easton, PA",
      value: 1369884,
    },
    {
      name: "Strasburg Railroad main track bridge replacement",
      owner: "Strasburg Railroad",
      location: "Gap, PA",
      value: 468000,
    },
  ],

  hero: {
    src: "/images/jobs/brownsville-06.jpg",
    alt: "Side view of a concrete bridge on piers over a river, Brownsville",
    width: 2400,
    height: 1800,
  },

  photoProjects: [
    {
      slug: "brownsville",
      name: "Brownsville",
      owner: null,
      location: null,
      scope: null,
      value: null,
      dates: null,
      summary:
        "Concrete bridge deck pour on a span over a river. The photographs show the piers, the deck, crew and equipment on the bridge, and broken concrete beside the river.",
      photos: [
        {
          src: "/images/jobs/brownsville-05.jpg",
          alt: "Wide view of a concrete bridge deck pour, with a lift on the near approach and the river and hills beyond, Brownsville",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/brownsville-03.jpg",
          alt: "Looking down a fresh concrete bridge deck during a pour, with a pump, crew and rebar along the edge, Brownsville",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/brownsville-11.jpg",
          alt: "Mixer truck and paver on a fresh concrete bridge deck, with crew in high-visibility clothing, Brownsville",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/brownsville-16.jpg",
          alt: "Overhead view of a concrete bridge deck, with crew and a truck on the span over a river, Brownsville",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/brownsville-untitled-01.jpg",
          alt: "Excavator and loader on broken concrete beside a river, with part of a bridge deck at the left, Brownsville",
          width: 2400,
          height: 1800,
        },
      ],
    },
    {
      slug: "university-avenue",
      name: "University Avenue",
      owner: null,
      location: null,
      scope: null,
      value: null,
      dates: null,
      summary:
        "Steel bridge with a grated deck. The photographs show riveted girders and a stone pier from below, a stone and glass building beside the deck, and the grating over the water.",
      photos: [
        {
          src: "/images/jobs/university-avenue-untitled-01.jpg",
          alt: "Underside of a steel bridge with riveted girders, open grating above and a stone pier, University Avenue",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/university-avenue-untitled-02.jpg",
          alt: "Wider view under a steel bridge, with girders, a stone pier and the river, University Avenue",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/university-avenue-untitled-03.jpg",
          alt: "Stone and glass building beside a grated bridge deck, University Avenue",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/university-avenue-untitled-04.jpg",
          alt: "Riveted steel girders and a stone pier under a bridge, with the river below, University Avenue",
          width: 2400,
          height: 1800,
        },
        {
          src: "/images/jobs/university-avenue-07.jpg",
          alt: "Steel grating around an opening in the deck, with a bolted splice and dark water below, University Avenue",
          width: 2400,
          height: 1800,
        },
      ],
    },
  ],

  award: {
    year: 2019,
    body: "American Society of Highway Engineers, Delaware Valley Section",
    title: "Project of the Year, contracts of ten million dollars and under",
    detail:
      "Awarded for the SR 13 masonry arch rehabilitation, carried out under the Group T contract. Loftus describes the structure as the oldest bridge in the United States, dating to the late 1600s.",
  },

  careers: {
    program: "Bench Strength Program",
    blurb:
      "A one-year training program for recent graduates, preferably with a civil engineering degree, covering estimating, project engineering and management, equipment management, accounting, human resources, contract management, risk management and safety.",
    philosophy: "Grow From Within",
  },

  builder: {
    name: "MJL Collective",
    url: null,
  },
};

export function formatUSD(value: number): string {
  return "$" + value.toLocaleString("en-US");
}

export function projectBySlug(slug: string): PhotoProject | null {
  return business.photoProjects.find((project) => project.slug === slug) ?? null;
}

export const addressLine = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;
