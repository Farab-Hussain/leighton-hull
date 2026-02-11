import SvgIcon from "@/common/components/svg-icon";
import React from "react";

interface Props {
  type: "error" | "success";
}

//after 5 seconds close the modal automatically
function InformationModal({ type }: Props) {
  const isSuccess = type === "success";

  return (
    <div className="w-[calc(100vw-40px)] bg-white p-6 sm:w-[480px] sm:p-8 lg:p-10">
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <div className={` ${isSuccess ? "bg-primary20" : "bg-red"} h-12 w-12 rounded-full p-3`}>
          <SvgIcon name={isSuccess ? "check" : "close"} className="text-white" size={24} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-poppins-bold text-grey50 text-poppins-p2 leading-poppins-p2 md:text-poppins-p1 md:leading-poppins-p1">
            {isSuccess ? "Message Sent Successfully" : "Something Went Wrong"}
          </p>
          <div className="flex flex-col">
            <p className="font-poppins text-grey40 text-poppins-p3 leading-poppins-p3 text-center">
              {isSuccess
                ? "Thank you for reaching out! Your message has been sent to Leighton Hull — he’ll get back to you as soon as possible."
                : "Sorry, we couldn’t send your message. Please check your connection and try again, or email us directly at"}
            </p>
            {!isSuccess && (
              <p className="font-poppins-bold text-grey40 text-poppins-p3 leading-poppins-p3 text-center">
                info@leightonhull.com
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationModal;
