import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expertises = [
  {
    title: "SOCIAL MEDIA STRATEGY",
    tags: ["Analysis of the current situation", "Benchmark", "Creation of an art direction", "Defining a social media strategy"]
  },
  {
    title: "CONTENT CREATION",
    tags: [ "Videos","Photo", "INstagram Reel", "Interview","Copywriting", "Graphic Design"]
  },
  {
    title: "COMMUNITY MANAGEMENT",
    tags: ["Moderation","Editorial planning", "Engagement", "Reporting & Learnings", "Influencer Marketing"]
  }
];

const images = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"  
];

export default function Experts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const photos = gsap.utils.toArray(".expert-photo");

      gsap.set(photos[0], { x: "0%", y: "0%", z: 0, rotationZ: 0, opacity: 1 });
      gsap.set(photos[1], { x: "25%", y: "0%", z: -100, rotationZ: 8, opacity: 0.6 });
      gsap.set(photos[2], { x: "-25%", y: "0%", z: -100, rotationZ: -8, opacity: 0.6 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.33) setActiveIndex(0);
            else if (progress >= 0.33 && progress < 0.66) setActiveIndex(1);
            else setActiveIndex(2);
          }
        }
      });

      tl.to(photos[0] as HTMLElement, { x: "-25%", z: -100, rotationZ: -8, opacity: 0.6, duration: 1, ease: "power2.inOut" }, "step1")
        .to(photos[1] as HTMLElement, { x: "0%", z: 0, rotationZ: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "step1")
        .to(photos[2] as HTMLElement, { x: "25%", z: -100, rotationZ: 8, opacity: 0.6, duration: 1, ease: "power2.inOut" }, "step1");
      
      tl.to({}, { duration: 0.2 }); 

      tl.to(photos[1] as HTMLElement, { x: "-25%", z: -100, rotationZ: -8, opacity: 0.6, duration: 1, ease: "power2.inOut" }, "step2")
        .to(photos[2] as HTMLElement, { x: "0%", z: 0, rotationZ: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "step2")
        .to(photos[0] as HTMLElement, { x: "25%", z: -100, rotationZ: 8, opacity: 0.6, duration: 1, ease: "power2.inOut" }, "step2");

      tl.to({}, { duration: 0.2 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experts" ref={containerRef} className="relative h-[300dvh] w-full bg-[#d1cfe4]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-12 py-12 lg:py-0 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
        
        {/* --- Left Side: Bold Typography (Perfectly Aligned to Edge) --- */}
        {/* FIX: Removed 'lg:pl-4' to ensure strict left alignment with hamburger & bottom text */}
        <div className="w-full lg:w-[28%] flex-shrink-0 flex flex-col z-40 relative">
          
          <div className="flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.8]">
             <span className="text-[#D83688] text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] drop-shadow-sm font-black ">
               REASONING<br/>TO BETTER:
             </span>
             
             <div className="relative inline-block -mt-2 lg:-mt-2">
                <span className="text-[#f9f2ed] text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] drop-shadow-sm font-black relative z-10">
                  RESONATING.
                </span>
                
                
             </div>
          </div>
          
          <p className="mt-8 lg:mt-10 text-[#D83688] font-bold text-[13px] md:text-sm lg:text-base max-w-[90%] leading-tight font-sans">
            Chronus is a social media agency founded on three strong areas of expertise.
          </p>

        </div>

        {/* --- Center: Image Stack --- */}
        <div className="w-[70%] sm:w-[50%] lg:w-[28%] max-w-[340px] aspect-[1/1.6] relative flex-shrink-0 z-30 mt-10 lg:mt-0" style={{ transformStyle: "preserve-3d" }}>
          {images.map((src, i) => (
            <div 
              key={i} 
              className="expert-photo absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-200"
              style={{ willChange: "transform, opacity" }}
            >
              <img src={src} alt="Expertise" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* --- Right Side: Clean Accordion List (Perfectly Aligned to Right Edge) --- */}
        {/* FIX: Removed 'lg:pr-4' to ensure strict right alignment */}
        <div className="w-full lg:w-[28%] flex-shrink-0 flex flex-col z-40 mt-10 lg:mt-0 max-h-[40vh] lg:max-h-none overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {expertises.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={i} 
                className={`flex flex-col group cursor-pointer border-b border-white/40 py-4 lg:py-5 first:pt-0 last:border-0`} 
                onClick={() => setActiveIndex(i)}
              >
                <h3 className={`text-2xl lg:text-3xl xl:text-4xl font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter transition-colors duration-300 ${isActive ? 'text-[#D83688]' : 'text-[#f9f2ed]'}`}>
                  {item.title}
                </h3>
                
                <div 
                  className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2 pt-3 pb-1 lg:pt-4 lg:pb-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1.5 md:px-4 md:py-2 bg-[#D83688] text-white rounded-full text-[9px] md:text-[10px] font-bold font-sans tracking-wide shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Bottom Left: EXPERTS Indicator --- */}
     



        <div className="about-anim-line absolute bottom-8 left-6 md:bottom-12 md:left-12 lg:left-16 flex items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
        {/* Glowing Pulse Dot */}
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
        </div>
        
        <span className="text-[11px] md:text-xs font-black text-white uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
          Experts
        </span>
        
        {/* Sleek Line */}
        <div className="w-12 h-[2px] bg-white group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
      </div>




      </div>
    </section>
  );
}