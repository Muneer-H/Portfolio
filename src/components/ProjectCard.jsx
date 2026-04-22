import React from "react";

const ProjectCard = ({ image, name, description, link }) => {
  return (
    <div className="parchment-card overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3
          className="text-2xl font-bold text-[var(--hp-gold)] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
        <p className="text-[var(--hp-muted)] text-sm md:text-base mb-4 leading-relaxed text-justify">
          {description}
        </p>
        <a
          href={link}
          className="btn-golden inline-flex items-center justify-center gap-2 w-full text-center"
        >
          View Details 🪄
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
