import React, { useState, useEffect, useRef } from "react";
import ButtonDropdown from "./ButtonDropdown";

const ListingPeople = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Nguyen Tan Phat",
      dob: "20/01/2003",
      address: "436 Street 3-2",
      image: "",
    },
  ]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const handleAdd = () => {
    setList((listPeople) => [
      ...listPeople,
      {
        id: listPeople.length + 1,
        name: `User ${listPeople.length + 1}`,
        dob: "01/01/2000",
        address: "Unknown",
        image: "",
      },
    ]);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setList((listPeople) =>
      listPeople.filter((user) => user.id !== selectedId)
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
        !dropdownRef.current.contains(target) &&
        editButtonRef.current &&
        !editButtonRef.current.contains(target)
      ) {
        setSelectedId(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const renderUserList = () => {
    if (list.length === 0) {
      return (
        <div className="text-center text-gray-500 italic">Danh sách trống</div>
      );
    }

    return list.map((user) => (
      <div
        key={user.id}
        onClick={() => setSelectedId(user.id)}
        className={`flex items-start space-x-4 p-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${
          selectedId === user.id
            ? "bg-gray-100 shadow-lg"
            : "bg-white hover:shadow-md hover:bg-gray-50"
        }`}
      >
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-base font-medium text-left text-gray-800">
            {user.name}
          </h3>
          <p className="text-sm text-left text-gray-600">{user.dob}</p>
          <p className="text-sm text-left text-gray-600">{user.address}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="rounded-[24px] border-1 border-gray w-80 max-w-md mx-auto p-4 bg-gray-50 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">List</h2>
        <div ref={dropdownRef} className="relative z-10">
          <ButtonDropdown onAdd={handleAdd} onDelete={handleDelete} />
        </div>
      </div>

      <div
        ref={listRef}
        className="rounded-[24px] h-[200px] space-y-4 max-h-[200px] overflow-y-auto"
      >
        {renderUserList()}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          ref={editButtonRef}
          style={{ backgroundColor: "#294646" }}
          className="rounded-[8px] px-10 py-2 text-white hover:opacity-90 transition"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ListingPeople;
