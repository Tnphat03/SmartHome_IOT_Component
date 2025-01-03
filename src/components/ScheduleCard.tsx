import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

interface ScheduleCardProps {
  label: string;
  startTime: string;
  endTime: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  label,
  startTime,
  endTime,
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const calculateDuration = (start: string, end: string): string => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    const duration = endTotalMinutes - startTotalMinutes;
    return `${duration} min`;
  };

  const duration = calculateDuration(startTime, endTime);

  return (
    <div
      className={`rounded-2xl p-4 flex flex-col justify-between items-start w-[290px] h-[105px] shadow-md transition-all duration-300 ${
        isEnabled ? "bg-[#294646]" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <h2
          className={`text-base font-medium ${
            isEnabled ? "text-white" : "text-black"
          }`}
        >
          {label}
        </h2>
        <label className="relative inline-block w-8 h-5">
          <input
            type="checkbox"
            className="sr-only"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <span
            className={`block w-full h-full rounded-full transition-all duration-300 ${
              isEnabled ? "bg-white" : "bg-gray-300"
            }`}
          />
          <span
            className={`absolute left-1 top-[2px] w-3.5 h-3.5 rounded-full shadow-md transition-transform duration-300 ${
              isEnabled ? "transform translate-x-3 bg-[#294646]" : "bg-white"
            }`}
          />
        </label>
      </div>

      <div className="flex flex-col items-start w-full mt-2">
        <div
          className={`text-xs font-light ${
            isEnabled ? "text-white" : "text-black"
          }`}
        >
          {startTime} → {endTime} | {duration}
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <FaDoorOpen
            className={`text-lg ${isEnabled ? "text-white" : "text-gray-600"}`}
          />
          <IoMdArrowForward
            className={`material-symbols-outlined text-xl font-semibold	 ${
              isEnabled ? "text-white" : "text-gray-600"
            }`}
          />
          <MdLightMode
            className={`text-xl font-semibold	${
              isEnabled ? "text-white" : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
