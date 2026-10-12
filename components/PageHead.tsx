export default function PageHead({ title, line }: { title: string; line?: string }) {
  return (
    <div className="on-dark bg-navy text-white">
      <div className="wrap pb-10 pt-16 lg:pb-14 lg:pt-28">
        <h1 className="t-display text-white">{title}</h1>
        {line ? <p className="mt-6 max-w-[40ch] text-[clamp(1.1rem,1.6vw,1.3rem)] text-mist">{line}</p> : null}
      </div>
    </div>
  );
}
