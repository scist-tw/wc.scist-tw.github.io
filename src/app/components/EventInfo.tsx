import React from "react";
import { useInView } from "react-intersection-observer";

const EventInfo: React.FC = () => {
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={infoRef}
      className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${
        infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
        活動詳細資訊
      </h2>
      <div className="grid md:grid-cols-2 gap-6 text-indigo-100">
        <div>
          <h3 className="text-xl mb-4 text-indigo-400">基本資訊</h3>
          <ul className="space-y-2">
            <li>
              <strong>活動名稱：</strong>2025 SCIST WINTER CAMP
            </li>
            <li>
              <strong>活動日期：</strong>2025/1/24 - 2025/1/26
            </li>
            <li>
              <strong>活動地點：</strong>國立成功大學、國立臺南一中
            </li>
            <li>
              <strong>主辦單位：</strong>SCIST 南臺灣學生資訊社群
            </li>
            <li>
              <strong>活動對象：</strong>全臺國高中生
            </li>
            <li>
              <strong>報名費用：</strong>2000元/基本費用；3000元/需住宿者
            </li>
            <li>
              <strong>住宿地點：</strong>老曼船長
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-4 text-indigo-400">活動須知</h3>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="text-lg mt-4 mb-2 text-indigo-300">禁止事項</h4>
            <ul className="list-disc pl-5">
              <li>活動期間不可攜帶、飲用酒精飲料</li>
              <li>住宿期間不得有賭博、飲酒等違法行為</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
