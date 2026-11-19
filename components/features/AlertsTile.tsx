"use client";

import React, { useState, useEffect } from "react";
import { Radio, AlertTriangle } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const AlertsTile: React.FC = () => {
  const [alerts, setAlerts] = useState<Array<{ id: number; title: string; zone: string; level: string; latency: string }>>([
    { id: 1, title: "East Corridor Overcrowding", zone: "Sector B", level: "caution", latency: "180ms" },
    { id: 2, title: "Bottleneck Surge Warning", zone: "Sector C", level: "danger", latency: "220ms" },
    { id: 3, title: "Medical Escort Request #12", zone: "Gate 1", level: "info", latency: "140ms" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAlerts((prev) => [
        {
          id: Date.now(),
          title: "Automatic Egress Re-routing",
          zone: "Corridor Green",
          level: "safe",
          latency: `${Math.floor(120 + Math.random() * 90)}ms`,
        },
        prev[0],
        prev[1],
      ]);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            REAL-TIME DISPATCH
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            &lt; 1s delivery (design goal)
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          High-throughput WebSocket distribution pushing life-saving geofenced instructions instantly to every device in affected sectors.
        </p>

        {/* Live Sliding Feed */}
        <div className="space-y-2.5 overflow-hidden">
          {alerts.slice(0, 3).map((a) => (
            <div
              key={a.id}
              className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className={`w-3.5 h-3.5 ${a.level === "danger" ? "text-red-400" : a.level === "caution" ? "text-amber-400" : "text-emerald-400"}`} />
                <div>
                  <div className="text-white font-medium">{a.title}</div>
                  <div className="text-[10px] font-mono text-slate-500">{a.zone}</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                {a.latency}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1">
          <Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" /> REDIS PUB/SUB
        </span>
        <span>BROADCAST ACTIVE</span>
      </div>
    </SpotlightCard>
  );
};

