import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 5 Cards
const steps = [
  {
    title: "STRATEGY",
    number: "01",
    desc: "Analysis and definition of the pillars of communication.",
    bg: "bg-[#D83688]"
  },
  {
    title: "CREATION",
    number: "02",
    desc: "Production of highly engaging visual and textual assets.",
    bg: "bg-[#0284C7]" 
  },
  {
    title: "DEPLOYMENT",
    number: "03",
    desc: "Campaign management, community building and amplification.",
    bg: "bg-[#16A34A]" 
  },
  {
    title: "ANALYSIS",
    number: "04",
    desc: "Continuous monitoring and optimization of KPIs.",
    bg: "bg-[#EAB308]" 
  },
  {
    title: "SCALING",
    number: "05",
    desc: "Scaling up winning strategies for maximum ROI.",
    bg: "bg-[#7C3AED]" 
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".method-card");
      
      // FIX: Pehle card ko screen par hi rakhna hai, baaki ko hide karna hai
      cards.forEach((card, index) => {
        if (index === 0) {
          // 1st Card: Default screen par dikhega (thoda rotate karke taaki style barkarar rahe)
          gsap.set(card as HTMLElement, { y: 0, rotationZ: -4 });
        } else {
          // Baaki 4 Cards: Screen ke niche chhupe rahenge
          gsap.set(card as HTMLElement, { y: "150vh", rotationZ: 0 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Animate sirf un cards ko karna hai jo niche chhupe hain (index 1 se end tak)
      cards.forEach((card, index) => {
        if (index > 0) {
          // Alternating rotations for stack effect
          const rot = index % 2 === 0 ? -2 : 2;
          
          tl.to(card as HTMLElement, {
            y: 0,
            rotationZ: rot,
            duration: 1,
            ease: "power3.out"
          }, (index - 1) * 1); // Stagger timing properly
        }
      });
      
      tl.to({}, { duration: 0.5 }); // small pause at the end

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="relative h-[500dvh] w-full bg-[#faebe8]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-12 py-12 lg:py-0 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
        
        {/* --- Left Side: Typography --- */}
        <div className="w-full lg:w-[28%] flex-shrink-0 flex flex-col z-40 hidden lg:flex relative">
            <div className="flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.8]">
              <span className="text-[#D83688] text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] drop-shadow-sm font-black pb-1">
                WE WILL
              </span>
              <span className="text-[#f0a8c4] text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] drop-shadow-sm font-black relative z-10 -mt-2 lg:-mt-3">
                ALWAYS
              </span>
              <span className="text-[#D83688] text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] drop-shadow-sm font-black -mt-2 lg:-mt-3">
                PREFER
              </span>
              
              <div className="relative inline-block -mt-2 lg:-mt-3">
                <span className="text-[#D83688] text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] drop-shadow-sm font-black relative z-10">
                  THIS ORDER.
                </span>
                
               
              </div>
            </div>
        </div>

        {/* Mobile Left Side Equivalent */}
        <div className="w-full flex-shrink-0 flex flex-col z-40 lg:hidden mt-12 relative">
            <div className="flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.8]">
              <span className="text-[#D83688] text-5xl drop-shadow-sm font-black">WE WILL</span>
              <span className="text-[#f0a8c4] text-5xl drop-shadow-sm font-black relative z-10 -mt-1">ALWAYS</span>
              
              <div className="relative inline-block -mt-1">
                <span className="text-[#D83688] text-5xl drop-shadow-sm font-black relative z-10">
                  PREFER 
                </span>
               
              </div>
              <span className="text-[#D83688] text-5xl drop-shadow-sm font-black relative -mt-1">THIS ORDER.</span>
            </div>
        </div>

        {/* --- Center: Image Stack (5 Cards) --- */}
        <div className="w-[85%] sm:w-[50%] lg:w-[28%] max-w-[340px] aspect-[2/3.2] relative flex-shrink-0 z-30 mt-8 lg:mt-0" style={{ transformStyle: "preserve-3d" }}>
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`method-card absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl p-6 lg:p-8 flex flex-col justify-between items-center text-center text-white ${step.bg}`}
              style={{ willChange: "transform" }}
            >
              <h3 className="text-3xl lg:text-4xl font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tight mt-4 drop-shadow-sm">{step.title}</h3>
              
              <div className="text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-none font-['Impact',_Arial_Black,_sans-serif] tracking-tighter drop-shadow-md">
                {step.number}
              </div>

              <p className="text-sm lg:text-base font-bold font-sans leading-tight px-2 pb-6 drop-shadow-md">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Right Side: Description --- */}
        <div className="w-full lg:w-[28%] flex-shrink-0 flex flex-col justify-center z-40 mt-8 lg:mt-0 lg:pr-4">
          <div className="max-w-[90%] ml-auto">
            <p className="text-[#D83688] font-bold text-sm md:text-base lg:text-lg mb-4 lg:mb-6 leading-tight font-sans">
              At Chronus, each project follows a clear and structured process.
            </p>
            <p className="text-[#D83688] font-bold text-xs md:text-sm lg:text-base opacity-80 leading-snug font-sans">
              Because effective communication cannot be improvised, we have created a method that combines strategy, creativity and rigor, to guarantee concrete results.
            </p>
          </div>
        </div>

        {/* --- Bottom Left Indicator --- */}
        <div className="about-anim-line absolute bottom-8 left-6 md:bottom-12 md:left-12 lg:left-16 flex items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
        {/* Glowing Pulse Dot */}
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
        </div>
        
        <span className="text-[11px] md:text-xs font-black text-black uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
          Methods
        </span>
        
        {/* Sleek Line */}
        <div className="w-12 h-[2px] bg-black group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
      </div>
        
      </div>
    </section>
  );
}