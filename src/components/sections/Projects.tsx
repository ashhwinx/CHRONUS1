import React from "react";

export const projectsData = [
  { title: "Neon Pulse", client: "TechWear Apparel", category: "Campaign", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", bgColor: "#171717" },
  { title: "Sonic Waves", client: "AudioFi Electronics", category: "Social Strategy", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", bgColor: "#0f172a" },
  { title: "Urban Drift", client: "Metro Automotive", category: "Content Creation", img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop", bgColor: "#1c1917" },
  { title: "Quantum Leap", client: "Future Tech", category: "Rebranding", img: "https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?q=80&w=800&auto=format&fit=crop", bgColor: "#18181b" },
  { title: "Explore More", client: "View All Projects", category: "Archive", img: "", bgColor: "#050505", isMore: true }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section relative h-[550dvh] w-full z-40 pointer-events-none">
      {/* FIXED: Added flex, items-center back for desktop so the left text stays perfectly vertically centered */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col md:flex-row items-center justify-start md:justify-between px-6 md:px-12 lg:px-12 overflow-hidden">
        
        {/* --- 1. LEFT TEXT --- */}
        {/* Mobile: Pinned to top | Desktop: Relative flow (vertically centered by parent) */}
        <div className="absolute top-[8vh] left-0 md:top-auto md:relative md:left-auto w-full md:w-[45%] flex flex-col items-center md:items-start z-50 pointer-events-auto">
          
          <div className="flex flex-col font-['Anton',_sans-serif] uppercase tracking-tighter leading-[0.85] text-center md:text-left drop-shadow-xl">
             <span className="text-white text-[14vw] sm:text-7xl md:text-[5rem] lg:text-[6rem] font-black pb-1">WE <br /> MAKE THEM</span>
             <span className="text-white text-[14vw] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black">SOCIAL</span>
          </div>

          {/* Premium Glassmorphism Profile Pill (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-4 mt-10 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-full w-max shadow-xl">
            <div className="flex -space-x-3 pl-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 1" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 2" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 3" />
            </div>
            <div className="flex flex-col pr-4">
              <span className="text-white font-bold text-sm font-sans tracking-wide">Trusted by 50+</span>
              <span className="text-white/50 text-[9px] uppercase tracking-widest font-sans font-bold">Global Brands</span>
            </div>
          </div>

        </div>

   {/* --- 2. CARDS CONTAINER --- */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] md:w-[25vw] aspect-[2/3] max-w-[340px] pointer-events-auto z-40 transform-gpu" style={{ transformStyle: "preserve-3d" }}>
          {projectsData.map((project, index) => (
            <div key={index} className={`project-card absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col z-50 group isolate will-change-transform transform-gpu ${project.isMore ? '' : 'border border-white/10'}`}>
              
              {project.isMore ? (
                <div className="absolute inset-0 w-full h-full bg-[#db3c8a] transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu"></div>
              ) : (
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu" />
              )}
              
              {!project.isMore && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              )}
              
              {project.isMore ? (
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center z-10 text-white text-center cursor-pointer transition-colors hover:bg-white/5">
                  <h3 className="text-3xl md:text-5xl font-['Anton',_sans-serif] leading-tight mb-2 drop-shadow-md">MORE <br /> PROJECTS</h3>
                  <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center mb-6 bg-[#111] md:bg-white/5 md:backdrop-blur-sm group transition-all hover:scale-110 hover:bg-white hover:text-[#E11D48]">
                    <svg className="w-6 h-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 text-white">
                  <div className="flex flex-col items-center w-full mt-2">
                    <span className="px-4 py-1.5 bg-black/50 md:bg-white/10 md:backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-sans font-bold tracking-[0.2em] uppercase border border-white/20 shadow-sm mb-6">
                      {project.category}
                    </span>
                    <h3 className="card-title-anim text-3xl md:text-5xl font-display font-black leading-[0.9] drop-shadow-2xl text-center uppercase tracking-tighter">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-full flex justify-center mt-auto pb-2">
                    <button className="w-full py-3 md:py-4 rounded-full bg-black/60 md:bg-white/10 md:backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-xl">
                      <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- 3. BOTTOM PILL (MOBILE ONLY) --- */}
        <div className="md:hidden absolute bottom-[8vh] left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#111]/90 border border-white/10 p-2 rounded-full w-max shadow-2xl pointer-events-auto z-50 transform-gpu">
          <div className="flex -space-x-2 pl-1">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-9 h-9 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 1" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" className="w-9 h-9 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 2" />
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" className="w-9 h-9 rounded-full border-2 border-neutral-900 object-cover" alt="Profile 3" />
          </div>
          <div className="flex flex-col pr-3">
            <span className="text-white font-bold text-xs font-sans tracking-wide">Trusted by 50+</span>
            <span className="text-white/50 text-[8px] uppercase tracking-widest font-sans font-bold">Global Brands</span>
          </div>
        </div>

        {/* PROJECT indicator (Hidden on mobile) */}
        <div className="about-anim-line hidden md:flex absolute bottom-12 left-12 lg:left-16 items-center gap-4 pointer-events-auto z-20 group cursor-pointer">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#db3c8a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#db3c8a]"></span>
          </div>
          <span className="text-xs font-black text-white uppercase tracking-[0.4em] font-sans group-hover:text-[#db3c8a] transition-colors">
            PROJECT
          </span>
          <div className="w-12 h-[2px] bg-white group-hover:w-20 group-hover:bg-[#db3c8a] transition-all duration-500"></div>
        </div>
        
        <div className="hidden md:block w-[35%] pointer-events-none"></div>

        {/* Fullscreen Reveal Element */}
        <div className="reveal-rect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[#db3c8a] flex items-center justify-center flex-col overflow-hidden px-4 text-center z-[100] will-change-transform pointer-events-auto border-y border-white/10">
          
          {/* FIX: gap kam kiya kyunki niche h2 mein padding add ki hai */}
          <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-0 md:gap-1 font-['Anton',_sans-serif] uppercase tracking-tighter" style={{ transformStyle: "preserve-3d" }}>
            
            <div className="overflow-hidden">
              {/* FIX: pt-2 pb-1 (mobile) aur pt-4 pb-2 (desktop) add kiya taaki text upar/niche se na kate */}
              <h2 className="reveal-text-line pt-2 pb-1 md:pt-4 md:pb-2 text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                IT IS IMPACT OF
              </h2>
            </div>
            
            <div className="overflow-hidden flex items-center gap-4">
              <div className="hidden md:block w-16 md:w-32 h-2 bg-white reveal-text-line origin-left rounded-full"></div>
              <h2 className="reveal-text-line pt-2 pb-1 md:pt-4 md:pb-2 text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                YOUR SINCERITY
              </h2>
              <div className="hidden md:block w-16 md:w-32 h-2 bg-white reveal-text-line origin-right rounded-full"></div>
            </div>
            
            <div className="overflow-hidden">
              <h2 className="reveal-text-line pt-2 pb-1 md:pt-4 md:pb-2 text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.85] drop-shadow-sm">
                IT IS AM JUST
              </h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}