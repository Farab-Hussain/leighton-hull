import React from "react";
import InfoAboutOwner from "./info-about-owner";
import {
  aboutLegacyInfo,
  aboutLeightonHullInfo,
  aboutOwnerBackground,
  aboutOwnerContinuingImpact,
  aboutOwnerEarlyCareer,
  aboutOwnerExpansion,
  aboutOwnerQuote,
  lifetimeInBusinessInfo
} from "../lib/static-info";

function OwnerBiography() {
  return (
    <div className="px-5 pt-10 pb-20 sm:pt-16 sm:pr-[39px] sm:pl-10 md:px-20 md:pt-20 md:pb-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-16 sm:gap-20 lg:-mt-[9px] lg:gap-[100px]">
        <div className="flex flex-col gap-4 sm:gap-5 md:items-center md:justify-center md:gap-6">
          <p className="text-grey50 text-h2 h2-primary md:text-climate-crisis-h1 md:leading-climate-crisis-h1 text-center lg:mt-[9px] lg:max-w-[960px]">
            {lifetimeInBusinessInfo}
          </p>
          <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 w-full text-center md:max-w-[960px]">
            {aboutLeightonHullInfo}
          </p>
        </div>
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 lg:flex-row-reverse lg:gap-[120px]">
          <div className="flex flex-col gap-10 sm:gap-16 lg:flex-1 lg:gap-20">
            <InfoAboutOwner
              imageName="about-owner1"
              quoteText={aboutLegacyInfo}
              containerClassName="sm:flex-row bg-white sm:bg-transparent"
            />
            <InfoAboutOwner
              imageName="about-owner2"
              quoteText={aboutOwnerQuote}
              containerClassName="sm:flex-row-reverse bg-white sm:bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-1 lg:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
                {aboutOwnerBackground}
              </p>
              <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
                {aboutOwnerExpansion}
              </p>
              <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
                {aboutOwnerEarlyCareer}
              </p>
            </div>
            <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
              {aboutOwnerContinuingImpact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerBiography;
