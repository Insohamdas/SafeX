"use client";

import React from "react";
import { ArrowRight, Radio, Server, Cpu, BellRing, Users } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Signals Ingestion",
      desc: "Anonymized mobile GPS pings, CCTV camera streams, and ground marshal incident reports.",
      tech: "Client & Edge Streams",
      icon: Radio,
    },
    {
      title: "Node.js Core Gateway",
      desc: "High-throughput asynchronous event loop validates tokens and synchronizes state in Redis.",
      tech: "Node.js · TypeScript · Redis",
      icon: Server,
    },
    {
      title: "FastAPI AI Risk Engine",
      desc: "PyTorch neural density models infer choke point bottlenecks and forecast 30-min surge risk.",
      tech: "Python 3.11 · FastAPI · OpenCV",
      icon: Cpu,
    },
    {
      title: "Alert Orchestration",
      desc: "Evaluates role permissions and triggers multi-language geofenced push broadcasts.",
      tech: "PostGIS Spatial Engine",
      icon: BellRing,
    },
    {
      title: "Citizen & Command Egress",
      desc: "Dynamic green corridors appear on mobile apps while commanders track live mitigation.",
      tech: "React Native & Web Portal",
      icon: Users,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#04050A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>REAL-TIME PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            From signal to action in seconds.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A resilient, decoupled pipeline moving from distributed sensor telemetry to coordinated on-ground evasion directives without human latency.
          </p>
        </div>

        {/* Pipeline Layout (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-cyan-400 truncate">
                  {step.tech}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

