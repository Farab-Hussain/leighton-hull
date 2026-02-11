"use client";
import React, { useState } from "react";
import AwardCard from "@/common/components/cards/award-card";
import { awards } from "@/features/accomplishments/lib/awards";

const AwardsGrid = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-sm:hidden">
      <div className="grid grid-cols-1 gap-x-[120px] gap-y-16 lg:grid-cols-2 lg:gap-y-20">
        {awards.map((award, i) => (
          <AwardCard key={award.title + i} award={award} isOpen={openCardIndex === i} onToggle={() => handleCardToggle(i)} />
        ))}
      </div>
    </div>
  );
};

export default AwardsGrid;
