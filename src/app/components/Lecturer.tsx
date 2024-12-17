import React, { FC, useState } from "react";
import InstructorCard from "./InstructorCard";
import Image from "next/image";
import crypto from "crypto";
import { useInView } from "react-intersection-observer";

const Lecturer: FC = () => {
  interface Instructor {
    name: string;
    email: string;
    topic: string;
    info: string[];
    courseContent: string;
    website: string;
  }

  const { ref: sectionRef, inView: instructorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instructors = [
    {
      name: "冰川/陳威達",
      email: "xx0932399@gmail.com",
      topic: "網頁前端設計",
      info: [
        "SITCON 2025 開發組組長",
        "一日資訊體驗營台南場網頁前端講師",
        "APCS Guide 創辦人兼網站主要開發者",
        "APCS 連續兩次實作滿分滿級",
        "CPE 6 題（PR 97）",
        "APCS Simulation X APCS Guide 聯合暑期營隊副召兼講師",
      ],
      courseContent: "",
      website: "",
    },
    {
      name: "OsGa/黃宥睿",
      email: "oscarhuang950324@gmail.com",
      topic: "Discord bot",
      info: [
        "國立雲林科技大學資訊管理系（人工智慧技優專班）",
        "雲林科技大學資訊安全研究社 創社社長",
        "國立雲林科技大學資訊中心網管小組成員",
        "SCAICT中電會 中電喵初始開發成員",
        "SCAICT 二月主題課程 Discord Bot 講師",
        "新莊高中電腦研究社 Discord Bot 講師",
        "南四校聯合社課 Discord Bot 講師",
		"一日資訊體驗營台南場程式開發實務講師",
		],
      courseContent: "透過 Discord Bot 學習程式實際開發的邏輯與技巧",
      website: "https://www.osga.lol/",
    },
    {
      name: "4Yu/黃士育",
      email: "huangshiyu0318@gmail.com",
      topic: "AI基礎+實作",
      info: [
        "SCIST S5 總召",
        "NFIRC 創辦人",
        "南四校聯合社課 AI 講師",
        "校內高二專題研究 AI 講師",
        "FunAI 2024 個人表現特優獎",
        "陽明交大中學人才培育計畫 AI 課程結訓",
        "APCS 4+4, CPE Professional",
        "高中學科能力競賽 112 & 113 學年複賽佳作",
        "【資得其樂】南 9 校資訊社 x SCIST x 成大資工 2024 聯合寒訓 副召",
      ],
      courseContent: "從 0 開始帶你瞭解 AI 基礎知識 + 實務應用",
      website: "https://4yu.dev/",
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
    return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`;
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
              className="w-24 h-24 mx-auto bg-gray-700 rounded-full shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <h4 className="text-xl text-indigo-400 mb-2">
              課程主題：{selectedInstructor.topic}
            </h4>
            <p className="text-indigo-100 mb-4">
              {selectedInstructor.courseContent}
            </p>
            <hr className="my-4 border-indigo-500" />
            <h4 className="text-xl text-indigo-400 mb-2">講師簡介</h4>
            <ul className="list-disc list-inside text-indigo-100 mb-4">
              {selectedInstructor.info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {selectedInstructor.website && (
              <p className="text-indigo-100 mb-4">
                <strong>個人網站：</strong>
                <a
                  href={selectedInstructor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline hover:text-indigo-500"
                >
                  {selectedInstructor.website}
                </a>
              </p>
            )}
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
