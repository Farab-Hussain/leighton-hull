import Icon from "@/common/components/icon";
import React from "react";

const TimelineMobile = () => {
  return (
    <div className="relative flex h-20 w-full items-center">
      <div
        className="h-1 w-full"
        style={{
          borderTop: "2px solid transparent",
          borderImage: "repeating-linear-gradient(to right, var(--primary30) 0 8px, transparent 8px 16px) 1",
          borderImageSlice: 1
        }}
      ></div>
      <Icon className="bg-grey20 absolute left-1/2 -translate-x-1/2 p-6" size={80} name="point-primary" />
    </div>
  );
};

export default TimelineMobile;
