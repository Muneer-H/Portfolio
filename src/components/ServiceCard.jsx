import React from "react";

const ServiceCard = ({ title, description, icon, emoji }) => {
  return (
    <div className="parchment-card flex flex-col items-center justify-center p-6 text-center min-h-[220px]">
      <div className="mb-3">{icon}</div>
      <h2
        className="text-xl font-bold text-[var(--hp-gold)] mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {emoji} {title}
      </h2>
      <p className="text-[var(--hp-parchment-dark)] text-base">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
