/**
 * Three equal speed lines, the stripes beside LOFTUS on the current wordmark.
 * Full width. Used as the header edge and as a break between bands.
 * Not a heading ornament.
 */
export default function Divider({
  tone = "brand",
  className = "",
}: {
  tone?: "brand" | "white";
  className?: string;
}) {
  const bar = tone === "white" ? "bg-white" : "bg-brand";
  return (
    <div aria-hidden="true" className={`flex flex-col gap-[6px] ${className}`}>
      <span className={`block h-[3px] w-full ${bar}`} />
      <span className={`block h-[2px] w-full ${bar}`} />
      <span className={`block h-px w-full ${bar}`} />
    </div>
  );
}
