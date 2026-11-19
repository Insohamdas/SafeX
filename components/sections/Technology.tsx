import React from "react";
import { Server, Cpu, Smartphone, Database, ShieldCheck, Lock, Zap, Scale, Eye, Globe } from "lucide-react";

export const Technology: React.FC = () => {
  const stack = [
    {
      name: "React Native & TypeScript",
      layer: "Mobile Client",
      role: "Cross-platform mobile apps for visitors and on-ground responders with offline map cache.",
      icon: Smartphone,
    },
    {
      name: "Node.js & TypeScript",
      layer: "Core API & Gateway",
      role: "Asynchronous event-driven gateway delivering sub-second WebSocket emergency broadcasts.",
      icon: Server,
    },
    {
      name: "Python 3.11 & FastAPI",
      layer: "AI & Neural Engine",
      role: "PyTorch & OpenCV inference calculating real-time head count and flow stagnation.",
      icon: Cpu,
    },
    {
      name: "PostgreSQL & PostGIS",
      layer: "Spatial Cluster & Cache",
      role: "Sub-millisecond polygon boundary queries and Redis distributed session pub/sub.",
      icon: Database,
    },
  ];

  const principles = [
    {
      title: "Real-time first",
      desc: "Emergency directives degrade with every passing second. Systems run on non-blocking event loops with sub-second delivery targets.",
      icon: Zap,
    },
    {
      title: "Role-based by design",
      desc: "Zero-leakage separation of command channels. Visitors receive clear egress paths; authorities access actionable command telemetry.",
      icon: Lock,
    },
    {
      title: "AI that explains itself",
      desc: "No black boxes. Surge risk indices explicitly reveal contributing factors: inflow rate, bottleneck geometry, and dwell velocity.",
      icon: Eye,
    },
    {
      title: "Language-agnostic",
      desc: "Evacuation paths are translated automatically into the native dialect of every attendee, preventing lethal panic.",
      icon: Globe,
    },
    {
      title: "Engineered for 1M+ scale",
      desc: "Stateless microservice architecture horizontally orchestrating millions of concurrent devices through Redis Pub/Sub.",
      icon: Scale,
    },
    {
      title: "Privacy & Zero Telemetry",
      desc: "Visitor location pings are anonymized and aggregated into spatial density counts. No personal tracking is ever persisted.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="technology" className="py-32 bg-[#060810] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>DEEP-TECH ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered like critical infrastructure.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Public safety systems must not fail when networks congest and stadiums shake. SafeX combines battle-tested components into a fault-tolerant mesh.
          </p>
        </div>

        {/* 4-Layer Stack Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                    {item.layer}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Core Architectural Principles */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Architectural Principles</h3>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Zero Compromise Engineering Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#080B14] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

