import React from "react";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020306] border-t border-white/[0.08] pt-24 pb-16 overflow-hidden">
      {/* Giant Faded Watermark */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none opacity-[0.025] font-extrabold text-[16vw] tracking-tighter text-white whitespace-nowrap leading-none z-0">
        SAFEX
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">SafeX</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The operating system for mass gatherings. Bridging visitors and authorities with instant multilingual alerts, dynamic safe routing, and proactive AI crowd intelligence.
            </p>

            <div className="text-xs font-mono text-slate-500 pt-2">
              ENGINEERED FOR PLANETARY-SCALE CROWD SAFETY
            </div>
          </div>

          {/* Column: Platform */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Platform
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Safe-Route Navigation</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Multilingual Alerts</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Emergency SOS Beacon</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Incident Ingestion</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Live Zone Telemetry</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">AI Risk Forecasting</a></li>
            </ul>
          </div>

          {/* Column: Mass Gatherings */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Use Cases
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#use-cases" className="hover:text-cyan-400 transition-colors">Pilgrimages & Sacred Convocations</a></li>
              <li><a href="#use-cases" className="hover:text-cyan-400 transition-colors">Stadiums & Mega Arenas</a></li>
              <li><a href="#use-cases" className="hover:text-cyan-400 transition-colors">Music & Cultural Festivals</a></li>
              <li><a href="#use-cases" className="hover:text-cyan-400 transition-colors">Transit Hubs & High-Speed Rails</a></li>
              <li><a href="#use-cases" className="hover:text-cyan-400 transition-colors">National Rallies & Civic Assemblies</a></li>
            </ul>
          </div>

          {/* Column: Architecture */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Engineering
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">Node.js Gateway</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">FastAPI Neural Engine</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">React Native Mobile</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">PostGIS Spatial Pipelines</a></li>
              <li><a href="https://github.com/Insohamdas/SafeX" target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors">GitHub Repository <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} SafeX Intelligence Infrastructure. Built for critical public safety.
          </div>
          <div className="flex items-center gap-6">
            <span>Apache-2.0 License</span>
            <span>Zero-Telemetry Privacy Core</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

