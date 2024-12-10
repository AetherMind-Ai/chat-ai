import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/utils/theme-providers";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MindBot AI",
  description: "MindBot: Your ultimate AI assistant powered by Next.js.",
  keywords: ["AI", "MindBot", "assistant", "Next.js", "intelligent assistant"],
  authors: [{ name: "MindBot Team" }],
  creator: "MindBot Team",
  publisher: "MindBot AI",
  openGraph: {
    title: "MindBot AI Assistant",
    description:
      "Discover MindBot, the ultimate AI assistant built with Next.js, featuring state-of-the-art functionalities and intelligent responses.",
    url: "https://mindbot.vercel.app",
    siteName: "MindBot AI",
    images: [
      {
        url: "/assets/mindbot-logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindBot AI",
    description: "MindBot: Redefining AI-powered assistance for everyone.",
    creator: "@MindBotAI",
    images: ["/assets/mindbot-banner.svg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFont.className} dark:bg-[#131314] h-dvh w-full overflow-hidden bg-white text-black dark:text-white`}
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
