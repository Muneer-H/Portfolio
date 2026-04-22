import React from "react";
import { FaGithub } from "react-icons/fa";

const IndividualProject = ({ projectID }) => {
  const projects = [
    {
      projectID: 1,
      title: "Training Management System",
      description:
        "A web-based platform designed to streamline employee training processes. It allows administrators to schedule and manage training sessions, track employee attendance, and collect structured feedback after each session to measure effectiveness and improve future trainings.",
      collaborators:
        "Eraj Tanweer, Tazeen Amir, Syed Ibad, Hashir Jamal, Nashwah Mohammad",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["NodeJS", "ExpressJS"],
        database: ["MySQL"],
      },
      gallery: [
        "/TMSImages/tms1.png",
        "/TMSImages/tms2.png",
        "/TMSImages/tms3.png",
        "/TMSImages/tms4.png",
      ],
      homeImage: "/TMSImages/tmsHome.png",
      completion: "October 2025",
      link: "https://github.com/SyedIbad123/QEC-Project-",
    },
    {
      projectID: 2,
      title: "ExoPlanetarium",
      description:
        "An immersive 3D learning platform on exoplanets with an AI chatbot (LLaMA), interactive quizzes, and blogs. Improved user engagement by 40% using Firebase real-time updates and React Three Fiber for stunning 3D visuals.",
      collaborators:
        "Syed Ibad, Hashir Jamal, Shayan Zaheer, Muhammad Bilal, Arham Hasan",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS", "React Three Fiber"],
        backend: ["NodeJS", "ExpressJS", "LLaMA"],
        database: ["MongoDB", "Firebase"],
      },
      gallery: [
        "/ExoImages/exo1.png",
        "/ExoImages/exo2.png",
        "/ExoImages/exo3.png",
        "/ExoImages/exo4.png",
      ],
      homeImage: "/ExoImages/exoHome.png",
      completion: "October 2024",
      link: "https://github.com/hashirjamal/ExoPlanetarium",
    },
    {
      projectID: 3,
      title: "MovieVerse",
      description:
        "A movie discovery platform that allows users to explore films across various genres, search for specific titles, and build a personalized WatchList. With a clean and intuitive interface, MovieVerse offers an enjoyable and organized way to keep track of your favorite movies.",
      collaborators: "Self-Project",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["TMDB API"],
        database: ["MongoDB"],
      },
      gallery: [
        "/MovieImages/movie1.png",
        "/MovieImages/movie2.png",
        "/MovieImages/movie3.png",
        "/MovieImages/movie4.png",
      ],
      homeImage: "/MovieImages/movieHome.png",
      completion: "September 2024",
      link: "https://github.com/MuneerHussain-Pydev/MovieVerse",
    },
    {
      projectID: 4,
      title: "GemVault",
      description:
        "A blockchain-powered C2C gemstone marketplace with on-chain certificate hash verification, reducing fraud by 70%. Automated ownership transfers via SafePay and Solidity smart contracts on Ethereum with MetaMask integration.",
      collaborators: "Hashir Jamal, Shayan Zaheer, Arham Hasan",
      techStack: {
        frontend: ["NextJS", "TailwindCSS"],
        backend: ["NodeJS", "ExpressJS", "Solidity", "Ethereum", "MetaMask"],
        database: ["PostgreSQL"],
      },
      gallery: [
        "/GemImages/gem1.png",
        "/GemImages/gem2.png",
        "/GemImages/gem3.png",
        "/GemImages/gem4.png",
      ],
      homeImage: "/GemImages/gemhome.png",
      completion: "May 2025",
      link: "",
    },
  ];

  const currentProject = projects.find(
    (project) => project.projectID == projectID
  );

  return (
    <div className="relative min-h-[80vh] px-6 md:px-12 py-16 mt-16">
      {!currentProject ? (
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--hp-gold)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Spell Not Found
          </h1>
          <p className="text-[var(--hp-muted)] mt-4 text-lg">
            This page of the Spell Book appears to be missing...
          </p>
          <a href="/" className="btn-golden mt-6">
            Return to Hogwarts
          </a>
        </div>
      ) : (
        <>
          {/* Hero Banner */}
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-10">
            <img
              src={currentProject.homeImage}
              alt={currentProject.title}
              className="w-full h-full object-cover opacity-30 brightness-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--hp-dark)] via-transparent to-transparent" />
            <h1
              className="absolute bottom-4 left-6 text-3xl md:text-5xl font-bold text-[var(--hp-gold)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {currentProject.title}
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left — Description & Gallery */}
            <div className="md:col-span-2">
              <h2
                className="text-xl md:text-2xl font-bold text-[var(--hp-gold)] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Description
              </h2>
              <p className="text-[var(--hp-parchment-dark)] text-base leading-relaxed text-justify">
                {currentProject.description}
              </p>

              <div className="mt-8">
                <h2
                  className="text-xl md:text-2xl font-bold text-[var(--hp-gold)] mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProject.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-60 rounded-lg overflow-hidden parchment-card"
                    >
                      <img
                        src={image}
                        alt={`${currentProject.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Sidebar Info */}
            <div className="parchment-card p-6 self-start sticky top-24">
              <h2
                className="text-lg font-bold text-[var(--hp-gold)] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Collaborators
              </h2>
              <p className="text-[var(--hp-parchment-dark)] text-sm mb-4">
                {currentProject.collaborators}
              </p>

              <h2
                className="text-lg font-bold text-[var(--hp-gold)] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Completed
              </h2>
              <p className="text-[var(--hp-parchment-dark)] text-sm mb-4">
                {currentProject.completion}
              </p>

              <h2
                className="text-lg font-bold text-[var(--hp-gold)] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tech Stack
              </h2>
              <div className="space-y-2 mb-5">
                <div>
                  <span
                    className="text-[var(--hp-gold-dim)] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Frontend:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentProject.techStack.frontend.map((t) => (
                      <span key={t} className="skill-badge text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span
                    className="text-[var(--hp-gold-dim)] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Backend:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentProject.techStack.backend.map((t) => (
                      <span key={t} className="skill-badge text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span
                    className="text-[var(--hp-gold-dim)] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Database:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentProject.techStack.database.map((t) => (
                      <span key={t} className="skill-badge text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  className="btn-golden flex justify-center items-center gap-3 w-full"
                >
                  View on GitHub <FaGithub fontSize={20} />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualProject;
