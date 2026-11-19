"use client";

import React, { useEffect, useState } from "react";
import { Activity, Radio, AlertTriangle } from "lucide-react";

export const HeroHUD: React.FC = () => {
  const [alertsCount, setAlertsCount] = useState<number>(14280);
  const [langIndex, setLangIndex] = useState<number>(0);

  const cyclingAlerts = [
    { lang: "EN", text: "Evacuate via Gate 3 · Follow green path" },
    { lang: "HI", text: "गेट 3 से प्रस्थान करें · ग्रीन कॉरिडोर का पालन करें" },
    { lang: "AR", text: "الإخلاء عبر البوابة 3 · اتبع المسار الأخضر" },
    { lang: "BN", text: "গেট ৩ দিয়ে প্রস্থান করুন · সবুজ পথ অনুসরণ করুন" },
    { lang: "ES", text: "Evacue por Puerta 3 · Siga el camino verde" },
  ];

  useEffect(() => {
    // Tick alert count slowly
    const countInterval = setInterval(() => {
      setAlertsCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 2400);

    // Cycle languages
    const langInterval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % cyclingAlerts.length);
    }, 2800);

    return () => {
      clearInterval(countInterval);
      clearInterval(langInterval);
    };
  }, [cyclingAlerts.length]);

  return (
    <>
      {/* Top Right HUD: Live Alerts Dispatched */}
      <div className="hidden lg:block absolute top-28 right-8 z-20 animate-float">
        <div className="glass-panel p-4 rounded-2xl border border-white/[0.08] shadow-2xl max-w-[240px]">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              ALERTS FANOUT
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400">
              Simulation
            </span>
          </div>
          <div className="text-2xl font-mono font-extrabold text-white">
            {alertsCount.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            Sub-second WebSocket dispatch across venue
          </div>
        </div>
      </div>

      {/* Mid Left HUD: Live Zone Density Sparkline */}
      <div className="hidden xl:block absolute top-[48%] left-8 -translate-y-1/2 z-20 animate-float [animation-delay:2s]">
        <div className="glass-panel p-4 rounded-2xl border border-white/[0.08] shadow-2xl max-w-[260px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-emerald-400" />
              PLAZA DENSITY
            </span>
            <span className="text-[10px] font-mono font-bold text-emerald-400">
              1.8 pers/m²
            </span>
          </div>

          {/* SVG Sparkline */}
          <svg className="w-full h-12" viewBox="0 0 200 50">
            <path
              d="M 0 38 Q 30 42, 60 28 T 120 32 T 160 18 T 200 24"
              fill="none"
              stroke="#2EF2A0"
              strokeWidth="2.5"
            />
          </svg>
          <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
            <span>-30 MIN</span>
            <span className="text-slate-400">FLOW STABILIZING</span>
            <span>NOW</span>
          </div>
        </div>
      </div>

      {/* Bottom Right HUD: Cycling Multilingual Alert */}
      <div className="hidden lg:block absolute bottom-24 right-10 z-20 animate-float [animation-delay:4s]">
        <div className="glass-panel p-3.5 rounded-2xl border border-white/[0.08] shadow-2xl max-w-[280px]">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
              AUTO-TRANSLATED DIRECTIVE
            </span>
            <span className="ml-auto text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">
              {cyclingAlerts[langIndex].lang}
            </span>
          </div>
          <p className="text-xs text-slate-200 transition-opacity duration-300 leading-snug">
            {cyclingAlerts[langIndex].text}
          </p>
        </div>
      </div>
    </>
  );
};

