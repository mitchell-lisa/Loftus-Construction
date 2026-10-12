import SpeedLines from "./SpeedLines";

/** Opening band for inner pages: navy drawing paper, the page name large, one plain line. */
export default function PageLead({
  title,
  line,
  children,
}: {
  title: string;
  line: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-dark grid-paper relative overflow-hidden bg-navy text-white">
      <div className="wrap relative pb-12 pt-14 lg:pb-20 lg:pt-24">
        <div className="flex items-end gap-6">
          <h1 className="min-w-0 text-[clamp(3rem,9vw,7.5rem)] leading-[0.88]">{title}</h1>
          <SpeedLines reveal weight="bold" className="mb-[0.9em] hidden flex-1 text-white sm:flex" />
        </div>
        <p className="mt-6 max-w-[48ch] text-[1.15rem] leading-snug text-mist lg:text-[1.3rem]">{line}</p>
        {children}
      </div>
    </section>
  );
}
