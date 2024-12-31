// <button class="group relative border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded">
//   Dropdown
//   <div class="absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md bg-white text-gray-700 scale-y-0 group-focus:scale-y-100 origin-top duration-200">
//     <a class="active">Home</a>
//     <a>About</a>
//     <a>Summary</a>
//   </div>
// </button>

//className="block mb-2 hover:bg-gray-100 hover:text-gray-900 p-2 rounded transition-colors box-border md:box-contents"

// const ButtonDropdown = ({ onAdd, onDelete }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

import React, { useState } from "react";

interface ButtonDropdownProps {
  onAdd?: () => void;
  onDelete?: () => void;
}

const ButtonDropdown = ({ onAdd, onDelete }: ButtonDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="rounded-[30px] flex items-center border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1"
      >
        <span
          className={`material-symbols-outlined transform transition-transform scale-1 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          chevron_right
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-md">
          <a
            onClick={() => {
              if (onAdd) onAdd();
              setIsOpen(false);
            }}
            className="cursor-pointer flex items-center gap-x-2 p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Add new
          </a>
          <a
            onClick={() => {
              if (onDelete) onDelete();
              setIsOpen(false);
            }}
            className="cursor-pointer flex items-center gap-x-2 p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-lg">remove</span>
            Delete
          </a>
        </div>
      )}
    </div>
  );
};

export default ButtonDropdown;
