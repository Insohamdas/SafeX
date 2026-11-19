"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "danger";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs rounded-lg",
      md: "px-5 py-2.5 text-sm rounded-xl",
      lg: "px-7 py-3.5 text-base rounded-2xl font-semibold",
    }[size];

    const variantClasses = {
      primary:
        "bg-white text-slate-950 hover:bg-slate-100 font-bold shadow-xl shadow-white/10 hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20",
      secondary:
        "bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 transition-all duration-200",
      glass:
        "glass-panel text-white hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all duration-200",
      danger:
        "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold shadow-lg shadow-red-600/30 active:scale-95 transition-all duration-200",
    }[variant];

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 cursor-pointer transition-transform select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
          sizeClasses,
          variantClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

