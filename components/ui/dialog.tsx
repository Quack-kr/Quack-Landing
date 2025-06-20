import React, { PropsWithChildren } from "react";
import useDisableScroll from "@/hooks/useDisableScroll";
import { Dim } from "./dim";
import Image from "next/image";
import Portal from "./portal";

interface IDialogProps {
  opacity?: number;
  handleClose: () => void;
}

export function Dialog({
  children,
  opacity = 0,
  handleClose,
}: PropsWithChildren<IDialogProps>) {
  useDisableScroll();

  return (
    <Portal>
      <Dim opacity={opacity}>
        <div className="relative mx-auto max-w-[600px] min-w-[590px] bg-quack-black rounded-[20px]">
          <button
            type="button"
            className="absolute top-10 right-10"
            onClick={handleClose}
          >
            <Image
              src="/ic_close.svg"
              alt="close-icon"
              width={20}
              height={20}
            />
          </button>
          <div>{children}</div>
        </div>
      </Dim>
    </Portal>
  );
}
