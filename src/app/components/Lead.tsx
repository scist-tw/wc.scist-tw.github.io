import React, { FC, useState } from "react";
import InstructorCard from "./Lead_card";
import Image from "next/image";
import crypto from "crypto";
import { useInView } from "react-intersection-observer";

const Lecturer: FC = () => {
  interface Instructor {
    name: string;
    email: string;
    position: string;
    school: string;
    contact: string[];
  }

  const { ref: sectionRef, inView: instructorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instructors = [
    {
      name: "Fearnot/盧明澤",
      email: "kenin221@gmail.com",
      position: "副召",
      school: "鳳山高中",
      contact: ["Email: fearnot@scist.org", "Phone: 0966-405-913"],
    },
    {
      name: "帕尼/陳詩函",
      email: "st1034116@gmail.com",
      position: "總召",
      school: "臺南二中",
      contact: ["Email: st1034116@gmail.com", "Phone: 0968-399-905"],
    },
    {
      name: "鯊魚Y.Y/許安祐",
      email: "aaaa0909726897@gmail.com",
      position: "副召",
      school: "嘉義高中",
      contact: ["Email: aaaa0909726897@gmail.com", "Phone: 0981-282-018"],
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] =
    React.useState<Instructor | null>(null);

  const openInstructorModal = (instructor: Instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  const closeInstructorModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedInstructor(null), 300);
  };

  const handleTransitionEnd = () => {
    if (!showModal && selectedInstructor) {
      setSelectedInstructor(null);
    }
  };

  function getGravatarUrl(email: string, size: number = 200): string {
    const emailHash = crypto
      .createHash("md5")
      .update(email.trim().toLowerCase())
      .digest("hex");
    return `https://www.gravatar.com/avatar/${emailHash}?s=${size}`;
  }

  return (
    <>
      <section
        ref={sectionRef}
        className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${
          instructorsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
          課程講師
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-indigo-100">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              instructor={instructor}
              openInstructorModal={openInstructorModal}
            />
          ))}
        </div>
      </section>

      {selectedInstructor && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={closeInstructorModal}
          ></div>
          <div
            className={`bg-gray-800 rounded-lg p-6 z-10 max-w-md w-full transition-transform duration-500 ${
              showModal ? "scale-100 rotate-0" : "scale-75 rotate-6"
            }`}
          >
            <h3 className="text-2xl text-indigo-300 mb-4">
              {selectedInstructor.name}
            </h3>
            <Image
              src={getGravatarUrl(selectedInstructor.email, 150)}
              alt={selectedInstructor.name}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              rel="preload"
              className="w-24 h-24 mx-auto bg-gray-700 rounded-full shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <h4 className="text-xl text-indigo-400 mb-2">
              學校：{selectedInstructor.school}
            </h4>
            <hr className="my-4 border-indigo-500" />
            <h4 className="text-xl text-indigo-400 mb-2">聯絡資訊</h4>
            <ul className="list-disc list-inside text-indigo-100 mb-4">
              {selectedInstructor.contact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button
              className="bg-indigo-400 text-black px-4 py-2 rounded hover:bg-indigo-500 transition w-full"
              onClick={closeInstructorModal}
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lecturer;
