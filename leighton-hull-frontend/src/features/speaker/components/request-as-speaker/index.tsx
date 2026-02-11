import React from "react";
import RequestFormTitle from "@/features/speaker/components/request-as-speaker/title";
import SpeakerRequestForm from "@/features/speaker/components/request-as-speaker/form";

const RequestAsSpeaker = () => {
  return (
    <div className="bg-[url('/images/speaker-bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat px-5 py-20 sm:px-10 sm:py-20 md:px-20 md:py-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-6 max-md:items-center sm:gap-10 md:flex-row md:justify-center md:gap-20 lg:gap-[120px]">
        <RequestFormTitle />
        <SpeakerRequestForm />
      </div>
    </div>
  );
};

export default RequestAsSpeaker;
