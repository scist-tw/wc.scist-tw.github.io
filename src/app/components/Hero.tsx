import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 relative">
    <div className="absolute top-6 right-6 flex space-x-4 text-indigo-300">
      <a
        href="https://www.facebook.com/scist.tw/?locale=zh_TW"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.instagram.com/scist.tw/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://www.youtube.com/c/OfficialSCIST"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaYoutube size={20} />
      </a>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      2025 SCIST
    </h1>
    <h1 className="text-5xl md:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      資深玩家
    </h1>
    {/* 報名按鈕 */}
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
  </section>
);

export default Hero;
