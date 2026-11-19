"use client";

import React, { useState } from "react";
import { AlertCircle, Navigation, Shield, Radio, CheckCircle } from "lucide-react";

export const PhoneMockup: React.FC = () => {
  const [sosSent, setSosSent] = useState<boolean>(false);
  const [routeMode, setRouteMode] = useState<"direct" | "evasion">("evasion");

  return (
    <div className="w-full max-w-[340px] mx-auto rounded-[44px] p-3.5 bg-[#0C101C] border-4 border-slate-700/80 shadow-2xl relative">
      {/* Notch */}
      <div className="w-36 h-4 bg-slate-800 rounded-b-2xl mx-auto mb-3" />

      {/* Screen Frame */}
      <div className="bg-[#04050A] rounded-[32px] p-4 text-xs flex flex-col gap-3 min-h-[500px]">
        
        {/* App Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-1.5 font-bold text-white text-xs">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>SafeX Citizen</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Radio className="w-2.5 h-2.5 animate-pulse" /> LIVE GPS
          </span>
        </div>

        {/* Live Urgent Alert Card */}
        <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold flex items-center gap-1 text-[11px] text-red-400">
              <AlertCircle className="w-3.5 h-3.5" />
              SURGE ADVISORY
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 font-mono">SECTOR 4</span>
          </div>
          <p className="text-[11px] leading-tight text-slate-300">
            North bottleneck detected. Diverting your group to Corridor Green.
          </p>
        </div>

        {/* Vector Safe Navigation Screen */}
        <div className="relative h-44 rounded-2xl bg-[#090C16] border border-white/[0.08] overflow-hidden p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center z-10 text-[10px]">
            <span className="text-slate-400 font-mono">Dynamic Safe-Route</span>
            <span className="text-emerald-400 font-mono bg-emerald-500/20 px-1.5 py-0.5 rounded">
              {routeMode === "evasion" ? "Corridor Green Active" : "Direct Congested"}
            </span>
          </div>

          {/* SVG Map Schematics */}
          <div className="relative w-full h-24 my-auto flex items-center justify-center">
            {/* Red Danger Zone */}
            <div className="absolute right-8 top-1 w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-red-500/40 animate-ping" />
              <span className="text-[8px] font-mono font-bold text-red-300 absolute">CHOKE</span>
            </div>

            {/* User Location */}
            <div className="absolute left-6 bottom-2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Safe Navigation Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
              <path
                d={routeMode === "evasion" ? "M 30 75 Q 70 20, 120 50 T 180 85" : "M 30 75 L 160 30"}
                fill="none"
                stroke={routeMode === "evasion" ? "#2EF2A0" : "#FF4D5E"}
                strokeWidth="4"
                strokeDasharray="6,4"
              />
            </svg>
          </div>

          <button
            onClick={() => setRouteMode(routeMode === "evasion" ? "direct" : "evasion")}
            className="w-full py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-[10px] font-mono text-slate-300 flex items-center justify-center gap-1.5 transition-colors z-10"
          >
            <Navigation className="w-3 h-3 text-cyan-400" />
            <span>Toggle Evasion Corridor</span>
          </button>
        </div>

        {/* SOS One-Tap Beacon */}
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center text-center gap-2">
          {!sosSent ? (
            <button
              onClick={() => setSosSent(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95"
            >
              Emergency SOS Beacon
            </button>
          ) : (
            <div className="w-full py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-mono text-[11px] flex items-center justify-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>SOS Active · Responder Dispatched</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

