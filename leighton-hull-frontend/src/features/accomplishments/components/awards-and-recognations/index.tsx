import AwardsGrid from "@/features/accomplishments/components/awards-and-recognations/cards/grid";
import AwardsSwiper from "@/features/accomplishments/components/awards-and-recognations/cards/swiper";
import AwardsFoot from "@/features/accomplishments/components/awards-and-recognations/foot";
import AwardsHead from "@/features/accomplishments/components/awards-and-recognations/head";
import React from "react";

const AwardsAndRecognations = () => {
  return (
    <div className="flex flex-col gap-16 py-20 pr-[18px] pl-5 sm:gap-20 sm:px-10 md:px-20 md:py-[100px] lg:gap-[100px] lg:p-[120px]">
      <AwardsHead />
      <AwardsSwiper />
      <AwardsGrid />
      <AwardsFoot />
    </div>
  );
};

export default AwardsAndRecognations;
