import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "normal" | "slow";
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  speed = "normal",
}) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-12 animate-marquee",
          speed === "slow" && "[animation-duration:55s]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

