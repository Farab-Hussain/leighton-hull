import React from "react";
import DetailAboutAdvisory from "./detail-about-advisory";
import { introductionDetailsInfo, specialsFocusAreasInfo } from "../lib/static-info";

function Introduction() {
  return (
    <div className="px-[19px] py-20 sm:px-10 md:px-20 md:py-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-[100px]">
        <p className="font-climate-crisis text-grey50 text-climate-crisis-h2 leading-climate-crisis-h2 md:text-climate-crisis-h1 md:leading-climate-crisis-h1">
          SERVICES OVERVIEW
        </p>

        <DetailAboutAdvisory title="WHERE WE LEAD" detailsInfo={introductionDetailsInfo} />
        <DetailAboutAdvisory title="SPECIAL FOCUS AREAS" detailsInfo={specialsFocusAreasInfo} />
      </div>
    </div>
  );
}

export default Introduction;
