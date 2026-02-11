import React from "react";
import Image from "next/image";

interface Props {
  imageName: string;
  quoteText: string;
  containerClassName?: string;
}

function InfoAboutOwner({ imageName, quoteText, containerClassName }: Props) {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <div className="relative h-[400px] w-full shrink-0 sm:max-w-[320px]">
        <Image src={`/images/${imageName}.webp`} alt={imageName} fill className="object-contain sm:object-cover" />
      </div>

      <div className="w-full bg-white py-5 pr-[19px] pl-5 sm:flex sm:items-center sm:justify-center sm:p-6 md:p-8">
        <div className="flex items-center">
          <p className="font-lora text-grey40 text-lora-p2 leading-lora-p2">&#34;{quoteText}&#34;</p>
        </div>
      </div>
    </div>
  );
}

export default InfoAboutOwner;
