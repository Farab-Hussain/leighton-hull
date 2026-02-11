import SocialMedias from "@/features/layout/components/social-medias";
import Logo from "@/features/layout/components/logo";
import React from "react";
import Link from "next/link";
import TextFlip from "@/common/components/text-flip";

const Footer = () => {
  return (
    <div className="bg-grey50 flex flex-col gap-10 px-5 py-16 sm:px-10 sm:py-20 md:px-20 lg:px-[120px] lg:py-[100px]">
      <div className="flex items-center justify-between">
        <Logo color="white" />
        <SocialMedias color="white" className="sm:gap-4" />
      </div>
      <hr className="text-grey40" />
      <div className="flex flex-col gap-10 sm:flex-row-reverse sm:justify-between">
        <Link className="text-l3-link text-grey20 h-[18px]" href="/privacy-and-cookies-policy">
          <TextFlip>Privacy & Cookies Policy</TextFlip>
        </Link>
        <p className="text-p4-poppins text-grey20">© 2026 Leighton Hull. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
