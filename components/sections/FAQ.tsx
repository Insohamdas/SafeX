import React from "react";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export const FAQ: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      question: "Who is SafeX designed for?",
      answer: "SafeX is engineered for municipal police forces, event organizers, religious trust boards, stadium operators, and transit authorities managing high-density public gatherings from 10,000 to over 1,000,000 attendees.",
    },
    {
      question: "How do visitors receive alerts without draining their phone battery?",
      answer: "The SafeX mobile app utilizes low-power geofencing hardware APIs. It sleeps in the background and wakes up only when an attendee enters a geofenced hazard polygon or receives a high-priority push directive via WebSockets.",
    },
    {
      question: "Which languages are supported at launch?",
      answer: "SafeX supports 7 critical dialects at launch: English, Hindi (हिन्दी), Bengali (বাংলা), Tamil (தமிழ்), Arabic (العربية with full RTL formatting), Spanish (Español), and French (Français). Additional regional languages can be configured per deployment.",
    },
    {
      question: "How does role-based access control (RBAC) work?",
      answer: "SafeX strictly partitions command capabilities. Visitors have access to safe route guidance, SOS triggers, and incident reporting. Field marshals see sector-specific queues. Only verified command center administrators can broadcast area-wide evacuation directives.",
    },
    {
      question: "How does the AI crowd risk analysis work?",
      answer: "Our FastAPI neural engine ingests live camera feeds, applying PyTorch head-count models to measure persons per square meter. It correlates density with flow velocity to flag choke points and bottleneck formation up to 30 minutes in advance.",
    },
    {
      question: "How do we run a pilot at our upcoming event?",
      answer: "Fill out the pilot request form below. Our operations liaison coordinates with your venue planners to map sector polygons, integrate existing CCTV or sensor feeds, and deploy on-ground marshals for pilot testing.",
    },
    {
      question: "What data is collected, and how is attendee privacy protected?",
      answer: "SafeX follows a strict zero-telemetry policy. Citizen location pings are anonymized in memory and aggregated into regional density statistics. We never track individuals, store personal profiles, or monetize user movement.",
    },
    {
      question: "Does SafeX function when cellular towers become congested?",
      answer: "The mobile app caches venue egress maps and corridor routes locally. For extreme network collapse, our Phase 2 roadmap is introducing peer-to-peer Bluetooth Low Energy (BLE) mesh broadcasting to relay alerts device-to-device.",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-[#060810] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-400">
            Honest, transparent answers on deployment, technology, and privacy standards.
          </p>
        </div>

        {/* Accessible Accordion */}
        <Accordion items={faqItems} />

      </div>
    </section>
  );
};

