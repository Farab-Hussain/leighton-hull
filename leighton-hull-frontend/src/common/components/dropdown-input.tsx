import React, { useState, useRef, useEffect } from "react";
import Input from "@/common/components/input";

export interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownInputProps {
  options: DropdownOption[];
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  select?: boolean;
}

function DropdownInput({ options, label, placeholder, value, onChange, disabled }: DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value?.toString() || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update input value when value prop changes
  useEffect(() => {
    setInputValue(value?.toString() || "");
  }, [value]);

  // Filter options based on input value
  const filteredOptions = options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));

  const handleOptionClick = (optionValue: string | number, optionLabel: string) => {
    if (!disabled) {
      setInputValue(optionLabel);
      onChange?.(optionValue);
      setIsOpen(false); // Close dropdown after selection
    }
  };

  const handleInputFocus = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    setIsOpen(true); // Open dropdown when typing
  };

  // Highlight matching characters in option labels
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="text-grey60 font-medium">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div>
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          label={label}
          onFocus={handleInputFocus}
          disabled={disabled}
        />
      </div>
      {isOpen && filteredOptions.length > 0 && (
        <div className="dropdownItems shadow-dropdown-input absolute top-full right-0 left-0 z-10 mt-1 flex max-h-[100px] flex-col gap-y-1 overflow-y-auto rounded-xl bg-white px-2 py-2.5">
          {filteredOptions.map(option => (
            <div
              key={option.value}
              className={`hover:text-grey60 text-grey40 hover:bg-gray10 cursor-pointer rounded px-2 py-1.5 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
              onClick={() => handleOptionClick(option.value, option.label)}
            >
              {highlightMatch(option.label, inputValue)}
            </div>
          ))}
        </div>
      )}
      {isOpen && filteredOptions.length === 0 && inputValue && (
        <div className="dropdownItems shadow-dropdown-input absolute top-full right-0 left-0 z-10 mt-1 flex max-h-[100px] flex-col gap-y-1 overflow-y-auto rounded-xl bg-white px-2 py-2.5">
          <div className="text-grey40 px-2 py-1.5">No options found</div>
        </div>
      )}
    </div>
  );
}

export default DropdownInput;
