import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';
    const lenis = (window as any).lenis;
    if (lenis) lenis.stop();

    const duration = 1400; // 1.4 seconds smooth load time
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsHidden(true);
              document.body.style.overflow = '';
              const lenisInstance = (window as any).lenis;
              if (lenisInstance) lenisInstance.start();
              if (onComplete) onComplete();
            }, 600); // 600ms fade out duration
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) lenisInstance.start();
    };
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#080504',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        color: '#FAF6F0',
        padding: '24px',
      }}
    >
      {/* Background Subtle Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(234, 168, 18, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Preloader Box Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Executive Brand Logo Matching Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '24px',
        }}>
          <img 
            src="/zaaha logo.png" 
            alt="Zaaha Kitchen Logo" 
            style={{
              height: '115px',
              width: 'auto',
              maxHeight: '130px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 24px rgba(234, 168, 18, 0.55))',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#EAA812', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px' }}>
          <Sparkles size={13} />
          <span>Taste of Malabar & Middle East</span>
          <Sparkles size={13} />
        </div>

        {/* Progress Bar Container */}
        <div style={{
          width: '100%',
          background: 'rgba(30, 20, 15, 0.9)',
          border: '1px solid rgba(234, 168, 18, 0.35)',
          borderRadius: '9999px',
          padding: '4px',
          marginBottom: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        }}>
          <div style={{
            height: '8px',
            width: `${Math.min(100, Math.round(progress))}%`,
            background: 'linear-gradient(90deg, #EAA812 0%, #E58A2B 100%)',
            borderRadius: '9999px',
            transition: 'width 0.1s linear',
            boxShadow: '0 0 14px rgba(234, 168, 18, 0.8)',
          }} />
        </div>

        {/* Bottom Percentage Status Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: '11.5px',
          fontWeight: 800,
          color: '#CBBFB4',
          letterSpacing: '1px',
        }}>
          <span>LOADING EXPERIENCE</span>
          <span style={{ color: '#EAA812', fontFamily: 'monospace', fontSize: '13px' }}>
            {Math.min(100, Math.round(progress))}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
