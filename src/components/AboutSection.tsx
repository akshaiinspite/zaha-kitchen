import React, { useRef } from 'react';
import { Star, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      // Truncate final 2 seconds of video and loop back seamlessly
      if (duration && videoRef.current.currentTime >= duration - 2.2) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <section 
      id="about" 
      style={{ 
        position: 'relative', 
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px', 
        color: '#FAF6F0', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(234, 168, 18, 0.2)',
        borderBottom: '1px solid rgba(234, 168, 18, 0.2)',
        background: '#0C0806'
      }}
    >
      {/* Background Fullscreen Video Reel with Trimmed End */}
      <video
        ref={videoRef}
        src="/reel.mp4"
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Elegant Small Black Shadow Overlay */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at center, rgba(12, 8, 6, 0.4) 0%, rgba(12, 8, 6, 0.7) 100%)', 
          zIndex: 1 
        }} 
      />

      {/* Centered Content Container */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '920px', 
          margin: '0 auto', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        
        {/* Established Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          background: 'rgba(234, 168, 18, 0.15)', 
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(234, 168, 18, 0.4)', 
          padding: '8px 20px', 
          borderRadius: '9999px', 
          color: '#EAA812', 
          fontSize: '12px', 
          fontWeight: 800, 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          marginBottom: '24px',
          boxShadow: '0 4px 20px rgba(234, 168, 18, 0.25)'
        }}>
          <Sparkles size={15} />
          <span>ESTABLISHED 2021 • ERNAKULAM</span>
        </div>

        {/* Main Heading */}
        <h2 
          className="font-heading" 
          style={{ 
            fontSize: 'clamp(34px, 4.5vw, 56px)', 
            fontWeight: 700, 
            lineHeight: 1.2, 
            marginBottom: '24px',
            color: '#FAF6F0',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
          }}
        >
          A Journey of <span style={{ color: '#EAA812' }}>Flavor, Passion</span>, and Excellence
        </h2>

        {/* Story Text */}
        <p style={{ 
          color: '#E2D7CC', 
          fontSize: 'clamp(16px, 1.8vw, 18px)', 
          lineHeight: 1.8, 
          marginBottom: '20px',
          maxWidth: '840px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
        }}>
          Established in 2021, <strong style={{ color: '#FAF6F0' }}>Zaaha Kitchen</strong> quickly rose to become a frontrunner in Ernakulam’s vibrant food scene. Built on an uncompromising commitment to quality and exceptional service, we bring food lovers together through a unique fusion of traditional recipes, rich Arabic delicacies, classic Continental fare, and zesty Chinese flavors.
        </p>

        <p style={{ 
          color: '#CBBFB4', 
          fontSize: 'clamp(15px, 1.6vw, 16.5px)', 
          lineHeight: 1.8, 
          marginBottom: '44px',
          maxWidth: '780px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
        }}>
          From day one, Zaaha has been a hotspot for foodies, families, and top local food bloggers seeking an unforgettable dining experience.
        </p>

        {/* Stats Grid Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px', 
          width: '100%',
          maxWidth: '820px',
          marginBottom: '36px'
        }}>
          <div style={{
            background: 'rgba(22, 15, 12, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(234, 168, 18, 0.35)',
            borderRadius: '20px',
            padding: '24px 20px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#EAA812', marginBottom: '4px' }}>2021</div>
            <div style={{ fontSize: '13px', color: '#FAF6F0', fontWeight: 600 }}>Established</div>
          </div>

          <div style={{
            background: 'rgba(22, 15, 12, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(234, 168, 18, 0.35)',
            borderRadius: '20px',
            padding: '24px 20px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#EAA812', marginBottom: '4px' }}>3 Outlets</div>
            <div style={{ fontSize: '13px', color: '#FAF6F0', fontWeight: 600 }}>Ernakulam & Infopark</div>
          </div>

          <div style={{
            background: 'rgba(22, 15, 12, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(234, 168, 18, 0.35)',
            borderRadius: '20px',
            padding: '24px 20px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#EAA812', marginBottom: '4px' }}>100k+</div>
            <div style={{ fontSize: '13px', color: '#FAF6F0', fontWeight: 600 }}>Happy Diners</div>
          </div>
        </div>

        {/* Verification Highlight Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '10px',
          background: 'rgba(18, 12, 7, 0.85)', 
          backdropFilter: 'blur(12px)', 
          border: '1px solid rgba(234, 168, 18, 0.35)', 
          padding: '12px 24px', 
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
        }}>
          <Star color="#EAA812" fill="#EAA812" size={18} />
          <span style={{ fontWeight: 700, fontSize: '13.5px', color: '#FAF6F0' }}>
            Top Recommended Foodie Hotspot • <span style={{ color: '#CBBFB4', fontWeight: 500 }}>Verified by local food bloggers & Ernakulam foodies</span>
          </span>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

