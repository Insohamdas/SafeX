import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import { CursorGlow } from "@/components/layout/CursorGlow";

export const metadata: Metadata = {
  title: "SafeX: Real-Time Crowd Safety Platform for Mass Gatherings",
  description:
    "SafeX connects visitors and authorities through real-time multilingual alerts, AI-driven risk prediction, and live zone monitoring to prevent crowd surges at mass gatherings.",
  keywords: [
    "crowd safety",
    "mass gathering intelligence",
    "real-time evacuation",
    "surge risk analysis",
    "multilingual emergency alerts",
    "pilgrimage safety",
    "stadium crisis management",
  ],
  authors: [{ name: "SafeX Team" }],
  openGraph: {
    title: "SafeX: Real-Time Crowd Safety Platform for Mass Gatherings",
    description: "The operating system for mass gatherings. Zero crowd crush. Sub-second response.",
    url: "https://safex.vercel.app",
    siteName: "SafeX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeX: Real-Time Crowd Safety Platform for Mass Gatherings",
    description: "The operating system for mass gatherings. Real-time crowd intelligence and crisis mitigation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#04050A] text-[#EAF0FF] antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen relative overflow-x-hidden">
        {/* Subtle Engineering Grid Background */}
        <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-40" />

        {/* Film Noise Overlay */}
        <div className="noise-overlay" />

        {/* Ambient Pointer Halo (Desktop Only) */}
        <CursorGlow />

        {/* 1.6s Radar Preloader */}
        <Preloader />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

