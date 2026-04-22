"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  // Generate star positions once on the client to avoid hydration mismatch
  const stars = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      w: (i * 7 + 3) % 3 + 1,
      left: ((i * 37 + 13) % 100),
      top: ((i * 53 + 7) % 100),
      dur: 3 + (i % 5),
      delay: (i % 4) * 0.8,
    }));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex bg-hogwarts overflow-hidden"
    >
      {/* Subtle stars background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${s.w}px`,
              height: `${s.w}px`,
              background: "var(--hp-gold-light)",
              left: `${s.left}%`,
              top: `${s.top}%`,
              animation: `starTwinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse md:flex-row my-auto gap-12">
        {/* Left — Text */}
        <div className="flex-1 flex flex-col items-start">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-accent)", color: "var(--hp-muted)" }}
          >
            Greetings, Fellow Wizard
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-2"
            style={{ fontFamily: "var(--font-hp)", color: "var(--hp-gold)" }}
          >
            Muneer {" "}
          <span
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
            style={{ fontFamily: "var(--font-hp)", color: "var(--hp-gold-light)" }}
          >
            Hussain
          </span></h1>

          <p
            className="text-xl md:text-2xl mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--hp-gold-dim)" }}
          >
            Software Engineer &amp; Code Wizard
          </p>
          <p
            className="text-base mb-6 italic"
            style={{ color: "var(--hp-muted)" }}
          >
            Associate Software Engineer @ IOMechs &bull; NED University (CGPA: 3.78)
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-golden">
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/muneer-hussain123/"
              target="_blank"
              className="btn-outline-gold"
            >
              LinkedIn <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com/muneer-h"
              target="_blank"
              className="btn-outline-gold"
            >
              GitHub <FaGithub size={16} />
            </a>
          </div>
        </div>

        {/* Right — Profile */}
        <div className="flex-shrink-0">
          <div className="profile-glow">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
              <Image
                src="/pfp.png"
                alt="Muneer Hussain"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
