"use client";
import React, { PropsWithChildren, useContext } from "react";
import Icon from "./icon";
import TextFlip from "@/common/components/text-flip";

type ButtonVariant = "primary" | "outlined-black" | "outlined-white" | "white";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: ButtonVariant;
  iconName?: string;
  disabled?: boolean;
  iconColor?: string;
  endIconName?: string;
  endIconSize?: number;
  disableTextFlip?: boolean;
}

function Button({
  variant = "primary",
  onClick,
  disabled = false,
  children,
  className,
  endIconName,
  endIconSize = 24,
  disableTextFlip = false,
  ...rest
}: PropsWithChildren<Props>) {
  //  when you passed text in help children you don't need to pass any styles for them
  const buttonVariants: Record<ButtonVariant, string> = {
    primary: "bg-primary30 text-white hover:bg-primary40 disabled:bg-primary10 transition duration-300",
    "outlined-black": "outline outline-primary30 outline -outline-offset-1 text-grey50 bg-white",
    "outlined-white": "outline outline-white text-white bg-transparent",
    white: "bg-white text-black hover:bg-grey20"
  };
  return (
    <button
      className={`group text-poppins-l2 font-poppins-bold leading-poppins-l2 flex justify-center gap-x-2 px-6 pt-[11px] pb-3 uppercase ${disabled ? "cursor-not-allowed" : `cursor-pointer`} ${buttonVariants[variant]} ${className ? className : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {disableTextFlip ? children : <TextFlip>{children}</TextFlip>}
      {endIconName && <Icon name={endIconName} size={endIconSize} />}
    </button>
  );
}
interface ButtonContext {
  variant?: ButtonVariant;
  hover?: boolean;
  pressed?: boolean;
}

export const ButtonContext = React.createContext<ButtonContext | undefined>(undefined);

export function useButtonContext() {
  return useContext(ButtonContext);
}

export default Button;
