import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[116px] xl:h-[200px]">
      <div className="container mx-auto flex justify-between items-center px-5 pt-10 pb-5 xl:w-[75%] xl:mx-auto xl:px-0 xl:max-w-full">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="quack-logo"
            className="w-[60px] h-[56px] xl:w-[110px] xl:h-[100px]"
          />
        </Link>
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
          >
            문의하기
          </Link>
          <Button className="bg-quack-black text-quack-white hover:bg-quack-illustration rounded-full px-6">
            앱 다운로드
          </Button>
        </nav>
        <button className="flex md:hidden">
          <Image
            src="/hamburger-menu.svg"
            alt="hamburger-menu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
}
