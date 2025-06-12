import "./globals.css";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "꽥 - 쉽어하는 걸 싫 빼고 시작하자",
  description: "음식 배달 및 추천 서비스",
  generator: "Quack-kr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-quack-yellow text-quack-black font-jamsil antialiased">
        {children}
      </body>
    </html>
  );
}
