import React from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaYoutube, FaCode } from "react-icons/fa";
import Link from "next/link";

const CustomLink = ({ href, children, title }: any) => {
  return (
    <div className="relative group">
      <Link href={href} target="_blank" className="hover:text-blue-600">
        {children}
      </Link>
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black text-white p-1 rounded-lg text-sm max-w-[200px] w-[120px] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all pointer-events-none flex items-center justify-center z-50">
        {title}
      </span>
    </div>
  );
};

const Footer: React.FC = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <footer
      ref={footerRef}
      className={`bg-gray-800 text-indigo-300 py-8 transition-opacity duration-1000 ${
        footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex space-x-4 justify-center">
          <CustomLink
            title="Website"
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
        <br />
        <span style={{ display: "inline-flex" }}>
          聯絡我們：
          <CustomLink
            href="mailto:courses@scist.org"
            title="點擊發送郵件"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            courses@scist.org
          </CustomLink>
        </span>
        <br />
        <br />
        <p>© 2025 SCIST 南臺灣學生資訊社群 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
