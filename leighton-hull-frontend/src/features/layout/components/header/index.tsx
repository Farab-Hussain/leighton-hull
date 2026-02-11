import ContactBtn from "@/features/layout/components/header/contact-btn";
import DrawerMenu from "@/features/layout/components/header/drawer-menu";
import Logo from "@/features/layout/components/logo";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex h-[var(--header-height)] items-center justify-between bg-white px-5 py-4 sm:px-10 sm:py-5 md:px-[60px] lg:h-[84px] lg:px-[120px]">
        <Logo />
        <div className="flex gap-3 bg-white">
          <ContactBtn />
          <DrawerMenu />
        </div>
      </div>

      {/* Spacer div to prevent overlap */}
      <div className="h-[var(--header-height)]" />
    </>
  );
};

export default Header;
