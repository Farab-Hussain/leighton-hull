import Image from "next/image";
import React from "react";

type Props = {
  src: string;
};

const ArticleHero = ({ src }: Props) => {
  return (
    <div className="relative flex h-[520px] items-center justify-center bg-white sm:h-[608px] md:h-[640px] lg:h-[680px]">
      <Image className="z-1 h-[440px] w-[330px] sm:h-[480px] sm:w-[360px]" src={src} alt="Magazine" width={360} height={480} />
    </div>
  );
};

export default ArticleHero;
