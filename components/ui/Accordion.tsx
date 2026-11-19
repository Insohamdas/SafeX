"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/[0.14]"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-100 text-base sm:text-lg pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180 text-cyan-400"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-400 leading-relaxed border-t border-white/[0.04]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

