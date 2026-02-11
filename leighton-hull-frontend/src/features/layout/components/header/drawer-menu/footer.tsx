import TextFlip from "@/common/components/text-flip";
import SocialMedias from "@/features/layout/components/social-medias";
import Link from "next/link";
import React from "react";

const DrawerFooter = () => {
  return (
    <div className="flex items-center justify-center px-10 pt-4 pb-5 sm:justify-between md:px-15 md:pb-6 lg:px-[120px]">
      <Link className="text-l3-link max-sm:hidden" href="/privacy-and-cookies-policy">
        <TextFlip>Privacy & Cookies Policy</TextFlip>
      </Link>
      <SocialMedias />
    </div>
  );
};

export default DrawerFooter;
