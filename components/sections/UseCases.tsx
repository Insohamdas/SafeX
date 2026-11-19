"use client";

import React, { useState } from "react";
import { Check, Shield, Landmark, Trophy, Music, Train } from "lucide-react";
import { cn } from "@/lib/utils";

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const useCases = [
    {
      id: "pilgrimages",
      label: "Pilgrimages & Festivals",
      icon: Landmark,
      headline: "Extreme Density Across Sacred Convocations",
      problem: "Millions of devotees converging through ancient, narrow corridors where sudden bottlenecks cause catastrophic crushes.",
      bullets: [
        "Multilingual alerts automatically translated into 7 native languages.",
        "Dynamic safe-route navigation diverting flow to open peripheral roads.",
        "One-tap offline-ready SOS beacons connecting lost pilgrims with marshals.",
      ],
      metric: "Tested for 1M+ Attendees (Design Goal)",
    },
    {
      id: "stadiums",
      label: "Stadiums & Arenas",
      icon: Trophy,
      headline: "High-Velocity Ingress & Post-Match Egress",
      problem: "Surges at turnstiles and blocked stairways following sudden weather shifts or post-game celebrations.",
      bullets: [
        "Real-time turnstile density monitoring with automated gate balancing.",
        "Localized geofence broadcasts targeting specific seating tiers.",
        "Instant marshal dispatch for physical barrier clearance.",
      ],
      metric: "Egress clearance time reduced by up to 35%",
    },
    {
      id: "concerts",
      label: "Music & Cultural Expos",
      icon: Music,
      headline: "Festival Grounds & Mosh Pit Surge Control",
      problem: "Acoustic saturation drowning out announcements while stage surges compress front-row crowds.",
      bullets: [
        "Haptic vibration push alerts bypassing heavy stage acoustics.",
        "Citizen incident reporting with geotagged photo verification.",
        "Zone officer triage tracking field medic response in real time.",
      ],
      metric: "Sub-second emergency push delivery",
    },
    {
      id: "transit",
      label: "Mass Transit Hubs",
      icon: Train,
      headline: "Platform Stagnation & Commuter Surges",
      problem: "Train delays causing sudden platform overcrowding where platform edge incidents threaten lives.",
      bullets: [
        "AI camera density triggers pacing passenger escalator flow.",
        "Immediate corridor rerouting preventing bottlenecking at concourses.",
        "Unified command console coordinating police and transit operators.",
      ],
      metric: "Automated flow throttling in under 4 seconds",
    },
  ];

  const current = useCases[activeTab];
  const Icon = current.icon;

  return (
    <section id="use-cases" className="py-32 bg-[#060810] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>OPERATIONAL DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered for high-stakes gatherings.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every mass gathering presents unique architectural choke points and human behavioral dynamics. SafeX adapts across all operational environments.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {useCases.map((uc, i) => {
              const TabIcon = uc.icon;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200",
                    activeTab === i
                      ? "bg-white text-slate-950 shadow-xl font-bold"
                      : "bg-white/[0.02] text-slate-400 hover:text-white border border-white/[0.06]"
                  )}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{uc.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#090C16] border border-white/[0.1] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Problem & Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Icon className="w-4 h-4" />
                <span>CASE STUDY SPECIFICATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {current.headline}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06]">
                <strong className="text-slate-200">The Vulnerability: </strong>
                {current.problem}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  How SafeX Resolves It:
                </div>
                {current.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
                ✓ {current.metric}
              </div>
            </div>

            {/* Right Column: High-Tech Schematic Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] aspect-square rounded-3xl bg-[#04060E] border border-white/[0.08] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent pointer-events-none" />
                
                {/* Vector Schematic */}
                <svg className="w-48 h-48" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(25, 227, 255, 0.2)" strokeWidth="1.5" strokeDasharray="4,4" />
                  <circle cx="100" cy="100" r="16" fill="rgba(25, 227, 255, 0.15)" stroke="#19E3FF" strokeWidth="2" />
                  
                  {/* Corridors */}
                  <line x1="100" y1="20" x2="100" y2="84" stroke="#2EF2A0" strokeWidth="3" strokeDasharray="6,3" />
                  <line x1="100" y1="116" x2="100" y2="180" stroke="#2EF2A0" strokeWidth="3" strokeDasharray="6,3" />
                  <line x1="20" y1="100" x2="84" y2="100" stroke="#FF4D5E" strokeWidth="3" />
                  <line x1="116" y1="100" x2="180" y2="100" stroke="#2EF2A0" strokeWidth="3" strokeDasharray="6,3" />
                </svg>

                <div className="mt-4 text-center">
                  <div className="text-xs font-mono font-bold text-white">CORRIDOR FLOW ARCHITECTURE</div>
                  <div className="text-[10px] font-mono text-slate-500">Autonomous choke evasion</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

