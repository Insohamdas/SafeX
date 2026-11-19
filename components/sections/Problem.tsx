"use client";

import React, { useState } from "react";
import { EyeOff, ClockAlert, Languages, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Problem: React.FC = () => {
  const [activeBeat, setActiveBeat] = useState<number>(0);

  const beats = [
    {
      title: "Density builds where no one is looking.",
      desc: "Flow stagnation at an exit stairwell or a blocked gateway begins imperceptibly. By the time visual spotters notice, pressure exceeds safe human thresholds.",
      icon: EyeOff,
      metric: "Critical build-up: 4.8 pers/m²",
      visualType: "density",
    },
    {
      title: "Information arrives too late.",
      desc: "Radio relays and chain-of-command delays create 8 to 15-minute response lags. In a surging crowd, 90 seconds makes the difference between orderly divergence and collapse.",
      icon: ClockAlert,
      metric: "Radio lag: +11m 40s delay",
      visualType: "lag",
    },
    {
      title: "People don't speak the same language.",
      desc: "Monolingual loudspeaker announcements create panic among international pilgrims, tourists, and multilingual attendees who cannot understand exit directions.",
      icon: Languages,
      metric: "Miscomprehension rate: 74%",
      visualType: "language",
    },
    {
      title: "Authorities are flying blind.",
      desc: "On-ground responders are flooded with unverified phone calls, scattered radio reports, and lack a single unified spatial picture of crowd dynamics.",
      icon: AlertOctagon,
      metric: "Uncorrelated signals: 320+",
      visualType: "blind",
    },
  ];

  return (
    <section id="problem" className="py-32 bg-[#04050A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
            <span>THE SILENT FAILURE MECHANISM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Crowd disasters aren&apos;t sudden. <br />
            <span className="text-slate-400">They&apos;re invisible, until it&apos;s too late.</span>
          </h2>
        </div>

        {/* 4-Beat Interactive Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 4 Sequential Beats */}
          <div className="lg:col-span-6 space-y-4">
            {beats.map((beat, idx) => {
              const Icon = beat.icon;
              const isActive = activeBeat === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveBeat(idx)}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left",
                    isActive
                      ? "bg-white/[0.04] border-red-500/40 shadow-xl shadow-red-500/5"
                      : "bg-white/[0.01] border-white/[0.06] hover:border-white/[0.12] opacity-70"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono",
                      isActive ? "bg-red-500/20 text-red-400" : "bg-white/[0.04] text-slate-500"
                    )}>
                      0{idx + 1}
                    </div>
                    <h3 className={cn(
                      "text-lg font-bold transition-colors",
                      isActive ? "text-white" : "text-slate-300"
                    )}>
                      {beat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed pl-11">
                    {beat.desc}
                  </p>

                  <div className="mt-3 pl-11 text-xs font-mono text-red-400/90 font-medium">
                    {beat.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage for Active Beat */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white/[0.1] bg-[#080B14] p-8 min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/[0.06]">
                <span>DIAGNOSTIC TELEMETRY</span>
                <span>FAILURE BEAT 0{activeBeat + 1} / 04</span>
              </div>

              {/* Dynamic Visual Content */}
              <div className="my-auto py-8">
                {activeBeat === 0 && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-amber-400">SECTOR C · BOTTLENECK CHOKE ACCUMULATION</div>
                    <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-white/[0.08]">
                      <div className="bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 h-full w-[88%] animate-pulse" />
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Flow: Stagnant (0.12 m/s)</span>
                      <span className="text-red-400 font-bold">Surge Imminent</span>
                    </div>
                  </div>
                )}

                {activeBeat === 1 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300">
                      [14:02:10] Sensor: Choke point threshold exceeded (+4.2 pers/m²)
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-400">
                      [14:09:45] Verbal radio relay received at central dispatch
                    </div>
                    <div className="p-3 rounded-xl bg-red-900/20 border border-red-400/20 text-red-400 font-bold">
                      ⚠ Total Actionable Time Lost: 7 minutes, 35 seconds
                    </div>
                  </div>
                )}

                {activeBeat === 2 && (
                  <div className="space-y-4 text-center">
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.08] text-sm text-slate-300 font-sans">
                      Loudspeaker Broadcast: &ldquo;Please clear the North corridor immediately.&rdquo;
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">EN: 26%</div>
                      <div className="p-2 rounded bg-white/[0.02] text-slate-500 border border-white/[0.04]">HI: Missed</div>
                      <div className="p-2 rounded bg-white/[0.02] text-slate-500 border border-white/[0.04]">AR: Missed</div>
                      <div className="p-2 rounded bg-white/[0.02] text-slate-500 border border-white/[0.04]">BN: Missed</div>
                    </div>
                  </div>
                )}

                {activeBeat === 3 && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-400">COMMAND ROOM CONFLICT MATRIX</div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex justify-between">
                      <span>Incoherent Radio Call #884</span>
                      <span className="text-amber-400">UNVERIFIED</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex justify-between">
                      <span>Gate 2 Panic Report</span>
                      <span className="text-red-400">CONFLICTING</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex justify-between">
                      <span>Field Unit Beta Location</span>
                      <span className="text-slate-500">OFFLINE</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Cut: The Resolution Statement */}
              <div className="pt-4 border-t border-white/[0.08] text-right">
                <span className="font-extrabold text-sm text-cyan-400 font-sans tracking-wide">
                  SafeX was built to end this.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

