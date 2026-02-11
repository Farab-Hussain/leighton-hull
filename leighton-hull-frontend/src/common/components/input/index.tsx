"use client";
import ErrorTooltip from "@/common/components/input/error-tooltip";
import React, { useState, useRef, useId } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
}

export default function Input({ label, placeholder = "", errorMessage, className = "", value, onChange, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const showError = !!errorMessage && !focused;
  const showLabel = focused;

  return (
    <div className={`relative ${className}`}>
      {showError && <ErrorTooltip message={errorMessage} />}
      <input
        id={inputId}
        ref={inputRef}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => onChange(e.target.value)}
        className={`${showError ? "!border-red" : ""} peer border-grey30 text-grey50 placeholder:text-grey30 text-poppins-p3 font-poppins focus:border-primary30 block w-full appearance-none border bg-transparent px-[15px] py-[10.5px] focus:ring-0 focus:outline-none`}
        placeholder={placeholder}
        {...props}
      />

      {showLabel && (
        <label
          htmlFor={inputId}
          className="text-primary30 text-poppins-p5 leading-poppins-p5 font-poppins absolute top-0 left-3 -translate-y-1/2 bg-white px-1 duration-200"
        >
          {label}
        </label>
      )}
    </div>
  );
}
