import React, { useState } from "react";

type SortOption = {
  label: string;
  value: string;
};

const SortDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("rent_longest");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const options: SortOption[] = [
    { label: "Room", value: "room" },
    { label: "Rent time longest", value: "rent_longest" },
    { label: "Rent time recent", value: "rent_recent" },
    { label: "Lowest price", value: "lowest_price" },
    { label: "Highest price", value: "highest_price" },
  ];

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="w-[355px] h-auto border rounded-lg shadow-md p-4 bg-white mx-auto"
    >
      {/* Search Box */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-8 pr-2 border border-gray-300 rounded-full outline-none focus:border-blue-400"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          <span className="material-icons"></span>
        </span>
      </div>

      {/* Sort List */}
      <h3 className="text-lg font-bold mb-2 text-left">Sort</h3>
      <ul>
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors text-sm flex justify-between items-center ${
              selectedOption === option.value ? "text-blue-500 font-medium" : "text-gray-800"
            }`}
          >
            {option.label}
            {selectedOption === option.value && (
              <span className="material-symbols-outlined text-blue-500">check_small</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortDropdown;
