import React from "react";

const HeroQuote = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-5 py-16 sm:gap-5 sm:px-10 md:gap-6 md:py-20 lg:px-[120px]">
      <p className="text-p2-lora md:text-p1-lora text-grey40 text-center md:max-w-[960px]">
        &quot;I&apos;ve built businesses, taken risks, and learned that success rarely looks like the brochure. But it&apos;s
        always worth the journey.&quot;
      </p>
      <p className="text-p1-poppins-bold italic">- Leighton Hull</p>
    </div>
  );
};

export default HeroQuote;
