import type React from "react";
import type { Metadata } from "next";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "꽥플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
  description:
    "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
  keywords: [
    "꽥플레이스",
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
  authors: [{ name: "꽥플레이스 팀" }],
  creator: "꽥플레이스",
  publisher: "꽥플레이스",

  // Canonical URL - replace with your actual domain when deployed
  metadataBase: new URL("https://quack.io.kr"),
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
    url: "https://quack.io.kr",
    title: "꽥플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
    description:
      "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
    siteName: "꽥플레이스",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "꽥플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "꽥플레이스 | 싫어하는걸 빼면 남는건 좋아하는거 아니야?",
    description:
      "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
    images: ["/og-image.png"], // Same as OG image
    creator: "@꽥플레이스", // Replace with actual Twitter handle when available
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
    google: "spTTPWCFWkTI6qUs2-O-CmHwXZJEYqomTiSrFnPNvMM",
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
  applicationName: "꽥플레이스",
  appleWebApp: {
    capable: true,
    title: "꽥플레이스",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json", // This will need to be created
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
          content="6372074eb162325a6e54cdfc02074f5170c6957f"
        />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="꽥플레이스 RSS"
          href="/rss.xml"
        />
      </head>
      <body className="bg-quack-yellow text-quack-black font-jamsil antialiased">
        <Suspense fallback={null}>
          {children}
          <div id="modal" />
          <GoogleAnalytics gaId="G-1TKF5L0VLJ" />
        </Suspense>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "꽥플레이스",
              url: "https://quack.io.kr/",
              description:
                "내가 싫어하는 분위기, 어제 먹었던 음식, 고기 안 구워주는 식당까지 다 빼고 실망하지 않을 장소만 추천하는 네거티브 필터링 기반 맛집 탐색 서비스입니다.",
              applicationCategory: "FoodApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
              screenshot: "https://quack.io.kr/og-image.png",
              featureList:
                "네거티브 필터링, 맞춤형 맛집 추천, 분위기/음식 제외, 실시간 추천, 실패 없는 맛집 탐색",
              author: {
                "@type": "Organization",
                name: "꽥플레이스 팀",
                url: "https://quack.io.kr/",
              },
              publisher: {
                "@type": "Organization",
                name: "꽥플레이스",
                url: "https://quack.io.kr/",
              },
              inLanguage: "ko",
              datePublished: "2025-07-02",
              image: "https://quack.io.kr/og-image.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
