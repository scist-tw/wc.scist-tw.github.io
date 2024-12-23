import { useState, useRef } from "react";
import Image from "next/image";
import crypto from "crypto";

interface Instructor {
  name: string;
  email: string;
  topic: string;
  info: string[];
  courseContent: string;
  website: string;
}

interface InstructorCardProps {
  instructor: Instructor;
  openInstructorModal: (instructor: Instructor) => void;
}

function getGravatarUrl(email: string, size: number = 200): string {
  const emailHash = crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
  return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`;
}

const InstructorCard = ({
  instructor,
  openInstructorModal,
}: InstructorCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});
  const handleMouseClick = () => {
    setHoverStyle({
      transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.5s ease-in",
    });
    openInstructorModal(instructor);
  };

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
      onClick={handleMouseClick}
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
      <div className="text-sm text-indigo-400 mt-1">
        主題：{instructor.topic}
      </div>
    </div>
  );
};

export default InstructorCard;
