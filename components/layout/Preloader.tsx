"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
    // Only show once per session
    const hasSeen = sessionStorage.getItem("safex_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeen || prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("safex_preloader_seen", "true");
      }, 500);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04050A] transition-opacity duration-500 cursor-pointer select-none",
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Radar sweep ring */}
      <div className="relative flex items-center justify-center w-36 h-36">
        <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-40"></div>
        <div className="absolute inset-4 rounded-full border border-cyan-400/40 animate-pulse"></div>
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="font-extrabold text-2xl tracking-tight text-white font-sans flex items-center gap-1.5">
          <span>SafeX</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        </div>
        <p className="text-xs font-mono tracking-widest uppercase text-slate-500">
          INITIALIZING CROWD INTELLIGENCE LAYER
        </p>
      </div>

      <span className="absolute bottom-10 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
        Click to skip
      </span>
    </div>
  );
};

