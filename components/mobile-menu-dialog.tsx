import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "./ui/button";
import useDisableScroll from "@/hooks/useDisableScroll";

const inquirySchema = z.object({
  name: z.string().min(1, "성함을 입력해 주세요."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  content: z.string().min(1, "문의하실 내용을 입력해 주세요."),
});

type InquirySchema = z.infer<typeof inquirySchema>;

const MobileMenuDialog = ({
  toggleMenuDialog,
}: {
  toggleMenuDialog: () => void;
}) => {
  useDisableScroll();

  const [mode, setMode] = useState<"menu" | "inquiry">("menu");
  const [showCompletePopup, setShowCompletePopup] = useState(false);

  const form = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", content: "" },
  });

  const onSubmit = () => {
    setShowCompletePopup(true);
    form.reset();
  };

  const handleCloseInquiry = () => {
    setMode("menu");
    setShowCompletePopup(false);
    form.reset();
  };

  const handleCompleteConfirm = () => {
    handleCloseInquiry();
    toggleMenuDialog();
  };

  // 문의하기 폼 UI
  const InquiryForm = (
    <div
      className="fixed top-[116px] left-0 w-full h-[calc(100vh-116px)] bg-quack-yellow z-50 flex flex-col"
      style={{ minHeight: "calc(100vh - 116px)" }}
    >
      <div className="flex-1 px-5 flex flex-col">
        <h2 className="font-bold text-[32px] text-quack-black mb-6 mt-5">
          문의하기
        </h2>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <label className="font-pretendard font-bold text-quack-black">
            성함*
            <input
              {...form.register("name")}
              autoComplete="off"
              placeholder="성함을 입력해주세요."
              className="block w-full bg-[#21211D] h-10 rounded-[8px] px-4 mt-2 text-[#EFEEDF] text-xs font-medium placeholder-[#A8A7A1] placeholder:font-medium focus:outline-none"
            />
            <span className="text-red-700 text-xs">
              {form.formState.errors.name?.message}
            </span>
          </label>
          <label className="font-pretendard font-bold text-quack-black">
            이메일*
            <input
              {...form.register("email")}
              autoComplete="off"
              placeholder="이메일을 입력해주세요."
              className="block w-full bg-[#21211D] h-10 rounded-[8px] px-4 mt-2 text-[#EFEEDF] text-xs font-medium placeholder-[#A8A7A1] placeholder:font-medium focus:outline-none"
            />
            <span className="text-red-700 text-xs">
              {form.formState.errors.email?.message}
            </span>
          </label>
          <label className="font-pretendard font-bold text-quack-black">
            문의내용*
            <textarea
              {...form.register("content")}
              autoComplete="off"
              placeholder="문의하실 내용을 입력해주세요."
              className="block w-full bg-[#21211D] h-10 rounded-[8px] px-4 py-4 mt-2 min-h-[110px] text-xs text-[#EFEEDF] font-medium placeholder-[#A8A7A1] placeholder:font-medium focus:outline-none"
            />
            <span className="text-red-700 text-xs">
              {form.formState.errors.content?.message}
            </span>
          </label>
          <Button
            type="submit"
            className={`w-full h-12 rounded-[8px] bg-[#21211D] font-bold hover:bg-[#21211D] 
    hover:text-[#A8A7A1] transition
    ${form.formState.isValid ? "text-white" : "text-[#A8A7A1]"}`}
          >
            문의하기
          </Button>
        </form>
      </div>
    </div>
  );

  // 문의 완료 팝업 UI
  const CompletePopup = (
    <div className="fixed top-0 left-0 w-full h-full bg-[#07070699] z-[60] flex items-center justify-center">
      <div className="bg-quack-yellow rounded-[20px] w-[calc(100vw-48px)] h-[144px] flex flex-col items-center justify-center shadow-lg">
        <span className="font-bold text-quack-black text-center">
          문의가 완료되었어요.
        </span>
        <Button
          className="w-[160px] h-12 rounded-[40px] bg-quack-black text-quack-yellow font-bold mt-4"
          onClick={handleCompleteConfirm}
        >
          확인
        </Button>
      </div>
    </div>
  );

  // 메뉴 UI
  const Menu = (
    <>
      <div
        className="absolute top-[116px] left-0 w-full h-[calc(100vh-116px)] bg-[#07070699] z-30"
        onClick={toggleMenuDialog}
      />
      <section className="absolute top-[96px] left-0 w-full bg-quack-yellow rounded-bl-[20px] rounded-br-[20px] z-50">
        <div className="pt-1 pb-10 w-full flex flex-col items-center justify-center">
          <button className="font-bold text-quack-black text-base mb-6">
            서비스 소개
          </button>
          <button className="font-bold text-quack-black text-base mb-6">
            사장님 가게관리
          </button>
          <button
            className="font-bold text-quack-black text-base mb-6"
            onClick={() => setMode("inquiry")}
          >
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

  return (
    <>
      {mode === "menu" && Menu}
      {mode === "inquiry" && InquiryForm}
      {showCompletePopup && CompletePopup}
    </>
  );
};

export default MobileMenuDialog;
