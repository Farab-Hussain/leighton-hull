"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import CardOfPeriodInfo from "./card-of-period-info";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TimelineItem {
  imageName: string;
  year: string;
  description: string;
  galleryTitle?: string;
  path?: string;
}

interface Props {
  timelineData: TimelineItem[];
}

function TimelineSlider({ timelineData }: Props) {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const galleryTitle = timelineData[0]?.galleryTitle;

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1}
        mousewheel={{
          sensitivity: 1,
          forceToAxis: true
        }}
        onSlideChange={() => setOpenCardIndex(null)}
        className={`${galleryTitle ? "h-[466px]" : "h-[416px]"}`}
      >
        {timelineData.map((item, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <CardOfPeriodInfo
              imageName={item.imageName}
              year={item.year}
              description={item.description}
              galleryTitle={item.galleryTitle}
              path={item.path}
              isOpen={openCardIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TimelineSlider;
