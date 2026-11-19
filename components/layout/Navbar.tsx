"use client";

import React, { useState, useEffect } from "react";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { LANGUAGES } from "@/lib/i18n-demo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Simulator", href: "#simulator" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Technology", href: "#technology" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#04050A]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#04050A] rounded-[11px] flex items-center justify-center">
              {/* Custom Shield & Crossing Path SVG Brandmark */}
              <svg className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v6c0 5.5 3.8 10.3 9 11.6 5.2-1.3 9-6.1 9-11.6V7l-9-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
              </svg>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-xl tracking-tight text-white font-sans">SafeX</span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
              OS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-300 tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-200 transition-all"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{LANGUAGES[currentLang]?.code.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0A0D16] border border-white/[0.12] p-2 shadow-2xl backdrop-blur-2xl z-50">
                <div className="px-3 py-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest border-b border-white/[0.06] mb-1">
                  Supported Languages
                </div>
                {Object.values(LANGUAGES).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left",
                      currentLang === lang.code
                        ? "bg-cyan-500/20 text-cyan-300 font-semibold"
                        : "text-slate-300 hover:bg-white/[0.05]"
                    )}
                  >
                    <span>{lang.nativeName}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA Button */}
          <a
            href="#pilot"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-slate-100 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/20 transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Request a pilot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#04050A]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-8 flex flex-col gap-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="#pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl text-sm font-bold bg-white text-slate-950"
            >
              Request a pilot
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

