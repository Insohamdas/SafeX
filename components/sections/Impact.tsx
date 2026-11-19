"use client";

import React from "react";
import { Counter } from "@/components/ui/Counter";

export const Impact: React.FC = () => {
  // TODO(founder): replace with real verified pilot numbers once available from field deployments
  const metrics = [
    {
      value: 1000000,
      prefix: "",
      suffix: "+",
      label: "CONCURRENT ATTENDEES",
      sublabel: "Tested throughput limit",
      disclaimer: "Design goal",
    },
    {
      value: 1,
      prefix: "< ",
      suffix: " s",
      label: "ALERT FANOUT LATENCY",
      sublabel: "From detection to screen",
      disclaimer: "Design goal",
    },
    {
      value: 7,
      prefix: "",
      suffix: " Dialects",
      label: "INSTANT LOCALIZATION",
      sublabel: "Auto-adapting crisis copy",
      disclaimer: "Supported at launch",
    },
    {
      value: 24,
      prefix: "",
      suffix: "/7",
      label: "ZONE TELEMETRY",
      sublabel: "Continuous risk indexing",
      disclaimer: "Standard protocol",
    },
  ];

  return (
    <section className="py-24 bg-[#04050A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <span>PERFORMANCE BENCHMARKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What we are building toward.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-mono">
            Rigorous engineering standards for high-consequence deployments.
          </p>
        </div>

        {/* 4 Large Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-2">
                  <Counter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="text-xs font-mono font-bold text-slate-300 tracking-wider">
                  {m.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">{m.sublabel}</div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-cyan-400">
                // {m.disclaimer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

