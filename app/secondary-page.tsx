import Link from "next/link";

function PlanetMark() {
  return <span className="planet-mark" aria-hidden="true"><span className="planet-ring" />
  <span className="planet-body" />
  <span className="planet-highlight" /></span>;
}

export default function SecondaryPage({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }){
  return <main className="placeholder-page">
    <div className="placeholder-glow" aria-hidden="true" />
    <Link className="brand" href="/"><PlanetMark /> <span>Jelaksy</span></Link>
    <span className="eyebrow"><i /> {eyebrow}</span>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link className="button button-primary" href="/">Return home <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
    </Link>
  </main>;
}
