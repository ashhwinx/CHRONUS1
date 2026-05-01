import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

// Social links array with brand-specific hover colors
const socials = [
  { 
    name: "Instagram", 
    icon: <Instagram size={16} />, 
    hoverClass: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]" 
  },
  { 
    name: "Twitter", 
    icon: <Twitter size={16} />, 
    hoverClass: "hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]" 
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin size={16} />, 
    hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" 
  },
  { 
    name: "TikTok", 
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2-1.74 2.89 2.89 0 0 1 2.89-2.89 2.88 2.88 0 0 1 1.54.45v-3.6a6.3 6.3 0 0 0-1.54-.19 6.34 6.34 0 1 0 6.34 6.34v-5.95a8.28 8.28 0 0 0 3.19.65V6.69z"/></svg>, 
    hoverClass: "hover:bg-[#ff0050] hover:text-white hover:border-[#ff0050]" 
  },
];

export default function Footer() {
  return (
    // Sharp corners (removed rounded-t classes) and solid white background
    <footer id="contact" className="bg-[#fcf9f9] w-full pt-16 px-6 md:px-12 lg:px-16 border-t border-gray-100 relative z-30 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* --- Top Section: CTA & Info --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-12">
          
          {/* Left Side: Colorful CTA */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-['Anton',_Arial_Black,_sans-serif] text-gray-900 leading-[0.85] uppercase tracking-tighter mb-4">
              READY TO <br />
              <span className="bg-gradient-to-r from-[#D83688] via-[#8B5CF6] to-[#06B6D4] text-transparent bg-clip-text font-serif italic lowercase font-normal tracking-normal pr-2">
                dominate?
              </span>
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base max-w-sm mb-8">
              Drop us a line. Let's discuss how we can engineer an unfair advantage for your brand.
            </p>
            
            <a 
              href="mailto:hello@chronus.agency" 
              className="group flex items-center gap-3 text-2xl md:text-4xl font-['Anton',_Arial_Black,_sans-serif] text-[#D83688] uppercase hover:text-[#8B5CF6] transition-colors w-fit tracking-tighter"
            >
              contact@webier
              <div className="bg-[#D83688]/10 text-[#D83688] p-2 md:p-3 rounded-full group-hover:bg-[#8B5CF6]/10 group-hover:text-[#8B5CF6] transition-all group-hover:translate-x-2">
                <ArrowRight size={24} />
              </div>
            </a>
          </div>

          {/* Right Side: Social Pills & Address */}
          <div className="flex flex-col lg:items-end text-left lg:text-right w-full lg:w-auto">
            
            <div className="mb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Our Headquarters</p>
              <p className="text-gray-900 font-black text-xl md:text-2xl uppercase tracking-tighter">Montpellier, France</p>
              <p className="text-[#D83688] font-bold text-sm">+ Available Globally</p>
            </div>
            
            <div className="flex flex-col lg:items-end w-full">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Connect With Us</p>
               {/* Sleek Social Pills */}
               <div className="flex flex-wrap justify-start lg:justify-end gap-3">
                 {socials.map((social) => (
                   <a 
                     key={social.name} 
                     href={social.link}
                     className={`flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${social.hoverClass}`}
                   >
                     {social.icon}
                     <span className="text-[10px] md:text-xs font-black uppercase tracking-widest mt-[2px]">
                       {social.name}
                     </span>
                   </a>
                 ))}
               </div>
            </div>

          </div>
        </div>

    

      </div>

      {/* --- Massive CHRONUS Base --- */}
      {/* Yeh text ekdum base par giant size mein hoga aur light gray color mein watermark jaisa dikhega */}
      <div className="w-full flex justify-center items-end mt-[-2%] pointer-events-none select-none">
        <h2 className="text-[20vw] text-[#00522d] leading-[0.75] font-['Anton',_Arial_Black,_sans-serif] font-black  uppercase tracking-tighter text-center">
          CHRONUS
        </h2>
      </div>

    </footer>
  );
}