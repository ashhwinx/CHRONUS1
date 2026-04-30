import React from "react";

export default function Hero() {
  return (
    <>
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#db3c8a]/15 blur-[100px]" />
        <div className="absolute top-[-50%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4facfe]/15 blur-[100px]" />
        
        {/* Rotating Line Art - Removed from mobile, only on desktop */}
        <div className="hidden md:block absolute top-[1.2%] right-[47.7%] text-[#db3c8a]/30 animate-[spin_25s_linear_infinite]">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/>
          </svg>
        </div>
      </div>

      {/* --- Hero Section Content --- */}
      <section className="h-[100dvh] w-full flex flex-col justify-between pt-6 md:pt-4 pb-4 md:pb-6 px-4 md:px-6 lg:px-8 pointer-events-none relative z-10 overflow-hidden">
        
        {/* CHRONUS Section - Thoda niche in mobile (mt-12) */}
        <div className="w-full text-center z-10 flex-none relative hero-h1 mt-12 md:-mt-8">
          <h1 className="text-[17vw] leading-[0.75] font-display font-black text-[#00522d] tracking-tighter uppercase pointer-events-auto relative z-20">
          CHRONUS
          </h1>
        </div>

        {/* --- BOTTOM LAYOUT AREA --- */}
        <div className="w-full h-full relative z-30 pointer-events-auto pb-4 flex flex-col justify-end md:flex-row md:justify-between md:items-end mt-4">
          
          {/* TUMHARA IMAGE WRAPPER AREA (Only Mobile) - Center & Upar */}
          <div className="md:hidden absolute top-[15%] left-1/2 -translate-x-1/2 w-full flex justify-center z-10 pointer-events-none">
            {/* ⬇️ APNA WRAPPER IS DIV KE ANDAR RAKHNA ⬇️ */}
            <div className="w-[60vw] max-w-[280px] aspect-[4/5] pointer-events-auto">
               {/* Example ke liye placeholder, yahan apna image code daal do */}
            </div>
          </div>

          {/* Left Text: HUMAN SOCIAL CLUB */}
          {/* Mobile: Centered, Image ke niche | Desktop: Left aligned */}
          <div className="hero-bottom-left flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.85] items-center text-center md:items-start md:text-left z-20 w-full md:w-auto relative mb-30 md:mb-0">
            <span className="text-[#d1cfe4] text-xs md:text-sm tracking-widest mb-3 font-sans font-bold">Social media agency</span>
            <span className="text-[#db3c8a] text-5xl md:text-7xl drop-shadow-sm font-black">HUMAN</span>
            <span className="text-[#f29ebd] text-5xl md:text-7xl drop-shadow-sm font-black">SOCIAL CLUB</span>
          </div>

          {/* Right Text: Crafting Culture */}
          {/* Mobile: Absolute Bottom Right | Desktop: Normal relative flow */}
          <div className="hero-bottom-right text-right max-w-[200px] md:max-w-[300px] absolute bottom-4 right-4 md:relative md:bottom-auto md:right-auto z-20">
             <p className="text-black text-2xl md:text-5xl font-[cursive] tracking-normal mb-1 md:mb-2 leading-[0.9]">Crafting Culture</p>
             <p className="text-black/60 text-[9px] md:text-xs font-bold uppercase tracking-widest font-sans">Global Digital Narratives</p>
          </div>

        </div>
      </section>

      {/* Spacer Section to Trigger Image Collapse */}
      {/* Spacer Section to Trigger Image Collapse */}
<section className="spacer-1 h-[5dvh] md:h-[60dvh] bg-red w-full pointer-events-none"></section>
    </>
  );
}