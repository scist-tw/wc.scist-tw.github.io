import React from "react";
import { useInView } from "react-intersection-observer";
import ActivitySchedule from "./Schedule";

const Timetable: React.FC = () => {
  const { ref: scheduleRef, inView: scheduleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      ref={scheduleRef}
      className={`max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl p-8 my-16 transition-opacity duration-1000 transform ${
        scheduleInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl mb-6 text-indigo-300 border-b-2 border-indigo-500 pb-2">
        活動流程
      </h2>
      <ActivitySchedule />
    </section>
  );
};

export default Timetable;
