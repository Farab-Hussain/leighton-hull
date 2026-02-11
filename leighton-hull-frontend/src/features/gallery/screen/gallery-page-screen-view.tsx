import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/common/components/icon";
import TimelineSlider from "@/features/about/components/timeline-slider";
import TimelineMobile from "@/features/about/components/timeline-mobile";
import { galleryData } from "../lib/static-info";

function GalleryPageScreenView() {
  return (
    <div className="flex flex-col">
      <div className="px-5 pt-10 pb-20 sm:px-10 sm:pt-16 sm:pb-20 md:px-20 md:py-[100px] lg:px-20 lg:py-[120px]">
        <div className="flex flex-col gap-16 md:gap-20 lg:items-center lg:gap-[100px]">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:max-w-[960px]">
            <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 text-grey50 md:text-climate-crisis-h1 md:leading-climate-crisis-h1 text-center lg:-mt-[1px]">
              VISUAL JOURNEY THROUGH LEIGHTON HULL&apos;S LIFE
            </p>
            <p className="font-poppins text-grey40 text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 text-center">
              Explore the captivating story of Mr. Hull, a visionary whose career has inspired countless individuals. Discover the
              milestones, challenges, and triumphs that define his remarkable journey.
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:hidden">
            <TimelineSlider timelineData={galleryData} />
            <TimelineMobile />
          </div>
          <div className="relative hidden sm:flex sm:gap-10 md:gap-12">
            <div className="flex flex-1 flex-col gap-y-10 md:gap-y-12 lg:gap-y-16">
              {galleryData.map((item, index) => (
                <Link href={item.path} key={index}>
                  <div
                    className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} flex-1 items-center justify-center lg:gap-5`}
                  >
                    <div className="w-[320px] bg-white p-5 md:w-[480px] md:p-6 lg:w-[640px]">
                      <div className="flex flex-col gap-3 md:gap-4">
                        <p className="text-primary30 font-climate-crisis text-climate-crisis-h3 leading-climate-crisis-h3 md:text-climate-crisis-h2 md:leading-climate-crisis-h2">
                          {item.year}
                        </p>
                        <div className="flex flex-col gap-2">
                          <p className="text-grey50 font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
                            {item.galleryTitle}
                          </p>
                          <p
                            className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3"
                            title={item.description}
                            dangerouslySetInnerHTML={{ __html: item.description }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-grey20 z-[3] p-6">
                      <Icon name="point-primary" size={32} />
                    </div>
                    <div className="relative h-[320px] w-[320px] bg-white sm:bg-transparent md:h-[400px] md:w-[480px] lg:w-[640px]">
                      <Image
                        src={`/images/${item.imageName}.webp`}
                        objectFit="contain"
                        fill
                        alt=""
                        className="shrink-0 lg:px-[170px]"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute top-0 left-1/2 z-[2] h-full -translate-x-1/2">
              <Icon name="line-for-801screen" width={80} className="!h-full py-[120px] md:py-[160px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full sm:h-[480px] md:h-[600px] lg:h-[640px]">
        <Image src="/images/gallery.webp" alt="decorative image" fill objectFit="cover" />
      </div>
    </div>
  );
}

export default GalleryPageScreenView;
