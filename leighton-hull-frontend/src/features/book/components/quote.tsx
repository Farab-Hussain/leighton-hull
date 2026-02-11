import React from "react";

const Quote = () => {
  return (
    <div className="bg-primary20 flex flex-col items-center justify-center gap-4 px-5 py-16 sm:gap-5 sm:px-10 md:gap-6 md:py-20">
      <p className="text-p2-lora md:text-p1-lora text-grey20 text-center md:max-w-[960px]">
        &quot;I&apos;ve been the owner, the operator, and the advisor. It&apos;s that real-world experience that helps me see not
        just what&apos;s broken—but how to fix it.&quot;
      </p>
      <p className="h2-secondary text-white italic">- Leighton Hull</p>
    </div>
  );
};

export default Quote;
