import React, { PropsWithChildren } from "react";
import Icon from "./icon";

type MenuIconVariant = "primary" | "transparent";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant: MenuIconVariant;
}

function MenuIcon({ variant, onClick, ...rest }: PropsWithChildren<Props>) {
  const containerVariants: Record<MenuIconVariant, string> = {
    primary: "bg-white hover:bg-grey20 cursor-pointer",
    transparent: "bg-transparent border-white border"
  };

  return (
    <button className={`p-2.5 ${containerVariants[variant]}`} onClick={onClick} {...rest}>
      <Icon name={variant === "primary" ? "menu-black" : "menu-white"} size={24} />
    </button>
  );
}

export default MenuIcon;
