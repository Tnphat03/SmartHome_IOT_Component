import React from "react";

type RoomCardProps = {
  name: string;
  status: string;
  price: number;
  image?: string;
};

const RoomCard: React.FC<RoomCardProps> = ({ name, status, price, image }) => {
  return (
    <div
      className="flex flex-row rounded-[25px] p-4 w-[330px] md:w-[360px] h-[220px] bg-[#294646] text-white 
                 hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={
          image ||
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/488066775.jpg?k=624c3f5d623f9b33fe6cb9b2782d96b41f625a2bc7d325ae1e8e4ad1149012e8&o=&hp=1"
        }
        alt="room-image"
        className="rounded-[10px] w-[130px] h-[190px] object-cover mr-4"
      />
      <div className="flex flex-col justify-start items-start flex-1 ml-[5px]">
        <p className="text-lg font-medium mt-1">{name}</p>
        <p className="text-xs font-serif text-gray-300 mt-2">Nguyen Van A</p>
        <p className="text-xs font-serif text-gray-300">Status: {status}</p>
        <p className="text-xl font-bold mt-8">${price}</p>
      </div>
    </div>
  );
};

export default RoomCard;
