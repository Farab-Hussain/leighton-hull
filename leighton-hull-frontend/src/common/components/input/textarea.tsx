"use client";
// import Icon from "@/common/components/icon";
import ErrorTooltip from "@/common/components/input/error-tooltip";
import React, { useState, useRef, useId } from "react";

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  errorMessage?: string;
  className?: string;
  placeholder?: string;
}

export default function Textarea({
  label,
  placeholder = "Message",
  errorMessage,
  className = "",
  value,
  onChange,
  ...props
}: TextareaProps) {
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputId = useId();

  const showError = !!errorMessage && !focused;
  const showLabel = focused;
  // const isValid = value !== "" && !errorMessage;

  // Default classes
  const defaultClasses =
    "border-grey30 font-poppins text-poppins-p3 leading-poppins-p3 text-grey50 placeholder:text-grey30 focus:border-primary30 w-full resize-none border px-3.5 py-2.5 focus:outline-none";

  return (
    <div className="relative">
      {showError && <ErrorTooltip message={errorMessage} />}

      {/* {isValid && (
        <div className="absolute top-[13px] right-3">
          <Icon name="check-primary" size={20} />
        </div>
      )} */}

      <textarea
        id={inputId}
        ref={textareaRef}
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => onChange(e.target.value)}
        className={`${defaultClasses} ${className} ${showError ? "!border-red" : ""}`}
        {...props}
      />

      {showLabel && label && (
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
