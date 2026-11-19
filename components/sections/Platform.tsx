"use client";

import React, { useState } from "react";
import { Smartphone, Monitor, Check, Minus } from "lucide-react";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { CommandDashboard } from "@/components/mockups/CommandDashboard";
import { cn } from "@/lib/utils";

export const Platform: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"visitor" | "authority">("visitor");

  const rolesMatrix = [
    {
      title: "Visitor & Citizen",
      target: "Attendees, pilgrims, fans",
      capabilities: [
        { name: "Dynamic safe-route evasion", allowed: true },
        { name: "Instant multilingual push alerts", allowed: true },
        { name: "One-tap emergency SOS beacon", allowed: true },
        { name: "Citizen hazard photo reporting", allowed: true },
        { name: "Venue-wide geofence broadcasting", allowed: false },
        { name: "AI density telemetry & video streams", allowed: false },
      ],
    },
    {
      title: "Volunteer & Field Staff",
      target: "Ground marshals, stewards",
      capabilities: [
        { name: "Dynamic safe-route evasion", allowed: true },
        { name: "Instant multilingual push alerts", allowed: true },
        { name: "One-tap emergency SOS beacon", allowed: true },
        { name: "Citizen hazard photo reporting", allowed: true },
        { name: "Assigned sector triage queues", allowed: true },
        { name: "Venue-wide geofence broadcasting", allowed: false },
      ],
    },
    {
      title: "Zone Officer",
      target: "Police sector chiefs, medics",
      capabilities: [
        { name: "Sector live heatmap & flow velocity", allowed: true },
        { name: "Sub-second SOS priority dispatch", allowed: true },
        { name: "Verified hazard escalation", allowed: true },
        { name: "Local sector geofence broadcast", allowed: true },
        { name: "Automated bottleneck alerts", allowed: true },
        { name: "Global platform configuration", allowed: false },
      ],
    },
    {
      title: "Command Center Admin",
      target: "Incident commanders, event directors",
      capabilities: [
        { name: "Full venue 3D digital twin & heatmaps", allowed: true },
        { name: "Venue-wide polygon emergency override", allowed: true },
        { name: "AI crowd density threshold tuning", allowed: true },
        { name: "Inter-agency team dispatch telemetry", allowed: true },
        { name: "Automated multi-language broadcast", allowed: true },
        { name: "Post-event bottleneck audit logs", allowed: true },
      ],
    },
  ];

  return (
    <section id="platform" className="py-32 bg-[#060810] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>ROLE-BASED PERSPECTIVE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            One platform. Two perspectives. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Zero blind spots.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            SafeX maintains an identical spatial ground truth, presenting tailored interfaces for the citizen navigating the crowd and the commander orchestrating safety.
          </p>

          {/* Interactive Role Toggle */}
          <div className="inline-flex p-1.5 mt-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setActiveRole("visitor")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeRole === "visitor"
                  ? "bg-white text-slate-950 shadow-xl font-bold"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <Smartphone className="w-4 h-4" />
              <span>Visitor Mobile View</span>
            </button>
            <button
              onClick={() => setActiveRole("authority")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeRole === "authority"
                  ? "bg-white text-slate-950 shadow-xl font-bold"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <Monitor className="w-4 h-4" />
              <span>Authority Command View</span>
            </button>
          </div>
        </div>

        {/* Viewport Stage */}
        <div className="max-w-4xl mx-auto mb-28">
          {activeRole === "visitor" ? (
            <div className="py-6 flex justify-center animate-in fade-in zoom-in-95 duration-300">
              <PhoneMockup />
            </div>
          ) : (
            <div className="py-6 animate-in fade-in zoom-in-95 duration-300">
              <CommandDashboard />
            </div>
          )}
        </div>

        {/* 4-Up Role-Based Permission Matrix */}
        <div className="pt-16 border-t border-white/[0.06]">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Role-Based Access by Design</h3>
            <p className="text-xs sm:text-sm text-slate-400">Strict zero-leakage permissions separating citizen distress signals from command override channels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rolesMatrix.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                    ROLE 0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{role.title}</h4>
                  <div className="text-xs text-slate-400 mb-6 font-mono">{role.target}</div>

                  {/* Capabilities List */}
                  <div className="space-y-3 text-xs">
                    {role.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5">
                        {cap.allowed ? (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span className={cap.allowed ? "text-slate-300" : "text-slate-600"}>
                          {cap.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  TOKEN RBAC PROTECTED
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

