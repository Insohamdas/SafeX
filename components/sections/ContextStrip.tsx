import React from "react";
import { Marquee } from "@/components/ui/Marquee";

export const ContextStrip: React.FC = () => {
  const categories = [
    "Pilgrimages & Sacred Convocations",
    "Mega Stadiums & Arenas",
    "Religious Festivals",
    "Music & Cultural Festivals",
    "World Expos & Conventions",
    "Mass Transit Hubs",
    "National Celebrations",
    "Civic Assemblies & Rallies",
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#060810]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
          BUILT FOR THE GATHERINGS THAT CANNOT AFFORD FAILURE
        </span>
      </div>

      <Marquee speed="slow">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-400/80 hover:text-white transition-colors duration-200">
              {cat}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

