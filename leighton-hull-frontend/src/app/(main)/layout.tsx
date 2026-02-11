import ImagePreloader from "@/common/components/page-loader";
import Footer from "@/features/layout/components/footer";
import Header from "@/features/layout/components/header";
import React, { type PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ImagePreloader />
    </>
  );
};

export default MainLayout;
