"use client";

import React, { useState } from "react";
import { Navigation, RefreshCw } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const RouteTile: React.FC = () => {
  const [avoidingDanger, setAvoidingDanger] = useState<boolean>(true);

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            CONGESTION EVASION
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
            DYNAMIC ALGORITHM
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Safe-Route Guidance</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Graph-based path recalculation steering crowds away from developing choke points toward wide egress corridors.
        </p>

        {/* Dynamic Route SVG Map */}
        <div className="relative h-44 rounded-2xl bg-[#070A14] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between text-[10px] font-mono text-slate-400 z-10">
            <span>START: PLAZA</span>
            <span className={avoidingDanger ? "text-emerald-400" : "text-red-400"}>
              {avoidingDanger ? "CORRIDOR GREEN (CLEAR)" : "DIRECT PATH (BLOCKED)"}
            </span>
          </div>

          <div className="relative w-full h-24 my-auto flex items-center justify-center">
            {/* Red Hotspot */}
            <div className="absolute right-12 top-2 w-14 h-14 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-red-500/40 animate-ping" />
              <span className="text-[7px] font-mono font-bold text-red-300 absolute">SURGE</span>
            </div>

            {/* Path Graphic */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
              <path
                d={avoidingDanger ? "M 20 70 Q 70 15, 120 40 T 180 80" : "M 20 70 L 150 25"}
                fill="none"
                stroke={avoidingDanger ? "#2EF2A0" : "#FF4D5E"}
                strokeWidth="3.5"
                strokeDasharray="6,4"
              />
            </svg>
          </div>

          <button
            onClick={() => setAvoidingDanger(!avoidingDanger)}
            className="w-full py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-[10px] font-mono text-slate-200 flex items-center justify-center gap-1.5 z-10 transition-colors"
          >
            <RefreshCw className="w-3 h-3 text-cyan-400" />
            <span>Simulate Choke Point Reroute</span>
          </button>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span>POSTGIS ROUTING ENGINE</span>
        <span className="text-emerald-400">ZERO CRUSH DETOUR</span>
      </div>
    </SpotlightCard>
  );
};

