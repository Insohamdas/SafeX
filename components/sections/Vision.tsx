import React from "react";

export const Vision: React.FC = () => {
  return (
    <section className="py-40 bg-black text-center relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/[0.05] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-8">
          // OUR NORTH STAR
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-10 font-sans">
          &ldquo;A world where no gathering <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            ends in tragedy.
          </span>&rdquo;
        </h2>

        {/* TODO(founder): personalise the mission paragraph below with your personal story/vision */}
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          When millions come together to celebrate, pray, cheer, or transit, safety shouldn&apos;t depend on luck. We believe that with real-time intelligence and humane technology, mass tragedies can be engineered out of existence.
        </p>

        <div className="mt-8 text-xs font-mono text-slate-600">
          SafeX Founder Declaration · Continuous Public Commitment
        </div>
      </div>
    </section>
  );
};

