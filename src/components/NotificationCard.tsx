import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { LuAlarmSmoke, LuDoorOpen } from "react-icons/lu";

const notifications = [
  {
    room: "Room 1",
    description: "Cảnh báo quá nhiệt.",
    status: "warning",
    icon: <FaFireFlameCurved className="text-red-500 w-10 h-10" />,
  },
  {
    room: "Room 2",
    description: "Cảnh báo khí dễ cháy.",
    status: "dangerous",
    icon: <LuAlarmSmoke className="text-gray-500 w-10 h-10" />,
  },
  {
    room: "Room 3",
    description: "Cảnh báo cửa mở.",
    status: "warning",
    icon: <LuDoorOpen className="text-blue-500 w-10 h-10" />,
  },
];

const NotificationCard = () => {
  return (
    <div className="w-[499px] h-[521px] bg-white shadow-lg rounded-xl p-4 overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">Notification</h2>
        </div>

        <button className="flex items-center text-gray-600 font-medium text-xs gap-0.5 hover:shadow-xl transition">
          <span>View</span>
          <IoMdArrowDropdown size={12} />
        </button>
      </div>
      <div className="space-y-3">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start p-2 border rounded-lg gap-3 hover:shadow-xl transition"
          >
            <div>{item.icon}</div>
            <div className="flex flex-col text-left w-full">
              <span className="text-lg font-semi-bold text-gray-900">
                {item.room}
              </span>
              <div className="flex justify-between items-center w-full mt-1 min-w-0">
                <span className="text-gray-700 truncate">
                  {item.description}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium ml-auto">
                  <span
                    className={`text-lg ${
                      item.status === "warning"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  ></span>
                  <span
                    className={`${
                      item.status === "warning"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
