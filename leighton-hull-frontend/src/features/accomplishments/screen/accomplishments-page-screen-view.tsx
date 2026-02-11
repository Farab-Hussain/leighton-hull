import PeriodInfo from "@/features/about/components/period-info";
import AwardsAndRecognations from "@/features/accomplishments/components/awards-and-recognations";
import BoardAndLeadership from "@/features/accomplishments/components/board-and-leadership";
import Image from "next/image";
import React from "react";

const AccomplishmentsPageScreenView = () => {
  return (
    <>
      <PeriodInfo containerClassName="px-5 pt-10 max-sm:max-h-[970px] pb-20 sm:pt-[66px] md:px-20 md:pt-[82px] md:pb-[100px] lg:p-[120px]" />
      <Image
        className="h-[400px] w-full object-cover sm:h-[480px] md:h-[600px] lg:h-[640px]"
        src="/images/accomplishments-1.webp"
        alt="Accomplishments"
        width={1560}
        height={640}
      />
      <AwardsAndRecognations />
      <BoardAndLeadership />
    </>
  );
};

export default AccomplishmentsPageScreenView;
