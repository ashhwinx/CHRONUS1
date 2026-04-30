import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom Hand-drawn Style Icons (SVGs)
const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
    <path d="M4 14.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.5" />
    <path d="M2 18l2-3.5h16l2 3.5a1 1 0 0 1-.8 1.5H2.8A1 1 0 0 1 2 18z" />
    <path d="M9 16h6" />
  </svg>
);

const OkHandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
    <path d="M10 14.5c-.5.5-1.5 1-2.5.5S6 13 6 12s1-3 2.5-3.5" />
    <path d="M8 8.5c.5-.5 1.5-1 2.5-.5s1.5 1.5 1.5 2.5v7" />
    <path d="M12 11.5c1-1 2-1.5 3-1s1.5 1.5 1.5 2.5v5" />
    <path d="M15 13.5c1-1 2-1.5 3-1s1.5 1.5 1.5 2.5v3" />
    <path d="M18 15.5c1-1 2-1.5 3-1s1.5 1.5 1.5 2.5v2c0 3-3 4-6 4s-8-2-8-5v-6" />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const features = [
  {
    title: "SOCIAL MEDIA EXPERTS",
    desc: "For almost 10 years, our core business has been social media. Community management, photos, videos: that's what we do best.",
    icon: <LaptopIcon />
  },
  {
    title: "PREMIUM & CUSTOM-MADE",
    desc: 'No standardized offers or "copy-paste" packages. Each project is designed for you, and always guided by the same goal: quality.',
    icon: <OkHandIcon />
  },
  {
    title: "A METHOD",
    desc: "Shaped over the years, between rigor and creativity. Organization, precision and long-term vision: that's what makes us different.",
    icon: <LightningIcon />
  },
  {
    title: "HUMANITY FIRST",
    desc: "Behind every brand, there are passionate women and men. It's their story that we love to tell.",
    icon: <SmileIcon />
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const processSection = document.getElementById("process");
      
      // Dono elements jinka color nude se pink hona hai
      const bgElements = [processSection, ".bg-transition-layer", containerRef.current];

      // 1. Initial State: GSAP ko batana padega ki start kahan se karna hai
      gsap.set(bgElements, { backgroundColor: "#faebe8" });

      // ==========================================
      // PERFECT SMOOTH MERGE (FADE EFFECT)
      // ==========================================
      gsap.to(bgElements, {
        backgroundColor: "#DE318A", // Target Pink
        ease: "none",               // IMPORTANT: Isse color change ekdum smooth hota hai
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%", 
          end: "top top",   
          scrub: true,
          immediateRender: false,   // IMPORTANT: GSAP conflicts ko rokne ke liye
        }
      });

      // ==========================================
      // TEXT COLOR FIX
      // ==========================================
      if (processSection) {
        const pinkElements = processSection.querySelectorAll('[class*="text-[#D83688]"], [class*="border-[#D83688]"]');
        
        if (pinkElements.length > 0) {
          gsap.to(pinkElements, {
            color: "#ffffff",
            borderColor: "#ffffff",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 50%", 
              end: "top top",   
              scrub: true,
              immediateRender: false,
            }
          });
        }
      }

      gsap.to(".title-word", {
        color: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%", 
          end: "top top",   
          scrub: true,
          immediateRender: false,
        }
      });

      // ==========================================
      // Timeline for Cards & Text Dimming
      // ==========================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.to(".title-word", {
        scale: 0.9,
        opacity: 0.3,
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      const cards = gsap.utils.toArray(".choose-card");
      
      gsap.set(cards, { y: window.innerHeight * 1.5, rotationZ: 0 });

      cards.forEach((card, i) => {
        const finalRotation = i % 2 === 0 ? -3 : 3; 
        tl.to(card as HTMLElement, {
          y: 0,
          rotationZ: finalRotation, 
          duration: 1.5,
          ease: "power3.out"
        }, 0.5 + i * 0.6); 
      });

      tl.to({}, { duration: 1 }); 

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="why-choose" className="relative h-[300dvh] w-full" style={{ backgroundColor: "#faebe8" }}>
      <div className="bg-transition-layer sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-0">
          {/* FIX: Mobile pe text bada (text-[16vw]) aur spacing normal (tracking-normal). Desktop pe same purana (md:text-[10vw], md:tracking-tighter) */}
          <h2 className="title-word text-[16vw] md:text-[10vw] font-black font-['Impact',_Arial_Black,_sans-serif] uppercase leading-[0.9] md:leading-[0.85] tracking-normal md:tracking-tighter drop-shadow-sm" style={{ color: "#D83688" }}>WHY</h2>
          <h2 className="title-word text-[16vw] md:text-[10vw] font-black font-['Impact',_Arial_Black,_sans-serif] uppercase leading-[0.9] md:leading-[0.85] tracking-normal md:tracking-tighter drop-shadow-sm" style={{ color: "#D83688" }}>CHOOSE</h2>
          <h2 className="title-word text-[16vw] md:text-[10vw] font-black font-['Impact',_Arial_Black,_sans-serif] uppercase leading-[0.9] md:leading-[0.85] tracking-normal md:tracking-tighter drop-shadow-sm relative mt-2 md:mt-0" style={{ color: "#D83688" }}>
            CHRONUS
          </h2>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 pb-12 z-20 pointer-events-auto">
           <div className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-[1400px] h-auto lg:h-[70vh] gap-4 md:gap-6 lg:gap-6 mt-16 md:mt-0">
               {features.map((item, i) => (
                 <div 
                    key={i} 
                    className="choose-card bg-[#00522d] rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl relative border-2 border-transparent hover:border-white/20 transition-colors will-change-transform aspect-[3/4] lg:aspect-auto"
                 >
                   <div className="text-white drop-shadow-md">
                     {item.icon}
                   </div>
                   <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-['Impact',_Arial_Black,_sans-serif] text-white uppercase drop-shadow-md leading-[0.9] mb-3 md:mb-5">
                     {item.title}
                   </h3>
                   <p className="text-white/95 font-bold font-sans text-[10px] sm:text-xs md:text-sm lg:text-[15px] leading-tight md:leading-snug max-w-[90%]">
                     {item.desc}
                   </p>
                 </div>
               ))}
           </div>
        </div>

      </div>
    </section>
  );
}