"use client";

import React from "react";
import { AlertsTile } from "@/components/features/AlertsTile";
import { RouteTile } from "@/components/features/RouteTile";
import { LanguageTile } from "@/components/features/LanguageTile";
import { SOSTile } from "@/components/features/SOSTile";
import { IncidentTile } from "@/components/features/IncidentTile";
import { ZoneMonitorTile } from "@/components/features/ZoneMonitorTile";
import { RiskTile } from "@/components/features/RiskTile";

interface FeaturesProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  return (
    <section id="features" className="py-32 bg-[#04050A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>FULL-SPECTRUM INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Everything a gathering needs to stay safe, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              in one real-time system.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every feature is engineered for zero-latency execution under the extreme network density and acoustic chaos of millions in motion.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Tile 1: Real-Time Alerts (span 7) */}
          <div className="md:col-span-12 lg:col-span-7 min-h-[380px]">
            <AlertsTile />
          </div>

          {/* Tile 2: Safe Route Guidance (span 5) */}
          <div className="md:col-span-12 lg:col-span-5 min-h-[380px]">
            <RouteTile />
          </div>

          {/* Tile 3: Multilingual Alerts (span 4) */}
          <div className="md:col-span-12 lg:col-span-4 min-h-[380px]">
            <LanguageTile currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>

          {/* Tile 4: Emergency SOS (span 4) */}
          <div className="md:col-span-12 lg:col-span-4 min-h-[380px]">
            <SOSTile />
          </div>

          {/* Tile 5: Incident Reporting (span 4) */}
          <div className="md:col-span-12 lg:col-span-4 min-h-[380px]">
            <IncidentTile />
          </div>

          {/* Tile 6: Live Zone Monitoring (span 6) */}
          <div className="md:col-span-12 lg:col-span-6 min-h-[380px]">
            <ZoneMonitorTile />
          </div>

          {/* Tile 7: AI Risk Analysis (span 6) */}
          <div className="md:col-span-12 lg:col-span-6 min-h-[380px]">
            <RiskTile />
          </div>

        </div>

      </div>
    </section>
  );
};

