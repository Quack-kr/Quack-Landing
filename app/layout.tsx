import "./globals.css";
import type React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "꽥 플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
  description:
    "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
  keywords: [
    "꽥 플레이스",
    "맛집 추천",
    "실패 없는 맛집",
    "싫어하는 음식 제외",
    "분위기 필터",
    "음식점 탐색",
    "맞춤형 맛집",
    "식당 추천 서비스",
    "개인화 맛집 추천",
    "실시간 맛집 추천",
  ],
  authors: [{ name: "Qauck Place Team" }],
  creator: "Qauck.Kr",
  publisher: "Qauck.Kr",

  // Canonical URL - replace with your actual domain when deployed
  metadataBase: new URL("https://landing.quack.io.kr"),
  alternates: {
    canonical: "/",
  },

  // Favicon and app icons
  icons: {
    icon: [{ url: "/logo.png" }, { url: "/favicon.ico" }],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://landing.quack.io.kr",
    title: "꽥 플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
    description:
      "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
    siteName: "꽥 플레이스",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "꽥 플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "꽥 플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
    description:
      "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
    images: ["/og-image.png"], // Same as OG image
    creator: "@Qauck", // Replace with actual Twitter handle when available
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // Verification for search console (replace with actual verification codes when available)
  verification: {
    google: "google-site-verification=G-1TKF5L0VLJ",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },

  // Theme color for browser UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5c622" },
    { media: "(prefers-color-scheme: dark)", color: "#070706" },
  ],

  // Viewport settings
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  // App metadata for PWA
  applicationName: "꽥 플레이스",
  appleWebApp: {
    capable: true,
    title: "꽥 플레이스",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json", // This will need to be created
};

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Additional meta tags that can't be added via the metadata object */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="naver-site-verification"
          content="a0af0f145bae4fe882fbc13e1baf74e8a40f0ab7"
        />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-quack-yellow text-quack-black font-jamsil antialiased">
        {children}
        <div id="modal" />
      </body>
    </html>
  );
}
