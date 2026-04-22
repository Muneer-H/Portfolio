import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Training Management System",
      desc: "A web platform to streamline training processes — schedule sessions, track attendance, and collect structured feedback. Built with React, Node.js, Express, and MySQL.",
      image: "/TMSImages/tmsHome.png",
      link: "/projects/1",
    },
    {
      id: 2,
      name: "ExoPlanetarium",
      desc: "An immersive 3D exoplanet learning platform with an AI chatbot (LLaMA), interactive quizzes, and blogs. Improved engagement by 40% with Firebase real-time updates.",
      image: "/ExoImages/exoHome.png",
      link: "/projects/2",
    },
    {
      id: 3,
      name: "MovieVerse",
      desc: "A movie discovery platform to explore films by genre, search titles, and build a personalized WatchList with a clean, intuitive interface.",
      image: "/MovieImages/movieHome.png",
      link: "/projects/3",
    },
    {
      id: 4,
      name: "GemVault",
      desc: "A blockchain-powered gemstone marketplace with on-chain certificate hash verification, reducing fraud by 70%. Automated ownership transfers via smart contracts.",
      image: "/GemImages/gemhome.png",
      link: "/projects/4",
    },
  ];

  return (
    <section id="projects" className="bg-gryffindor py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="hp-section-title">The Spell Book</h2>
        <div className="ornament">
          <div className="ornament-line" />
          <span className="ornament-icon">&#9670;</span>
          <div className="ornament-line" />
        </div>
        <p className="hp-subtitle mb-12">
          Each project is a spell carefully crafted, combining the finest
          incantations of code and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="glass-card overflow-hidden group"
              style={{ animation: `fadeUp 0.5s ease ${i * 0.1}s both` }}
            >
              <div className="overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "var(--hp-muted)" }}
                >
                  {p.desc}
                </p>
                <a href={p.link} className="btn-golden w-full text-center">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
