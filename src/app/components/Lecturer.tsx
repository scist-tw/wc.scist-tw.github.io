import React, { FC, useState } from "react";
import Image from "next/image";
import crypto from "crypto";
import { useInView } from "react-intersection-observer";

const Lecturer: FC = () => {
  const { ref: sectionRef, inView: instructorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  interface Instructor {
    name: string;
    email: string;
    topic: string;
    info: string;
    courseContent: string;
  }
  function getGravatarUrl(email: string, size: number = 200): string {
    const emailHash = crypto
      .createHash("md5")
      .update(email.trim().toLowerCase())
      .digest("hex");
    return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`;
  }

  const instructors = [
    {
      name: "冰川/陳威達",
      email: "xx0932399@gmail.com",
      topic: "網頁前端設計",
      info: "test",
      courseContent: "test",
    },
    {
      name: "OsGa/黃宥睿",
      email: "oscarhuang950324@gmail.com",
      topic: "Discord Bot 開發",
      info: "test",
      courseContent: "test",
    },
    {
      name: "4Yu/黃士育",
      email: "huangshiyu0318@gmail.com",
      topic: "AI 基礎 + 實作",
      info: "test",
      courseContent: "test",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] =
    React.useState<Instructor | null>(null);

  const openInstructorModal = (instructor: Instructor) => {
    setSelectedInstructor(instructor);
    setTimeout(() => setShowModal(true), 0);
  };

  const closeInstructorModal = () => {
    setShowModal(false);
  };

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
        課程講師介紹
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl group"
            onClick={() => openInstructorModal(instructor)}
          >
            {/* Gravatar 圖片 */}
            <Image
              src={getGravatarUrl(instructor.email, 150)}
              alt={instructor.name}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="w-24 h-24 mx-auto bg-gray-700 rounded-full shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <h3 className="mt-4 text-xl text-indigo-300 text-center">
              {instructor.name}
            </h3>
            <p className="text-indigo-400 text-center">{instructor.topic}</p>
          </div>
        ))}
      </div>

      {/* Modal 彈窗 */}
      {showModal && selectedInstructor && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
          onClick={closeInstructorModal}
        >
          <div
            className="bg-gray-900 rounded-lg p-8 max-w-lg text-indigo-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl mb-4">{selectedInstructor.name}</h3>
            <p className="mb-2">
              <strong>主題：</strong> {selectedInstructor.topic}
            </p>
            <p className="mb-2">
              <strong>講師資訊：</strong> {selectedInstructor.info}
            </p>
            <p>
              <strong>課程介紹：</strong> {selectedInstructor.courseContent}
            </p>
            <button
              onClick={closeInstructorModal}
              className="mt-4 px-4 py-2 bg-indigo-400 text-black rounded-full hover:bg-indigo-500 transition"
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Lecturer;
