import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", 
        }
      });

      // FIX: Used gsap.fromTo instead of gsap.from for React reliability
      
      // Left Text Animation
      tl.fromTo(".about-anim-line", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }, 
        0
      ); 

      // Right Box Animation
      tl.fromTo(".about-anim-box", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, 
        0
      );

      // Tags Animation
      tl.fromTo(".about-anim-tag", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)" }, 
        0.3
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tags = [
    { 
      name: 'Strategy', 
      base: 'from-blue-50/90 to-white/40 border-blue-100', 
      hover: 'hover:from-blue-500 hover:to-blue-400 hover:text-white hover:border-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]' 
    },
    { 
      name: 'Creative', 
      base: 'from-pink-50/90 to-white/40 border-pink-100', 
      hover: 'hover:from-[#db3c8a] hover:to-[#f29ebd] hover:text-white hover:border-[#db3c8a] hover:shadow-[0_8px_20px_rgba(219,60,138,0.4)]' 
    },
    { 
      name: 'Social', 
      base: 'from-purple-50/90 to-white/40 border-purple-100', 
      hover: 'hover:from-purple-500 hover:to-purple-400 hover:text-white hover:border-purple-400 hover:shadow-[0_8px_20px_rgba(168,85,247,0.4)]' 
    },
    { 
      name: 'Culture', 
      base: 'from-orange-50/90 to-white/40 border-orange-100', 
      hover: 'hover:from-orange-500 hover:to-orange-400 hover:text-white hover:border-orange-400 hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)]' 
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="about-section min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pointer-events-none pb-24 md:pb-0 relative z-30">
      
      {/* --- Left Column --- */}
      <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col items-start about-left pointer-events-auto order-2 md:order-1 mt-auto md:mt-0 pt-16 md:pt-0 z-10 relative">
        <div className="flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.85] overflow-hidden">
           <span className="about-anim-line text-[#db3c8a] text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] drop-shadow-sm font-black pb-1">
             WE <br></br> ELECTRIFY
           </span>
           <span className="about-anim-line text-[#f29ebd] text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] drop-shadow-sm font-black mt-1">
             YOUR NETWORKS
           </span>
        </div>
      </div>

      <div className="w-full h-[60vh] md:hidden order-1"></div>

      {/* --- Right Column --- */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start md:items-end text-left md:text-right about-right pointer-events-auto order-3 md:order-3 mt-12 md:mt-0 z-10">
        
        {/* FIX: Removed 'transition-all' and replaced with 'transition-shadow' so it doesn't block GSAP's transform/opacity */}
        <div className="about-anim-box relative flex flex-col w-full p-8 md:p-10 rounded-[2rem] transition-shadow duration-500 group overflow-hidden">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#db3c8a]/10 to-transparent blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150 pointer-events-none"></div>

          <div className="flex flex-col md:items-end w-full relative z-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#db3c8a] font-sans">The Vision</span>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#db3c8a] to-[#f29ebd] rounded-full"></div>
            </div>
            
            <p className="text-neutral-900 font-serif text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.1] tracking-tight mb-6 md:text-right">
              <span className="italic text-neutral-500">Chronus is a vanguard digital agency.</span><br />
              <span className="font-medium">We don't follow trends;<br/>we engineer them.</span>
            </p>
          </div>

          <div className="w-full flex flex-col md:items-end relative z-10 mb-8 gap-3">
            <p className="text-neutral-600 font-sans font-semibold text-[11px] md:text-xs leading-[1.8] md:text-right w-full md:max-w-[95%] uppercase tracking-[0.1em]">
              Our hyper-creative approach fuses unbridled imagination with razor-sharp strategy. We craft bespoke digital ecosystems, immersive campaigns, and striking visual identities.
            </p>
            <p className="text-neutral-400 font-sans font-bold text-[10px] md:text-[11px] leading-[1.8] md:text-right w-full md:max-w-[85%] uppercase tracking-[0.15em]">
              We exist to disrupt the ordinary and elevate your cultural footprint globally.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 md:justify-end w-full border-t border-neutral-200/60 pt-6 mb-6 relative z-10">
             <div className="flex flex-col md:items-end">
                <span className="text-3xl font-black text-[#db3c8a] tracking-tighter">100+</span>
                <span className="text-[8px] uppercase font-bold tracking-widest text-neutral-400">Global Brands</span>
             </div>
             <div className="flex flex-col md:items-end">
                <span className="text-3xl font-black text-[#f29ebd] tracking-tighter">50M</span>
                <span className="text-[8px] uppercase font-bold tracking-widest text-neutral-400">Impressions</span>
             </div>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end w-full relative z-10">
            {tags.map(tag => (
              <span 
                key={tag.name} 
                className={`about-anim-tag px-5 py-2 bg-gradient-to-br border rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 transition-all duration-300 ease-out cursor-pointer shadow-[inset_0_2px_5px_rgba(255,255,255,0.9),0_2px_5px_rgba(0,0,0,0.05)] hover:scale-105 hover:-translate-y-1 ${tag.base} ${tag.hover}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* --- Bottom Left Indicator --- */}
      <div className="about-anim-line absolute bottom-8 left-6 md:bottom-12 md:left-12 lg:left-16 flex items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
        </div>
        <span className="text-[11px] md:text-xs font-black text-neutral-900 uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
          ABOUT
        </span>
        <div className="w-12 h-[2px] bg-neutral-900 group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
      </div>

    </section>
  );
}