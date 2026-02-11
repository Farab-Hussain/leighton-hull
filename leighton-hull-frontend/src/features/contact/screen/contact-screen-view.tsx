import React from "react";
import CardContactDetails from "../components/card-contact-details";
import { contactMessage } from "../lib/static-info";

function ContactScreenView() {
  return (
    <div className="px-5 pt-10 pb-20 sm:px-10 sm:pt-16 md:px-20 md:pt-20 md:pb-[100px] lg:px-20 lg:py-[120px]">
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-[100px]">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:justify-center md:gap-6">
          <div className="flex">
            <p className="font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 text-grey50 md:text-climate-crisis-h1 md:leading-climate-crisis-h1 text-center whitespace-pre-line">
              {"GET IN TOUCH\nWITH LEIGHTON HULL"}
            </p>
          </div>
          <p className="font-poppins text-poppins-p2 leading-poppins-p2 text-grey40 text-center">{contactMessage}</p>
        </div>
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:flex-col sm:gap-12 md:gap-16 lg:gap-x-[120px] lg:gap-y-20">
          <CardContactDetails title="EMAIL" description="info@leightonhull.com" />
          <CardContactDetails title="PHONE NUMBER" description="(877) 242-2007" />
          <CardContactDetails
            title="LOS ANGELES OFFICE"
            description="1801 Century Park East, 24th Floor, Los Angeles, CA 90067"
            imageName="los-angeles-office"
          />
          <CardContactDetails
            title="ATLANTA OFFICE"
            description="1201 West Peachtree Street, Suite 2300, Atlanta, GA 30309"
            imageName="atlanta-office"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactScreenView;
