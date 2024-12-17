import { FC } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaCode } from "react-icons/fa";
import Countdown from "./Countdown";
import Link from "next/link";

const CustomLink = ({ href, children, title }: any) => {
  return (
    <div className="relative group">
      <Link href={href} target="_blank" className="hover:text-blue-600">
        {children}
      </Link>
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black text-white p-1 rounded-lg text-sm max-w-[200px] w-[120px] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all pointer-events-none flex items-center justify-center">
        {title}
      </span>
    </div>
  );
};

const Hero: FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 relative">
    <div className="absolute top-6 right-6 flex space-x-4 text-indigo-300">
      <CustomLink
        title="官網"
        href="https://scist.org"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaCode size={20} />
      </CustomLink>
      <CustomLink
        title="Facebook"
        href="https://www.facebook.com/scist.tw/?locale=zh_TW"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaFacebookF size={20} />
      </CustomLink>
      <CustomLink
        title="Instagram"
        href="https://www.instagram.com/scist.tw/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaInstagram size={20} />
      </CustomLink>
      <CustomLink
        title="Youtube"
        href="https://www.youtube.com/c/OfficialSCIST"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        <FaYoutube size={20} />
      </CustomLink>
    </div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text mt-10 tracking-widest animate-glitch text-center">
      2025 SCIST
    </h1>
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
