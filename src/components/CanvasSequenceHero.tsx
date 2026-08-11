import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Utensils } from 'lucide-react';
import '../styles/CanvasHero.css';

gsap.registerPlugin(ScrollTrigger);

// Load the 50 sequence frame images (001.png to 050.png)
const NEW_FRAME_URLS = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/Pouring_chai_and_plating_snacks_202608071507_${num}.png`;
});

const TOTAL_FRAMES = NEW_FRAME_URLS.length; // 50 frames

export interface HeroProps {
  activeStop?: number;
  onStopChange?: (index: number) => void;
}

export const CanvasSequenceHero: React.FC<HeroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);

  // Overlay state for final frame hero title reveal
  const [overlayOpacity, setOverlayOpacity] = useState<number>(0);
  const [overlayY, setOverlayY] = useState<number>(25);

  // Preload all 10 frame images into memory
  useEffect(() => {
    let loadedCount = 0;
    const imagesArr: HTMLImageElement[] = [];

    NEW_FRAME_URLS.forEach((url, idx) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      imagesArr[idx] = img;
    });

    imagesRef.current = imagesArr;
  }, []);

  // Crisp High-DPI Canvas Frame Rendering (Zero Ghosting / Double Images)
  const renderFrame = (frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIdx)));
    const img = imagesRef.current[imgIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = width / height;

    let renderW = width;
    let renderH = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderH = width / imgRatio;
      offsetY = (height - renderH) / 2;
    } else {
      renderW = height * imgRatio;
      offsetX = (width - renderW) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    // 1.04x Micro-crop scale to seamlessly remove corner watermarks/icons
    const cropScale = 1.04;
    const scaledW = renderW * cropScale;
    const scaledH = renderH * cropScale;
    const scaledOffsetX = offsetX - (scaledW - renderW) / 2;
    // Add +40px vertical padding offset to prevent jug touching top header navlinks
    const scaledOffsetY = offsetY - (scaledH - renderH) / 2 + 40;

    ctx.drawImage(img, scaledOffsetX, scaledOffsetY, scaledW, scaledH);

    // 100% Watermark Mask: Erase/cover Gemini star icon in bottom-right region with dark ambient blend
    const starX = scaledOffsetX + scaledW * 0.88;
    const starY = scaledOffsetY + scaledH * 0.88;
    const patchRadius = Math.max(scaledW, scaledH) * 0.15;

    const patchGradient = ctx.createRadialGradient(starX, starY, 0, starX, starY, patchRadius);
    patchGradient.addColorStop(0, 'rgba(12, 8, 6, 0.98)');
    patchGradient.addColorStop(0.4, 'rgba(12, 8, 6, 0.90)');
    patchGradient.addColorStop(1, 'rgba(12, 8, 6, 0)');

    ctx.fillStyle = patchGradient;
    ctx.beginPath();
    ctx.arc(starX, starY, patchRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  // Pure GSAP Timeline ScrollTrigger Animation
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    // Draw initial frame 0 immediately
    renderFrame(0);

    const sequenceObj = { frame: 0 };

    const tween = gsap.to(sequenceObj, {
      frame: TOTAL_FRAMES - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3000',
        pin: true,
        pinSpacing: true,
        scrub: 0.2, // Lenis-synced liquid smooth GSAP scrub
      },
      onUpdate: () => {
        renderFrame(sequenceObj.frame);

        // Smooth overlay reveal as final frame approaches
        const progress = sequenceObj.frame / (TOTAL_FRAMES - 1);
        if (progress >= 0.5) {
          const t = (progress - 0.5) / 0.5; // 0.0 to 1.0
          setOverlayOpacity(Math.min(1, Math.max(0, t)));
          setOverlayY((1 - Math.min(1, Math.max(0, t))) * 25);
        } else {
          setOverlayOpacity(0);
          setOverlayY(25);
        }
      },
    });

    const handleResize = () => {
      renderFrame(sequenceObj.frame);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="sequence-hero-wrapper">
      <div className="sequence-hero-sticky">
        {/* High-DPI Image Frame Canvas */}
        <canvas ref={canvasRef} className="sequence-canvas" />

        {/* Luxury Branded Preloader Overlay */}
        {!isLoaded && (
          <div className="sequence-loader">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '360px',
              textAlign: 'center',
              padding: '24px',
            }}>
              {/* Spinning Logo Container */}
              <div style={{ position: 'relative', width: '76px', height: '76px', marginBottom: '24px' }}>
                <div className="loader-spinner-outer" />
                <div style={{
                  position: 'absolute',
                  inset: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#160F0C',
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                }}>
                  <Utensils size={28} />
                </div>
              </div>

              <h2 className="font-heading" style={{ fontSize: '24px', fontWeight: 800, color: '#FAF6F0', margin: '0 0 6px 0', letterSpacing: '1px' }}>
                ZAAHA <span style={{ color: '#D4AF37' }}>KITCHEN</span>
              </h2>

              <p style={{ fontSize: '13px', color: '#CBBFB4', margin: '0 0 20px 0', fontWeight: 500 }}>
                Preparing Authentic Malabar Experience...
              </p>

              {/* Progress Bar & Percentage */}
              <div style={{ width: '100%', background: 'rgba(30, 20, 15, 0.8)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '9999px', padding: '3px', marginBottom: '10px' }}>
                <div style={{
                  height: '8px',
                  width: `${loadProgress}%`,
                  background: 'linear-gradient(90deg, #D4AF37 0%, #E58A2B 100%)',
                  borderRadius: '9999px',
                  transition: 'width 0.2s ease-out',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: '11px', fontWeight: 800, color: '#D4AF37', letterSpacing: '1px' }}>
                <span>LOADING HERITAGE EXPERIENCE</span>
                <span>{loadProgress}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Ambient Dark Vignette & Bottom Gradient */}
        <div className="sequence-vignette" />
        <div className="sequence-bottom-gradient" />

        {/* Final Frame Professional Hero Title Reveal (Clean Floating Layout - No Box) */}
        {isLoaded && (
          <div
            style={{
              position: 'absolute',
              bottom: '11%',
              left: '50%',
              transform: `translate(-50%, ${overlayY}px)`,
              opacity: overlayOpacity,
              zIndex: 30,
              textAlign: 'center',
              pointerEvents: overlayOpacity > 0.5 ? 'auto' : 'none',
              transition: 'opacity 0.2s linear, transform 0.2s linear',
              width: '90%',
              maxWidth: '850px',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: 0,
            }}
          >
            <div className="sequence-badge" style={{ margin: '0 auto 16px auto', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)' }}>
              <span>✨</span> ERNAKULAM'S FAVORITE MULTICUISINE HOTSPOT
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 800,
                color: '#FAF6F0',
                lineHeight: 1.15,
                marginBottom: '14px',
                letterSpacing: '-0.5px',
                textShadow: '0 4px 28px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.95)',
              }}
            >
              Authentic Malabar & <span style={{ color: '#EAA812' }}>Multicuisine Dining</span>
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: '#E2D7CB',
                maxWidth: '660px',
                margin: '0 auto 26px auto',
                lineHeight: 1.6,
                fontWeight: 500,
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.95), 0 1px 6px rgba(0, 0, 0, 0.95)',
              }}
            >
              Experience a rich fusion of traditional Kerala Nadan meals, charcoal Arabic Alfaham & Majboos, sizzling Chinese delights, and artisan tea snacks prepared fresh daily.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#menu" 
                className="btn-sequence-order" 
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#menu');
                  if (target) {
                    const lenis = (window as any).lenis;
                    if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.2 });
                    else target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Menu
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#locations"
                className="btn-sequence-order"
                style={{
                  textDecoration: 'none',
                  background: 'rgba(18, 12, 7, 0.7)',
                  color: '#FAF6F0',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#locations');
                  if (target) {
                    const lenis = (window as any).lenis;
                    if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.2 });
                    else target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Our Outlets
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CanvasSequenceHero;






