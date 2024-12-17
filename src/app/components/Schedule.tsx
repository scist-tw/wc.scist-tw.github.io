import { JSX, useState } from "react";
import {
  Clock,
  MapPin,
  BookOpen,
  Computer,
  Coffee,
  Rocket,
  Users,
} from "lucide-react";

interface Event {
  time: string;
  title: string;
  icon: JSX.Element;
}

interface ScheduleDay {
  date: string;
  events: Event[];
}

const ActivitySchedule = () => {
  const [activeDay, setActiveDay] = useState<number>(0);

  const scheduleData: ScheduleDay[] = [
    {
      date: "1/24",
      events: [
        { time: "09:00-09:30", title: "報到", icon: <Clock /> },
        { time: "09:30-09:45", title: "開幕", icon: <Rocket /> },
        { time: "09:45-12:30", title: "闖關", icon: <Users /> },
        { time: "12:30-13:30", title: "午餐", icon: <Coffee /> },
        {
          time: "13:30-17:30",
          title: "多元課程 I (網頁前端 冰川)",
          icon: <Computer />,
        },
        { time: "17:30-19:00", title: "晚餐 (自理)", icon: <Coffee /> },
        { time: "19:00-21:00", title: "晚會", icon: <MapPin /> },
        { time: "21:00-21:30", title: "場復 & 帶住宿", icon: <Clock /> },
      ],
    },
    {
      date: "1/25",
      events: [
        { time: "09:00-09:30", title: "報到", icon: <Clock /> },
        {
          time: "09:30-13:30",
          title: "多元課程 II (Discord Bot OsGa)",
          icon: <Computer />,
        },
        { time: "13:30-14:30", title: "午餐", icon: <Coffee /> },
        { time: "14:30-17:30", title: "贊助單位講座", icon: <BookOpen /> },
        { time: "17:30-19:00", title: "晚餐 (自理)", icon: <Coffee /> },
        { time: "19:00-21:00", title: "晚會", icon: <MapPin /> },
        { time: "21:00-21:30", title: "場復 & 帶住宿", icon: <Clock /> },
      ],
    },
    {
      date: "1/26",
      events: [
        {
          time: "09:30-13:30",
          title: "多元課程 III (AI 入門課程 4Yu)",
          icon: <Computer />,
        },
        { time: "13:30-14:30", title: "午餐", icon: <Coffee /> },
        { time: "15:00-17:00", title: "經驗分享講座", icon: <BookOpen /> },
        { time: "17:00", title: "閉幕", icon: <Rocket /> },
      ],
    },
  ];

  return (
    <div>
      {/* 日期切換按鈕 */}
      <div className="flex justify-center mb-6 space-x-1 overflow-x-auto hide-scrollbar whitespace-nowrap w-full px-4">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`flex-shrink-0 px-3 py-2 min-w-[90px] rounded-full transition-all duration-300 text-sm 
              ${
                activeDay === index
                  ? "bg-indigo-500 text-black font-bold"
                  : "bg-gray-800 text-indigo-300 hover:bg-indigo-400 hover:text-white"
              }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      {/* 活動時間軸 */}
      <div className="relative border-l-4 border-indigo-600 pl-6 space-y-8">
        {scheduleData[activeDay].events.map((event, index) => (
          <div key={index} className="relative group">
            <div
              className="absolute -left-[46px] top-1 w-10 h-10 
              bg-indigo-600 text-white rounded-full flex items-center 
              justify-center transition-transform group-hover:scale-110"
            >
              {event.icon}
            </div>
            <div
              className="bg-gray-800 p-4 rounded-lg shadow-lg 
              transform transition-transform group-hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-indigo-300 font-bold">
                  {event.title}
                </h3>
                <span className="text-indigo-400 font-mono">{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySchedule;
