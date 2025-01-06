import React, { FC, useState, useEffect } from "react";

const Countdown: FC = () => {
  interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  type CountdownUnitProps = {
    value: number | string;
    label: string;
  };

  const CountdownUnit: FC<CountdownUnitProps> = ({ value, label }) => (
    <div className="bg-indigo-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl min-w-[60px] sm:min-w-[80px] max-w-[100px] text-center flex-grow relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-700/30 to-transparent opacity-50"></div>
      <span className="text-3xl sm:text-4xl font-bold block relative z-10 animate-pulse">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm uppercase relative z-10">
        {label}
      </span>
    </div>
  );
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate: Date = new Date("2025-01-24T00:00:00");
    const interval: NodeJS.Timeout = setInterval(() => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes: number = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 text-indigo-300 px-4 w-full">
      <h2 className="flex justify-center text-2xl sm:text-3xl animate-fadeInUp mb-5 text-center">
        距離活動開始還有
      </h2>
      <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4 w-full max-w-md mx-auto">
        {Object.entries(countdown).map(([key, value]) => (
          <CountdownUnit key={key} value={value} label={key} />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
