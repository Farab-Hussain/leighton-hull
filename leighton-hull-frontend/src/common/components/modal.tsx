"use client";
import React from "react";
import { createPortal } from "react-dom";
import { useBodyScrollLock } from "../hooks/body-scroll-lock";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  opacity?: string;
  containerClassname?: string;
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose, opacity = "bg-grey50/30", containerClassname }) => {
  useBodyScrollLock(open);

  if (!open) return null;

  return createPortal(
    <div className={`fixed inset-0 flex items-center justify-center ${opacity} z-50`} onClick={onClose}>
      <div className={containerClassname} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
