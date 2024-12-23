import React from "react";
import { useInView } from "react-intersection-observer";

const Clubs: React.FC = () => {
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={partnersRef}
      className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${
        partnersInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
        合作單位
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          "南大附中資訊研究社",
          "屏東高中資訊研習社",
          "新莊高中電腦研究社",
          "嘉義高中資訊研究社",
          "臺南一中資訊社",
          "臺南二中資訊研究社",
          "臺南女中資訊研究社",
          "鳳山高中電腦資訊社",
          "成大南工資安社",
          "嘉華中學機電整合實驗社",
          "鳳新高中電腦研究社",
          "大灣高中資訊研究社",
          "嘉義女中資訊研究社",
          "高雄女中資訊研究社",
          "臺南高商資訊研究社",
        ].map((partner, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded text-center hover:scale-105 transform transition"
          >
            <div className="text-lg font-bold text-indigo-300">{partner}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clubs;
