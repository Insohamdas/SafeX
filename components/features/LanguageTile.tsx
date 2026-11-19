"use client";

import React from "react";
import { Globe } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LANGUAGES } from "@/lib/i18n-demo";

interface LanguageTileProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageTile: React.FC<LanguageTileProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const activeData = LANGUAGES[currentLang] || LANGUAGES.en;

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            LOCALIZED CRISIS COMM
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            RTL & Indic Supported
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Multilingual Alerts</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Zero delay translation ensuring life-or-death evacuation instructions reach attendees in their native tongue without confusion.
        </p>

        {/* Language Quick Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Object.values(LANGUAGES).map((l) => (
            <button
              key={l.code}
              onClick={() => onLanguageChange(l.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                currentLang === l.code
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              {l.nativeName}
            </button>
          ))}
        </div>

        {/* Live Translated Preview Box */}
        <div
          dir={activeData.dir}
          className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.08] min-h-[90px] flex flex-col justify-center transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-1.5 text-[10px] font-mono text-cyan-400">
            <Globe className="w-3 h-3" />
            <span>DIRECTIVE INGESTION · {activeData.name.toUpperCase()}</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {activeData.urgentAlert}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span>7 CRITICAL DIALECTS READY</span>
        <span>AUTO-ADAPTING TELEMETRY</span>
      </div>
    </SpotlightCard>
  );
};

