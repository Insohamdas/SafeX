"use client";

import React, { useState, useEffect } from "react";
import { Layers } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const ZoneMonitorTile: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [ticks, setTicks] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((t) => t + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const zones = [
    { id: "A", name: "Sector A · Main Gate", density: 1.4, status: "safe", color: "fill-emerald-500/30 stroke-emerald-400" },
    { id: "B", name: "Sector B · Central Plaza", density: 2.8, status: "caution", color: "fill-amber-500/30 stroke-amber-400" },
    { id: "C", name: "Sector C · North Concourse", density: 4.6, status: "critical", color: "fill-red-500/40 stroke-red-500 animate-pulse" },
    { id: "D", name: "Sector D · West Corridors", density: 0.9, status: "safe", color: "fill-cyan-500/20 stroke-cyan-400" },
  ];

  const activeZoneData = zones.find((z) => z.id === hoveredZone) || zones[2];

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            GIS SPATIAL TELEMETRY
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            1 Hz Refresh Rate
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Live Zone Monitoring</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Subdivides complex stadiums, shrines, and plazas into polygon zones tracked for real-time occupant density and flow velocity.
        </p>

        {/* Interactive SVG Zone Polygons Map */}
        <div className="relative h-44 rounded-2xl bg-[#070A14] border border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Sector A */}
            <polygon
              points="10,20 120,10 100,75 15,80"
              className={`cursor-pointer transition-colors ${zones[0].color}`}
              strokeWidth="1.5"
              onMouseEnter={() => setHoveredZone("A")}
            />
            {/* Sector B */}
            <polygon
              points="125,12 250,15 220,75 105,75"
              className={`cursor-pointer transition-colors ${zones[1].color}`}
              strokeWidth="1.5"
              onMouseEnter={() => setHoveredZone("B")}
            />
            {/* Sector C */}
            <polygon
              points="18,85 135,82 110,140 10,135"
              className={`cursor-pointer transition-colors ${zones[2].color}`}
              strokeWidth="2"
              onMouseEnter={() => setHoveredZone("C")}
            />
            {/* Sector D */}
            <polygon
              points="140,82 285,80 260,145 115,140"
              className={`cursor-pointer transition-colors ${zones[3].color}`}
              strokeWidth="1.5"
              onMouseEnter={() => setHoveredZone("D")}
            />

            {/* Labels */}
            <text x="50" y="50" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">SEC A</text>
            <text x="170" y="50" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">SEC B</text>
            <text x="50" y="115" fill="#FF4D5E" fontSize="10" fontFamily="monospace" fontWeight="bold">SEC C (SURGE)</text>
            <text x="180" y="115" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">SEC D</text>
          </svg>

          {/* Interactive Tooltip Bar */}
          <div className="z-10 bg-slate-950/80 backdrop-blur-md rounded-xl p-2 border border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
            <span className="text-white font-bold">{activeZoneData.name}</span>
            <span className={`px-2 py-0.5 rounded ${activeZoneData.status === "critical" ? "bg-red-500/20 text-red-300" : "bg-emerald-500/20 text-emerald-300"}`}>
              {activeZoneData.density} pers/m² ({activeZoneData.status.toUpperCase()})
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1">
          <Layers className="w-3 h-3 text-cyan-400" /> POSTGIS POLYGONS
        </span>
        <span>HOVER TO INSPECT</span>
      </div>
    </SpotlightCard>
  );
};

