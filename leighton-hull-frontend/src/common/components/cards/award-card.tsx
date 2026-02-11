"use client";
import type { Award } from "@/features/accomplishments/lib/awards";
import Image from "next/image";
import React from "react";

type Props = {
  award: Award;
  isOpen: boolean;
  onToggle: () => void;
};

const AwardCard = ({ award, isOpen, onToggle }: Props) => {
  return (
    <>
      {/* Mobile: Animated version */}
      <div className="relative flex h-[554px] flex-col overflow-hidden bg-white sm:hidden">
        <div className="absolute inset-0">
          <div className="relative mx-auto h-[360px] w-[252px] shrink-0">
            <Image
              src={`/images/awards/${award.image}.webp`}
              alt={`Award ${award.image}`}
              fill
              className="object-cover object-center"
              sizes="252px"
              priority={false}
            />
          </div>
        </div>

        <div
          onClick={onToggle}
          className={`absolute bottom-0 left-0 z-10 h-full w-full cursor-pointer bg-white pb-5 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-[65%]"
          }`}
        >
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-1">
              <p className={`text-p2-poppins-bold`}>{award.title}</p>
              <p className={`text-p3-poppins text-grey40 ${isOpen ? "" : "line-clamp-2"}`}>{award.description}</p>
            </div>
            <p className="text-p3-poppins text-grey40 text-end">{award.year}</p>
          </div>
        </div>
      </div>

      {/* Desktop: Static version */}
      <div className="hidden flex-col bg-white sm:flex sm:flex-row">
        <div className="relative mx-auto h-[400px] w-[280px] shrink-0">
          <Image
            src={`/images/awards/${award.image}.webp`}
            alt={`Award ${award.image}`}
            fill
            className="object-cover object-center"
            sizes="280px"
            priority={false}
          />
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-p2-poppins-bold">{award.title}</p>
            <p className="text-p3-poppins text-grey40">{award.description}</p>
          </div>
          <p className="text-p3-poppins text-grey40 text-end">{award.year}</p>
        </div>
      </div>
    </>
  );
};

export default AwardCard;
