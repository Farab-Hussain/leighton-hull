import Button from "@/common/components/button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="relative h-screen w-full bg-[url(/images/not-found.webp)] bg-cover bg-no-repeat px-5 pb-20 sm:bg-[url(/images/not-found2.webp)] sm:px-10 md:bg-[url(/images/not-found3.webp)] md:px-20 md:pb-[100px] lg:bg-[url(/images/not-found4.webp)] lg:px-[120px] lg:pb-[120px]">
      <div className="flex flex-col gap-[26px] pt-[274px] sm:gap-[30px] sm:pt-[281px] md:gap-[23px] md:pt-[253px]">
        <p className="font-climate-crisis text-[80px] leading-[100%] text-white md:text-[100px] md:leading-[120px]">404</p>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-poppins-bold text-poppins-p2 leading-poppins-p2 md:text-poppins-p1 md:leading-poppins-p1 text-white">
              Looks like you’ve taken a wrong turn.
            </p>
            <p className="font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2 text-white sm:max-w-[480px]">
              But don’t worry — even the best strategists sometimes end up off course. Let’s get you back on track.
            </p>
          </div>

          <Link href="/">
            <Button variant="primary" className="w-max">
              <p className="font-poppins-bold text-poppins-l2 leading-poppins-l2 text-white">BACK TO HOMEPAGE</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
