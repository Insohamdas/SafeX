"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sliders, AlertOctagon, RotateCcw, Activity } from "lucide-react";
import { computeZoneTelemetry } from "@/lib/simulation";

export const Simulator: React.FC = () => {
  const [attendees, setAttendees] = useState<number>(185000);
  const [incidentActive, setIncidentActive] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const telemetry = computeZoneTelemetry(attendees, incidentActive);

  // Dynamic Canvas rendering the simulated venue particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    const height = (canvas.height = 360);

    const particlesCount = Math.min(Math.round((attendees / 1000000) * 800) + 80, 700);
    const particles = Array.from({ length: particlesCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      zone: Math.floor(Math.random() * 6),
    }));

    const render = () => {
      ctx.fillStyle = "rgba(7, 10, 20, 0.35)";
      ctx.fillRect(0, 0, width, height);

      // Draw Zone outlines
      const zoneWidth = width / 3;
      const zoneHeight = height / 2;

      telemetry.zones.forEach((z, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const zx = col * zoneWidth;
        const zy = row * zoneHeight;

        ctx.strokeStyle =
          z.status === "critical"
            ? "rgba(255, 77, 94, 0.45)"
            : z.status === "danger"
            ? "rgba(255, 194, 75, 0.35)"
            : "rgba(255, 255, 255, 0.06)";
        ctx.strokeRect(zx + 6, zy + 6, zoneWidth - 12, zoneHeight - 12);

        // Zone Name
        ctx.fillStyle = z.status === "critical" ? "#FF4D5E" : "rgba(255,255,255,0.4)";
        ctx.font = "10px monospace";
        ctx.fillText(`${z.name} [${z.riskScore}%]`, zx + 14, zy + 24);

        if (z.rerouteActive) {
          ctx.fillStyle = "#2EF2A0";
          ctx.fillText("↳ REROUTE ACTIVE", zx + 14, zy + 40);
        }
      });

      // Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, incidentActive ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx.fillStyle =
          telemetry.highestRiskScore > 80
            ? "rgba(255, 77, 94, 0.85)"
            : telemetry.highestRiskScore > 60
            ? "rgba(255, 194, 75, 0.8)"
            : "rgba(25, 227, 255, 0.75)";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [attendees, incidentActive, telemetry]);

  return (
    <section id="simulator" className="py-32 bg-[#060810] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE MASS CROWD SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Drag the crowd. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Watch SafeX respond.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Test how SafeX algorithms dynamically ingest surge conditions, initiate automated flow diversions, and mitigate dangerous density build-ups in real time.
          </p>
        </div>

        {/* Simulator Console Container */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#080B14] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Control Bar: Attendee Slider & Incident Button */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            
            {/* Slider Control */}
            <div className="w-full lg:max-w-xl space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                  SIMULATED GATHERING SCALE:
                </span>
                <span className="text-2xl font-mono font-extrabold text-cyan-400">
                  {attendees.toLocaleString()} <span className="text-xs text-slate-400 font-normal">attendees</span>
                </span>
              </div>

              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>10,000 (Arena)</span>
                <span>300,000 (Festival)</span>
                <span>1,000,000+ (Pilgrimage)</span>
              </div>
            </div>

            {/* Surprise Incident Trigger Button */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setIncidentActive(!incidentActive)}
                className={`flex-1 lg:flex-none px-6 py-3 rounded-2xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                  incidentActive
                    ? "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse"
                    : "bg-white/[0.04] text-slate-200 border-white/[0.1] hover:border-red-400/50 hover:bg-white/[0.08]"
                }`}
              >
                <AlertOctagon className="w-4 h-4 text-red-400" />
                <span>{incidentActive ? "SURPRISE INCIDENT ACTIVE" : "TRIGGER SURPRISE INCIDENT"}</span>
              </button>

              {incidentActive && (
                <button
                  onClick={() => setIncidentActive(false)}
                  className="p-3 rounded-2xl bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]"
                  title="Reset Incident"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Interactive Canvas Viewport */}
          <div className="relative my-8 rounded-2xl bg-[#04060E] border border-white/[0.08] overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-[360px]" />
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">SECTORS AT RISK</div>
              <div className="text-2xl font-mono font-extrabold text-white">
                {telemetry.zones.filter((z) => z.riskScore >= 70).length} / 6
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-1">Illustrative simulation</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">REROUTES TRIGGERED</div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">
                {telemetry.reroutesCount} Corridors
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-1">Illustrative simulation</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">AUTO-ALERTS SENT</div>
              <div className="text-2xl font-mono font-extrabold text-cyan-400">
                {telemetry.totalAlerts.toLocaleString()}
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-1">Illustrative simulation</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">AVG TIME TO MITIGATION</div>
              <div className="text-2xl font-mono font-extrabold text-amber-400">
                ~{telemetry.avgMitigationSec}s
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-1">Illustrative simulation</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

