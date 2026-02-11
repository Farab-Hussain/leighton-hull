import Image from "next/image";
import React from "react";

const BookExcerpt = () => {
  return (
    <div className="flex flex-col gap-[50px] md:flex-row md:gap-20 lg:gap-[120px]">
      <div className="flex flex-col gap-4 sm:gap-5 md:flex-1 md:justify-center md:gap-6">
        <p className="h2-primary md:h1-primary uppercase">Book Excerpt</p>
        <p className="text-p2-lora md:text-p1-lora text-grey40">
          &quot;Success often comes disguised as a tough moment, a strange connection, or a lesson you didn&apos;t expect to need.
          But it&apos;s always there—for those who are paying attention.&quot;
        </p>
      </div>

      <div className="md:flex-1">
        <Image
          className="h-[360px] w-full object-contain sm:h-[400px] lg:h-[480px]"
          src="/images/book.jpeg"
          alt="Concept Cover"
          width={600}
          height={480}
        />
        <p className="text-p2-poppins-bold text-center">Forthcoming — final edition expected March 2026.</p>
      </div>
    </div>
  );
};

export default BookExcerpt;
