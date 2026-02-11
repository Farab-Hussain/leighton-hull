import React from "react";

const AwardsHead = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:justify-between md:gap-20 lg:gap-[120px]">
      <p className="h2-primary md:h1-primary w-full flex-1 uppercase md:max-w-[660px] md:min-w-[480px]">
        Awards and recognitions
      </p>
      <p className="text-p3-poppins md:text-p2-poppins text-grey40 w-full flex-1 md:max-w-[660px] md:min-w-[480px]">
        Leighton Hull’s entrepreneurial journey reflects a powerful blend of operational mastery, visionary leadership, and
        strategic diversification. His impact spans the franchise <br className="hidden sm:block md:hidden" /> industry, the
        broader business landscape, and the communities he serves—earning him numerous accolades for excellence, innovation, and
        civic contribution.
      </p>
    </div>
  );
};

export default AwardsHead;
