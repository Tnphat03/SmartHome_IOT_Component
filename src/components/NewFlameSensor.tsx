import React, { useState } from "react";
import { CiLight } from "react-icons/ci";

interface FlameSensorProps {
  output: number;
}

const NewFlameSensor: React.FC<FlameSensorProps> = ({ output }) => {
  const [isSensorOn, setIsSensorOn] = useState<boolean>(false);

  const toggleSensor = () => {
    setIsSensorOn(!isSensorOn);
  };

  return (
    <div
      className={`rounded-[30px] p-[20px] flex flex-col justify-between items-center w-[180px] h-[140px] relative shadow-sm hover:shadow-lg transition-all duration-300 ${
        isSensorOn
          ? "bg-[#294646] dark:bg-gray-900"
          : "bg-white dark:bg-gray-800 "
      }`}
    >
      <div className="absolute top-[10px] left-[20px]">
        <span
          className={`font-medium text-sm ${
            isSensorOn ? "text-white" : "text-black dark:text-white"
          }`}
        >
          {isSensorOn ? "ON" : "OFF"}
        </span>
      </div>
      <div className="absolute top-[30px] left-[10px] flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center mb-[4px] text-[32px]">
          <CiLight
            className={
              isSensorOn ? "text-white" : "text-gray-500 dark:text-gray-200"
            }
            size={33}
          />
        </div>
        <h2
          className={`text-sm font-medium text-sm ${
            isSensorOn ? "text-white" : "text-black dark:text-white"
          }`}
        >
          Lights
        </h2>
        <span
          className={`text-lg font-bold text-sm mt-[4px] ${
            isSensorOn
              ? "text-white dark:text-red-600"
              : "text-black dark:text-red-600"
          }`}
        >
          {output} PPM
        </span>
      </div>
      <div className="absolute top-[12px] right-[20px]">
        <label className="relative inline-block w-8 h-5">
          <input
            type="checkbox"
            className="sr-only"
            checked={isSensorOn}
            onChange={toggleSensor}
          />
          <span
            className={`block w-full h-full rounded-full transition-all duration-300 ${
              isSensorOn ? "bg-white" : "bg-[rgba(41,70,70,0.4)]"
            }`}
          />
          <span
            className={`absolute left-1 top-[2px] w-3.5 h-3.5 rounded-full shadow-md transition-transform duration-300 ${
              isSensorOn
                ? "transform translate-x-3 bg-[#294646] dark:bg-gray-900"
                : "bg-white"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

export default NewFlameSensor;
