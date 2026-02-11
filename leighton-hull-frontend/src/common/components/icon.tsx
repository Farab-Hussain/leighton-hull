"use client";
import React from "react";
import Image from "next/image";
import { useIsMobile } from "@/common/hooks/screen-size";
import { useButtonContext } from "./button";

export type IconProps = {
  size?: number | { mobile: number; desktop: number };
  width?: number;
  height?: number;
  name: string;
  id?: string;
  p?: string;
  className?: string;
} & React.HTMLAttributes<HTMLImageElement>;

function Icon({
  size: sizeFromProps = 24,
  width: widthFromProps,
  height: heightFromProps,
  name: nameFromProps,
  className,
  ...imageProps
}: IconProps) {
  const isMobile = useIsMobile();
  const colorInButtonContext = useIconColorInButtonContext();

  const size = typeof sizeFromProps === "number" ? sizeFromProps : sizeFromProps[isMobile ? "mobile" : "desktop"];

  const width = widthFromProps || size;
  const height = heightFromProps || size;

  const name = colorInButtonContext ? `${nameFromProps}-${colorInButtonContext}` : nameFromProps;

  return (
    <Image
      width="0"
      height="0"
      style={{ width, height }}
      alt="time icon"
      src={`/icons/${name}.svg`}
      {...imageProps}
      className={className}
    />
  );
}

function useIconColorInButtonContext() {
  const buttonContext = useButtonContext();
  if (!buttonContext) return undefined;
}

export default Icon;
