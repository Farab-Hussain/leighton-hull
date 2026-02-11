import React from "react";
import Image from "next/image";
import { advisoryInfo, advisoryInfo1, advisoryInfo2 } from "../lib/static-info";

function AboutAdvisory() {
  return (
    <div className="relative flex min-h-[576px] items-center p-10 sm:min-h-[408px] sm:py-16 md:min-h-[440px] md:justify-center md:py-20 lg:min-h-[520px] lg:py-[120px]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/home-hero-bg.webp" alt="Background" fill priority className="object-cover object-center" />
      </div>

      {/* Content Layer */}
      <div className="text-p3-poppins md:text-p2-poppins relative z-10 flex flex-col gap-6 text-center text-white md:max-w-[960px]">
        <p className="h2-primary md:h1-primary">HULL ADVISORY</p>

        <div className="flex flex-col gap-2">
          <p>{advisoryInfo}</p>
          <p>{advisoryInfo1}</p>
          <p>{advisoryInfo2}</p>
        </div>

        <p>For advisory inquiries, Leighton may be reached directly.</p>
      </div>
    </div>
  );
}

export default AboutAdvisory;
