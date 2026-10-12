import Pic from "./Pic";

export default function PageHead({ title, lede, photo, pos }: { title: string; lede?: string; photo?: string | null; pos?: string }) {
  return (
    <section className={`page-head ${photo ? "has-photo" : ""}`}>
      <div className="wrap page-head-grid">
        <h1 className="display page-title" data-reveal>{title}</h1>
        {lede ? <p className="lede page-lede" data-reveal>{lede}</p> : null}
      </div>
      {photo ? (
        <div className="page-head-photo" data-reveal>
          <Pic k={photo} className="aspect-[16/9] lg:aspect-[21/8]" sizes="100vw" priority pos={pos} />
        </div>
      ) : null}
    </section>
  );
}
