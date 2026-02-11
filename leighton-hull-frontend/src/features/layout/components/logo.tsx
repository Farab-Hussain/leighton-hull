import Icon from "@/common/components/icon";
import Link from "next/link";
import React from "react";

type Props = {
  color?: LogoColor;
};

type LogoColor = "default" | "white";

const Logo = ({ color = "default" }: Props) => {
  const iconName: Record<LogoColor, string> = {
    default: "Logo",
    white: "Logo-white"
  };
  return (
    <Link href="/home" className="flex h-10">
      <Icon name={iconName[color]} width={173} height={40} />
    </Link>
  );
};

export default Logo;
