"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { photo } from "@/lib/photos";

const stages = [
  { k: "brownsville-start-3450", date: "October 2024", title: "The old bridge", text: "Brownsville Road over Neshaminy Creek, debris packed against the pier." },
  { k: "brownsville-untitled-04", date: "April 2025", title: "Demolition", text: "The old abutments come out beside the water." },
  { k: "brownsville-11", date: "April 23, 2026", title: "Deck pour", text: "Mixer, paver and crew working across the new span." },
  { k: "brownsville-22", date: "April 2026", title: "The new span", text: "A concrete deck on piers, bank to bank." },
];

export default function Sequence() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const prog = Math.min(1, Math.max(0, -r.top / total));
      setP(prog);
      setI(Math.min(stages.length - 1, Math.floor(prog * stages.length * 0.999)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <section ref={ref} className="seq" style={{ height: `${stages.length * 70 + 20}svh` }}>
      <div className="seq-stick">
        {stages.map((s, j) => {
          const ph = photo(s.k);
          return (
            <div key={s.k} className={`seq-frame ${j === i ? "on" : ""}`} aria-hidden={j !== i}>
              <Image src={ph.src} alt={ph.alt} fill priority={j < 2} sizes="100vw" quality={84} className="object-cover" />
            </div>
          );
        })}
        <div className="seq-shade" />
        <div className="wrap seq-copy">
          <h1 className="seq-title">Difficult heavy construction, since 1994.</h1>
          <div className="seq-stage">
            <ol className="seq-steps">
              {stages.map((s, j) => (
                <li key={s.k} className={j === i ? "on" : j < i ? "done" : ""}>
                  <span className="seq-date tnum">{s.date}</span>
                  <span className="seq-name">{s.title}</span>
                </li>
              ))}
            </ol>
            <p className="seq-text" aria-live="polite">{stages[i].text}</p>
            <div className="seq-bar"><span style={{ transform: `scaleX(${p})` }} /></div>
            <Link href="/projects/brownsville-road" className="seq-link">The full Brownsville Road story</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
