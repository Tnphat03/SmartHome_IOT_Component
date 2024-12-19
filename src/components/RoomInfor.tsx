import React from "react";

interface RoomInforProps {
  imageSrc: string;
  roomName: string;
  name: string;
  birth: string;
  rentTime: string;
  mq2Sensor: string;
  flameSensor: string;
  doorStatus: string;
  price: string;
}

const RoomInfor: React.FC<RoomInforProps> = ({
  imageSrc,
  roomName,
  name,
  birth,
  rentTime,
  mq2Sensor,
  flameSensor,
  doorStatus,
  price,
}) => {
  return (
    <div className="w-[870px] h-[403px] bg-[#D5E3E6] rounded-lg shadow-md relative p-6 hover:shadow-2xl transition-all duration-300">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#294646] absolute top-6 left-6">{roomName}</h2>

      {/* Left Section - Image */}
      <div className="absolute top-[60px] left-6 w-[429px] h-[300px] rounded-lg overflow-hidden border border-gray-300">
        <img
          src={imageSrc}
          alt="Room"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Content */}
      <div className="absolute top-[60px] left-[470px] text-sm space-y-3 text-gray-800 leading-6">
        <div className="flex">
          <span className="font-semibold w-[120px]">Name:</span>
          <span>{name}</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-[120px]">Birth:</span>
          <span>{birth}</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-[120px]">Rent Time:</span>
          <span>{rentTime}</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-[120px]">MQ-2 sensor:</span>
          <span>{mq2Sensor}</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-[120px]">Flame Sensor:</span>
          <span>{flameSensor}</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-[120px]">Door Status:</span>
          <span>{doorStatus}</span>
        </div>
      </div>

      {/* Bottom Right - View Button */}
      <div className="absolute bottom-6 right-6">
        <button className="w-[92px] h-[40px] bg-green-600 text-white text-xs rounded-full hover:shadow-md hover:bg-green-700 transition-all duration-300">
          View
        </button>
      </div>
    </div>
  );
};

export default RoomInfor;
