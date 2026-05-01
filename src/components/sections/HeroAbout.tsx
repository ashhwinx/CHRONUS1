import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Hero"; 
import About from "./About";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAbout() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.set(".hero-h1", { y: -30, opacity: 0 });
       gsap.to(".hero-h1", { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
       
       gsap.set(".hero-star", { scale: 0, rotate: -90 });
       gsap.to(".hero-star", { scale: 1, rotate: 0, duration: 1.2, delay: 0.3, ease: "backOut" });
       
       gsap.set(".hero-bottom-left", { opacity: 0, x: -30 });
       gsap.to(".hero-bottom-left", { opacity: 1, x: 0, duration: 1, delay: 1.2 });
       
       gsap.set(".hero-bottom-right", { opacity: 0, x: 30 });
       gsap.to(".hero-bottom-right", { opacity: 1, x: 0, duration: 1, delay: 1.4 });

       gsap.set(".img-1", { x: "0%", y: 0, rotate: 0, opacity: 0 });
       gsap.to(".img-1", { x: "-95%", y: 40, rotate: -8, opacity: 1, duration: 1.2, delay: 0.8, ease: "power3.out" });

       gsap.set(".img-3", { x: "0%", y: 0, rotate: 0, opacity: 0 });
       gsap.to(".img-3", { x: "90%", y: 20, rotate: 6, opacity: 1, duration: 1.2, delay: 0.9, ease: "power3.out" });

       gsap.set(".img-2", { y: "40%", opacity: 0 });
       gsap.to(".img-2", { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" });

       // --- Scroll Timeline 1: Collapse into one stack --- //
       gsap.timeline({
         scrollTrigger: {
           trigger: ".spacer-1",
           start: "top 80%",
           end: "bottom 60%",
           scrub: 1,
         }
       })
       .to(".img-1", { x: "0%", y: 0, rotate: 0, duration: 1 }, 0)
       .to(".img-3", { x: "0%", y: 0, rotate: 0, duration: 1 }, 0)
       .to(".hero-h1", { y: -100, opacity: 0, duration: 1 }, 0)
       .to(".hero-star", { y: -100, opacity: 0, duration: 1 }, 0)
       .to(".hero-bottom-left", { x: -50, opacity: 0, duration: 1 }, 0)
       .to(".hero-bottom-right", { x: 50, opacity: 0, duration: 1 }, 0)
       .set([".img-1", ".img-3"], { autoAlpha: 0 }, 1);

       // --- Scroll Timeline 2: About Section & 4th Image Book Flip --- //
       let mm = gsap.matchMedia();

       // 💻 DESKTOP ONLY: Image flip animation + text slide
       mm.add("(min-width: 768px)", () => {
         gsap.set(".img-4", { rotationZ: -10, y: "100%", scale: 0.9, opacity: 0, display: "block" });

         gsap.timeline({
           scrollTrigger: {
             trigger: ".about-section",
             start: "top 80%",
             end: "center center",
             scrub: 1,
           }
         })
         .to(".img-4", { opacity: 1, duration: 0.1 }, 0) 
         .to(".img-4", { rotationZ: 0, y: "0%", scale: 1, duration: 1.2, ease: "power2.out" }, 0)
         .fromTo(".about-left", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.2)
         .fromTo(".about-right", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.2);
       });

       // 📱 MOBILE ONLY: Text slide only, img-4 hidden
       mm.add("(max-width: 767px)", () => {
         gsap.set(".img-4", { opacity: 0, display: "none" }); 
         
         gsap.timeline({
           scrollTrigger: {
             trigger: ".about-section",
             start: "top 80%",
             end: "center center",
             scrub: 1,
           }
         })
         .fromTo(".about-left", { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.2)
         .fromTo(".about-right", { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.2);
       });

       // --- Scroll Timeline 3: Projects --- //
       const pCards = gsap.utils.toArray(".project-card");
       const numCards = pCards.length;
       
       // STRICT FIX: Mobile ke liye gap aur offset yahan exactly calculate honge taaki cards na chipkein
       const isMobile = window.innerWidth <= 768;
       const offset = isMobile ? window.innerWidth * 0.95 : window.innerWidth * 0.45;
       const gap = isMobile ? window.innerWidth * 0.95 : window.innerWidth * 0.35;

       gsap.set(pCards, { x: (i: any) => offset + i * gap, y: 0, rotationZ: 0, opacity: 1 });
       gsap.set(".projects-left", { x: -50, opacity: 0 });
       gsap.set(".reveal-text-line", { y: 60, opacity: 0, rotationX: -45 });
       gsap.set(".reveal-rect", { clipPath: "circle(0% at 50% 50%)" });
       
       gsap.set(".bg-transition", { backgroundColor: "#2885ba" }); 

       gsap.timeline({
         scrollTrigger: {
           trigger: ".projects-section",
           start: "top 70%",
           end: "top top",
           scrub: 1,
         }
       }).to(".bg-transition", { opacity: 1 });

       const projTl = gsap.timeline({
         scrollTrigger: {
           trigger: ".projects-section",
           start: "top top",
           end: "bottom bottom",
           scrub: 1,
         }
       });

       projTl.to(".projects-left", { x: 0, opacity: 1, duration: 1 });
       
       const bgColors = ["#171717", "#b4bdc6", "#444325", "#e59c01", "#f29ebd"];
       
       for (let s = 0; s < numCards; s++) {
           const label = "step" + s;
           projTl.add(label);
           
           if (s > 0) {
               projTl.to(".bg-transition", { backgroundColor: bgColors[s], duration: 2, ease: "none" }, label);
           }

           for (let i = 0; i < numCards; i++) {
               const card = pCards[i] as HTMLElement;
               const title = card.querySelector('.card-title-anim');

               if (i === s) {
                   projTl.to(card, { x: 0, duration: 2, ease: "power3.inOut" }, label);
                   if(title) projTl.to(title, { y: "20vh", scale: 1.15, duration: 2, ease: "power3.inOut" }, label);
                   
               } else if (i < s) {
                   // Queue
               } else if (i > s) {
                   projTl.to(card, { x: offset + (i - s - 1) * gap, duration: 2, ease: "power3.inOut" }, label);
                   if(title) projTl.to(title, { y: "0vh", scale: 1, duration: 2, ease: "power3.inOut" }, label);
               } 
           }
           projTl.to({}, { duration: 0.5 });
       }

       projTl.to({}, { duration: 0.5 });
       projTl.to(".reveal-rect", { clipPath: "circle(150% at 50% 50%)", duration: 3, ease: "power2.inOut" });       
       projTl.to(".reveal-text-line", { y: 0, opacity: 1, rotationX: 0, stagger: 0.2, duration: 1.5, ease: "power2.out" }, "-=1.5");
       projTl.to({}, { duration: 1 }); 

    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-pink-50/30 to-blue-50/30">
      
      <div className="bg-transition fixed inset-0 bg-neutral-950 pointer-events-none z-0 opacity-0"></div>

      {/* FIX: 'relative md:sticky' taaki mobile par image follow na kare */}
      <div className="relative md:sticky top-0 h-[100dvh] w-full flex items-center justify-center pointer-events-none z-10" style={{ perspective: "1500px" }}>
        <div className="img-container relative w-[60vw] md:w-[25vw] aspect-[2/3] max-w-[320px] pointer-events-auto mb-[14vh] md:mt-24" style={{ transformStyle: "preserve-3d" }}>

             <div className="img-4 absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden z-[40] bg-neutral-200 border border-black/5">
                 <img src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=800&auto=format&fit=crop" alt="Abstract fashion" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent mix-blend-overlay"></div>
             </div>
             <div className="img-2 absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden z-30 bg-neutral-200 border border-black/5">
                 <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=800&auto=format&fit=crop" alt="Blue shoes" className="w-full h-full object-cover" />
             </div>
             <div className="img-3 absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden z-20 bg-neutral-200 border border-black/5">
                 <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" alt="Portrait model" className="w-full h-full object-cover" />
             </div>
             <div className="img-1 absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden z-10 bg-neutral-200 border border-black/5">
                 <img src="https://images.unsplash.com/photo-1534961165765-5c9795af911b?q=80&w=800&auto=format&fit=crop" alt="Fashion model" className="w-full h-full object-cover" />
             </div>
         </div>
      </div>

      <div className="relative z-20 -mt-[100dvh]">
          <Hero />
          <About />
          <div className="h-[20dvh] w-full pointer-events-none"></div>
          <Projects />
      </div>
    </div>
  );
}