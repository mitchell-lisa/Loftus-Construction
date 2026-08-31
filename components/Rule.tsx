/**
 * The separator taken directly from the Loftus wordmark.
 *
 * Measured off the logo file rather than eyeballed. In the mark, three rules sit
 * beside LOFTUS, stepped in two ways at once: each rule below is both shorter
 * and thinner than the one above, with the ends nearest the word kept flush.
 *
 * At the logo's own scale the rules run about 3px, 2px and 1.5px thick, with
 * left edges at 6, 17 and 26 pixels against a common right edge near 78. That
 * gives thickness roughly 3 : 2 : 1 and width roughly 100 : 85 : 72 percent,
 * which is what this component reproduces, flush left, so it sits under a
 * left-aligned heading the way the right-hand group sits beside the word.
 */

type Tone = "light" | "dark" | "slate";

const toneClass: Record<Tone, string> = {
  light: "bg-girder",
  dark: "bg-white",
  slate: "bg-steel",
};

export default function Rule({
  tone = "light",
  width = 92,
  thickness = 3,
  gap = 6,
  className = "",
}: {
  tone?: Tone;
  /** Width of the top rule, the longest one, in pixels. */
  width?: number;
  /** Thickness of the top rule, the thickest one, in pixels. */
  thickness?: number;
  gap?: number;
  className?: string;
}) {
  const rules = [
    { w: width, t: thickness },
    { w: Math.round(width * 0.85), t: Math.max(1, Math.round(thickness * 0.67)) },
    { w: Math.round(width * 0.72), t: Math.max(1, Math.round(thickness * 0.4)) },
  ];

  return (
    <div
      aria-hidden="true"
      className={`flex flex-col ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {rules.map((rule, i) => (
        <span
          key={i}
          className={`block ${toneClass[tone]}`}
          style={{ width: `${rule.w}px`, height: `${rule.t}px` }}
        />
      ))}
    </div>
  );
}
