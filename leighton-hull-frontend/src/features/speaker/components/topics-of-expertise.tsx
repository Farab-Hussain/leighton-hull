import React from "react";
import TopicsCard from "./topics-card";
import { speakerBio, speakerTopics } from "../lib/static-info";

function TopicsOfExpertise() {
  return (
    <div className="py-20 pr-[19px] pl-5 sm:pr-[39px] sm:pl-10 md:px-20 md:py-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-10 sm:gap-16 md:flex-row md:gap-20 lg:gap-[120px]">
        <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:gap-6">
          <p className="text-grey50 font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 md:text-climate-crisis-h1 md:leading-climate-crisis-h1">
            TOPICS OF EXPERTISE
          </p>
          <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
            {speakerBio}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6 md:gap-8 lg:gap-10">
          {speakerTopics.map(item => (
            <TopicsCard key={item.id} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicsOfExpertise;
