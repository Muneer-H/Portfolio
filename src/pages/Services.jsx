import React from "react";
import { TbApi } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import { FaGears } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      title: "API Conjuration",
      desc: "Crafting powerful RESTful APIs that seamlessly connect your application's realms.",
      icon: <TbApi />,
    },
    {
      title: "Interface Enchantments",
      desc: "Building responsive and spellbinding interfaces that captivate every user.",
      icon: <CgScreen />,
    },
    {
      title: "Divination Dashboards",
      desc: "Transforming raw data into crystal-clear, interactive dashboards for foresight.",
      icon: <VscGraph />,
    },
    {
      title: "System Sorcery",
      desc: "Creating custom management systems tailored to your kingdom's needs.",
      icon: <FaGears />,
    },
  ];

  return (
    <section id="services" className="bg-ministry py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="hp-section-title">Magical Arsenal</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>
        <p className="hp-subtitle mb-12">
          Every wizard specializes in certain spells. Here are the enchantments I
          wield to bring digital visions to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card p-7 flex flex-col items-center text-center"
              style={{ animation: `fadeUp 0.5s ease ${i * 0.1}s both` }}
            >
              <div
                className="text-5xl mb-4"
                style={{ color: "var(--hp-gold)" }}
              >
                {s.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--hp-parchment-dark)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
