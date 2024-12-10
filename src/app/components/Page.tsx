import React, { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ActivitySchedule from "./Schedule";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WinterTrainingWebsite: FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTotal: number =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress: number = window.scrollY / scrollTotal;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targetDate: Date = new Date("2025-01-24T00:00:00");
    const interval: NodeJS.Timeout = setInterval(() => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes: number = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: scheduleRef, inView: scheduleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: instructorsRef, inView: instructorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: sponsorsRef, inView: sponsorsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const particlesInit = async (main: any): Promise<void> => {
    await loadFull(main);
  };

  const particlesOptions: any = {
    background: {
      color: {
        value: "#0d0d0d",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#4b0082", "#6a5acd", "#483d8b"] },
      links: {
        color: "#6a5acd",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: ["circle", "star"] },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-black text-indigo-400 font-mono overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 transition-transform duration-500"
        style={{
          transform: `scale(${1 + scrollProgress * 0.2})`,
          filter: `hue-rotate(${scrollProgress * 360}deg)`,
        }}
      ></div>

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-cover bg-center relative">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="absolute inset-0 w-full h-full"
          />

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <header className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold neon-text mb-4 tracking-widest animate-glitch shadow-indigo-500">
              2025 SCIST WINTER CAMP
            </h1>
            <div className="mt-6 text-indigo-300">
              <h2 className="text-2xl animate-fadeInUp">距離活動開始還有</h2>
              <p className="text-4xl md:text-5xl font-bold mt-2 animate-fadeInUp">
                {`${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`}
              </p>
            </div>
          </header>
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

        <section
          ref={infoRef}
          className={`bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 mx-4 md:mx-16 transition-opacity duration-1000 ${
            infoInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
            活動詳細資訊
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-indigo-100">
            <div>
              <h3 className="text-xl mb-4 text-indigo-400">基本資訊</h3>
              <ul>
                <li>
                  <strong>活動名稱：</strong>2025 SCIST WINTER CAMP
                </li>
                <li>
                  <strong>活動日期：</strong>2025/1/24 - 2025/1/26
                </li>
                <li>
                  <strong>活動地點：</strong>國立成功大學、國立臺南第一高級中學
                </li>
                <li>
                  <strong>主辦單位：</strong>SCIST 南臺灣學生資訊社群
                </li>
                <li>
                  <strong>活動對象：</strong>全臺國高中生
                </li>
                <li>
                  <strong>報名費用：</strong>？？？
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-indigo-400">活動須知</h3>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="text-lg mb-2 text-indigo-300">注意事項</h4>
                <ul className="list-disc pl-5">
                  <li>？？？</li>
                  <li>？？？</li>
                  <li>？？？</li>
                </ul>

                <h4 className="text-lg mt-4 mb-2 text-indigo-300">禁止事項</h4>
                <ul className="list-disc pl-5">
                  <li>？？？</li>
                  <li>？？？</li>
                  <li>？？？</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={scheduleRef}
          className={`bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 mx-4 md:mx-16 transition-opacity duration-1000 ${
            scheduleInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
            活動流程
          </h2>
          <ActivitySchedule />
        </section>

        <section
          ref={instructorsRef}
          className={`bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 mx-4 md:mx-16 transition-opacity duration-1000 ${
            instructorsInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
            課程講師
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-indigo-100">
            {[
              { name: "陳威達", photo: "陳威達_photo" },
              { name: "黃宥睿", photo: "黃宥睿_photo" },
              { name: "黃士育", photo: "黃士育_photo" },
            ].map((instructor, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded text-center">
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-indigo-400">照片</span>
                  </div>
                </div>
                <div className="text-lg font-bold mt-2">{instructor.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={partnersRef}
          className={`bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 mx-4 md:mx-16 transition-opacity duration-1000 ${
            partnersInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
            合作單位
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "合作單位 1", logo: "path_to_partner1_logo" },
              { name: "合作單位 2", logo: "path_to_partner2_logo" },
              { name: "合作單位 3", logo: "path_to_partner3_logo" },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded text-center w-40"
              >
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-indigo-400">Logo</span>
                  </div>
                </div>
                <div className="text-lg font-bold mt-2">{partner.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={sponsorsRef}
          className={`bg-gray-900 bg-opacity-70 rounded-lg p-8 mb-8 mx-4 md:mx-16 transition-opacity duration-1000 ${
            sponsorsInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
            贊助商
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "贊助商 1", logo: "path_to_sponsor1_logo" },
              { name: "贊助商 2", logo: "path_to_sponsor2_logo" },
              { name: "贊助商 3", logo: "path_to_sponsor3_logo" },
            ].map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded text-center w-40"
              >
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-indigo-400">Logo</span>
                  </div>
                </div>
                <div className="text-lg font-bold mt-2">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </section>

        <footer
          ref={footerRef}
          className={`bg-gray-800 text-indigo-300 py-8 transition-opacity duration-1000 ${
            footerInView
              ? "opacity-100 transform translateY(0)"
              : "opacity-0 translateY-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© 2025 SCIST 南臺灣學生資訊社群 | All Rights Reserved</p>
              </div>

              <div className="flex space-x-4 mb-4 md:mb-0">
                <a
                  href="https://www.facebook.com/scist.tw/?locale=zh_TW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.instagram.com/scist.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/c/OfficialSCIST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition"
                >
                  <FaYoutube size={20} />
                </a>
              </div>

              <div>
                <a
                  href="https://www.youtube.com/watch?feature=shared&v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-indigo-600 text-black rounded-full hover:bg-indigo-400 transition"
                >
                  立即報名
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WinterTrainingWebsite;
