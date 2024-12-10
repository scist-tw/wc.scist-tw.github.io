"use client";

import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const WinterTrainingWebsite: FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTotal: number =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress: number = window.scrollY / scrollTotal;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 transition-transform transition-filter duration-500"
        style={{
          transform: `scale(${1 + scrollProgress * 0.2})`,
          filter: `hue-rotate(${scrollProgress * 360}deg)`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12 opacity-0 animate-fadeInUp">
          <h1 className="text-5xl font-bold text-green-300 mb-4 tracking-widest">
            2025 SCIST WINTER CAMP
          </h1>
          <p className="text-xl text-green-500">資深玩家</p>
        </header>

        <section className="bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 opacity-0 animate-fadeIn">
          <h2 className="text-3xl mb-6 text-green-300 border-b-2 border-green-500 pb-2">
            活動詳細資訊
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-green-100">
            <div>
              <h3 className="text-xl mb-4 text-green-400">基本資訊</h3>
              <ul>
                <li>
                  <strong>活動名稱：</strong>2025 SCIST WINTER CAMP
                </li>
                <li>
                  <strong>活動日期：</strong>2025/1/24 - 2025/1/26
                </li>
                <li>
                  <strong>活動地點：</strong>成功大學、臺南一中
                </li>
                <li>
                  <strong>主辦單位：</strong>SCIST 南臺灣學生資訊社群{" "}
                </li>
                <li>
                  <strong>活動對象：</strong>？？？
                </li>
                <li>
                  <strong>報名費用：</strong>？？？
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-green-400">活動須知</h3>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="text-lg mb-2 text-green-300">注意事項</h4>
                <ul className="list-disc pl-5">
                  <li>？？？</li>
                  <li>？？？</li>
                  <li>？？？</li>
                </ul>

                <h4 className="text-lg mt-4 mb-2 text-green-300">禁止事項</h4>
                <ul className="list-disc pl-5">
                  <li>？？？</li>
                  <li>？？？</li>
                  <li>？？？</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 bg-opacity-70 rounded-lg p-8 opacity-0 animate-fadeIn">
          <h2 className="text-3xl mb-6 text-green-300 border-b-2 border-green-500 pb-2">
            活動流程
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { time: "2025/1/24 09:00-12:00", event: "？？？" },
              { time: "2025/1/24 13:00-18:00", event: "？？？" },
              { time: "2025/1/25 09:00-17:00", event: "？？？" },
              { time: "2025/1/26 09:00-12:00", event: "？？？" },
              { time: "2025/1/26 13:00-16:00", event: "？？？" },
            ].map((item: { time: string; event: string }, index: number) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded text-center transition-transform transform hover:scale-105"
              >
                <div className="text-green-400 text-lg font-bold mb-2">
                  {item.time}
                </div>
                <div className="text-green-200">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center mt-12 text-green-500 opacity-0 animate-fadeInUp">
          <p>© 2025 SCIST 南臺灣學生資訊社群 | All Rights Reserved</p>
          <a
            href="https://www.youtube.com/watch?feature=shared&v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-green-600 text-black rounded-full hover:bg-green-400 transition"
          >
            立即報名
          </a>
        </footer>
      </div>
    </div>
  );
};

export default WinterTrainingWebsite;
