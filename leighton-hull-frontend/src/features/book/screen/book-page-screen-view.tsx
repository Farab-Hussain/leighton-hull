import BackgroundStory from "@/features/book/components/background-story";
import BookExcerpt from "@/features/book/components/book-excerpt";
import BookPurpose from "@/features/book/components/book-purpose";
import Quote from "@/features/book/components/quote";
import React from "react";

const BookPageScreenView = () => {
  return (
    <>
      <div className="flex flex-col gap-20 px-10 py-20 sm:pt-16 md:p-20 md:pb-[100px] lg:p-[120px]">
        <div className="-my-10">
          <p className="text-p3-poppins md:text-p2-poppins text-grey40">
            This book reflects a lifetime of leadership, entrepreneurship, and operational experience. Additional details will be
            shared as publication approaches.
          </p>
          <p className="text-p3-poppins md:text-p2-poppins text-grey40 mt-2 max-sm:hidden">
            For speaking or discussion related to the book’s themes, Leighton may be contacted directly.
          </p>
        </div>
        <BookExcerpt />
        <BookPurpose />
      </div>
      <BackgroundStory />
      <Quote />
    </>
  );
};

export default BookPageScreenView;
