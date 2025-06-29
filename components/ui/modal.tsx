import React, { PropsWithChildren } from "react";
import useDisableScroll from "@/hooks/useDisableScroll";
import { Dim } from "./dim";
import Portal from "./portal";

interface IModalProps {
  opacity?: number;
  handleClose: () => void;
}

export function Modal({
  children,
  opacity = 0,
  handleClose,
}: PropsWithChildren<IModalProps>) {
  useDisableScroll();

  return (
    <Portal>
      <Dim opacity={opacity}>
        <div className="relative mx-auto max-w-[600px] min-w-[590px] bg-quack-black rounded-[20px]">
          {children}
        </div>
      </Dim>
    </Portal>
  );
}
