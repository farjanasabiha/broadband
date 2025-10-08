import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import TranslationProvider from "./Components/TranslationProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "SyncIT – Best Internet & WiFi Service Provider in Sylhet | Fiber Broadband",
  description:
    "Looking for the best internet in Sylhet? SyncIT offers ultra-fast fiber broadband, BDIX speeds, WiFi connections, and 24/7 support. Trusted by 5000+ happy users.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "internet Sylhet",
    "WiFi Sylhet",
    "best ISP in Sylhet",
    "broadband internet Sylhet",
    "high-speed internet Sylhet",
    "SyncIT Sylhet",
    "Sylhet WiFi provider",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ReactLenis root data-theme="dark">
          <TranslationProvider>{children}</TranslationProvider>
          <WhatsAppButton />
        </ReactLenis>
      </body>
    </html>
  );
}
