import React from "react";

const AboutHull = () => {
  return (
    <div className="flex gap-20 px-5 py-20 sm:px-10 md:px-20 md:py-[100px] lg:gap-[120px] lg:p-[120px]">
      <div className="flex flex-1 flex-col gap-5 md:max-w-[600px] md:min-w-[480px] md:gap-6">
        <p className="h2-primary md:h1-primary uppercase">
          About <br /> Leighton Hull
        </p>
        <div className="text-p3-poppins md:text-p2-poppins text-grey40">
          <p className="mb-2">
            Leighton Hull is a seasoned entrepreneur, franchise operations expert, and strategic advisor with a track record
            spanning McDonald’s, Denny’s, Bojangles, and Shell Oil.
          </p>
          <p>
            He helps franchise owners, private equity firms, and private investors stabilize operations, drive growth, and execute
            turnarounds. As founder of Hull Advisory, he brings decades of hands-on experience to complex business challenges
            across multiple sectors.
          </p>
        </div>
      </div>

      <div className="max-w-[600px] min-w-[480px] flex-1 max-md:hidden"></div>
    </div>
  );
};

export default AboutHull;
