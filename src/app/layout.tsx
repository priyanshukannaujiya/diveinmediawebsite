import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DiveIn Media | People | Stories | Impact",
  description:
    "Premium influencer marketing agency website for DiveIn Media — connecting brands with the right creators across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-white">{children}</body>
    </html>
  );
}
