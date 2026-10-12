export default function PageHead({ title, line }: { title: string; line?: string }) {
  return (
    <div className="wrap pb-10 pt-14 lg:pb-16 lg:pt-28">
      <h1 className="t-h1">{title}</h1>
      {line ? <p className="mt-5 max-w-[40ch] text-[clamp(1.1rem,1.6vw,1.3rem)] text-steel">{line}</p> : null}
    </div>
  );
}
