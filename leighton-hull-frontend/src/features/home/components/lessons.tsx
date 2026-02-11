import Button from "@/common/components/button";
import Link from "next/link";
import React from "react";

const Lessons = () => {
  return (
    <div className="bg-primary30 flex flex-col gap-5 px-5 py-20 sm:gap-6 sm:px-10 md:flex-row md:justify-between md:gap-20 md:px-20 md:py-[100px] lg:gap-[120px] lg:p-[120px]">
      <div className="flex flex-1 flex-col gap-3 sm:gap-4 md:max-w-[660px] md:min-w-[480px] md:justify-between">
        <p className="h2-primary md:h1-primary text-white uppercase">Lessons on:</p>
        <p className="h3-secondary sm:h1-secondary text-grey20 uppercase md:max-w-[240px]">
          RESILIENCE LEADERSHIP & TRANSFORMATION
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:max-w-[660px] md:min-w-[480px] md:gap-6">
        <p className="text-p3-poppins md:text-p2-poppins text-grey20">
          This forthcoming book by Leighton Hull explores his decades-long journey as an entrepreneur, franchise leader, and
          strategic advisor. It offers practical lessons on resilience, leadership, and navigating the world of business
          ownership. Through personal stories, professional milestones, and moments of reflection, Hull shares wisdom that
          transcends industries and speaks to the heart of ambition and transformation.
        </p>
        <div className="flex gap-3">
          {/* <Link href="/">
            <Button variant="white">PRE-ORDER</Button>
          </Link> */}
          <Link href="book">
            <Button variant="outlined-white">BOOK</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
