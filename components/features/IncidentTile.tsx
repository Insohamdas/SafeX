"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Tag } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const IncidentTile: React.FC = () => {
  const [reportText, setReportText] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Auto-categorize based on keywords
  const getCategory = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("medic") || lower.includes("faint") || lower.includes("hurt") || lower.includes("injury"))
      return { label: "Medical Emergency", color: "text-red-400 bg-red-500/10 border-red-500/30" };
    if (lower.includes("block") || lower.includes("gate") || lower.includes("door") || lower.includes("stair"))
      return { label: "Blocked Path / Corridor", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
    if (lower.includes("crowd") || lower.includes("surge") || lower.includes("rush") || lower.includes("crush"))
      return { label: "Severe Overcrowding", color: "text-rose-400 bg-rose-500/10 border-rose-500/30" };
    if (lower.includes("lost") || lower.includes("child") || lower.includes("person") || lower.includes("kid"))
      return { label: "Missing Person / Child", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" };
    if (lower.includes("fire") || lower.includes("smoke") || lower.includes("spark"))
      return { label: "Fire / Smoke Hazard", color: "text-red-500 bg-red-600/10 border-red-500/40" };
    return { label: "General Observation", color: "text-slate-400 bg-white/[0.04] border-white/[0.08]" };
  };

  const detectedCategory = getCategory(reportText);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReportText("");
    }, 3500);
  };

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            CITIZEN TRIAGE
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            Interactive simulation
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Citizen Incident Reporting</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Empowers attendees to report physical obstructions or medical needs, with on-device NLP triage classifying hazard severity instantly.
        </p>

        {/* Mini Ingestion Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <Tag className="w-3 h-3 text-slate-400" />
            <span className="text-slate-500">AUTO-TRIAGE:</span>
            <span className={`px-2 py-0.5 rounded-md border text-[10px] font-semibold ${detectedCategory.color}`}>
              {detectedCategory.label}
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="e.g. Overcrowded staircase at Exit C, someone fainted"
              className="w-full bg-[#070A14] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors"
            >
              <Send className="w-3 h-3" />
            </button>
          </div>

          {submitted && (
            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Report tagged & queued for Sector Commander verification!</span>
            </div>
          )}
        </form>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span>NLP INCIDENT CLASSIFIER</span>
        <span>VERIFIED BY ZONE OFFICERS</span>
      </div>
    </SpotlightCard>
  );
};

