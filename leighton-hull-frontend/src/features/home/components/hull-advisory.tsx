import Button from "@/common/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HullAdvisory = () => {
  return (
    <div className="bg-grey50 grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="relative h-[320px] w-full sm:h-[400px] md:h-auto">
        <Image src="/images/hull-advisory.webp" alt="Advisory" fill className="object-cover grayscale" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-4 px-5 py-20 sm:gap-5 sm:px-10 md:gap-6 md:py-[100px] md:pr-20 lg:p-[120px] lg:pl-[60px]">
        <p className="h2-primary md:h1-primary text-white uppercase">Hull Advisory Group</p>
        <p className="text-p3-poppins md:text-p2-poppins text-grey20">
          As the founder of Hull Advisory, Leighton counsels’ entrepreneurs, business owners, investors, and families navigating
          business transitions, growth strategies, and generational wealth. His advisory work has included restructuring
          multi-unit franchise groups, guiding high-net worth estates through complex transitions, and supporting private equity
          firms with operational turnaround and leadership development.
        </p>
        <Link href="advisory">
          <Button className="w-[149px]" variant="outlined-white">
            LEARN MORE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HullAdvisory;
