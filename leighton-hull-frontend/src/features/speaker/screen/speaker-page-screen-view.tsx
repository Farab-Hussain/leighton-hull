import React from "react";
import MainSpeaker from "../components/main-speaker";
import TopicsOfExpertise from "../components/topics-of-expertise";
import RequestAsSpeaker from "@/features/speaker/components/request-as-speaker";

function SpeakerPageScreenView() {
  return (
    <div className="flex flex-col">
      <MainSpeaker />
      <TopicsOfExpertise />
      <RequestAsSpeaker />
    </div>
  );
}

export default SpeakerPageScreenView;
