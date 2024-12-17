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
          "新莊高中資訊研究社",
          "嘉義高中資訊研究社",
          "臺南一中資訊社",
          "臺南二中資研社",
          "臺南女中資訊研究社",
          "鳳山高中電資社",
          "成大南工資研社",
          "嘉華中學資研社",
          "鳳新高中資研社",
          "大灣高中資研社",
          "嘉義女中資研社",
          "高雄女中資研社",
          "臺南高商資研社",
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
