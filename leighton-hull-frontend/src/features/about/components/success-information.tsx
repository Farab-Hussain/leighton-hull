import React from "react";
import { aboutSuccess } from "../lib/static-info";

function SuccessInformation() {
  return (
    <div className="bg-primary20 px-5 py-16 sm:px-10 md:px-20 md:py-20 lg:px-[120px]">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <p className="text-grey20 font-lora text-lora-p2 leading-lora-p2 md:text-lora-p1 md:leading-lora-p1 text-center md:mx-[45px] lg:mx-[182px]">
          &#34;{aboutSuccess}&#34;
        </p>
        <p className="font-poppins-bold text-poppins-h2 leading-poppins-h2 text-center text-white italic">- Leighton Hull</p>
      </div>
    </div>
  );
}

export default SuccessInformation;
