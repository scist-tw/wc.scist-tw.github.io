import React from "react";

const EventInfo: React.FC = () => (
  <section className="max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16">
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
        </ul>
      </div>
    </div>
  </section>
);

export default EventInfo;
