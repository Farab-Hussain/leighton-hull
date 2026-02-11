"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface SelectOption<T> {
  label: string;
  value: T;
}

export interface SelectProps<T> {
  options: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  className?: string;
}

function Select<T>({
  options,
  value,
  onChange,
  placeholder = "Placeholder",
  label,
  required = false,
  disabled = false,
  errorMessage,
  containerClassName,
  className
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Find the selected option to display its label
  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : "";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(!isOpen);
    }
  };

  const handleOptionSelect = (option: SelectOption<T>) => {
    if (!disabled) {
      onChange?.(option.value);
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const getArrowIcon = () => {
    if (isOpen) {
      return "/icons/filled-arrow-up.svg";
    }
    return "/icons/filled-arrow-down.svg";
  };

  return (
    <div className={`flex w-full flex-col gap-y-2 ${containerClassName} ${disabled ? "cursor-default" : ""}`}>
      {label && (
        <label className={`text-large font-jost-medium ${disabled ? "text-gray-300" : "text-grey60"}`}>
          {required ? (
            <p>
              {label} <span className="text-red">*</span>
            </p>
          ) : (
            label
          )}
        </label>
      )}

      <div className={`relative ${errorMessage ? "pb-4" : "pb-0"}`} ref={selectRef}>
        {/* Select Input */}
        <div
          className={`text-p1 font-jost-regular flex w-full cursor-pointer items-center justify-between gap-x-2 rounded-xl border px-3 py-2.5 outline-none ${
            isFocused ? "border-green30" : "border-grey40"
          } ${disabled ? "border-gray-medium pointer-events-none bg-gray-50" : "text-grey60"} ${
            errorMessage ? "border-red" : ""
          } ${className}`}
          onClick={handleToggle}
        >
          <span className={`${displayValue ? "text-grey60" : "text-grey40"} text-p2 leading-p2 font-jost-regular flex-1`}>
            {displayValue || placeholder}
          </span>

          {/* Arrow Icon */}
          <div className="flex items-center">
            <Image
              src={getArrowIcon()}
              alt={isOpen ? "Close dropdown" : "Open dropdown"}
              width={16}
              height={16}
              className={`transition-transform duration-200 ${disabled ? "opacity-50" : ""}`}
            />
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="font-jost-regular text-red absolute left-2 pt-0.5 text-sm">{errorMessage}</p>}

        {/* Dropdown Options */}
        {isOpen && !disabled && (
          <div className="absolute top-full right-0 left-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg">
            <div className="flex flex-col gap-y-1 px-2 py-2.5">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`hover:text-grey60 text-p2 leading-p2 text-grey40 hover:bg-gray-10 cursor-pointer rounded px-2 py-1.5 transition-colors duration-150 ${
                    option.value === value ? "bg-green10 text-grey60" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
