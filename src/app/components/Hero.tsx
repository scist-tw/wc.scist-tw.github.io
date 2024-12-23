import { FC } from "react";
import Countdown from "./Countdown";

const Test: FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative mt-10">
    <div className="text-white">
      <p className="glitch text-[25px] md:text-[50px] t1">
        <span aria-hidden="true">SCIST 2025 winter camp</span>
        SCIST 2025 winter camp
        <span aria-hidden="true">SCIST 2025 winter camp</span>
      </p>
      <p className="glitch text-[70px] md:text-[120px] lg:text-[150px] t2">
        <span aria-hidden="true">資深玩家</span>
        資深玩家
        <span aria-hidden="true">資深玩家</span>
      </p>
    </div>
    {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      2025 SCIST
    </h1>
    <h1 className="text-5xl md:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      資深玩家
    </h1> */}
    <Countdown />
    <div className="mt-10">
      <a
        href="https://forms.gle/Y4b6YGBAGCRw63Et8"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-indigo-300 text-black rounded-full hover:bg-indigo-400 transition shadow-lg"
      >
        立即報名
      </a>
    </div>
    <div className="mt-10 animate-bounce relative z-10">
      <div
        className="cursor-pointer scroll-smooth duration-1000"
        onClick={() => document.querySelector("#EventInfo")?.scrollIntoView()}
      >
        <svg
          className="w-8 h-8 text-indigo-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  </section>
);

export default Test;
