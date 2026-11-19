"use client";

import React, { useState, useRef } from "react";
import { AlertCircle, CheckCircle, ShieldAlert } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const SOSTile: React.FC = () => {
  const [holding, setHolding] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [dispatched, setDispatched] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => {
    if (dispatched) return;
    setHolding(true);
    let current = 0;
    timerRef.current = setInterval(() => {
      current += 5;
      setProgress(current);
      if (current >= 100) {
        clearInterval(timerRef.current!);
        setDispatched(true);
        setHolding(false);
      }
    }, 45);
  };

  const cancelHold = () => {
    if (dispatched) return;
    setHolding(false);
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetSOS = () => {
    setDispatched(false);
    setProgress(0);
  };

  return (
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase">
            DISTRESS PROTOCOL
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
            Interactive simulation
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Emergency SOS Beacon</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Press-and-hold hardware fail-safe transmitting user GPS coordinates and battery telemetry directly to the nearest zone officer.
        </p>

        {/* SOS Hold Trigger Component */}
        <div className="flex flex-col items-center justify-center py-4">
          {!dispatched ? (
            <div className="relative flex flex-col items-center">
              {/* Radial Ripple Ring */}
              <div
                className={`absolute w-32 h-32 rounded-full border border-red-500/30 transition-all duration-300 ${
                  holding ? "scale-125 border-red-500 animate-ping" : "scale-100"
                }`}
              />

              <button
                onMouseDown={startHold}
                onMouseUp={cancelHold}
                onTouchStart={startHold}
                onTouchEnd={cancelHold}
                className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white flex flex-col items-center justify-center font-black text-sm uppercase tracking-widest shadow-2xl shadow-red-600/40 select-none cursor-pointer active:scale-95 transition-transform"
              >
                <ShieldAlert className="w-7 h-7 mb-1" />
                <span>HOLD SOS</span>
                <span className="text-[9px] font-mono font-normal opacity-80">
                  {holding ? `${Math.round(progress)}%` : "3 SECONDS"}
                </span>
              </button>

              <div className="text-[10px] font-mono text-slate-400 mt-4">
                {holding ? "Keep holding to broadcast coordinates..." : "Press and hold to test beacon"}
              </div>
            </div>
          ) : (
            <div className="w-full p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle className="w-7 h-7 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold text-white">Help is on the way</div>
              <p className="text-xs text-emerald-300/80 leading-relaxed font-mono">
                Zone officer Alpha-02 notified · Live coordinates locked · ETA 85s
              </p>
              <button
                onClick={resetSOS}
                className="mt-2 text-[10px] font-mono text-slate-400 hover:text-white underline"
              >
                Reset simulation
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-slate-500">
        <span>SUB-SECOND DISPATCH QUEUE</span>
        <span className="text-red-400">ZERO FALSE-TRIGGER HOLD</span>
      </div>
    </SpotlightCard>
  );
};

