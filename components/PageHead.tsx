export default function PageHead({ title, line }: { title: string; line?: string }) {
  return (
    <div className="wrap grid gap-6 pb-10 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-28">
      <h1 className="t-display lg:col-span-8">{title}</h1>
      {line ? <p className="serif self-end text-[clamp(1.25rem,1.8vw,1.6rem)] italic leading-snug text-steel lg:col-span-4 lg:pb-3">{line}</p> : null}
    </div>
  );
}
