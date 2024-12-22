import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Sponsor: React.FC = () => {
  const { ref: sponsorsRef, inView: sponsorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sponsorsRef}
      className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-90 rounded-xl p-12 my-16 transition-opacity duration-1000 transform ${
        sponsorsInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
        贊助商
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            name: "Devcore 戴夫寇爾",
            logo: "/images/devcore.png",
            website: "https://devco.re/",
          },
          {
            name: "YTP 少年圖靈計畫",
            logo: "/images/YTP.png",
            website: "https://www.tw-ytp.org/",
          },
          {
            name: "HIT 台灣駭客協會",
            logo: "/images/HIT.png",
            website: "https://hacker.org.tw/",
          },
          {
            name: "HackMD",
            logo: "/images/HackMD.png",
            website: "https://hackmd.io/",
          },
          {
            name: "AIS3 Club",
            logo: "/images/AIS3_Club.png",
            website: "https://ais3.org/",
          },
          {
            name: "CATCHER 可成教育基金會",
            logo: "/images/CATCHER.png",
            website: "https://www.catcher-group.com/tw/index.aspx",
          },
        ].map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md p-6 rounded text-center w-80 hover:scale-105 transform transition"
          >
            <div className="mb-6">
              <div className=" mx-auto bg-gray-100 rounded flex items-center justify-center">
                <Link href={sponsor.website} target="_blank">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={300}
                    height={200}
                    className="w-64 h-32 object-contain"
                  />
                </Link>
              </div>
            </div>
            <div
              className="text-lg font-bold mt-3 text-indigo-600"
              style={{ color: "#f1dcf7" }}
            >
              {sponsor.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
