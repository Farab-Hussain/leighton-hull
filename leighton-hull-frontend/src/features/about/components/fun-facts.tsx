import FunFactsCard from "@/features/about/components/fun-facts-card";
import { funFactsAboutOwnerInfo, ownerFunFacts } from "@/features/about/lib/static-info";
import React from "react";

function FunFacts() {
  return (
    <div className="bg-primary30 flex flex-col gap-16 px-5 py-20 sm:gap-20 sm:px-10 md:px-20 md:py-[100px] lg:gap-[100px] lg:p-[120px]">
      <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 md:text-climate-crisis-h1 md:leading-climate-crisis-h1 w-full text-start text-white">
        {funFactsAboutOwnerInfo}
      </p>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
        {ownerFunFacts.map((item, index) => (
          <FunFactsCard
            key={index}
            imageName={item.imageName}
            title={item.title}
            description={item.description}
            containerClassName={item.containerClassName}
          />
        ))}
      </div>
    </div>
  );
}

export default FunFacts;
