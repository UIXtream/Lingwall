"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering toggle until mounted to prevent color flickers
  if (!mounted) return <nav className="nav-glass h-20" />;

  return (
    <nav className="nav-glass">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#ff6600] rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-6">L</div>
            <span className="text-xl font-black tracking-tighter">
              lingwall<span className="text-[#ff6600]">.</span>
            </span>
          </Link>
        </div>

        {/* CENTER LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {["Roadmap", "Blueprint", "Mentorship"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-sm font-bold opacity-80 hover:opacity-100 hover:text-[#ff6600] transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-5">
          
          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-current/5 hover:bg-[#ff6600]/10 hover:text-[#ff6600] transition-all"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          {/* LOGIN */}
          <Link href="/login" className="hidden md:block text-sm font-bold hover:text-[#ff6600] transition-colors">
            Login
          </Link>

          {/* REGISTER */}
          <Link 
            href="/register" 
            className="bg-[#ff6600] !text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
          >
            YES! Get Demo Class — ₹299/-
          </Link>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-1">
            <svg className="w-7 h-7" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}