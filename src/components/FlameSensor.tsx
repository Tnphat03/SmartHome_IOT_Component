import React, { useState } from "react";
import { CiLight } from "react-icons/ci";

const FlameSensor: React.FC = () => {
  const [isSensorOn, setIsSensorOn] = useState<boolean>(false);

  const toggleSensor = () => {
    setIsSensorOn(!isSensorOn);
  };

  return (
    <div
      className={`rounded-[30px] p-[20px] flex flex-col justify-between items-center w-[163px] h-[136px] relative shadow-sm hover:shadow-lg transition-all duration-300 ${
        isSensorOn ? "bg-[#294646]" : "bg-white"
      }`}
    >
      <div className="absolute top-[18px] left-[20px]">
        <span
          className={`font-medium text-sm ${
            isSensorOn ? "text-white" : "text-black"
          }`}
        >
          {isSensorOn ? "ON" : "OFF"}
        </span>
      </div>
      <div className="absolute top-[50px] left-[10px] flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center mb-[4px] text-[32px]">
          {/* <span
            className={`material-symbols-outlined text-[32px] ${
              isSensorOn ? "text-white" : "text-gray-500"
            }`}
          >
            light_mode
          </span> */}
          <CiLight
            className={isSensorOn ? "text-white" : "text-gray-500"}
            size={33}
          />
        </div>
        <h3
          className={` text-sm font-medium mb-[30px] text-sm ${
            isSensorOn ? "text-white" : "text-black"
          }`}
        >
          Lights
        </h3>
      </div>
      <div className="absolute top-[20px] right-[20px]">
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
              isSensorOn ? "transform translate-x-3 bg-[#294646]" : "bg-white"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

export default FlameSensor;
