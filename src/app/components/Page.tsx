import React, { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Main } from "tsparticles-engine";
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
  const [, setScrollProgress] = useState<number>(0);
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

  const particlesInit = async (main: Main): Promise<void> => {
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
        {/* 背景特效 */}
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="fixed inset-0 w-full h-full z-0 opacity-20"
        />

        {/* 頁面容器 */}
        <div className="relative z-10">

            {/* Hero 區塊 */}
            <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 relative">
                <div className="absolute top-6 right-6 flex space-x-4 text-indigo-300">
                    <a href="https://www.facebook.com/scist.tw/?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.instagram.com/scist.tw/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.youtube.com/c/OfficialSCIST" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                        <FaYoutube size={20} />
                    </a>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold neon-text mb-10 tracking-widest animate-glitch text-center">
                    2025 SCIST
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold neon-text mb-10 tracking-widest animate-glitch text-center">
                    資深玩家
                </h1>
                <div className="mt-10 text-indigo-300 px-4 w-full">
                    <h2 className="flex justify-center text-2xl sm:text-3xl animate-fadeInUp mb-5 text-center">
                        距離活動開始還有
                    </h2>
                    <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4 w-full max-w-md mx-auto">
                        {Object.entries(countdown).map(([key, value]) => (
                            <div
                                key={key}
                                className="bg-indigo-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl min-w-[60px] sm:min-w-[80px] max-w-[100px] text-center flex-grow"
                            >
                                <span className="text-3xl sm:text-4xl font-bold block">{value}</span>
                                <span className="text-xs sm:text-sm uppercase">{key}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <a
                        href="https://www.youtube.com/watch?feature=shared&v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-indigo-300 text-black rounded-full hover:bg-indigo-400 transition shadow-lg"
                    >
                        立即報名
                    </a>
                </div>
            </section>

            {/* 活動詳細資訊 */}
            <section
                ref={infoRef}
                className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
                    活動詳細資訊
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-indigo-100">
                    <div>
                        <h3 className="text-xl mb-4 text-indigo-400">基本資訊</h3>
                        <ul className="space-y-2">
                            <li><strong>活動名稱：</strong>2025 SCIST WINTER CAMP</li>
                            <li><strong>活動日期：</strong>2025/1/24 - 2025/1/26</li>
                            <li><strong>活動地點：</strong>國立成功大學、國立臺南第一高級中學</li>
                            <li><strong>主辦單位：</strong>SCIST 南臺灣學生資訊社群</li>
                            <li><strong>活動對象：</strong>全臺國高中生</li>
                            <li><strong>報名費用：</strong>？？？</li>
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

            {/* 活動流程 */}
            <section
                ref={scheduleRef}
                className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${scheduleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
                    活動流程
                </h2>
                <ActivitySchedule />
            </section>

            {/* 課程講師 */}
            <section
                ref={instructorsRef}
                className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${instructorsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">課程講師</h2>
                <div className="grid md:grid-cols-3 gap-8 text-indigo-100">
                    {[
                        { name: '冰川/陳威達' },
                        { name: 'OsGa/黃宥睿' },
                        { name: '4Yu/黃士育' },
                    ].map((instructor, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded text-center hover:scale-105 transform transition">
                            <div className="mb-4">
                                <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                                    <span className="text-indigo-400">照片</span>
                                </div>
                            </div>
                            <div className="text-lg font-bold mt-2">
                                {instructor.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 合作單位 */}
            <section
                ref={partnersRef}
                className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">合作單位</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { name: '合作單位 1' },
                        { name: '合作單位 2' },
                        { name: '合作單位 3' },
                    ].map((partner, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded text-center w-40 hover:scale-105 transform transition">
                            <div className="mb-4">
                                <div className="w-24 h-24 mx-auto bg-gray-700 rounded flex items-center justify-center">
                                    <span className="text-indigo-400">Logo</span>
                                </div>
                            </div>
                            <div className="text-lg font-bold mt-2">
                                {partner.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                ref={sponsorsRef}
                className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${sponsorsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">贊助商</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { name: '贊助商 1' },
                        { name: '贊助商 2' },
                        { name: '贊助商 3' },
                    ].map((sponsor, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded text-center w-40 hover:scale-105 transform transition">
                            <div className="mb-4">
                                <div className="w-24 h-24 mx-auto bg-gray-700 rounded flex items-center justify-center">
                                    <span className="text-indigo-400">Logo</span>
                                </div>
                            </div>
                            <div className="text-lg font-bold mt-2">
                                {sponsor.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer
                ref={footerRef}
                className={`bg-gray-800 text-indigo-300 py-8 transition-opacity duration-1000 ${footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 SCIST 南臺灣學生資訊社群 | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    </div>
);
};
export default WinterTrainingWebsite;
