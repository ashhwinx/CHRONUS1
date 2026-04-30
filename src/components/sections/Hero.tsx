import React from "react";

export default function Hero() {
 

  return (
    <>
      {/* --- Background Elements (Dots, Blur Orbs, Rotating Line Art) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#db3c8a]/15 blur-[100px]" />
        <div className="absolute top-[-50%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4facfe]/15 blur-[100px]" />
        
        {/* Rotating Line Art - Tailwind ki animate-spin class use ki hai */}
        <div className="absolute top-[1.2%] right-[47.7%] text-[#db3c8a]/30 animate-[spin_25s_linear_infinite]">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/>
          </svg>
        </div>
      </div>

      {/* --- Hero Section Content --- */}
      <section className="h-[100dvh] w-full flex flex-col  justify-between pt-6 md:pt-4 pb-4 md:pb-6 px-4 md:px-6 lg:px-8 pointer-events-none relative z-10">
        
        {/* CHRONUS Section */}
        <div className="w-full text-center z-10 flex-none relative hero-h1 -mt-2 md:-mt-8">
          <h1 className="text-[17vw] leading-[0.75] font-display font-black text-[#00522d] tracking-tighter uppercase pointer-events-auto relative z-20">
          CHRONUS
          </h1>
        </div>

        {/* Bottom Layout (Aapka Pasandeeda Design) */}
        <div className="w-full flex justify-between items-end relative z-30 pointer-events-auto pb-4">
          <div className="hero-bottom-left flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.85]">
            <span className="text-[#d1cfe4] text-xs md:text-sm tracking-widest mb-3 font-sans font-bold">Social media agency</span>
            <span className="text-[#db3c8a] text-5xl md:text-7xl drop-shadow-sm font-black">HUMAN</span>
            <span className="text-[#f29ebd] text-5xl md:text-7xl drop-shadow-sm font-black">SOCIAL CLUB</span>
          </div>

          <div className="hero-bottom-right text-right max-w-[200px] md:max-w-[300px]">
             <p className="text-black text-3xl md:text-5xl font-[cursive] tracking-normal mb-2 leading-[0.9]">Crafting Culture</p>
             <p className="text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-widest font-sans">Global Digital Narratives</p>
          </div>
        </div>
      </section>

      {/* Spacer Section to Trigger Image Collapse */}
      <section className="spacer-1 h-[60dvh] w-full pointer-events-none"></section>
    </>
  );
}