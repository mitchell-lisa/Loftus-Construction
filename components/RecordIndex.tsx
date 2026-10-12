"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { record, recordTypes, ownerGroups, periods, usd, usdShort, type Rec } from "@/lib/site";

type Variant = "regions" | "timeline" | "table" | "ledger" | "cards";

function Chips({ label, options, value, set }: { label: string; options: { key: string; label: string; n: number }[]; value: string; set: (v: string) => void }) {
  return (
    <div className="filter-group" role="group" aria-label={label}>
      <span className="filter-label">{label}</span>
      <div className="filter-chips">
        <button type="button" aria-pressed={value === ""} onClick={() => set("")} className="chip">All</button>
        {options.map((o) => (
          <button type="button" key={o.key} aria-pressed={value === o.key} onClick={() => set(value === o.key ? "" : o.key)} className="chip" disabled={o.n === 0}>
            {o.label}<span className="chip-n">{o.n}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const href = (r: Rec) => `/projects/${r.slug}`;
const val = (r: Rec) => (r.value ? usd(r.value, r.approx) : "Not published");
const yr = (r: Rec) => (r.year ? String(r.year) : "Undated");

export default function RecordIndex({ variant }: { variant: Variant }) {
  const [type, setType] = useState("");
  const [owner, setOwner] = useState("");
  const [period, setPeriod] = useState("");
  const [sort, setSort] = useState<"year" | "value" | "name">("year");

  const rows = useMemo(() => {
    const p = periods.find((x) => x.key === period);
    const list = record.filter((r) => (!type || r.type === type) && (!owner || r.ownerGroup === owner) && (!p || p.test(r)));
    const s = [...list];
    if (sort === "value") s.sort((a, b) => (b.value ?? -1) - (a.value ?? -1));
    if (sort === "name") s.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "year") s.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    return s;
  }, [type, owner, period, sort]);

  const base = (skip: "type" | "owner" | "period") => {
    const p = periods.find((x) => x.key === period);
    return record.filter((r) => (skip === "type" || !type || r.type === type) && (skip === "owner" || !owner || r.ownerGroup === owner) && (skip === "period" || !p || p.test(r)));
  };
  const typeOpts = recordTypes.map((t) => ({ key: t, label: t, n: base("type").filter((r) => r.type === t).length }));
  const ownerOpts = ownerGroups.map((o) => ({ key: o, label: o, n: base("owner").filter((r) => r.ownerGroup === o).length }));
  const periodOpts = periods.map((p) => ({ key: p.key, label: p.label, n: base("period").filter(p.test).length }));

  return (
    <div className={`record record-${variant}`}>
      <div className="filters">
        <Chips label="Type" options={typeOpts} value={type} set={setType} />
        <Chips label="Owner" options={ownerOpts} value={owner} set={setOwner} />
        <Chips label="Period" options={periodOpts} value={period} set={setPeriod} />
        <p className="filter-count" aria-live="polite">
          {rows.length} of {record.length} projects
          {variant === "table" ? null : (
            <span className="sort">
              Sort
              {(["year", "value", "name"] as const).map((k) => (
                <button key={k} type="button" aria-pressed={sort === k} onClick={() => setSort(k)}>{k === "year" ? "Year" : k === "value" ? "Value" : "Name"}</button>
              ))}
            </span>
          )}
        </p>
      </div>

      {rows.length === 0 ? <p className="py-10 muted">No projects match these filters.</p> : null}

      {variant === "table" ? (
        <div className="table-scroll">
          <table className="rtable">
            <thead>
              <tr>
                <th scope="col"><button type="button" onClick={() => setSort("name")} aria-pressed={sort === "name"}>Project</button></th>
                <th scope="col" className="hide-sm">Type</th>
                <th scope="col" className="hide-sm">Owner</th>
                <th scope="col" className="hide-md">Location</th>
                <th scope="col"><button type="button" onClick={() => setSort("year")} aria-pressed={sort === "year"}>Year</button></th>
                <th scope="col" className="num"><button type="button" onClick={() => setSort("value")} aria-pressed={sort === "value"}>Contract</button></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.slug}>
                  <td><Link href={href(r)} className="rlink">{r.name}</Link><span className="show-sm">{r.type}</span></td>
                  <td className="hide-sm">{r.type}</td>
                  <td className="hide-sm">{r.owner ?? <span className="muted">Not published</span>}</td>
                  <td className="hide-md">{r.location ?? <span className="muted">Not published</span>}</td>
                  <td className="tnum">{r.year ?? <span className="muted">n/a</span>}</td>
                  <td className="num tnum">{r.value ? usdShort(r.value, r.approx) : <span className="muted">n/a</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {variant === "regions" ? (
        <div className="regions">
          {[["PA", "Pennsylvania"], ["NJ", "New Jersey"], ["", "Location not published"]].map(([st, label]) => {
            const g = rows.filter((r) => (r.state ?? "") === st);
            if (!g.length) return null;
            return (
              <section key={label} className="region">
                <h3 className="region-h">{label}<span className="region-n">{g.length}</span></h3>
                <ul>
                  {g.map((r) => (
                    <li key={r.slug}>
                      <Link href={href(r)} className="region-row">
                        <span className="region-name">{r.name}</span>
                        <span className="region-meta">{[r.location, r.owner].filter(Boolean).join(", ") || r.type}</span>
                        <span className="region-val tnum">{r.value ? usdShort(r.value, r.approx) : yr(r)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ) : null}

      {variant === "timeline" ? (
        <ol className="tl">
          {Array.from(new Set(rows.map(yr))).map((y) => (
            <li key={y} className="tl-year">
              <h3 className="tl-y tnum">{y}</h3>
              <ul>
                {rows.filter((r) => yr(r) === y).map((r) => (
                  <li key={r.slug}>
                    <Link href={href(r)} className="tl-row">
                      <span className="tl-name">{r.name}</span>
                      <span className="tl-meta">{[r.type, r.owner, r.location].filter(Boolean).join(" / ")}</span>
                      {r.note ? <span className="tl-note">{r.note}</span> : null}
                      <span className="tl-val tnum">{val(r)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      ) : null}

      {variant === "ledger" ? (
        <ul className="ledger">
          {rows.map((r) => (
            <li key={r.slug}>
              <Link href={href(r)} className="ledger-row">
                <span className="ledger-name">{r.name}</span>
                <span className="ledger-meta">
                  <span>{r.type}</span>
                  <span>{r.owner ?? "Owner not published"}</span>
                  <span>{r.when ?? yr(r)}</span>
                  <span className="tnum">{val(r)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {variant === "cards" ? (
        <ul className="rcards">
          {rows.map((r) => (
            <li key={r.slug}>
              <Link href={href(r)} className="rcard">
                <span className="rcard-type">{r.type}</span>
                <span className="rcard-name">{r.name}</span>
                <span className="rcard-foot">
                  <span>{r.location ?? r.owner ?? "Location not published"}</span>
                  <span className="tnum">{r.value ? usdShort(r.value, r.approx) : yr(r)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
