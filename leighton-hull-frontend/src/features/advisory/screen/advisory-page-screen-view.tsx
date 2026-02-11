import React from "react";
import Image from "next/image";
import AboutAdvisory from "../components/about-advisory";
import ExecutionExperiences from "../components/execution-experiences";
import Introduction from "../components/introduction";

function AdvisoryPageScreenView() {
  return (
    <div className="flex flex-col">
      <AboutAdvisory />
      <Introduction />
      <div className="relative h-[400px] w-full sm:h-[480px] md:h-[600px] lg:h-[640px]">
        <Image src="/images/advisory.webp" alt="service-image" fill objectFit="cover" />
      </div>
      <ExecutionExperiences />
    </div>
  );
}

export default AdvisoryPageScreenView;
