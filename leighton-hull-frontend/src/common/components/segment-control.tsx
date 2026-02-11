import React from "react";
import Icon from "./icon";

interface Props {
  isSelected: boolean;
  isCompleted: boolean;
  label: string;
  onClick?: () => void;
}
function SegmentControl({ isSelected, isCompleted, label, onClick }: Props) {
  return (
    <div className="flex w-max cursor-pointer gap-x-[2px]" onClick={onClick}>
      <p className={`text-urbanist-p3 text-grey60 leading-urbanist-p3 uppercase ${isSelected ? "font-bold" : "font-normal"}`}>
        {label}
      </p>
      {isCompleted && <Icon name="check-primary" />}
    </div>
  );
}

export default SegmentControl;
