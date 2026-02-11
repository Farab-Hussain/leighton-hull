"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import AwardCard from "@/common/components/cards/award-card";
import IconButton from "@/common/components/icon-button";
import { useScreenSize } from "@/common/lib/hooks/screen-size";
import { awards } from "@/features/accomplishments/lib/awards";

const AwardsSwiper = () => {
  const swiperRef = useRef<any>(null);
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const { width } = useScreenSize();
  if (width > 800) return;

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:hidden">
      <Swiper
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={() => setOpenCardIndex(null)}
        modules={[Navigation]}
        loop
        spaceBetween={24}
        className="w-full"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <AwardCard award={award} isOpen={openCardIndex === index} onToggle={() => handleCardToggle(index)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-3">
        <IconButton onClick={handlePrev} iconSize={24} variant="secondary-black" iconName="arrow-left-black" />
        <IconButton onClick={handleNext} iconSize={24} variant="secondary-black" iconName="arrow-right-black" />
      </div>
    </div>
  );
};

export default AwardsSwiper;
