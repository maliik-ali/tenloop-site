import type { ReactNode } from "react";
import { nav } from "../lib/content";

type Icon = { src: string; width: number; height: number };

export function Img({ icon, alt = "" }: { icon: Icon; alt?: string }) {
  return <img src={icon.src} width={icon.width} height={icon.height} alt={alt} />;
}

export function Badge({ icon, children, soft = false }: { icon: Icon; children: ReactNode; soft?: boolean }) {
  return (
    <span className={`badge${soft ? " badge--soft" : ""}`}>
      <Img icon={icon} />
      {children}
    </span>
  );
}

/** Two-line display heading: dark first line, brand-gradient second line. */
export function DisplayHeading({ lead, accent, as: Tag = "h2" }: { lead: string; accent: string; as?: "h1" | "h2" }) {
  return (
    <Tag className="display">
      {lead}
      <br />
      <span className="gradient-text">{accent}</span>
    </Tag>
  );
}

export function SectionHead({
  badge,
  lead,
  accent,
  sub,
  subClassName = "",
}: {
  badge: { icon: Icon; label: string; soft?: boolean };
  lead: string;
  accent: string;
  sub?: string;
  subClassName?: string;
}) {
  return (
    <div className="section__head">
      <Badge icon={badge.icon} soft={badge.soft}>
        {badge.label}
      </Badge>
      <DisplayHeading lead={lead} accent={accent} />
      {sub && <p className={`section__sub ${subClassName}`}>{sub}</p>}
    </div>
  );
}

export function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src="/assets/star.svg" width={18} height={16} alt="" />
      ))}
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <a href="/" aria-label="TenLoop home">
          <img src="/assets/logo.svg" width={137} height={30} alt="TenLoop" />
        </a>
        <nav className="header__nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
              {item.hasMenu && <img src="/assets/chevron.svg" width={14} height={14} alt="" />}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--pill" href="/contact">
          Get started
        </a>
        <button className="header__menu-btn" type="button" aria-label="Open menu">
          Menu
        </button>
      </div>
    </header>
  );
}
