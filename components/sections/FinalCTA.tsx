"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { pilotRequestSchema, PilotRequestInput } from "@/lib/schema";

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState<PilotRequestInput>({
    fullName: "",
    organization: "",
    workEmail: "",
    eventType: "pilgrimage_religious",
    expectedAttendance: "50k_to_200k",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [successRef, setSuccessRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const validation = pilotRequestSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/pilot-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessRef(data.referenceId || "SFX-882104");
      } else {
        setErrors({ general: data.message || "Failed to submit request" });
      }
    } catch {
      setErrors({ general: "Network error. Please try again or email ops@safex.internal." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pilot" className="py-36 bg-[#04050A] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Glowing Pulse Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>OPERATIONAL DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your next gathering deserves <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              better than hope.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Bring SafeX to your venue. Let&apos;s run a structured pilot and establish an impenetrable safety perimeter.
          </p>
        </div>

        {/* Pilot Registration Card */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#080B14]/80 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl">
          {!successRef ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errors.general && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.general}</span>
                </div>
              )}

              {/* Honeypot field (hidden from humans) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Commander / Director Name"
                    className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Organization / Agency *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Police Dept, Stadium Authority, Trust"
                    className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.organization && <p className="text-[11px] text-red-400 mt-1">{errors.organization}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="director@agency.gov"
                    className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.workEmail && <p className="text-[11px] text-red-400 mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Gathering Context *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="pilgrimage_religious">Pilgrimage / Religious Convocation</option>
                    <option value="stadium_sports">Stadium / Arena Event</option>
                    <option value="concert_festival">Music / Cultural Festival</option>
                    <option value="convention_expo">World Expo / Mega Convention</option>
                    <option value="transit_hub">Mass Transit Rail Hub</option>
                    <option value="public_rally_civic">Public Rally / Civic Gathering</option>
                    <option value="other">Other High-Density Site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Expected Attendance *
                  </label>
                  <select
                    value={formData.expectedAttendance}
                    onChange={(e) => setFormData({ ...formData, expectedAttendance: e.target.value as any })}
                    className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="10k_to_50k">10,000 – 50,000</option>
                    <option value="50k_to_200k">50,000 – 200,000</option>
                    <option value="200k_to_500k">200,000 – 500,000</option>
                    <option value="500k_plus">500,000+ (Planetary Scale)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Event Scope & Operational Details *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail venue layout, upcoming dates, and critical choke points of concern..."
                  className="w-full bg-[#04060E] border border-white/[0.1] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  // Confidential agency dispatch. Direct engineer follow-up.
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-white text-slate-950 hover:bg-slate-100 shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Pilot Request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pilot Request Registered
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                Your incident command inquiry has been assigned reference{" "}
                <strong className="text-cyan-400 font-mono">{successRef}</strong>. Our operations liaison will contact your office within 4 hours.
              </p>
              <button
                onClick={() => setSuccessRef(null)}
                className="mt-6 text-xs font-mono text-slate-400 hover:text-white underline"
              >
                Submit another inquiry
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

