import React from "react";

interface Props {
  title: string;
  detailsInfo: DetailsInfo[];
}

function DetailAboutAdvisory({ title, detailsInfo }: Props) {
  return (
    <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10">
      <div className="border-primary30 border-l-4 px-5 py-2">
        <div className="flex gap-2.5">
          <p className="font-poppins-semi-bold text-poppins-h3 leading-poppins-h3 md:text-poppins-h1 md:leading-poppins-h1">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 lg:gap-x-[120px] lg:gap-y-10">
        {detailsInfo.map(item => (
          <div key={item.id} className="flex flex-col gap-2 bg-white p-5 text-white md:py-6 md:pr-[22px] md:pl-6">
            <p className="text-grey50 font-poppins-bold text-poppins-h2 leading-poppins-h2">{item.title}</p>
            <p className="text-grey50 font-poppins text-poppins-p3 leading-poppins-p3">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailAboutAdvisory;
