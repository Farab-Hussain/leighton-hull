import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className="h4-primary lg:h3-primary flex flex-col text-center uppercase md:flex-row">
      <Link className="w-full" href="accomplishments">
        <div className="bg-primary40 px-5 py-12 text-white sm:py-16 md:py-[100px] lg:py-[120px]">Honors</div>
      </Link>
      <Link className="w-full" href="gallery">
        <div className="bg-primary20 px-5 py-12 text-white sm:py-16 md:py-[100px] lg:py-[120px]">Press</div>
      </Link>
      <Link className="w-full" href="brands">
        <div className="bg-white px-5 py-12 sm:py-16 md:py-[100px] lg:py-[120px]">Brands</div>
      </Link>
    </div>
  );
};

export default Info;
