import { studies } from "./site";
import { allPhotoKeys } from "./photos";
import { theme } from "./theme";

// Every photograph appears once per site. The home page claims its frames first,
// then case studies, project covers and the inner pages take the next unused candidate.
const used = new Set<string>(theme.home);
function take(cands: string[], n = 1): string[] {
  const out: string[] = [];
  for (const c of cands) {
    if (out.length >= n) break;
    if (!used.has(c) && allPhotoKeys.includes(c)) { used.add(c); out.push(c); }
  }
  return out;
}

export const studyPhotos: Record<string, { lead: string | null; chapters: Record<string, string[]> }> = {};
for (const s of studies) {
  const lead = take([...s.leadCandidates, ...s.coverCandidates, ...s.chapters.flatMap((c) => c.candidates)])[0] ?? null;
  const chapters: Record<string, string[]> = {};
  for (const c of s.chapters) chapters[c.key] = take(c.candidates, c.take);
  studyPhotos[s.slug] = { lead, chapters };
}
export const covers: Record<string, string | null> = {};
for (const s of studies) covers[s.slug] = take([...s.coverCandidates, ...s.leadCandidates, ...s.chapters.flatMap((c) => c.candidates)])[0] ?? null;

const roles: Record<string, string[]> = {
  capHero: ["university-avenue-untitled-02", "university-avenue-untitled-04", "brownsville-15", "brownsville-05"],
  capBridges: ["brownsville-09", "brownsville-14", "brownsville-21", "brownsville-12", "brownsville-22"],
  capRehab: ["university-avenue-08", "university-avenue-09", "university-avenue-03", "university-avenue-05", "university-avenue-04"],
  capWalls: ["st-peters-12", "st-peters-8", "st-peters-17", "st-peters-3", "st-peters-6", "st-peters-before-3898", "st-peters-before-3906", "st-peters-before-3890"],
  capFoundations: ["brownsville-20", "brownsville-18", "brownsville-12", "brownsville-10"],
  capDesign: ["brownsville-start-3442", "brownsville-start-3435", "brownsville-start-3439"],
  aboutHero: ["brownsville-07", "brownsville-untitled-03", "st-peters-3", "brownsville-05"],
  aboutSafety: ["brownsville-13", "brownsville-01", "brownsville-04"],
  careersHero: ["brownsville-01", "brownsville-04", "brownsville-18", "brownsville-13", "brownsville-19"],
  careersDetail: ["university-avenue-12", "university-avenue-13", "university-avenue-10", "university-avenue-11"],
  contact: ["st-peters-8", "st-peters-17", "brownsville-start-3435", "brownsville-22", "brownsville-02"],
};
export const role: Record<string, string | null> = {};
for (const [k, c] of Object.entries(roles)) role[k] = take(c)[0] ?? null;
