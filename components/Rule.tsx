import type { ReactNode } from "react";

/**
 * The separator taken directly from the Loftus wordmark.
 *
 * Measured off the logo file rather than eyeballed. In the mark, three rules sit
 * on BOTH sides of LOFTUS, mirrored: each group is stepped in two ways at once,
 * every rule below both shorter and thinner than the one above, and the flush
 * ends of each group face the word while the stepped ends run outward.
 *
 * Measured against the 367x88 logo, alpha above half:
 *
 *   left group    x 6..68, 17..69, 27..69   widths 63, 53, 43
 *   right group   x 292..354, 292..343, 292..334
 *   thickness     2.38, 1.82, 1.38 px, the same on both sides
 *
 * That gives width 1 : 0.84 : 0.68 and thickness 1 : 0.76 : 0.58, which is what
 * STEPS reproduces. Bar widths are percentages of the group width, so a caller
 * can hand `width` a clamp() and the whole group scales with the viewport.
 */

type Tone = "light" | "dark" | "slate";

/** Which end of the group is flush. "both" tapers from the centre on each side. */
type Side = "left" | "right" | "both";

const toneClass: Record<Tone, string> = {
  light: "bg-brand",
  dark: "bg-white",
  slate: "bg-steel",
};

const alignClass: Record<Side, string> = {
  // Flush left, stepping right: the group that sits to the right of the word.
  right: "items-start",
  // Flush right, stepping left: the group that sits to the left of the word.
  left: "items-end",
  both: "items-center",
};

const STEPS = [
  { w: 1, t: 1 },
  { w: 0.84, t: 0.76 },
  { w: 0.68, t: 0.58 },
];

export default function Rule({
  tone = "light",
  side = "right",
  width = 92,
  thickness = 3,
  gap = 6,
  className = "",
}: {
  tone?: Tone;
  side?: Side;
  /** Width of the top rule, the longest one. A number is read as pixels. */
  width?: number | string;
  /** Thickness of the top rule, the thickest one, in pixels. */
  thickness?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 flex-col ${alignClass[side]} ${className}`}
      style={{
        gap: `${gap}px`,
        width: typeof width === "number" ? `${width}px` : width,
      }}
    >
      {STEPS.map((step, i) => (
        <span
          key={i}
          className={`block ${toneClass[tone]}`}
          style={{
            width: `${step.w * 100}%`,
            // Never round a hairline out of existence.
            height: `max(1px, ${(thickness * step.t).toFixed(2)}px)`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Content set between the two mirrored groups, the way LOFTUS sits between them
 * in the wordmark. The rules hold their width and the content takes the rest, so
 * a heading wraps rather than pushing a group past the edge on a narrow screen.
 */
export function Flank({
  children,
  tone = "light",
  width = "clamp(18px, 5.5vw, 52px)",
  thickness = 3,
  gap = 5,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  width?: number | string;
  thickness?: number;
  gap?: number;
  className?: string;
}) {
  const rule = { tone, width, thickness, gap };
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <Rule side="left" {...rule} />
      <div className="min-w-0">{children}</div>
      <Rule side="right" {...rule} />
    </div>
  );
}
