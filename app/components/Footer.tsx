"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-quack-black py-10 xl:py-[119.5px] font-pretendard">
      <div className="container mx-auto px-5 xl:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:items-center">
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-10 xl:items-center">
            <div className="mb-4 xl:mb-0 xl:h-max">
              <Image
                src="/logo-gray.svg"
                alt="footer-logo"
                width={isMobile ? 60 : 94.5}
                height={isMobile ? 56 : 90}
              />
            </div>
            <div className="space-y-1 text-quack-footer-mobile text-quack-gray xl:text-quack-footer xl:flex-shrink-0">
              <p>
                <span className="font-bold">꽥</span>
                <span className="inline-block w-[1px] h-[6px] mx-[4px] xl:w-[1.5px] xl:h-[13px] bg-[#A8A7A1] xl:ml-1.5 xl:mr-1 xl:relative xl:top-[1.5px]" />
                <span>사업자 등록번호: 721-04-03645</span>
              </p>
              <p>통신판매업 신고번호: 2025-와부조안-0126</p>
              <p>
                주소: 경기도 남양주시 와부읍 수레로116번길 16, 402호
                -J186호(아이비타워-2)
              </p>
              <p>
                <span>문의사항: contact@quack.io.kr</span>
                <span className="inline-block w-[1px] h-[6px] xl:h-[13px] bg-[#A8A7A1] mx-1 xl:mx-1.5 xl:relative xl:top-[1.5px]" />
                <span>대표: 김걸휘</span>
                <span className="inline-block w-[1px] h-[6px] xl:h-[13px] bg-[#A8A7A1] mx-1 xl:mx-1.5 xl:relative xl:top-[1.5px]" />
                <span>대표전화: 070-8027-8350</span>
              </p>
            </div>
          </div>
          <div className="text-left xl:flex xl:flex-col xl:items-start xl:justify-self-end">
            <div className="text-quack-footer-mobile text-quack-gray xl:text-quack-footer">
              <div className="flex items-center gap-[4px] xl:gap-2">
                <button className="font-bold cursor-pointer">
                  개인정보처리방침
                </button>
                <span className="inline-block w-[1.5px] xl:w-[2px] h-[6px] xl:h-[13px] bg-[#A8A7A1]" />
                <button className="font-bold cursor-pointer">
                  꽥 서비스 이용약관
                </button>
              </div>
              <p className="mt-2">Copyright © quack. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
