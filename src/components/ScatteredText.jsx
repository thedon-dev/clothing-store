import React from "react";

const ScatteredText = () => {
  const positions = [
    { desktop: { top: "10%", left: "5%" }, mobile: { top: "5%", left: "2%" } },
    {
      desktop: { top: "30%", left: "20%" },
      mobile: { top: "15%", left: "10%" },
    },
    {
      desktop: { top: "50%", left: "40%" },
      mobile: { top: "40%", left: "30%" },
    },
    {
      desktop: { top: "70%", left: "10%" },
      mobile: { top: "60%", left: "5%" },
    },
    {
      desktop: { top: "85%", left: "60%" },
      mobile: { top: "70%", left: "50%" },
    },
    {
      desktop: { top: "20%", left: "80%" },
      mobile: { top: "10%", left: "70%" },
    },
    {
      desktop: { top: "60%", left: "90%" },
      mobile: { top: "50%", left: "80%" },
    },
    {
      desktop: { top: "40%", left: "70%" },
      mobile: { top: "30%", left: "60%" },
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, index) => (
        <span
          key={index}
          className="absolute text-6xl font-bold text-gray-200 opacity-20"
          style={{
            top: `calc(${pos.desktop.top} - 1rem)`,
            left: `calc(${pos.desktop.left} - 1rem)`,
          }}
        >
          <span className="hidden lg:inline">Shop.Co</span>{" "}
          <span className="inline lg:hidden">Shop.Co</span>{" "}
        </span>
      ))}
    </div>
  );
};

export default ScatteredText;
