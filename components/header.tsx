import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-quack-black">
          꽥
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-quack-black hover:text-quack-illustration font-medium">
            서비스 소개
          </Link>
          <Link href="#features" className="text-quack-black hover:text-quack-illustration font-medium">
            사업자 가게관리
          </Link>
          <Link href="#contact" className="text-quack-black hover:text-quack-illustration font-medium">
            문의하기
          </Link>
        </nav>
        <Button className="bg-quack-black text-quack-white hover:bg-quack-illustration rounded-full px-6">
          앱 다운로드
        </Button>
      </div>
    </header>
  )
}
