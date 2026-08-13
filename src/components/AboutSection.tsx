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
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(50px, 8vw, 120px) 16px', 
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
          width: '100%',
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
          justifyContent: 'center',
          gap: '8px', 
          background: 'rgba(234, 168, 18, 0.15)', 
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(234, 168, 18, 0.4)', 
          padding: '6px 16px', 
          borderRadius: '9999px', 
          color: '#EAA812', 
          fontSize: 'clamp(10px, 2.5vw, 12px)', 
          fontWeight: 800, 
          letterSpacing: '1.5px', 
          textTransform: 'uppercase', 
          marginBottom: '20px',
          boxShadow: '0 4px 20px rgba(234, 168, 18, 0.25)',
          maxWidth: '100%',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <Sparkles size={14} style={{ flexShrink: 0 }} />
          <span>ESTABLISHED 2021 • ERNAKULAM</span>
        </div>

        {/* Main Heading */}
        <h2 
          className="font-heading" 
          style={{ 
            fontSize: 'clamp(22px, 5vw, 48px)', 
            fontWeight: 700, 
            lineHeight: 1.2, 
            marginBottom: '20px',
            color: '#FAF6F0',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
            padding: '0 8px'
          }}
        >
          A Journey of <span style={{ color: '#EAA812' }}>Flavor, Passion</span>, and Excellence
        </h2>

        {/* Story Text */}
        <p style={{ 
          color: '#E2D7CC', 
          fontSize: 'clamp(14px, 1.8vw, 18px)', 
          lineHeight: 1.7, 
          marginBottom: '16px',
          maxWidth: '840px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
          padding: '0 8px'
        }}>
          Established in 2021, <strong style={{ color: '#FAF6F0' }}>Zaaha Kitchen</strong> quickly rose to become a frontrunner in Ernakulam’s vibrant food scene. Built on an uncompromising commitment to quality and exceptional service, we bring food lovers together through a unique fusion of traditional recipes, rich Arabic delicacies, classic Continental fare, and zesty Chinese flavors.
        </p>

        <p style={{ 
          color: '#CBBFB4', 
          fontSize: 'clamp(13px, 1.6vw, 16.5px)', 
          lineHeight: 1.7, 
          marginBottom: '36px',
          maxWidth: '780px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
          padding: '0 8px'
        }}>
          From day one, Zaaha has been a hotspot for foodies, families, and top local food bloggers seeking an unforgettable dining experience.
        </p>

        {/* Stats Grid Cards */}
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <div className="about-stat-number">2021</div>
            <div className="about-stat-label">Established</div>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-number">3 Outlets</div>
            <div className="about-stat-label">Ernakulam & Infopark</div>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-number">100k+</div>
            <div className="about-stat-label">Happy Diners</div>
          </div>
        </div>

        {/* Verification Highlight Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '8px',
          background: 'rgba(18, 12, 7, 0.85)', 
          backdropFilter: 'blur(12px)', 
          border: '1px solid rgba(234, 168, 18, 0.35)', 
          padding: '10px 18px', 
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          maxWidth: '100%',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <Star color="#EAA812" fill="#EAA812" size={16} style={{ flexShrink: 0 }} />
          <span style={{ fontWeight: 700, fontSize: 'clamp(11.5px, 2.5vw, 13.5px)', color: '#FAF6F0', lineHeight: 1.4 }}>
            Top Recommended Foodie Hotspot • <span style={{ color: '#CBBFB4', fontWeight: 500 }}>Verified by local food bloggers & Ernakulam foodies</span>
          </span>
        </div>

      </div>

      <style>{`
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 820px;
          margin-bottom: 32px;
        }
        .about-stat-card {
          background: rgba(22, 15, 12, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(234, 168, 18, 0.35);
          border-radius: 18px;
          padding: 20px 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
          text-align: center;
        }
        .about-stat-number {
          font-size: clamp(20px, 3.5vw, 32px);
          font-weight: 800;
          color: #EAA812;
          margin-bottom: 4px;
          white-space: nowrap;
        }
        .about-stat-label {
          font-size: clamp(10.5px, 2vw, 13px);
          color: #FAF6F0;
          font-weight: 600;
          line-height: 1.3;
        }

        @media (max-width: 580px) {
          .about-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          .about-stat-card {
            padding: 14px 6px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>

  );
};

export default AboutSection;

