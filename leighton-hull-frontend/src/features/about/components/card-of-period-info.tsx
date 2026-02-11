"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageName: string;
  year: string;
  description: string;
  galleryTitle?: string;
  path?: string;
  isOpen: boolean;
  onToggle: () => void;
}

function CardOfPeriodInfo({ imageName, year, description, galleryTitle, path, isOpen, onToggle }: Props) {
  const ImageBlock = (
    <div className="relative h-[280px]">
      <Image className="w-full bg-white object-contain sm:object-cover" src={`/images/${imageName}.webp`} alt={imageName} fill />
    </div>
  );

  return (
    <div className="relative h-full w-[440px] overflow-hidden bg-white">
      <div className="absolute inset-0 top-0 left-0 h-[280px]">{path ? <Link href={path}>{ImageBlock}</Link> : ImageBlock}</div>

      <div
        onClick={onToggle}
        className={`absolute bottom-0 left-0 z-10 h-full w-full cursor-pointer bg-white p-5 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : galleryTitle ? "translate-y-[60%]" : "translate-y-[67%]"
        } `}
      >
        <div className={`flex flex-col ${galleryTitle ? "gap-3 md:gap-4" : "gap-2"}`}>
          <p
            className={`text-primary30 font-climate-crisis leading-climate-crisis-h3 text-climate-crisis-h3 ${isOpen ? "" : "max-sm:truncate"}`}
          >
            {year}
          </p>
          {galleryTitle && (
            <p className="text-grey50 font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2">{galleryTitle}</p>
          )}
          <p className={`text-grey40 font-poppins text-poppins-p3 ${isOpen ? "" : "line-clamp-2 max-h-12"}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardOfPeriodInfo;
