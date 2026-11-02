"use client";

import { useState, type FormEvent } from "react";
import { contactBudgets, contactServices } from "../lib/content";

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input className="field__input" name={name} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

export default function ContactForm() {
  const [services, setServices] = useState<string[]>([contactServices[0]]);
  const [budget, setBudget] = useState(contactBudgets[1]);
  const [sent, setSent] = useState(false);

  const toggleService = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to an API route / email service (e.g. Resend) or store in the CMS.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card form-card form-card--sent">
        <h2 className="card-title">Thanks — we’ve got your message!</h2>
        <p className="form-card__desc">We’ll reply within 24 hours with clear next steps.</p>
      </div>
    );
  }

  return (
    <form className="card form-card" onSubmit={onSubmit}>
      <div className="form-card__head">
        <h2 className="card-title">Tell us about your project</h2>
        <p className="form-card__desc">Fill in a few details and we’ll come back with a tailored proposal.</p>
      </div>
      <div className="form-row">
        <Field label="Full name" name="name" placeholder="Jane Cooper" required />
        <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="form-row">
        <Field label="Company" name="company" placeholder="Company name" />
        <Field label="Website" name="website" type="url" placeholder="https://" />
      </div>
      <fieldset className="chip-group">
        <legend className="field__label">What can we help with?</legend>
        <div className="chips">
          {contactServices.map((s) => (
            <button type="button" key={s} className={`chip${services.includes(s) ? " chip--selected" : ""}`} aria-pressed={services.includes(s)} onClick={() => toggleService(s)}>
              {s}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="chip-group">
        <legend className="field__label">Estimated budget</legend>
        <div className="chips" role="radiogroup">
          {contactBudgets.map((b) => (
            <button type="button" key={b} role="radio" aria-checked={budget === b} className={`chip${budget === b ? " chip--selected" : ""}`} onClick={() => setBudget(b)}>
              {b}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span className="field__label">Project details</span>
        <textarea className="field__input field__input--area" name="details" placeholder="Tell us about your product, goals and timeline…" />
      </label>
      <div className="form-submit">
        <button type="submit" className="btn btn--hero">
          Send Message
          <img src="/assets/arrow-hero.svg" width={15.75} height={18} alt="" />
        </button>
        <p className="form-submit__note">We reply within 24 hours. Your details stay private — NDA available on request.</p>
      </div>
    </form>
  );
}
