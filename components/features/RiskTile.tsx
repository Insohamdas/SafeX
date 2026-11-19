"use client";

import React from "react";
import { BrainCircuit, Info } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const RiskTile: React.FC = () => {
  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            NEURAL RISK PREDICTION
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            Illustrative simulation
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">AI Crowd Risk Analysis</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          FastAPI microservice executing computer vision crowd density inference, predicting surges up to 30 minutes before physical choke points lock.
        </p>

        {/* Risk Gauge & Sparkline */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Gauge Block */}
          <div className="p-3.5 rounded-2xl bg-[#070A14] border border-white/[0.08] flex flex-col justify-between">
            <div className="text-[10px] font-mono text-slate-400">CURRENT RISK INDEX</div>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-3xl font-extrabold font-mono text-red-400">87</span>
              <span className="text-xs font-mono text-slate-500">/ 100</span>
            </div>
            <div className="text-[9px] font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded w-fit">
              CRITICAL THRESHOLD
            </div>
          </div>

          {/* 30m Forecast Sparkline */}
          <div className="p-3.5 rounded-2xl bg-[#070A14] border border-white/[0.08] flex flex-col justify-between">
            <div className="text-[10px] font-mono text-slate-400">30-MIN FORECAST</div>
            <svg className="w-full h-8 my-1" viewBox="0 0 100 30">
              <path
                d="M 0 25 Q 25 22, 50 15 T 100 4"
                fill="none"
                stroke="#FF4D5E"
                strokeWidth="2.5"
              />
            </svg>
            <div className="text-[9px] font-mono text-amber-400">TREND: SURGE EXPECTED</div>
          </div>
        </div>

        {/* Explainability Breakdown */}
        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1">
            <Info className="w-3 h-3 text-cyan-400" />
            <span>AI EXPLAINABILITY FACTORS:</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Inflow Velocity:</span>
            <span className="text-red-400 font-bold">3.8 pers/s (Heavy)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Bottleneck Width:</span>
            <span className="text-amber-400 font-bold">2.4m (Restricted)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Plaza Dwell Time:</span>
            <span className="text-red-400 font-bold">+18 min (Stagnant)</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1">
          <BrainCircuit className="w-3 h-3 text-cyan-400" /> FASTAPI & PYTORCH
        </span>
        <span>EXPLAINABLE AI ENGINE</span>
      </div>
    </SpotlightCard>
  );
};

