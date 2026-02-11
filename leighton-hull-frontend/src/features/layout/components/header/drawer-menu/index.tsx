"use client";

import IconButton from "@/common/components/icon-button";
import { useBodyScrollLock } from "@/common/hooks/body-scroll-lock";
import DrawerFooter from "@/features/layout/components/header/drawer-menu/footer";
import Navbar from "@/features/layout/components/header/drawer-menu/navbar";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const DrawerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href]");
      if (link) setDrawerOpen(false);
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  useBodyScrollLock(drawerOpen, 700);

  const handleMenuClick = () => setDrawerOpen(s => !s);

  return (
    <>
      {/* BUTTON inside header */}
      <IconButton
        variant="secondary-black"
        iconSize={24}
        iconName={drawerOpen ? "close-grey" : "menu-grey"}
        onClick={handleMenuClick}
      />

      {/* DRAWER PORTAL outside header */}
      {mounted &&
        createPortal(
          <div
            className="fixed left-0 flex w-full flex-col bg-white transition-transform duration-700 ease-in-out"
            style={{
              top: "var(--header-height)",
              height: "calc(100dvh - var(--header-height))",
              transform: drawerOpen ? "translateY(0)" : "translateY(-100%)",
              zIndex: 49
            }}
          >
            <Navbar />
            <DrawerFooter />
          </div>,
          document.body
        )}
    </>
  );
};

export default DrawerMenu;
