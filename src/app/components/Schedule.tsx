import React, { useState, FC, JSX } from "react";
import {
  Clock,
  MapPin,
  BookOpen,
  Computer,
  Coffee,
  Rocket,
} from "lucide-react";

interface Event {
  time: string;
  title: string;
  icon: JSX.Element;
  description: string;
}

interface ScheduleData {
  date: string;
  events: Event[];
}

const ActivitySchedule: FC = () => {
  const [activeDay, setActiveDay] = useState<number>(0);

  const scheduleData: ScheduleData[] = [
    {
      date: "1/24",
      events: [
        {
          time: "08:30-09:00",
          title: "不知道",
          icon: <Clock />,
          description: "不知道",
        },
        {
          time: "09:00-10:30",
          title: "不知道",
          icon: <Rocket />,
          description: "不知道",
        },
        {
          time: "10:30-12:00",
          title: "不知道",
          icon: <BookOpen />,
          description: "不知道",
        },
        {
          time: "12:00-13:30",
          title: "不知道",
          icon: <Coffee />,
          description: "不知道",
        },
        {
          time: "13:30-17:30",
          title: "不知道",
          icon: <Computer />,
          description: "不知道",
        },
        {
          time: "18:00-20:00",
          title: "不知道",
          icon: <MapPin />,
          description: "不知道",
        },
      ],
    },
    {
      date: "1/25",
      events: [
        {
          time: "08:30-09:00",
          title: "不知道",
          icon: <Clock />,
          description: "不知道",
        },
        {
          time: "09:00-12:00",
          title: "不知道",
          icon: <Computer />,
          description: "不知道",
        },
        {
          time: "12:00-13:30",
          title: "不知道",
          icon: <Coffee />,
          description: "不知道",
        },
        {
          time: "13:30-17:30",
          title: "不知道",
          icon: <Rocket />,
          description: "不知道",
        },
        {
          time: "18:00-20:00",
          title: "不知道",
          icon: <MapPin />,
          description: "不知道",
        },
      ],
    },
    {
      date: "1/26",
      events: [
        {
          time: "08:30-09:00",
          title: "不知道",
          icon: <Clock />,
          description: "不知道",
        },
        {
          time: "09:00-12:00",
          title: "不知道",
          icon: <Rocket />,
          description: "不知道",
        },
        {
          time: "12:00-13:30",
          title: "不知道",
          icon: <Coffee />,
          description: "不知道",
        },
        {
          time: "13:30-15:30",
          title: "不知道",
          icon: <MapPin />,
          description: "不知道",
        },
        {
          time: "15:30-16:00",
          title: "不知道",
          icon: <BookOpen />,
          description: "不知道",
        },
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
                    ${activeDay === index
                ? 'bg-indigo-600 text-lime-300 font-bold'
                : 'bg-gray-800 text-indigo-300 hover:bg-indigo-500 hover:text-white'
              }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      {/* 活動時間軸 */}
      <div className="relative border-l-4 border-indigo-600 pl-6 space-y-8">
        {scheduleData[activeDay].events.map((event, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="absolute -left-[46px] top-1 w-10 h-10 
                    bg-indigo-600 text-white rounded-full flex items-center 
                    justify-center transition-transform group-hover:scale-110">
              {event.icon}
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg 
                    transform transition-transform group-hover:scale-[1.02]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-indigo-300 font-bold">{event.title}</h3>
                <span className="text-indigo-500 font-mono">{event.time}</span>
              </div>
              <p className="text-indigo-100">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySchedule;
