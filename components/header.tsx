"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useReducer } from "react";
import MobileMenuDialog from "./mobile-menu-dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import DescktopMenuDialog from "./desktop-menu-dialog";

export default function Header() {
  const isMobile = useIsMobile();
  const [showMenuDialog, toggleMenuDialog] = useReducer((open) => !open, false);

  return (
    <>
      <header className="w-full h-[116px] z-40 xl:h-[200px] xl:fixed xl:top-0 xl:left-0 xl:z-50 xl:bg-quack-yellow">
        <div className="container mx-auto flex justify-between items-center px-5 pt-10 pb-5 xl:w-[75%] xl:pt-20 xl:mx-auto xl:px-0 xl:max-w-full">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="quack-logo"
              className="w-[60px] h-[56px] xl:w-[110px] xl:h-[100px]"
            />
          </Link>
          <div className="hidden xl:flex items-center">
            <nav className="hidden xl:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-quack-black hover:text-quack-illustration font-medium"
              >
                서비스 소개
              </Link>
              <Link
                href="#features"
                className="text-quack-black hover:text-quack-illustration font-medium"
              >
                사업자 가게관리
              </Link>
              <Link
                href="#contact"
                className="text-quack-black hover:text-quack-illustration font-medium"
                onClick={toggleMenuDialog}
              >
                문의하기
              </Link>
            </nav>
            <div className="hidden xl:flex items-center ml-[18px] space-x-6">
              <span className="inline-block w-[1.5px] h-[13px] bg-[#2A2925]" />
              <Button className="bg-quack-black hover:bg-quack-illustration rounded-full px-6 text-quack-yellow">
                앱 다운로드
              </Button>
            </div>
          </div>
          <button className="flex xl:hidden" onClick={toggleMenuDialog}>
            <Image
              src="/hamburger-menu.svg"
              alt="hamburger-menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </header>
      {showMenuDialog &&
        (isMobile ? (
          <MobileMenuDialog toggleMenuDialog={toggleMenuDialog} />
        ) : (
          <DescktopMenuDialog toggleMenuDialog={toggleMenuDialog} />
        ))}
    </>
  );
}
