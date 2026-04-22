import React from "react";

const SectionDivider = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
        gap: "16px",
        userSelect: "none",
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: "300px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212, 164, 55, 0.6), transparent)",
        }}
      />
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        style={{ filter: "drop-shadow(0 0 6px rgba(212, 164, 55, 0.5))" }}
      >
        <path
          d="M13 2L4.094 12.688l1.406.312L4 18l9-8-3.5-.5L13 2z"
          fill="#d4a437"
          stroke="#f0d27a"
          strokeWidth="0.5"
        />
      </svg>
      <div
        style={{
          flex: 1,
          maxWidth: "300px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212, 164, 55, 0.6), transparent)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
