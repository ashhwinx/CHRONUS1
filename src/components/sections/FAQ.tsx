import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What types of companies do you support?", a: "We work with bold brands across e-commerce, tech, fashion, and lifestyle sectors." },
  { q: "Do you work only in Montpellier or also remotely?", a: "We are based in Montpellier, but operate globally with seamless remote workflows." },
  { q: "What specific services do you offer?", a: "Social media management, content creation, and global digital strategy." },
  { q: "What results can be expected?", a: "Increased engagement, brand awareness, and genuine conversions." },
  { q: "How long does a typical project take?", a: "Depending on the scope, strategy phases take 2-4 weeks, while full execution is ongoing." },
  { q: "Do you offer custom content packages?", a: "Yes, every brand is unique. We tailor our photography and video production to your specific needs." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const allBgLayers = document.querySelectorAll("#faq, .bg-transition-layer");

      // ==========================================
      // Transition: Pink to White (WhyChooseUs -> FAQ)
      // ==========================================
      gsap.to(allBgLayers, {
        backgroundColor: "#fcf9f9", // Target White color
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%", // Start jab FAQ 50% screen par aaye
          end: "top 10%",   // Jaldi complete ho jaye top touch karne se pehle
          scrub: true,
          immediateRender: false, // Conflicts rokenge
        }
      });

      // Text & Border Color: White -> Pink
      gsap.fromTo(".color-sync", 
        { color: "#ffffff", borderColor: "rgba(255,255,255,0.2)" }, 
        { 
          color: "#D83688", 
          borderColor: "#D83688",
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: "top 50%", 
            end: "top 10%", 
            scrub: true,
            immediateRender: false, 
          } 
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="faq" 
      className="relative w-full transition-colors duration-0"
      style={{ backgroundColor: "#DE318A" }} 
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-start px-6 md:px-12 lg:px-0">
        
        {/* --- Left Side: Sticky Typography --- */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-0 lg:h-[100dvh] flex flex-col justify-center pt-24 lg:pt-0 z-20">
            {/* FIX: Mobile pe text-[11.5vw] kiya hai taaki 'SMALL QUESTIONS' ek line m aa jaye */}
            <h2 className="text-[11.5vw] sm:text-6xl md:text-[4rem] lg:text-[5rem] xl:text-[5rem] leading-[0.95] font-black font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-normal" style={{ letterSpacing: "0.02em" }}>
                
                {/* Mobile mein 2 lines (SMALL QUESTIONS, | BIG ANSWERS.), Desktop pe 3 lines */}
                <span className="color-sync block drop-shadow-sm mb-1 lg:mb-2">
                  SMALL <span className="md:hidden">QUESTIONS,</span>
                </span>
                
                <span className="color-sync hidden md:block drop-shadow-sm mb-4 lg:mb-6">
                  QUESTIONS,
                </span>
                
                <span className="color-sync block drop-shadow-sm mt-1 md:mt-0">
                  BIG ANSWERS.
                </span>
            </h2>
            
            {/* Bottom Indicator */}
            <div className="about-anim-line hidden md:flex absolute bottom-8 left-6 md:bottom-12 md:left-4 lg:left-3 items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
              <div className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
              </div>
              
              <span className="text-[11px] md:text-xs font-black text-black uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
                FAQ
              </span>
              
              <div className="w-12 h-[2px] bg-black group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
            </div>
        </div>

        {/* --- Right Side: Scrolling Accordion --- */}
        <div className="w-full lg:w-[48%] lg:ml-auto flex flex-col z-10 py-16 lg:py-[20dvh]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="color-sync border-b py-6 sm:py-8 transition-colors">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)} 
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <h3 className={`text-xl sm:text-2xl md:text-[2rem] font-['Impact',_Arial_Black,_sans-serif] tracking-normal uppercase transition-colors duration-300 w-[85%] leading-[1.1]`} style={{ letterSpacing: "0.01em" }}>
                    {faq.q}
                  </h3>
                  
                  <div className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-transform duration-500 bg-white shadow-sm ${isOpen ? 'rotate-45' : ''}`}>
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#DE318A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="color-sync font-sans font-bold text-sm sm:text-base lg:text-lg pt-6 leading-snug max-w-[90%] opacity-90">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}