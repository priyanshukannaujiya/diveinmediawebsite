import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.diveinmedia.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DiveIn Media | Influencer Marketing Agency in Mumbai, India",
    template: "%s | DiveIn Media",
  },
  description:
    "DiveIn Media is a Mumbai-based influencer marketing agency helping brands connect with the right creators in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and across India.",
  applicationName: "DiveIn Media",
  keywords: [
    "influencer marketing agency in Mumbai",
    "creator marketing agency India",
    "brand collaborations Mumbai",
    "Instagram influencers India",
    "social media marketing agency India",
    "Mumbai creators agency",
    "Delhi NCR influencer marketing",
    "Bengaluru creator partnerships",
    "Hyderabad influencer collaborations",
    "Pune branded content agency",
    "Kolkata influencer marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "DiveIn Media | Influencer Marketing Agency in Mumbai, India",
    description:
      "Helping brands scale through creator partnerships, local reach, and real impact across India’s major cities.",
    siteName: "DiveIn Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiveIn Media | Influencer Marketing Agency in Mumbai, India",
    description:
      "Influencer marketing and creator collaborations for brands across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and India.",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-white">{children}</body>
    </html>
  );
}
