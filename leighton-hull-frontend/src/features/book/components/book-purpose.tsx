import Image from "next/image";
import React from "react";

const BookPurpose = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row-reverse md:gap-20 lg:gap-[120px]">
      <div className="flex flex-col gap-4 sm:gap-5 md:flex-1 md:justify-center md:gap-6">
        <p className="h2-primary md:h1-primary uppercase">Why I wrote this book</p>
        <p className="text-p3-poppins md:text-p2-poppins text-grey40">
          In this forthcoming book, Leighton Hull unveils the blueprint behind a decades-long legacy of entrepreneurial mastery,
          franchise leadership, and strategic influence. More than a memoir, it’s a field guide for navigating the complexities of
          business ownership—with hard-won lessons in resilience, vision, and growth. Through vivid storytelling, pivotal
          milestones, and candid reflections, Hull delivers timeless insights that transcend industries and ignite the spirit of
          ambition, reinvention, and purposeful leadership.
        </p>
      </div>

      <div className="md:flex-1">
        <Image
          className="h-[360px] w-full object-cover sm:h-[400px] lg:h-[480px]"
          src="/images/book.webp"
          alt="Book"
          width={600}
          height={480}
        />
      </div>
    </div>
  );
};

export default BookPurpose;
