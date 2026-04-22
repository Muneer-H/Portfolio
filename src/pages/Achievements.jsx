import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "Top 10 in Project Exhbition",
      event: "TeknoFest 2026",
      desc: "Secured the 6th position in the project exhibition at TeknoFest 2026, one of the biggest hackathons in Pakistan",
    },
    {
      title: "1st Place, Best Execution",
      event: "CodeSphere 2.0",
      desc: "Secured 1st Place in Best Execution, recognized for delivering a high-impact solution under competitive pressure.",
    },
    {
      title: "NASA Space Apps Challenge",
      event: "Karachi Hackathon 2024",
      desc: "Collaborated with a team to develop innovative solutions for real-world problems and received certification for successful project submission.",
    },
    {
      title: "Competitive Programming",
      event: "CodeSphere",
      desc: "Earned certification in Competitive Programming, demonstrating strong problem-solving skills and algorithmic thinking.",
    },
  ];

  return (
    <section id="achievements" className="bg-hogwarts py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="hp-section-title">Trophies &amp; Awards</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>
        <p className="hp-subtitle mb-12">
          Every great wizard has their accolades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="trophy-card"
              style={{ animation: `fadeUp 0.5s ease ${i * 0.12}s both` }}
            >
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
              >
                {a.title}
              </h3>
              <p
                className="text-sm mb-3"
                style={{ fontFamily: "var(--font-accent)", color: "var(--hp-gold-dim)" }}
              >
                {a.event}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--hp-parchment-dark)" }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
