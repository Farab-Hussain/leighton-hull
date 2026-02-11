import type { Board } from "@/features/accomplishments/lib/boards";
import React from "react";

type Props = {
  board: Board;
};

function RoleCard({ board }: Props) {
  return (
    <div className="text-grey20 border-primary20 box-content flex flex-col gap-2 border-b px-5 py-5 pt-5 pb-[19px] sm:flex-row md:px-10 md:pt-6 md:pb-[23px]">
      <p className="text-p2-poppins-bold md:text-p1-poppins-bold sm:w-min sm:text-nowrap">{board.organization}</p>
      <span className="text-p2-poppins-bold md:text-p1-poppins-bold max-sm:hidden">-</span>
      <p className="text-p3-poppins md:text-p1-poppins">{board.role}</p>
    </div>
  );
}

export default RoleCard;
