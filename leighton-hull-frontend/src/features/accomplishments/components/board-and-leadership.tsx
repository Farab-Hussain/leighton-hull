import RoleCard from "@/common/components/cards/role-card";
import { boards } from "@/features/accomplishments/lib/boards";
import React from "react";

const BoardAndLeadership = () => {
  return (
    <div className="bg-primary30 flex flex-col gap-16 py-20 pr-[18px] pl-5 sm:gap-20 sm:px-10 md:px-20 md:py-[100px] lg:gap-[100px] lg:p-[120px]">
      <div className="flex flex-col gap-4 sm:h-[168px] sm:w-[480px] sm:gap-5 md:h-auto md:gap-6 md:self-end lg:w-[600px]">
        <p className="h2-primary md:h1-primary text-white uppercase sm:mt-0">Board and Leadership Service</p>
        <p className="text-p3-poppins md:text-p2-poppins text-grey20">Leighton Hull Board and Leadership Service.</p>
      </div>
      <div>
        {boards.map(board => (
          <RoleCard key={board.organization} board={board} />
        ))}
      </div>
    </div>
  );
};

export default BoardAndLeadership;
