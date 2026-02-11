import Image from "next/image";
import React from "react";

const BackgroundStory = () => {
  return (
    <div className="bg-primary30 flex flex-col gap-16 px-5 py-20 sm:gap-10 sm:px-10 md:flex-row md:gap-20 md:px-20 md:py-[100px] lg:gap-[120px] lg:p-[120px]">
      <div className="flex flex-col gap-4 text-white sm:gap-5 md:flex-1 md:justify-between">
        <p className="h2-primary md:h1-primary uppercase">Winning in life and in business</p>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <p className="text-grey20 text-p2-lora md:text-p1-lora">
            &quot;Success doesn’t come overnight. It’s built one step, one decision, and one challenge at a time.&quot;
          </p>
          <p className="h2-secondary md:italic">- Leighton Hull</p>
        </div>
      </div>

      <div className="flex justify-end md:flex-1">
        <Image
          className="h-[400px] w-[320px] object-cover sm:h-[440px] sm:w-[360px] md:h-[560px] md:w-[440px]"
          src="/images/hull-book-page.webp"
          alt="Leighton Hull"
          width={440}
          height={560}
        />
      </div>
    </div>
  );
};

export default BackgroundStory;
