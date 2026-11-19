import React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

export const Roadmap: React.FC = () => {
  // TODO(founder): confirm roadmap items and rollout timeline with team
  const phases = [
    {
      phase: "Phase 1: Now",
      status: "Shipped Core",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      icon: CheckCircle2,
      items: [
        "Dynamic safe-route corridor guidance (congestion evasion)",
        "Instant multi-language broadcast in 7 major dialects",
        "Hardware-backed one-tap SOS beacon with live GPS dispatch",
        "Citizen incident reporting with automatic severity classification",
        "GIS live zone polygon monitoring and 1Hz density telemetry",
        "FastAPI neural network crowd density and surge forecasting",
      ],
    },
    {
      phase: "Phase 2: Next",
      status: "In Development",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      icon: Clock,
      items: [
        "Offline mesh broadcast relay (BLE / peer-to-peer ad-hoc sync)",
        "Direct integration with municipal traffic and highway signals",
        "Automated turnstile and barrier control override API",
        "Wearable hardware beacons for children and elderly pilgrims",
        "Predictive responder staffing and patrol route allocation",
      ],
    },
    {
      phase: "Phase 3: Later",
      status: "Future Vision",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      icon: Sparkles,
      items: [
        "Acoustic panic wave and stampede murmur audio detection",
        "Autonomous drone patrol feed ingestion and thermal crowd counting",
        "Global cross-event crowd behavior telemetry foundation model",
        "Direct satellite downlink emergency connectivity",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-32 bg-[#04050A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>PLATFORM EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            The Roadmap to Mass Safety
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A transparent view of currently operational platform capabilities and upcoming engineering milestones.
          </p>
        </div>

        {/* 3-Column Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      {p.phase}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${p.badgeColor}`}>
                      {p.status}
                    </span>
                  </div>

                  <ul className="space-y-3.5 my-6 text-xs text-slate-300 leading-relaxed">
                    {p.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  MILESTONE BLOCK 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

