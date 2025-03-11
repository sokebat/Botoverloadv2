import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bot Overload AI Powered WhatsApp Automation",
  description:
    " Revolutionizing social media automation with AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
