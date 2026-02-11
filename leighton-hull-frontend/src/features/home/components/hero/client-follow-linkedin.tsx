"use client";

import Icon from "@/common/components/icon";
import { linkedInUrl } from "@/common/lib/constants";
import { useScreenSize } from "@/common/lib/hooks/screen-size";
import Link from "next/link";
import React from "react";

const ClientFollowLinkedIn = () => {
  const { width } = useScreenSize();
  return (
    <div className="flex items-center gap-3 md:flex-col md:items-start">
      <Link href={linkedInUrl} target="_blank">
        <Icon name="linkedin-blue" size={width < 1200 ? 32 : 48} />
      </Link>
    </div>
  );
};

export default ClientFollowLinkedIn;
