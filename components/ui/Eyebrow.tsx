import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "danger" | "safe" | "neutral";
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className,
  variant = "brand",
}) => {
  const variantStyles = {
    brand: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    danger: "bg-red-500/10 text-red-400 border-red-500/30",
    safe: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    neutral: "bg-white/[0.04] text-slate-400 border-white/10",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border",
        variantStyles,
        className
      )}
    >
      {children}
    </div>
  );
};

