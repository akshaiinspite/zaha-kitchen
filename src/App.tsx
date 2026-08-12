import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { CanvasSequenceHero } from './components/CanvasSequenceHero';
import { AboutSection } from './components/AboutSection';
import { CuisineSection } from './components/CuisineSection';
import { LocationsSection } from './components/LocationsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsConditionsPage } from './components/TermsConditionsPage';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [activeStop, setActiveStop] = useState<number>(0);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  // Sync window path changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Initialize Lenis inertial smooth scroll synced to GSAP ScrollTrigger
  useEffect(() => {
    // Only run Lenis smooth scroll on home page
    if (currentPath === '/' || currentPath === '') {
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
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Route matching
  if (currentPath === '/privacy-policy' || currentPath === '/privacy') {
    return <PrivacyPolicyPage onNavigateHome={() => navigateTo('/')} />;
  }

  if (currentPath === '/terms-and-conditions' || currentPath === '/terms' || currentPath === '/terms-and-condition') {
    return <TermsConditionsPage onNavigateHome={() => navigateTo('/')} />;
  }

  return (
    <div style={{ background: '#0C0806', minHeight: '100vh', color: '#FAF6F0', overflowX: 'hidden' }}>
      {/* Global Site Luxury Preloader */}
      <Preloader />

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

        {/* 3. Our Expansion & Locations Section */}
        <LocationsSection />

        {/* 4. Why Choose Zaaha Kitchen? */}
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
