import React from "react";

type CountdownUnitProps = {
  value: number | string;
  label: string;
};

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => (
  <div className="bg-indigo-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl min-w-[60px] sm:min-w-[80px] max-w-[100px] text-center flex-grow relative overflow-hidden">
    <span className="text-3xl sm:text-4xl font-bold block relative z-10 animate-pulse">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-xs sm:text-sm uppercase relative z-10">{label}</span>
  </div>
);

export default CountdownUnit;
