import React from "react";
import { useInView } from "react-intersection-observer";

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
        <p>© 2025 SCIST 南臺灣學生資訊社群 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
