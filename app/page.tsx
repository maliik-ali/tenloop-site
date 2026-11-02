import {
  clientLogos,
  designSystemService,
  featuredService,
  planIncludes,
  plans,
  services,
  testimonials,
} from "../lib/content";
import { Header, Img, SectionHead, Stars } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Product design agency for <span className="gradient-text">SaaS</span>
          </h1>
          <p className="hero__lead">
            Turn your startup vision into stunning, conversion-focused SaaS products users love—and investors notice.
          </p>
          <a className="btn btn--hero" href="/contact">
            Book a Discovery Call
            <img src="/assets/arrow-hero.svg" width={15.75} height={18} alt="" />
          </a>
          <div className="hero__proof">
            <div className="avatars">
              {[1, 2, 3, 4].map((n) => (
                <img key={n} src={`/assets/team-${n}.png`} alt="" />
              ))}
            </div>
            <div className="hero__proof-text">
              <Stars />
              <span>Loved by 200+ founders</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <img src="/assets/hero-shape.png" alt="" />
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="section" id="clients">
      <SectionHead
        badge={{ icon: { src: "/assets/badge-star.svg", width: 15.75, height: 14 }, label: "Clients" }}
        lead="Trusted by innovative"
        accent="companies"
        sub="From early-stage startups to scaling SaaS companies, we've helped shape the future of digital products"
      />
      <ul className="clients__grid">
        {clientLogos.map((logo) => (
          <li key={logo.alt} className="client-tile">
            <img src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Checklist({ items, size = 16 }: { items: string[]; size?: 16 | 20 }) {
  return (
    <ul className={size === 16 ? "checklist" : "plan__features"}>
      {items.map((item) => (
        <li key={item}>
          <img src={`/assets/check-${size}.svg`} width={size} height={size} alt="" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionHead
        badge={{ icon: { src: "/assets/badge-palette.svg", width: 14, height: 14 }, label: "Our Services", soft: true }}
        lead="Design services built for"
        accent="startup success"
      />
      <div className="container">
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="card service">
              <div className="icon-tile">
                <Img icon={s.icon} />
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.text}</p>
              <Checklist items={s.items} />
            </article>
          ))}

          <article className="card service service--wide">
            <div className="service__copy">
              <div className="icon-tile">
                <Img icon={featuredService.icon} />
              </div>
              <h3 className="card-title">{featuredService.title}</h3>
              <p className="card-text">{featuredService.text}</p>
              <a className="btn btn--primary" href="/contact">
                {featuredService.cta}
                <img src="/assets/arrow-right.svg" width={16} height={16} alt="" />
              </a>
            </div>
            <div className="service__media">
              <img src={featuredService.image} alt="Mobile app interface design with colorful gradients" />
            </div>
          </article>

          <article className="card service">
            <div className="icon-tile">
              <Img icon={designSystemService.icon} />
            </div>
            <h3 className="card-title">{designSystemService.title}</h3>
            <p className="card-text">{designSystemService.text}</p>
            <Checklist items={designSystemService.items} />
          </article>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <SectionHead
        badge={{ icon: { src: "/assets/badge-star.svg", width: 15.75, height: 14 }, label: "Testimonials" }}
        lead="Loved by founders"
        accent="worldwide"
      />
      <div className="container">
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="card quote" style={{ margin: 0 }}>
              <Stars />
              <blockquote className="quote__text" style={{ margin: 0 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="quote__author">
                <img src={t.photo} alt={t.name} />
                <div>
                  <div className="quote__name">{t.name}</div>
                  <div className="quote__role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <SectionHead
        badge={{ icon: { src: "/assets/badge-tag.svg", width: 12.25, height: 14 }, label: "Pricing Plans" }}
        lead="Transparent pricing for"
        accent="every stage"
        sub="Choose the perfect plan for your startup's growth phase"
        subClassName="pricing__sub"
      />
      <div className="container">
        <div className="pricing__grid">
          {plans.map((p) => (
            <article key={p.name} className={`card plan${p.featured ? " plan--featured" : ""}`}>
              {p.featured && <span className="plan__ribbon">MOST POPULAR</span>}
              <div className="plan__body">
                <div className="plan__intro">
                  <div className={`plan__icon${p.featured ? " plan__icon--brand" : ""}`}>
                    <Img icon={p.icon} />
                  </div>
                  <h3 className="card-title">{p.name}</h3>
                  <p>{p.tagline}</p>
                </div>
                <div>
                  <div className="plan__price">
                    <span className="plan__amount">{p.price}</span>
                    {p.unit && <span>{p.unit}</span>}
                  </div>
                  <p className="plan__note">{p.note}</p>
                </div>
                <Checklist items={p.features} size={20} />
              </div>
              <a className={`btn ${p.featured ? "btn--solid-lg" : "btn--outline-lg"}`} href="/contact">
                {p.cta}
              </a>
            </article>
          ))}

          <div className="card includes">
            <h3 className="includes__title">All plans include:</h3>
            <div className="includes__grid">
              {planIncludes.map((inc) => (
                <div key={inc.label} className="includes__item">
                  <span className="icon">
                    <Img icon={inc.icon} />
                  </span>
                  {inc.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
