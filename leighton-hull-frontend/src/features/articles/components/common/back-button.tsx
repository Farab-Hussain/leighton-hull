import Icon from "@/common/components/icon";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <Link className="flex h-[32px] w-min gap-2" href="/gallery">
      <Icon name="arrow-left-black" size={24} />
      <span className="text-p3-poppins text-grey40">Gallery</span>
    </Link>
  );
};

export default BackButton;
