import Link from "next/link";
import PlanetMark from "@/components/PlanetMark";
import ArrowIcon from "@/components/ArrowIcon";

const secondaryNav = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Billing", "/billing"],
  ["Partners", "/partners"],
  ["Pricing", "/pricing"],
] as const;



export default function SecondaryPage({ 
  title, 
  eyebrow, 
  description}: 
  { 
  title: string; 
  eyebrow: string; 
  description: string})
  {
  return <main className="placeholder-page">
    <div className="placeholder-glow" aria-hidden="true" />
    <header className="secondary-header">
      <Link className="brand" href="/"><PlanetMark /><span>Jelaksy</span></Link>
      <nav className="main-nav secondary-nav" aria-label="Secondary navigation">
        {secondaryNav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <div className="header-actions secondary-actions">
        <Link className="login-link" href="/app">Log in</Link>
        <Link className="button button-small" href="/app">Get Started <ArrowIcon /></Link>
      </div>
    </header>
    <span className="eyebrow"><i /> {eyebrow}</span>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link className="button button-primary" href="/">Return home <ArrowIcon /></Link>
  </main>;
}
