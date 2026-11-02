"use client";

import { useState } from "react";
import { faqs } from "../lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`card faq-item${isOpen ? " faq-item--open" : ""}`}>
            <button className="faq-item__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{f.q}</span>
              <span className="faq-item__toggle">
                <img src={isOpen ? "/assets/icon-minus.svg" : "/assets/icon-plus.svg"} width={20} height={20} alt="" />
              </span>
            </button>
            {isOpen && <p className="faq-item__a">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
