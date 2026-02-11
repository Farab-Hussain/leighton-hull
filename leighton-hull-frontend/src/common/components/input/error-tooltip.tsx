"use client";
import SvgIcon from "@/common/components/svg-icon";
import { useIsMobile } from "@/common/hooks/screen-size";
import React, { useState } from "react";

type Props = {
  message: string;
};

const ErrorTooltip = ({ message }: Props) => {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  const toggleTooltip = () => {
    if (isMobile) {
      setVisible(prev => !prev);
    }
  };

  return (
    <div className="group">
      <div onClick={toggleTooltip} className="absolute top-[13px] right-3 cursor-pointer">
        <SvgIcon size={20} name="input-error" className="text-red" />
      </div>

      {/* Tooltip */}
      <div
        className={`bg-red text-p4-poppins pointer-events-none absolute -top-[12px] right-3 w-max px-1 py-[1px] text-white transition-opacity duration-200 max-sm:text-[12.5px] sm:-top-[17px] sm:px-2 sm:py-1 ${isMobile ? (visible ? "opacity-100" : "opacity-0") : "opacity-0 group-hover:opacity-100"} `}
      >
        {message}
      </div>
    </div>
  );
};

export default ErrorTooltip;
