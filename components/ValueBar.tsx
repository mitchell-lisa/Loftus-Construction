import { formatUSD } from "@/lib/business";

/**
 * Contract amount drawn as the wordmark's speed lines: the length of the rule is the size of the job.
 */
export default function ValueBar({
  value,
  max,
  className = "",
}: {
  value: number;
  max: number;
  className?: string;
}) {
  const pct = Math.max(4, Math.round((value / max) * 100));
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="min-w-0 flex-1" data-reveal="">
        <div className="speed text-brand" style={{ width: `${pct}%`, "--speed-1": "3px", "--speed-gap": "3px" } as React.CSSProperties}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <span className="tnum shrink-0 text-[16px] font-semibold text-ink">{formatUSD(value)}</span>
    </div>
  );
}
