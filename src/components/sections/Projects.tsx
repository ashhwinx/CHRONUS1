import React from "react";

// Minimal Aesthetic Colors for Premium Vibe   #171717
export const projectsData = [
  { title: "Neon Pulse", client: "TechWear Apparel", category: "Campaign", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", bgColor: "#171717" },
  { title: "Sonic Waves", client: "AudioFi Electronics", category: "Social Strategy", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", bgColor: "#0f172a" },
  { title: "Urban Drift", client: "Metro Automotive", category: "Content Creation", img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop", bgColor: "#1c1917" },
  { title: "Quantum Leap", client: "Future Tech", category: "Rebranding", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", bgColor: "#18181b" },
  // Last card mein img ki zaroorat nahi hai
  { title: "Explore More", client: "View All Projects", category: "Archive", img: "", bgColor: "#050505", isMore: true }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section relative h-[550dvh] w-full z-40 pointer-events-none">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-between px-6 md:px-12 lg:px-12">
        
        {/* --- Left Side: Premium Impact Font & Glass Profiles --- */}
        <div className="projects-left w-full md:w-[45%] pointer-events-auto absolute md:relative top-1/2 md:top-auto -translate-y-1/2 md:translate-y-0 left-6 md:left-0 z-50">
          
          <div className="flex flex-col font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter leading-[0.85] mb-4">
             <span className="text-white text-6xl sm:text-7xl md:text-[5rem] lg:text-[6rem] drop-shadow-md font-black pb-1">WE </span>
             <span className="text-white text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] drop-shadow-md font-black">MAKE THEM <br /> SOCIAL</span>
          </div>

          {/* Premium Glassmorphism Profiles Pill */}
          <div className="flex items-center gap-4 mt-6 md:mt-10 bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 rounded-full w-max shadow-2xl">
            <div className="flex -space-x-3 pl-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 1" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 2" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 3" />
            </div>
            <div className="flex flex-col pr-4">
              <span className="text-white font-bold text-xs md:text-sm font-sans tracking-wide">Trusted by 50+</span>
              <span className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-widest font-sans font-bold">Global Brands</span>
            </div>
          </div>

        </div>

        {/* --- Center: aspect-[2/3] Cards with Images & Sliding Titles --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[25vw] aspect-[2/3] max-w-[340px] pointer-events-auto mt-[4vh] md:mt-0 z-40" style={{ transformStyle: "preserve-3d" }}>
          {projectsData.map((project, index) => (
            // FIX 1: Border sirf normal cards pe dikhegi
            <div key={index} className={`project-card absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col z-50 group isolate ${project.isMore ? '' : 'border border-white/10'}`}>
              
              {project.isMore ? (
                <div className="absolute inset-0 w-full h-full bg-[#db3c8a] transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu"></div>
              ) : (
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu" />
              )}
              
              {/* FIX 2: Dark Overlay Gradient sirf un cards pe aayega jo "isMore" NAHI hain */}
              {!project.isMore && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              )}
              
              {project.isMore ? (
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center z-10 text-white text-center cursor-pointer transition-colors hover:bg-white/5">
                  
                  <h3 className="text-3xl md:text-6xl  font-['Impact',_Arial_Black,_sans-serif] leading-tight mb-2 drop-shadow-md">MORE <br /> PROJECTS</h3>
                  
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm bg-white/5 group transition-all hover:scale-110 hover:bg-white hover:text-[#E11D48]">
                    <svg className="w-8 h-8 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 text-white">
                  
                  {/* Top: Category & Animating Title */}
                  <div className="flex flex-col items-center w-full mt-2">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-sans font-bold tracking-[0.2em] uppercase border border-white/20 shadow-sm mb-6">
                      {project.category}
                    </span>
                    <h3 className="card-title-anim text-4xl md:text-5xl font-display font-black leading-[0.9] drop-shadow-2xl text-center uppercase tracking-tighter">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottom: Huge "VIEW PROJECT" Link Button */}
                  <div className="w-full flex justify-center mt-auto pb-2">
                    <button className="w-full py-3.5 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-xl">
                      <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">View Project</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

        <div className="about-anim-line absolute bottom-8 left-6 md:bottom-12 md:left-12 lg:left-16 flex items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
          {/* Glowing Pulse Dot */}
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
          </div>
          
          <span className="text-[11px] md:text-xs font-black text-white uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
            PROJECT
          </span>
          
          {/* Sleek Line */}
          <div className="w-12 h-[2px] bg-white group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
        </div>
        
        <div className="hidden md:block w-[35%] pointer-events-none"></div>

        {/* --- Fullscreen Reveal Element --- */}
        <div className="reveal-rect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[105vh] bg-[#db3c8a] flex items-center justify-center flex-col overflow-hidden px-4 text-center z-[100] will-change-transform pointer-events-auto border-y border-white/10">
          <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-2 md:gap-4 font-['Impact',_Arial_Black,_sans-serif] uppercase tracking-tighter" style={{ transformStyle: "preserve-3d" }}>
            
            <div className="overflow-hidden">
              <h2 className="reveal-text-line text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                IT IS IMPACT OF
              </h2>
            </div>
            
            <div className="overflow-hidden flex items-center gap-4">
              <div className="hidden md:block w-16 md:w-32 h-2 bg-white reveal-text-line origin-left rounded-full"></div>
              <h2 className="reveal-text-line text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                YOUR SINCERITY
              </h2>
              <div className="hidden md:block w-16 md:w-32 h-2 bg-white reveal-text-line origin-right rounded-full"></div>
            </div>
            
            <div className="overflow-hidden">
              <h2 className="reveal-text-line text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                IT IS AM JUST
              </h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}