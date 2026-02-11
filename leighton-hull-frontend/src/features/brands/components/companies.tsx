import BrandCard from "@/common/components/cards/brand-card";
import { companies } from "@/features/brands/lib/companies";
import React from "react";

const Companies = () => {
  return (
    <div className="flex w-full flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20">
      {companies.map((company, index) => (
        <BrandCard key={company.name} company={company} reverse={index % 2 === 1} />
      ))}
    </div>
  );
};

export default Companies;
