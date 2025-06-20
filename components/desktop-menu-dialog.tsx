import React, { type DispatchWithoutAction } from "react";
import { Button } from "./ui/button";
import useDisableScroll from "@/hooks/useDisableScroll";
import { Dialog } from "./ui/dialog";

const DescktopMenuDialog = ({
  toggleMenuDialog,
}: {
  toggleMenuDialog: DispatchWithoutAction;
}) => {
  useDisableScroll();

  return (
    <Dialog opacity={0.5} handleClose={toggleMenuDialog}>
      <div className="flex flex-col items-center justify-center py-[60px] px-10">
        <h5 className="font-pretendard text-[32px] font-bold text-quack-white">
          문의하기
        </h5>
      </div>
    </Dialog>
  );
};

export default DescktopMenuDialog;
