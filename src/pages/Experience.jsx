import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "IOMechs",
      period: "Oct 2025 — Present",
      location: "Karachi, PK",
      techs: ["Angular"],
      description:
        "Contributing to innovative digital solutions, focusing on collaboration, scalability, and maintainability.",
      current: true,
    },
    {
      role: "Development Intern",
      company: "Mazik Global Incorporation",
      period: "Jun 2025 — Jul 2025",
      location: "Karachi, PK",
      techs: ["Power Apps", "Dataverse", "Power Automate"],
      description:
        "Created the Employee Task Management System using Power Apps, Dataverse, and Power Automate. Managers assign and track tasks; employees manage status with real-time notifications.",
    },
    {
      role: "IT Intern",
      company: "Pak Suzuki Motors Company Limited",
      period: "Mar 2025",
      location: "Karachi, PK",
      techs: ["Python", "Streamlit", "MixtralAI"],
      description:
        "Developed a chatbot using Python that accesses company policies and database to answer employee queries instantly. Utilized the Mixtral LLM model for query processing.",
    },
    {
      role: "IT Intern",
      company: "Gerry's International Pvt Ltd — Licensee of FedEx",
      period: "Jan 2025",
      location: "Karachi, PK",
      techs: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Python"],
      description:
        "Built a meeting management app with real-time updates and admin control via Socket.io, alongside Python scripts for email automation, data export, and graph generation.",
    },
  ];

  return (
    <section id="experience" className="bg-hogwarts py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="hp-section-title">The Journey So Far</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>
        <p className="hp-subtitle">
          Each chapter of this journey has been a new spell learned, a new challenge conquered.
        </p>

        {/* Timeline */}
        <div className="timeline-container flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative"
              style={{ animation: `fadeUp 0.5s ease ${i * 0.12}s both` }}
            >
              <div className="timeline-dot" />
              <div className="glass-card p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="text-lg md:text-xl font-bold flex items-center gap-2"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
                    >
                      {exp.role}
                      {exp.current && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(212,164,55,0.15)",
                            color: "var(--hp-gold-light)",
                            fontFamily: "var(--font-accent)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </h3>
                    <p
                      className="mt-1"
                      style={{ fontFamily: "var(--font-accent)", color: "var(--hp-parchment)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-accent)", color: "var(--hp-gold-dim)" }}
                    >
                      {exp.period}
                    </p>
                    <p className="text-xs" style={{ color: "var(--hp-muted)" }}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-base leading-relaxed mb-3"
                  style={{ color: "var(--hp-parchment-dark)" }}
                >
                  {exp.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((t) => (
                    <span key={t} className="skill-badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
