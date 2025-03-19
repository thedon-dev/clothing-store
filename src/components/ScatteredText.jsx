import React from "react";

const ScatteredText = () => {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "30%", left: "20%" },
    { top: "50%", left: "40%" },
    { top: "70%", left: "10%" },
    { top: "85%", left: "60%" },
    { top: "20%", left: "80%" },
    { top: "60%", left: "90%" },
    { top: "40%", left: "70%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, index) => (
        <span
          key={index}
          className="absolute text-6xl font-bold text-gray-200 opacity-20"
          style={{ top: pos.top, left: pos.left }}
        >
          Shop.Co
        </span>
      ))}
    </div>
  );
};

export default ScatteredText;
