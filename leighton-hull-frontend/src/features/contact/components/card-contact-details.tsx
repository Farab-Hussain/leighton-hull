import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageName?: string;
}

function CardContactDetails({ title, description, imageName }: Props) {
  const getHref = () => {
    if (title === "PHONE NUMBER") return `tel:${description}`;
    if (title === "EMAIL") {
      const subject = encodeURIComponent("Book Pre-Order");
      return `mailto:${description}?subject=${subject}`;
    }
    return null;
  };

  const href = getHref();

  return (
    <div className={`${imageName ? "flex h-full flex-col md:flex-row" : ""}`}>
      <div className={`bg-white p-5 ${imageName ? "sm:h-[140px] md:h-full md:max-w-[244px] lg:max-w-[360px]" : ""} md:p-6`}>
        <div className="flex flex-col gap-2">
          <p className="text-primary30 font-climate-crisis text-climate-crisis-h4 leading-climate-crisis-h4 md:text-climate-crisis-h3 md:leading-climate-crisis-h3">
            {title}
          </p>

          {href ? (
            <a href={href}>
              <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 cursor-pointer">{description}</p>
            </a>
          ) : (
            <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3">{description}</p>
          )}
        </div>
      </div>
      {imageName && (
        <div className="relative h-[320px] w-full md:h-[360px] lg:flex-1">
          <Image src={`/images/${imageName}.webp`} alt={imageName} fill className="object-cover" priority />
        </div>
      )}
    </div>
  );
}

export default CardContactDetails;
