import "./globals.css";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "꽥 - 싫어하는 걸 싹 빼고 시작하자",
  description: "실패 없는 맛집 찾기는 꽥에서",
  generator: "quack-kr",
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
