import IconButton from "@/common/components/icon-button";
import { linkedInUrl } from "@/common/lib/constants";
import Link from "next/link";
import React from "react";

type Props = {
  color?: "black" | "white";
  className?: string;
};

const SocialMedias = ({ color = "black", className = "" }: Props) => {
  const variant = color === "white" ? "secondary-white" : "secondary-black";

  return (
    <div className={`flex gap-3 ${className}`}>
      <Link target="_blank" href={linkedInUrl}>
        <IconButton variant={variant} iconName={`linkedin-${color}`} iconSize={24} />
      </Link>
      {/* remove for now */}
      {/* <Link target="_blank" href={instagramUrl}>
        <IconButton variant={variant} iconName={`instagram-${color}`} iconSize={24} />
      </Link> */}
    </div>
  );
};

export default SocialMedias;
