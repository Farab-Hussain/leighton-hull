import Companies from "@/features/brands/components/companies";
import FranchisePath from "@/features/brands/components/franchise-path";
import React from "react";

const BrandsPageScreenView = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-5 pt-10 pb-20 sm:gap-20 sm:px-10 sm:pt-16 md:gap-20 md:px-20 md:pt-20 md:pb-[100px] lg:gap-[100px] lg:p-[120px]">
      <FranchisePath />
      <Companies />
    </div>
  );
};

export default BrandsPageScreenView;
