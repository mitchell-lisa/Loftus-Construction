/** A dimension line with a label in the middle, the way a drawing marks a span. */
export default function Dim({
  children,
  className = "",
  start = false,
}: {
  children: React.ReactNode;
  className?: string;
  start?: boolean;
}) {
  return (
    <p className={`dim ${start ? "dim-start" : ""} ${className}`}>
      <span>{children}</span>
    </p>
  );
}
