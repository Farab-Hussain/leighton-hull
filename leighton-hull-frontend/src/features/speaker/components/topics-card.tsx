import React from "react";
import Icon from "@/common/components/icon";

interface Props {
  title: string;
}

function TopicsCard({ title }: Props) {
  return (
    <div className="relative bg-white px-6 pb-6">
      <div className="absolute -top-1">
        <Icon name="green-vector" width={30} height={40} />
      </div>
      <p className="text-grey50 font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 pt-[52px]">
        {title}
      </p>
    </div>
  );
}

export default TopicsCard;
