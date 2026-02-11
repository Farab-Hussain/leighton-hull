import Button from "@/common/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = () => {
  return (
    <div className="flex flex-col gap-6 bg-white px-5 py-20 sm:gap-10 sm:px-10 md:flex-row md:items-center md:gap-20 md:px-20 md:py-[100px] lg:gap-[120px] lg:p-[120px]">
      <Image
        className="h-[360px] w-full object-contain sm:h-[400px] md:min-w-[480px] lg:h-[480px]"
        src="/images/book.jpeg"
        alt="Concept Cover"
        width={600}
        height={480}
      />
      <div className="flex flex-col gap-4 sm:gap-5 md:max-w-[480px] md:gap-6 lg:max-w-[600px]">
        <p className="h2-primary md:h1-primary">BOOK</p>
        <p className="text-p3-poppins sm:text-p2-poppins text-grey40">
          A memoir and business guide sharing Leighton Hull&apos;s journey in entrepreneurship, leadership, and franchise success.
          Why I Wrote This Book: To provide an honest, experience-driven roadmap for aspiring and current business owners.
        </p>
        <Link href="book">
          <Button variant="outlined-black">LEARN MORE</Button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
