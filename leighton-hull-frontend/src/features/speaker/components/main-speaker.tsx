import React from "react";
import Image from "next/image";

function MainSpeaker() {
  return (
    <div className="preload-bg relative flex h-[520px] bg-[url('/images/background-of-speaker.webp')] bg-cover bg-center bg-no-repeat p-10 sm:h-[608px] sm:justify-center sm:bg-[url('/images/background-of-speaker-sm.webp')] sm:py-16 md:h-[640px] md:bg-[url('/images/background-of-speaker-md.webp')] md:py-20 lg:h-[680px] lg:bg-[url('/images/background-of-speaker-lg.webp')] lg:py-[100px]">
      <div className="relative h-[440px] w-full sm:h-[480px] sm:w-[400px]">
        <Image src="/images/speaker.webp" fill alt="speaker" className="object-contain sm:object-cover" priority />
      </div>
    </div>
  );
}

export default MainSpeaker;
