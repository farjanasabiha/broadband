import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Broadband Internet & WiFi Service in Sylhet - SyncIT",
  description: "SyncIT offers Sylhet's best broadband and WiFi service. Free connection, dual-band router-ready, 24/7 support, low latency, and plans for home & business.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ReactLenis root data-theme="dark">
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}