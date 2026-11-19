"use client";

import React from "react";
import { ArrowUpRight, Play, ShieldCheck, ChevronDown } from "lucide-react";
import { CrowdScene } from "./CrowdScene";
import { HeroHUD } from "./HeroHUD";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#04050A]">
      {/* 3D/Canvas Background Flow Layer */}
      <CrowdScene />

      {/* Floating HUD Telemetry Cards */}
      <HeroHUD />

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-inner backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>LIVE CROWD INTELLIGENCE · BUILT FOR MASS GATHERINGS</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-white leading-[1.0] mb-6 font-sans">
          <span className="text-slate-300">Millions of people.</span> <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 bg-clip-text text-transparent">
            One intelligent safety layer.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          SafeX connects visitors and authorities through real-time alerts, AI-driven risk prediction and live zone monitoring, so the world&apos;s largest gatherings stay safe, flowing and under control.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <a
            href="#pilot"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold bg-white text-slate-950 hover:bg-slate-100 shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20"
          >
            <span>Request a pilot</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-medium bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-200"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/30" />
            <span>Watch the simulation</span>
          </a>
        </div>

      </div>

      {/* Bottom Row: Stat Chips & Scroll Indicator */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Stat Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-slate-400 tracking-widest uppercase">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> REAL-TIME
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> MULTILINGUAL
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> ROLE-BASED
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> AI-POWERED
            </span>
          </div>

          {/* Scroll Down Hint */}
          <a
            href="#problem"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 font-mono tracking-wider transition-colors"
          >
            <span>DISCOVER PLATFORM</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

        </div>
      </div>
    </section>
  );
};

