import React from "react";
import { RiHomeWifiFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

interface ApartmentCardProps {
  active: boolean;
  zone: number;
  device: number;
  energy: number;
  devices?: string[];
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  active,
  zone,
  device,
  energy,
  devices = [],
}) => {
  return (
    <div className="w-[395px] h-[253px] p-4 rounded-[20px] shadow-md bg-white hover:shadow-xl transition">
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center gap-2">
          <RiHomeWifiFill className="text-gray-600" size={26} />
          <h2 className="font-semibold text-lg">AQUA BUILDING</h2>
        </div>

        <button className="flex items-center text-gray-600 font-medium text-xs gap-0.5">
          <span>View</span>
          <IoMdArrowDropdown size={12} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-gray-500 text-sm space-y-2">
        <FaLocationDot className="text-gray-600" size={16} />
        <p>314 74TH ST BROOKLYN NY 11209-2564 USA</p>
      </div>
      <div className="mt-2 text-left space-y-2">
        <p
          className={`font-medium ${
            active ? "text-green-600" : "text-red-600"
          }`}
        >
          ● {active ? "Active" : "Inactive"}
        </p>
        <p className="text-orange-600 font-medium">
          {zone} Zones - {device} Devices
        </p>
        <p className="font-bold text-lg">
          Energy (Kwh): <span className="text-black">{energy}</span>
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        {devices.map((device, index) => (
          <button key={index} className="bg-gray-200 px-4 py-2 rounded-full">
            {device}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApartmentCard;
