import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaLocationDot />,
      label: "Headquarters",
      value: "Karachi, Pakistan",
    },
    {
      icon: <MdEmail />,
      label: "Owl Post",
      value: "muneermh41004@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Floo Network",
      value: "+92 34322 48287",
    },
  ];

  return (
    <section id="contact" className="bg-forbidden-forest py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="hp-section-title">Send an Owl</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>
        <p className="hp-subtitle mb-12">
          Whether you seek an alliance or wish to share a spell, my owl is
          always ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{
                    background: "rgba(212,164,55,0.1)",
                    color: "var(--hp-gold)",
                    border: "1px solid rgba(212,164,55,0.2)",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
                  >
                    {c.label}
                  </h3>
                  <p style={{ color: "var(--hp-parchment-dark)" }}>{c.value}</p>
                </div>
              </div>
            ))}

            {/* Dumbledore quote */}
            <div className="glass-card p-5 mt-4">
              <p
                className="italic text-center"
                style={{ color: "var(--hp-gold-dim)", fontFamily: "var(--font-body)" }}
              >
                &ldquo;It does not do to dwell on dreams and forget to live.&rdquo;
              </p>
              <p
                className="text-sm text-center mt-2"
                style={{ fontFamily: "var(--font-accent)", color: "var(--hp-muted)" }}
              >
                — Albus Dumbledore
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
