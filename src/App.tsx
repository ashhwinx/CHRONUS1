import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import HeroAbout from './components/sections/HeroAbout';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Experts from './components/sections/Experts';
import WhyChooseUs from './components/sections/WhyChooseUs';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white font-sans text-neutral-900 overflow-x-clip">
        <Navbar />
        <main>
          <HeroAbout />
          <Experts />
          <Process />
          <WhyChooseUs />
          <FAQ />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
