import Image from "next/image";
import React from "react";
import Button from "@/common/components/button";
import Link from "next/link";
import ClientFollowLinkedIn from "@/features/home/components/hero/client-follow-linkedin";
import { linkedInUrl } from "@/common/lib/constants";

const HomeHero = () => {
  return (
    <div className="relative flex min-h-[600px] flex-col gap-10 px-5 py-10 sm:px-10 sm:pt-16 md:flex-row md:justify-between md:px-20 md:pt-20 lg:px-[120px] lg:pt-[100px]">
      {/* Background Image */}
      <Image src="/images/home-hero-bg.webp" alt="Hero background" fill priority className="object-cover object-center pb-10" />

      <div className="z-1 flex max-w-[440px] flex-col gap-4">
        <p className="h2-primary md:h1-primary text-white uppercase md:text-wrap">Leighton Hull</p>
        <div className="text-p2-poppins md:text-p1-poppins text-grey20 flex flex-col gap-4">
          <ClientFollowLinkedIn />
        </div>
        <Link href={linkedInUrl} target="_blank">
          <Button variant="white" endIconName="arrow-link-black" endIconSize={20} className="w-[184px] text-nowrap">
            FOLLOW HULL
          </Button>
        </Link>
      </div>

      <div className="z-1 flex !max-w-[720px] flex-col gap-5 sm:gap-8 lg:gap-10">
        <p className="h3-secondary sm:h1-secondary text-grey20 max-w-[480px] normal-case!">
          Franchise operations advisor & boardroom advisor
          <br />
          <span className="text-p1-poppins">Entrepreneur-franchise owner & operator</span>
        </p>
        <Image
          src="/images/leighton-hull-home-hero.webp"
          alt="Leighton Hull"
          className="object-contin -mb-10 h-[400px] w-full object-cover max-sm:max-w-[620px] sm:h-[480px] md:w-[480px] lg:w-[600px]"
          width={600}
          height={480}
        />
      </div>
    </div>
  );
};

export default HomeHero;
