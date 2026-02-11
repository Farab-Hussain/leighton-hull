"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { animationData, titleByPage } from "../lib/static-info";
import Image from "next/image";

interface Props {
  activeStep: number;
}

export default function FullPageAnimation({ activeStep }: Props) {
  const pathname = usePathname();

  if (activeStep < 3) {
    const step = animationData[activeStep];

    return (
      <div className="relative flex h-[100dvh] w-[100dvw] items-center justify-center">
        <Image src={`/images/${step.imageName}`} alt={step.title || ""} priority fill objectFit="cover" />
        <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 lg:text-climate-crisis-h1 lg:leading-climate-crisis-h1 absolute z-50 px-4 text-center text-white drop-shadow-lg">
          {step.title}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-primary30 flex h-screen w-screen items-center justify-center">
      <p className="text-grey20 font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 lg:text-climate-crisis-h1 lg:leading-climate-crisis-h1 absolute text-center">
        {titleByPage[pathname] || "LEIGHTON HULL"}
      </p>
    </div>
  );
}
