"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "The Wizard" },
    { href: "/#experience", label: "Journey" },
    { href: "/#services", label: "Arsenal" },
    { href: "/#projects", label: "Spell Book" },
    { href: "/#achievements", label: "Trophies" },
    { href: "/#contact", label: "Send an Owl" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md border-b"
          : "bg-[var(--hp-dark)]"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10,10,20,0.75)" : "var(--hp-dark)",
        borderColor: isScrolled ? "rgba(212,164,55,0.12)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a
          href="/#home"
          className="flex items-center gap-2 group"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-3xl md:text-4xl tracking-wider"
            style={{ fontFamily: "var(--font-hp)", color: "var(--hp-gold)" }}
          >
            Muneer Hussain
          </span>

        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition"
          style={{ color: "var(--hp-gold)" }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link-magic">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full md:hidden border-b"
            style={{
              backgroundColor: "rgba(10,10,20,0.95)",
              borderColor: "rgba(212,164,55,0.1)",
              animation: "slideDown 0.3s ease",
            }}
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="nav-link-magic block py-2 px-4 rounded-lg"
                    onClick={() => setIsOpen(false)}
                    style={{ transition: "background 0.2s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(212,164,55,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
