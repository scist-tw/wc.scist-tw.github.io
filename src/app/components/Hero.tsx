import { FC } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Countdown from "./Countdown";

const Hero: FC = () => (
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
    {/* <div className="relative"> */}
    {/* shadow */}
    {/* <h1
        className="font-blackMango absolute text-9xl text-black"
        style={{
          transform: "translate(-3px, -7px)",
          fontWeight: "900", // 設定文字粗細
          WebkitTextStroke: "3px black", // 黑框效果，並讓黑色部分更粗
        }} */}
    {/* >
        SC&lt;/&gt;ST
      </h1> */}
    {/* 第一層文字：teal-300 */}
    {/* <h1
        className="font-blackMango absolute text-9xl text-teal-300"
        style={{
          transform: "translate(0, -5px)",
        }}
      >
        SC&lt;/&gt;ST
      </h1> */}
    {/* 第二層文字：fuchsia-500 */}
    {/* <h1
        className="font-blackMango absolute text-9xl text-fuchsia-500"
        style={{
          transform: "translate(0, 5px)",
        }}
      >
        SC&lt;/&gt;ST
      </h1>

      <h1 className="font-blackMango absolute text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-trail">
        SC&lt;/&gt;ST
      </h1> */}

    {/* 第三層文字：white 
      <h1 className="font-blackMango relative text-9xl text-white z-20">
        SC&lt;/&gt;ST
      </h1>
    </div> */}

    <h1 className="text-5xl md:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      資深玩家
    </h1>
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
  </section>
);

export default Hero;
