import TextFlip from "@/common/components/text-flip";
import CornerSquare from "@/features/layout/components/header/drawer-menu/navbar/corner-square";
import { navItems } from "@/features/layout/lib/navigation-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-l1-link flex flex-1 flex-col items-center justify-center gap-2">
      {navItems.map(item => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group hover:bg-grey50 [@media(max-height:640px)]:text-l3-link relative flex items-center overflow-visible px-6 py-2 transition-colors duration-500 hover:text-white [@media(max-height:640px)]:py-1 [@media(max-height:640px)]:text-[17px] ${isActive ? "bg-grey50 text-white" : ""} ${item.mobileOnly ? "sm:hidden" : ""} `}
          >
            <TextFlip>{item.name}</TextFlip>
            <CornerSquare forceActive={isActive} className="-top-0 -left-0 -translate-2/5" />
            <CornerSquare forceActive={isActive} className="-top-0 -right-0 translate-x-2/5 -translate-y-2/5" />
            <CornerSquare forceActive={isActive} className="-bottom-0 -left-0 -translate-x-2/5 translate-y-2/5" />
            <CornerSquare forceActive={isActive} className="-right-0 -bottom-0 translate-2/5" />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
