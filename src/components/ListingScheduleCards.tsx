import { useState, useEffect, useRef } from "react";
import ScheduleCard from "./ScheduleCard";
import ButtonDropdown from "./ButtonDropdown";

const ListingScheduleCards = () => {
  const [list, setList] = useState([
    {
      id: 1,
      label: "Every day",
      startTime: "08:00",
      endTime: "09:00",
    },
  ]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    setList((listSchedule) => [
      ...listSchedule,
      {
        id: listSchedule.length + 1,
        label: `Custom ${listSchedule.length + 1}`,
        startTime: "00:00",
        endTime: "01:00",
      },
    ]);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setList((listSchedule) =>
      listSchedule.filter((schedule) => schedule.id !== selectedId)
    );
    setSelectedId(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        listRef.current &&
        !listRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setSelectedId(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const renderScheduleList = () => {
    if (list.length === 0) {
      return (
        <div className="text-center text-gray-500 italic">Danh sách trống</div>
      );
    }

    return list.map((schedule) => (
      <div
        key={schedule.id}
        onClick={() => setSelectedId(schedule.id)}
        className={`flex items-start space-x-4 p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
          selectedId === schedule.id
            ? "bg-gray-100 shadow-lg"
            : "bg-white hover:shadow-md hover:bg-gray-50"
        }`}
      >
        <ScheduleCard
          label={schedule.label}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
        />
      </div>
    ));
  };

  return (
    <div className="rounded-[24px] border border-gray w-80 max-w-md mx-auto p-3 bg-gray-50 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">Schedules</h2>
        <div ref={dropdownRef} className="relative z-10">
          <ButtonDropdown onAdd={handleAdd} onDelete={handleDelete} />
        </div>
      </div>

      <div
        ref={listRef}
        className="rounded-[24px] h-[200px] space-y-2 max-h-[200px] overflow-y-auto"
      >
        {renderScheduleList()}
      </div>
    </div>
  );
};

export default ListingScheduleCards;
