"use client";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--hp-dark)",
        borderTop: "1px solid rgba(212,164,55,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="/#home"
              className="block mb-3"
              style={{
                fontFamily: "var(--font-hp)",
                fontSize: "1.8rem",
                color: "var(--hp-gold)",
                textDecoration: "none",
              }}
            >
              Muneer Hussain
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--hp-muted)" }}>
              Software Engineer &amp; Code Wizard. Crafting magical digital
              experiences with React, Angular, Node.js, and beyond.
            </p>
            <p
              className="mt-4 italic text-sm"
              style={{ fontFamily: "var(--font-accent)", color: "var(--hp-gold-dim)" }}
            >
              &ldquo;I solemnly swear that I am up to no good.&rdquo;
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
            >
              Magical Arsenal
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--hp-muted)" }}>
              {["API Conjuration", "Interface Enchantments", "Divination Dashboards", "System Sorcery"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="transition-colors hover:text-[var(--hp-gold)]"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--hp-muted)" }}>
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "The Wizard" },
                { href: "#experience", label: "Journey" },
                { href: "#projects", label: "Spell Book" },
                { href: "#contact", label: "Send an Owl" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-[var(--hp-gold)]"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-[1px] mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,164,55,0.25), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--hp-muted)" }}>
            &copy; 2025 <span style={{ color: "var(--hp-gold)" }}>Muneer Hussain</span>. All Rights
            Reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-5">
            {[
              { href: "https://www.facebook.com/muneer.hussain.12345", label: "Facebook", path: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z", vb: "0 0 8 19" },
              { href: "https://github.com/muneer-h", label: "GitHub", path: "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z", vb: "0 0 20 20" },
              { href: "https://linkedin.com/in/muneer-hussain123", label: "LinkedIn", path: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014V8h2.559v1.17h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.463ZM5.005 6.575a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096Zm1.336 9.763H3.667V8h2.674v8.338ZM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1Z", vb: "0 0 20 20" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="text-[var(--hp-muted)] hover:text-[var(--hp-gold)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox={s.vb}>
                  <path fillRule="evenodd" d={s.path} clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>

          <p
            className="text-sm italic"
            style={{ fontFamily: "var(--font-accent)", color: "var(--hp-gold-dim)" }}
          >
            Mischief Managed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
