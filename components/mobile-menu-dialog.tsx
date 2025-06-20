import React, { type DispatchWithoutAction } from "react";
import { Button } from "./ui/button";
import useDisableScroll from "@/hooks/useDisableScroll";

const MobileMenuDialog = ({
  toggleMenuDialog,
}: {
  toggleMenuDialog: DispatchWithoutAction;
}) => {
  useDisableScroll();

  return (
    <>
      <div
        className="absolute top-[116px] left-0 w-full h-[calc(100vh-116px)] bg-[#07070699] z-30"
        onClick={toggleMenuDialog}
      />
      <section className="absolute top-[96px] left-0 w-full bg-quack-yellow rounded-bl-[20px] rounded-br-[20px] z-50">
        <div className="pt-1 pb-10 w-full flex flex-col items-center justify-center">
          <button className="font-bold text-quack-black text-base leading-[100%] mb-6">
            서비스 소개
          </button>
          <button className="font-bold text-quack-black text-base leading-[100%] mb-6">
            사장님 가게관리
          </button>
          <button className="font-bold text-quack-black text-base leading-[100%] mb-6">
            문의하기
          </button>
          <div className="w-full flex items-center justify-center">
            <Button className="bg-quack-black text-quack-yellow rounded-[40px] w-[160px] h-[48px] flex items-center justify-center xl:hidden hover:bg-quack-black">
              앱 다운로드
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileMenuDialog;
