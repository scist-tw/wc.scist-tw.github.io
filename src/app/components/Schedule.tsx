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

  const scheduleData = [
    {
      date: '01/24',
      events: [
        { time: '08:30-09:00', title: '01/24', icon: <Clock />, description: '01/24' },
        { time: '09:00-10:30', title: '01/24', icon: <Rocket />, description: '01/24' },
        { time: '10:30-12:00', title: '01/24', icon: <BookOpen />, description: '01/24' },
        { time: '12:00-13:30', title: '01/24', icon: <Coffee />, description: '01/24' },
        { time: '13:30-17:30', title: '01/24', icon: <Computer />, description: '01/24' },
        { time: '18:00-20:00', title: '01/24', icon: <MapPin />, description: '01/24' }
      ]
    },
    {
      date: '01/25',
      events: [
        { time: '08:30-09:00', title: '01/25', icon: <Clock />, description: '01/25' },
        { time: '09:00-12:00', title: '01/25', icon: <Computer />, description: '01/25' },
        { time: '12:00-13:30', title: '01/25', icon: <Coffee />, description: '01/25' },
        { time: '13:30-17:30', title: '01/25', icon: <Rocket />, description: '01/25' },
        { time: '18:00-20:00', title: '01/25', icon: <MapPin />, description: '01/25' }
      ]
    },
    {
      date: '01/26',
      events: [
        { time: '08:30-09:00', title: '01/26', icon: <Clock />, description: '01/26' },
        { time: '09:00-12:00', title: '01/26', icon: <Rocket />, description: '01/26' },
        { time: '12:00-13:30', title: '01/26', icon: <Coffee />, description: '01/26' },
        { time: '13:30-15:30', title: '01/26', icon: <MapPin />, description: '01/26' },
        { time: '15:30-16:00', title: '01/26', icon: <BookOpen />, description: '01/26' }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-center mb-6 space-x-4">
        {scheduleData.map((day: ScheduleData, index: number) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeDay === index
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-indigo-300 hover:bg-indigo-500 hover:text-white"
              }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      <div className="relative border-l-4 border-indigo-600 pl-6">
        {scheduleData[activeDay].events.map((event: Event, index: number) => (
          <div key={index} className="mb-6 relative group">
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
