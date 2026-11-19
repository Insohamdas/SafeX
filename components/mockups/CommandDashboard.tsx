"use client";

import React from "react";
import { Activity, Radio, Shield, Users, AlertTriangle } from "lucide-react";

export const CommandDashboard: React.FC = () => {
  return (
    <div className="w-full rounded-3xl bg-[#090C16] border border-white/[0.1] p-6 shadow-2xl space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
            <Shield className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Operations Command Portal</h4>
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              POSTGIS SPATIAL CLUSTER · 6 MONITORED SECTORS
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
            TOTAL CONCURRENT: <strong className="text-white">328,400</strong>
          </span>
          <span className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
            1 CRITICAL SURGE
          </span>
        </div>
      </div>

      {/* Grid: 3 Live Sectors Telemetry */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Sector A */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-slate-200">Sector A (Main Gate)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
              SAFE (41%)
            </span>
          </div>
          <div className="text-2xl font-mono font-extrabold text-white mb-2">1.2 pers/m²</div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-full w-[41%]" />
          </div>
        </div>

        {/* Sector B */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-slate-200">Sector B (Plaza)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400">
              CAUTION (68%)
            </span>
          </div>
          <div className="text-2xl font-mono font-extrabold text-amber-400 mb-2">2.8 pers/m²</div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div className="bg-amber-500 h-full w-[68%]" />
          </div>
        </div>

        {/* Sector C */}
        <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-red-200">Sector C (North Concourse)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 animate-pulse font-bold">
              CRITICAL (92%)
            </span>
          </div>
          <div className="text-2xl font-mono font-extrabold text-red-400 mb-2">4.7 pers/m²</div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div className="bg-red-500 h-full w-[92%] animate-pulse" />
          </div>
        </div>

      </div>

      {/* Real-Time Live Triage Stream */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            AUTOMATED TRIAGE STREAM
          </span>
          <span>SUB-SECOND WEBSOCKET INGESTION</span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span className="text-slate-200">
                [AI-VISION #04] Flow rate dropped below 0.2 m/s at Sector C Choke
              </span>
            </div>
            <span className="text-[10px] font-mono text-red-400">REROUTE DISPATCHED</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-300">
                [GEOFENCE ALERT] Corridor Green directive broadcasted to 14,200 devices
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">ACKNOWLEDGED 98%</span>
          </div>
        </div>
      </div>

    </div>
  );
};

