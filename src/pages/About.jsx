import React from "react";

const About = () => {
  const skills = {
    Languages: ["Python", "JavaScript", "SQL", "Solidity"],
    Frontend: ["React.js", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: ["Git", "VS Code", "Azure", "Firebase", "Power Platform"],
  };

  return (
    <section id="about" className="bg-forbidden-forest py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="hp-section-title">The Wizard Behind The Code</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>

        {/* About Card */}
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
          <p
            className="text-lg md:text-xl leading-relaxed text-center"
            style={{ color: "var(--hp-parchment)" }}
          >
            A passionate Software Engineering student at{" "}
            <strong style={{ color: "var(--hp-gold)" }}>
              NED University of Engineering & Technology
            </strong>{" "}
            with a CGPA of{" "}
            <strong style={{ color: "var(--hp-gold-light)" }}>3.78</strong>.
            Skilled in full-stack development, building scalable, user-focused
            solutions, and writing clean, efficient code. Currently wielding
            Angular magic at{" "}
            <strong style={{ color: "var(--hp-gold)" }}>IOMechs</strong> as an
            Associate Software Engineer.
          </p>
          <p
            className="text-lg leading-relaxed text-center mt-6"
            style={{ color: "var(--hp-parchment-dark)" }}
          >
            From crafting responsive frontends to designing powerful backend
            architectures, whether it&apos;s building interactive dashboards,
            conjuring RESTful APIs, or managing enchanted databases, every line
            of code is a spell cast with precision.
          </p>
        </div>

        {/* Skills Grid */}
        <h3
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-hp)",
            color: "var(--hp-gold)",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          }}
        >
          Magical Toolkit
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="glass-card p-5">
              <h4
                className="text-xs uppercase tracking-[0.15em] mb-3"
                style={{ fontFamily: "var(--font-accent)", color: "var(--hp-gold-dim)" }}
              >
                {cat}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="#contact" className="btn-golden">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
