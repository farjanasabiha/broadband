import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import TranslationProvider from "./Components/TranslationProvider";
import { Toaster } from "react-hot-toast";
import Preloader from "./Components/Preloader/Preloader";
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
        className="antialiased bg-black"
      >
        <Preloader />
        <ReactLenis root data-theme="dark">
          <TranslationProvider>{children}</TranslationProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#fff",
                color: "#000",
                borderRadius: "10px",
                padding: "12px 18px",
                fontSize: "15px",
              },
            }}
          />
          <WhatsAppButton />
        </ReactLenis>
      </body>
    </html>
  );
}