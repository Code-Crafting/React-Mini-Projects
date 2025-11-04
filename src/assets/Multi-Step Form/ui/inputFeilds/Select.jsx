import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Select = ({ options = [], value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Dropdown header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full border border-gray-400 rounded-lg px-3 py-2 bg-white cursor-pointer"
      >
        <span className={` ${!value ? "text-gray-400" : "text-black"}`}>
          {value || "Select an option"}
        </span>

        <RiArrowDropDownLine className="text-2xl text-gray-500" />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-400 rounded-lg shadow-md max-h-48 overflow-y-auto">
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-300`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
