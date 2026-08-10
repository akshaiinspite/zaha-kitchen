import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { CanvasSequenceHero } from './components/CanvasSequenceHero';
import { AboutSection } from './components/AboutSection';
import { CuisineSection } from './components/CuisineSection';
import { MenuSection } from './components/MenuSection';
import { LocationsSection } from './components/LocationsSection';
import { CateringSection } from './components/CateringSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [activeStop, setActiveStop] = useState<number>(0);

  // Initialize Lenis inertial smooth scroll synced to GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ background: '#0C0806', minHeight: '100vh', color: '#FAF6F0', overflowX: 'hidden' }}>
      {/* Header Navigation */}
      <Header />

      {/* Hero Canvas Flight Sequence */}
      <main>
        <CanvasSequenceHero 
          activeStop={activeStop}
          onStopChange={(newStop) => setActiveStop(newStop)}
        />
        
        {/* 1. About Us Section */}
        <AboutSection />

        {/* 2. Multicuisine Showcase (Arabic, Continental, Chinese, Kerala) */}
        <CuisineSection />

        {/* 3. Detailed Menu Section with Authentic Food Dishes & Photo Cards */}
        <MenuSection />

        {/* 4. Our Expansion & Locations Section */}
        <LocationsSection />

        {/* 5. Catering & Special Events Section */}
        <CateringSection />

        {/* 6. Why Choose Zaaha Kitchen? */}
        <WhyUsSection />

        {/* 7. Dedicated Contact & Reservation Form Section (Before Footer) */}
        <ContactSection />

        {/* 8. Footer Call-to-Action & Outlet Details */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
