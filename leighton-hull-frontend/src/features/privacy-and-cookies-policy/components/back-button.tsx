"use client";
import Icon from "@/common/components/icon";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <span onClick={goBack} className="flex h-[32px] w-min cursor-pointer gap-2">
      <Icon name="arrow-left-black" size={24} />
      <span className="text-p3-poppins text-grey40">Back</span>
    </span>
  );
};

export default BackButton;
