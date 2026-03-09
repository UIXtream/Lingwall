"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [showFullVideo, setShowFullVideo] = useState(false);

  // Example Video URL - Replace with your actual student success story
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#f6f2e6] dark:bg-[#0a0a0a] transition-colors duration-500">
      
      {/* 1. BLUEPRINT BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* 2. TOP RATING BADGE */}
        <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm backdrop-blur-md">
          <div className="flex -space-x-2">
            {[10, 11, 12].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900" alt="user" />
            ))}
          </div>
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            4.9/5 <span className="text-[#ff6600]">★★★★★</span>
          </span>
          <div className="w-[1px] h-4 bg-black/10 dark:bg-white/20 mx-1" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            800+ Students Architected
          </span>
        </div>

        {/* 3. MAIN HEADLINE - COLOR FORCED */}
        <h1 className="text-5xl md:text-[8.5rem] font-black tracking-tighter leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 text-zinc-900 dark:text-white">
          ARCHITECT <br />
          <span className="text-[#ff6600]">THE FUTURE.</span>
        </h1>

        {/* 4. SUB-HEADLINE */}
        <p className="max-w-2xl mx-auto text-lg md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-12 leading-tight">
          The 10-month intensive for 12th graduates. Master <span className="font-bold border-b-2 border-[#ff6600]">UI/UX</span>, <span className="font-bold">Vibe Coding</span>, and <span className="font-bold">AI Engineering</span>.
        </p>

        {/* 5. CALL TO ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <Link href="/register" className="w-full sm:w-auto px-12 py-6 bg-[#ff6600] text-white rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(255,102,0,0.3)] hover:scale-105 transition-all active:scale-95">
            Start Demo Class — ₹299
          </Link>
          <Link href="/roadmap" className="w-full sm:w-auto px-12 py-6 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-white rounded-2xl font-black text-xl hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            See Roadmap
          </Link>
        </div>

        {/* 6. MINI REVIEW SECTION WITH VIDEO LOGIC */}
        <div 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setShowFullVideo(true)}
          className="relative max-w-md mx-auto p-8 rounded-[2rem] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl cursor-pointer group transition-all duration-500 hover:shadow-2xl"
        >
          {/* 4:3 Hover Video Preview */}
          <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-48 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-[#ff6600] transition-all duration-500 ${isHovering ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'}`}>
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src={videoSrc} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                <span className="text-[10px] text-white font-bold uppercase tracking-tighter">Click to Play Story</span>
             </div>
          </div>

          <p className="italic text-base md:text-lg text-zinc-800 dark:text-zinc-200 mb-6 leading-relaxed">
            "Lingwall didn't just teach me coding; they taught me how to design systems. I went from a high-schooler to building full AI prototypes in weeks."
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full bg-[#ff6600] flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
              AJ
              <span className="absolute -inset-1 rounded-full border-2 border-[#ff6600] animate-ping opacity-25"></span>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Arjun J.</h4>
              <p className="text-[10px] opacity-60 uppercase font-black text-zinc-500 dark:text-zinc-400">2025 Batch Student</p>
            </div>
          </div>
        </div>

      </div>

      {/* 7. FULL SCREEN VIDEO MODAL */}
      {showFullVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10 animate-in fade-in duration-300">
          <button 
            onClick={() => setShowFullVideo(false)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:rotate-90 transition-transform"
          >
            ✕
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <video autoPlay controls className="w-full h-full object-cover">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}