import React from "react";
import { advisoryExperience, advisoryExperience2 } from "../lib/static-info";

function ExecutionExperiences() {
  return (
    <div className="bg-primary30 flex justify-center px-[19px] py-20 sm:px-10 md:justify-start md:px-20 md:py-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-4 sm:gap-5 md:max-w-[480px] md:flex-1 md:gap-6 lg:max-w-[600px]">
        <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 md:text-climate-crisis-h1 md:leading-climate-crisis-h1 text-white">
          EXPERIENCE THAT DRIVES EXECUTION
        </p>
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 text-white">
            {advisoryExperience}
          </p>
          <p className="font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 text-white">
            Our founder, Leighton Hull, has owned and advised businesses under some of the most iconic franchise banners in
            America - including{" "}
            <span className="font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
              McDonald&apos;s
            </span>
            ,{" "}
            <span className="font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
              Denny&apos;s
            </span>
            , <br className="hidden md:block lg:hidden" />
            <span className="font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
              Shell
            </span>
            , and{" "}
            <span className="font-poppins-bold text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
              Bojangles
            </span>
            . These aren&apos;t just logos on a resume - they represent years of firsthand operational leadership, system-level
            insight, and a deep understanding of what it takes to succeed in complex franchise environments.
          </p>
          <p className="font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 text-white">
            {advisoryExperience2}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1"></div>
    </div>
  );
}

export default ExecutionExperiences;
