import React from "react";
import Image from "next/image";
import Icon from "@/common/components/icon";
import TimelineSlider from "@/features/about/components/timeline-slider";
import { aboutTimeline, timelineData } from "@/features/about/lib/static-info";
import TimelineMobile from "@/features/about/components/timeline-mobile";

interface Props {
  containerClassName: string;
}

function PeriodInfo({ containerClassName }: Props) {
  return (
    <div className={containerClassName}>
      <div className="flex flex-col gap-16 sm:gap-20 lg:gap-[100px]">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-5 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 md:text-climate-crisis-h1 md:leading-climate-crisis-h1 sm:-mt-[2px] lg:-mt-0">
              VISION IN MOTION:
            </p>
            <p className="h3-secondary md:h1-secondary">THE ENTREPRENEURIAL JOURNEY OF LEIGHTON HULL</p>
          </div>
          <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 sm:max-w-[720px] md:max-w-[960px]">
            {aboutTimeline}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 sm:hidden">
          <TimelineSlider timelineData={timelineData} />
          <TimelineMobile />
        </div>
        <div className="relative hidden sm:flex sm:gap-10 md:gap-12">
          <div className="flex flex-1 flex-col gap-y-10 md:gap-y-12 lg:gap-y-16">
            {timelineData.map(item => (
              <div
                key={item.id}
                className={`flex ${item.id % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-1 items-center justify-center lg:gap-5`}
              >
                <div className="flex w-[320px] flex-col gap-2 bg-white p-5 md:w-[480px] md:p-6 lg:w-[600px]">
                  <p className="text-primary30 font-climate-crisis text-climate-crisis-h3 leading-climate-crisis-h3 md:text-climate-crisis-h1 md:leading-climate-crisis-h1">
                    {item.year}
                  </p>
                  <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 min-h-12">{item.description}</p>
                </div>
                <div className="bg-grey20 z-[3] p-6">
                  <Icon name="point-primary" size={32} />
                </div>
                <div className="relative h-[320px] w-[320px] bg-white sm:bg-transparent md:h-[400px] md:w-[480px] lg:w-[600px]">
                  <Image
                    src={`/images/${item.imageName}.webp`}
                    fill
                    alt=""
                    className={`shrink-0 object-cover object-center lg:px-[60px]`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 z-[2] h-full -translate-x-1/2">
            <Icon name="line-for-801screen" width={80} className="!h-full py-[120px] md:py-[160px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeriodInfo;
