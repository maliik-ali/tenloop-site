import type { Metadata } from "next";
import { contactCards, testimonials } from "../../lib/content";
import { Header, SectionHead, Stars } from "../../components/ui";
import ContactForm from "../../components/ContactForm";
import Faq from "../../components/Faq";

export const metadata: Metadata = {
  title: "Contact — TenLoop",
  description: "Tell us about your product. We reply within 24 hours with clear next steps.",
};

const starBadge = { src: "/assets/badge-star.svg", width: 15.75, height: 14 };

export default function ContactPage() {
  const quote = testimonials[1];
  return (
    <>
      <Header />
      <main className="contact">
        <section className="contact-hero">
          <div className="contact-hero__glow" aria-hidden />
          <SectionHead
            badge={{ icon: starBadge, label: "Contact Us" }}
            lead="Let’s design something"
            accent="users love"
            sub="Tell us where your product is today and where you want it to go. We’ll reply within 24 hours with clear next steps."
            subClassName="contact-hero__sub"
          />
        </section>

        <section className="container contact-main">
          <ContactForm />
          <aside className="contact-side">
            {contactCards.map((c) => (
              <div key={c.title} className="card info-card">
                <div className="info-card__icon">
                  <img src={c.icon} width={24} height={24} alt="" />
                </div>
                <div className="info-card__body">
                  <h3 className="card-title">{c.title}</h3>
                  <p className="info-card__text">{c.body}</p>
                  <a className="info-card__link" href={c.link.href}>
                    {c.link.label}
                  </a>
                </div>
              </div>
            ))}
            <figure className="card quote" style={{ margin: 0 }}>
              <Stars />
              <blockquote className="quote__text" style={{ margin: 0 }}>
                &ldquo;{quote.quote}&rdquo;
              </blockquote>
              <figcaption className="quote__author">
                <img src={quote.photo} alt={quote.name} />
                <div>
                  <div className="quote__name">{quote.name}</div>
                  <div className="quote__role">{quote.role}</div>
                </div>
              </figcaption>
            </figure>
          </aside>
        </section>

        <section className="section contact-faq">
          <SectionHead badge={{ icon: starBadge, label: "FAQ" }} lead="Questions?" accent="We’ve got answers" />
          <Faq />
        </section>
      </main>
    </>
  );
}
