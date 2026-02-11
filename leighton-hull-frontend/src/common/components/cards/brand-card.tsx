import type { Company } from "@/features/brands/lib/companies";
import Image from "next/image";
import React from "react";

type Props = {
  company: Company;
  reverse?: boolean;
};

const BrandCard = ({ company, reverse = false }: Props) => {
  return (
    <div className="grid bg-white sm:h-[360px] sm:grid-cols-2">
      <div className="relative h-[320px] w-full sm:h-full">
        <Image className="object-cover" src={company.image} alt={company.name} fill />
      </div>

      <div
        className={`flex flex-col gap-4 px-5 pt-5 pb-8 sm:py-8 lg:py-10 ${reverse ? "sm:-order-1 sm:pr-10 sm:pl-8 md:pr-[41px] lg:pr-15 lg:pl-[39px]" : "sm:pr-[33px] sm:pl-10 lg:pr-[39px] lg:pl-15"}`}
      >
        <p className="h2-secondary">{company.name}</p>
        <ul className="text-p3-poppins text-grey40 space-y-1">
          {company.items.map(item => (
            <li
              key={item}
              className="before:bg-grey40 relative pl-5.5 before:absolute before:top-[0.6em] before:left-2 before:h-1 before:w-1 before:rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandCard;
