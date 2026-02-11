import React from "react";
import PeriodInfo from "../components/period-info";
import FunFacts from "@/features/about/components/fun-facts";
import OwnerBiography from "@/features/about/components/owner-biography";
import SuccessInformation from "@/features/about/components/success-information";

function AboutPageScreenView() {
  return (
    <div className="flex flex-col">
      <OwnerBiography />
      <FunFacts />
      <SuccessInformation />
      <PeriodInfo containerClassName="px-5 py-20 sm:px-10 md:px-20 md:py-[100px] lg:p-[120px]" />
    </div>
  );
}

export default AboutPageScreenView;
