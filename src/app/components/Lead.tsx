import React, { FC, useState, useRef } from "react";
import Image from "next/image";
import crypto from "crypto";
import { useInView } from "react-intersection-observer";

interface InstructorCardProps {
  instructor: Instructor;
}
interface Instructor {
  name: string;
  email: string;
  position: string;
}

function getGravatarUrl(email: string, size: number = 200): string {
  const emailHash = crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
  return `https://www.gravatar.com/avatar/${emailHash}?s=${size}`;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      setHoverStyle({
        transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
        transition: "transform 0.1s ease-out",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverStyle({
      transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 p-6 rounded text-center hover:scale-105 transform transition cursor-pointer [transform-style:preserve-3d] perspective-1000"
      style={hoverStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-4 relative group">
        <Image
          src={getGravatarUrl(instructor.email, 150)}
          alt={instructor.name}
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          rel="preload"
          className="w-24 h-24 mx-auto bg-gray-700 rounded-full shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
      </div>
      <div className="text-lg font-bold mt-2">{instructor.name}</div>
      <div className="text-sm text-indigo-400 mt-1">{instructor.position}</div>
    </div>
  );
};

const Lead: FC = () => {
  const { ref: sectionRef, inView: instructorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instructors = [
    {
      name: "Fearnot/盧明澤",
      email: "kenin221@gmail.com",
      position: "副召",
    },
    {
      name: "帕尼/陳詩函",
      email: "st1034116@gmail.com",
      position: "總召",
    },
    {
      name: "鯊魚Y.Y/許安祐",
      email: "aaaa0909726897@gmail.com",
      position: "副召",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${
        instructorsInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
        召群
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-indigo-100">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default Lead;
