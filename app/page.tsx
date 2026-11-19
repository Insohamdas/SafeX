"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ContextStrip } from "@/components/sections/ContextStrip";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Features } from "@/components/sections/Features";
import { Simulator } from "@/components/sections/Simulator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { Impact } from "@/components/sections/Impact";
import { Technology } from "@/components/sections/Technology";
import { Roadmap } from "@/components/sections/Roadmap";
import { Vision } from "@/components/sections/Vision";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function LandingPage() {
  const [currentLang, setCurrentLang] = useState<string>("en");

  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* 5.1 Sticky Navbar */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* 5.2 Hero Section */}
      <Hero />

      {/* 5.3 Context Strip (Mass Gatherings Marquee) */}
      <ContextStrip />

      {/* 5.4 Problem Narrative */}
      <Problem />

      {/* 5.5 The Platform (Role Switcher & Matrix) */}
      <Platform />

      {/* 5.6 Features Bento Grid */}
      <Features currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* 5.7 Interactive Crowd Simulator */}
      <Simulator />

      {/* 5.8 How It Works (Pipeline) */}
      <HowItWorks />

      {/* 5.9 Use Cases */}
      <UseCases />

      {/* 5.10 Impact & Targets */}
      <Impact />

      {/* 5.11 Technology & Principles */}
      <Technology />

      {/* 5.12 Roadmap */}
      <Roadmap />

      {/* 5.13 Vision Statement */}
      <Vision />

      {/* 5.14 FAQ Accordion */}
      <FAQ />

      {/* 5.15 Final CTA & Pilot Registration Form */}
      <FinalCTA />

      {/* 5.16 Comprehensive Footer */}
      <Footer />
    </main>
  );
}

