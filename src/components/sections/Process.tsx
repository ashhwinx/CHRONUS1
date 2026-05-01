import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sirf 2 colors: #00522d aur #db3c8a
const steps = [
  {
    title: "STRATEGY",
    number: "01",
    desc: "Analysis and definition of the pillars of communication.",
    bg: "bg-[#00522d]"
  },
  {
    title: "CREATION",
    number: "02",
    desc: "Production of highly engaging visual and textual assets.",
    bg: "bg-[#db3c8a]" 
  },
  {
    title: "DEPLOYMENT",
    number: "03",
    desc: "Campaign management, community building and amplification.",
    bg: "bg-[#00522d]" 
  },
  {
    title: "ANALYSIS",
    number: "04",
    desc: "Continuous monitoring and optimization of KPIs.",
    bg: "bg-[#db3c8a]" 
  },
  {
    title: "SCALING",
    number: "05",
    desc: "Scaling up winning strategies for maximum ROI.",
    bg: "bg-[#00522d]" 
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".method-card");
      let mm = gsap.matchMedia();

      // 💻 DESKTOP ONLY: Vertical Stacking Scroll Animation
      mm.add("(min-width: 1024px)", () => {
        cards.forEach((card, index) => {
          if (index === 0) {
            gsap.set(card as HTMLElement, { y: 0, rotationZ: -4, x: 0 });
          } else {
            gsap.set(card as HTMLElement, { y: "150vh", rotationZ: 0, x: 0 });
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

        cards.forEach((card, index) => {
          if (index > 0) {
            const rot = index % 2 === 0 ? -2 : 2;
            tl.to(card as HTMLElement, {
              y: 0,
              rotationZ: rot,
              duration: 1,
              ease: "power3.out"
            }, (index - 1) * 1);
          }
        });
        
        tl.to({}, { duration: 0.5 }); 
      });

      // 📱 MOBILE ONLY: Horizontal cards initial rotation
      mm.add("(max-width: 1023px)", () => {
        cards.forEach((card, index) => {
          const rot = index % 2 === 0 ? 5 : -5;
          gsap.set(card as HTMLElement, { rotationZ: rot, y: 0, x: 0 });
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    // FIX: Mobile se 'overflow-hidden' hata diya aur 'h-auto' rakha
    <section id="process" ref={containerRef} className="relative h-auto lg:h-[500dvh] w-full bg-[#faebe8]">
      
      {/* FIX: Mobile pe 'min-h-screen' ki jagah 'h-auto', 'justify-start' aur 'pt-16' lagaya taaki upar cut na ho */}
      <div className="lg:sticky lg:top-0 h-auto lg:h-[100dvh] w-full lg:overflow-hidden flex flex-col lg:flex-row items-center justify-start lg:justify-between px-0 lg:px-12 pt-16 pb-8 lg:py-0 gap-8 lg:gap-8" style={{ perspective: "1000px" }}>
        
        {/* --- Left Side: Typography (DESKTOP) --- */}
        <div className="w-full lg:w-[28%] flex-shrink-0 flex-col z-40 hidden lg:flex relative">
            <div className="flex flex-col font-['Anton',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.9]">
              <span className="text-[#db3c8a] lg:text-[4rem] xl:text-[4.5rem] drop-shadow-sm font-black pb-1">WE WILL</span>
              <span className="text-[#f0a8c4] lg:text-[4rem] xl:text-[4.5rem] drop-shadow-sm font-black relative z-10">ALWAYS</span>
              <span className="text-[#db3c8a] lg:text-[4rem] xl:text-[4.5rem] drop-shadow-sm font-black">PREFER</span>
              <div className="relative inline-block">
                <span className="text-[#db3c8a] lg:text-[4rem] xl:text-[4.5rem] drop-shadow-sm font-black relative z-10">THIS ORDER.</span>
              </div>
            </div>
        </div>

        {/* --- Mobile Top Section: Centered Headings + Description --- */}
        <div className="w-full flex-shrink-0 flex flex-col items-center text-center z-40 lg:hidden px-4 relative mt-2">
            <div className="flex flex-col font-['Anton',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.95] w-full items-center">
              <div className="flex items-center gap-2">
                 <span className="text-[#db3c8a] text-[10vw] sm:text-5xl drop-shadow-sm font-black">WE WILL</span>
                 <span className="text-[#f0a8c4] text-[10vw] sm:text-5xl drop-shadow-sm font-black relative z-10">ALWAYS</span>
              </div>
              <span className="text-[#db3c8a] text-[10vw] sm:text-5xl drop-shadow-sm font-black relative z-10">PREFER THIS ORDER.</span>
            </div>
            
            <div className="flex flex-col items-center mt-5 max-w-[95%]">
              <p className="text-[#db3c8a] font-bold text-xs sm:text-sm mb-2 leading-tight font-sans">
                At Chronus, each project follows a clear and structured process.
              </p>
              <p className="text-[#db3c8a] font-bold text-[10px] sm:text-xs opacity-80 leading-snug font-sans max-w-[95%]">
                Because effective communication cannot be improvised, we have created a method that combines strategy, creativity and rigor, to guarantee concrete results.
              </p>
            </div>
        </div>

        {/* --- Center: Cards Wrapper --- */}
        <div className="w-full lg:w-[28%] z-30 flex lg:block justify-center mt-2 lg:mt-0">
          
          {/* FIX: Yahan 'items-center' aur 'py-12' lagaya hai taaki horizontal scroll ke andar cards rotate hone par cut na hon */}
          <div className="flex items-center lg:block w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-6 lg:px-0 gap-6 lg:gap-0 py-12 lg:py-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative lg:aspect-[2/3.2] max-w-none lg:max-w-[340px] mx-auto" style={{ transformStyle: "preserve-3d" }}>
            
            {steps.map((step, i) => (
              <div 
                key={i} 
                // Mobile m card ki height thodi control ki hai (h-[48vh]) taaki fit rahe
                className={`method-card relative lg:absolute top-0 left-0 w-[72vw] max-w-[300px] lg:w-full h-[48vh] lg:h-full flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden shadow-xl p-6 lg:p-8 flex flex-col justify-between items-center text-center text-white ${step.bg}`}
                style={{ willChange: "transform" }}
              >
                <h3 className="text-3xl lg:text-4xl font-['Anton',_Arial_Black,_sans-serif] uppercase tracking-tight mt-2 lg:mt-4 drop-shadow-sm">{step.title}</h3>
                
                <div className="text-[9rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-none font-['Anton',_Arial_Black,_sans-serif] tracking-tighter drop-shadow-md">
                  {step.number}
                </div>

                <p className="text-[12px] sm:text-sm lg:text-base font-bold font-sans leading-tight px-2 pb-2 lg:pb-6 drop-shadow-md opacity-90">
                  {step.desc}
                </p>
              </div>
            ))}
            
            <div className="lg:hidden w-[4vw] flex-shrink-0"></div>
          </div>
        </div>

        {/* --- Right Side: Description (DESKTOP ONLY) --- */}
        <div className="hidden lg:flex w-[28%] flex-shrink-0 flex-col justify-center z-40 lg:pr-4">
          <div className="max-w-[90%] ml-auto text-right">
            <p className="text-[#db3c8a] font-bold lg:text-lg mb-6 leading-tight font-sans">
              At Chronus, each project follows a clear and structured process.
            </p>
            <p className="text-[#db3c8a] font-bold lg:text-base opacity-80 leading-snug font-sans">
              Because effective communication cannot be improvised, we have created a method that combines strategy, creativity and rigor, to guarantee concrete results.
            </p>
          </div>
        </div>

        {/* --- Bottom Left Indicator (HIDDEN ON MOBILE) --- */}
        <div className="about-anim-line hidden lg:flex absolute bottom-12 left-12 lg:left-16 items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
          </div>
          <span className="text-[11px] md:text-xs font-black text-black uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
            Methods
          </span>
          <div className="w-12 h-[2px] bg-black group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
        </div>
        
      </div>
    </section>
  );
}