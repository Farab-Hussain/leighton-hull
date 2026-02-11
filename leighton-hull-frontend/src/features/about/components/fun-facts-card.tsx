import React from "react";
import Image from "next/image";

interface Props {
  imageName: string;
  title: string;
  description: string;
  containerClassName?: string;
}

function FunFactsCard({ imageName, title, description, containerClassName }: Props) {
  return (
    <div className={`outline-grey20 p-5 outline sm:p-6 ${containerClassName}`}>
      <div className="flex flex-col gap-4 sm:gap-5">
        <Image
          src={`/images/${imageName}.webp`}
          alt={imageName}
          width={320}
          height={280}
          className="h-[280px] w-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="font-poppins-bold text-poppins-h2 leading-poppins-h2 text-white">{title}</p>
          <p className="text-grey20 font-poppins text-poppins-p3 leading-poppins-p3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FunFactsCard;
