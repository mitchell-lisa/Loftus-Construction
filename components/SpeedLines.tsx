/**
 * The three stepped rules beside LOFTUS in the wordmark: heavy, medium, light.
 * Colour comes from the text colour of the parent (text-white, text-brand, text-navy).
 */
export default function SpeedLines({
  className = "",
  from = "left",
  reveal = false,
  weight = "regular",
}: {
  className?: string;
  from?: "left" | "right";
  reveal?: boolean;
  weight?: "regular" | "fine" | "bold";
}) {
  const vars: Record<string, string> =
    weight === "bold"
      ? { "--speed-1": "6px", "--speed-2": "3px", "--speed-3": "2px", "--speed-gap": "7px" }
      : weight === "fine"
        ? { "--speed-1": "2px", "--speed-2": "1px", "--speed-3": "1px", "--speed-gap": "4px" }
        : {};
  return (
    <div
      aria-hidden="true"
      data-reveal={reveal ? "" : undefined}
      className={`speed ${className}`}
      style={{ ...vars, "--speed-origin": from } as unknown as React.CSSProperties}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
