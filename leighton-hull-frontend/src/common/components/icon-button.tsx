"use client";

import React, { PropsWithChildren, useContext } from "react";
import Icon from "./icon";

type ButtonVariant =
  | "primary-black"
  | "primary-white"
  | "secondary-black"
  | "secondary-white"
  | "tertiary-black"
  | "tertiary-white";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: ButtonVariant;
  iconName: string;
  disabled?: boolean;
  iconColor?: string;
  iconSize?: number;
}

function IconButton({
  variant = "primary-black",
  onClick,
  iconName,
  disabled = false,
  iconSize = 20,
  ...rest
}: PropsWithChildren<Props>) {
  //  when you passed text in help children you don't need to pass any styles for them
  const buttonVariants: Record<ButtonVariant, string> = {
    "primary-black": ` ${disabled ? "bg-grey30 text-grey40" : "bg-orange20   text-white hover:bg-orange30"}`,
    "primary-white": `bg-white ${disabled ? "text-grey40" : " text-grey60"}`,
    "secondary-black": ` border ${disabled ? " border-grey40 text-grey-40" : " bg-inherit border-grey50 text-grey60 hover:bg-white "}`,
    "secondary-white": ` border ${disabled ? "border-grey40 text-grey40" : "border-white text-white "}`,
    "tertiary-black": ` ${disabled ? "text-grey40 bg-inherit" : "text-grey60 hover:bg-white"}`,
    "tertiary-white": ` ${disabled ? "text-grey40 " : "text-white "}`
  };
  return (
    <button
      className={`group text-urbanist-p3 font-urbanist-bold leading-urbanist-p3 flex w-max p-[9px] ${disabled ? "cursor-not-allowed" : `cursor-pointer`} ${buttonVariants[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <Icon name={iconName} size={iconSize} />
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

export default IconButton;
