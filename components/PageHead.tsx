export default function PageHead({ title, line }: { title: string; line?: string }) {
  return (
    <div className="wrap pb-10 pt-14 lg:pb-14 lg:pt-24">
      <h1 className="text-[clamp(2.5rem,6vw,5rem)]">{title}</h1>
      {line ? <p className="mt-5 max-w-[40ch] text-[clamp(1.1rem,1.6vw,1.3rem)] text-steel">{line}</p> : null}
    </div>
  );
}
