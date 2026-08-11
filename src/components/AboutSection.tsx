import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ background: '#0C0806', color: '#FAF6F0', padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Column: Story Content */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(234, 168, 18, 0.12)', border: '1px solid rgba(234, 168, 18, 0.35)', padding: '6px 16px', borderRadius: '9999px', color: '#EAA812', fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
            <Sparkles size={14} />
            <span>ESTABLISHED 2021 • ERNAKULAM</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '24px' }}>
            A Journey of <span style={{ color: '#EAA812' }}>Flavor, Passion</span>, and Excellence
          </h2>

          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            Established in 2021, <strong>Zaaha Kitchen</strong> quickly rose to become a frontrunner in Ernakulam’s vibrant food scene. Built on an uncompromising commitment to quality and exceptional service, we bring food lovers together through a unique fusion of traditional recipes, rich Arabic delicacies, classic Continental fare, and zesty Chinese flavors.
          </p>

          <p style={{ color: '#CBBFB4', fontSize: '15.5px', lineHeight: 1.8, marginBottom: '36px' }}>
            From day one, Zaaha has been a hotspot for foodies, families, and top local food bloggers seeking an unforgettable dining experience.
          </p>

          {/* Quick Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '24px', borderTop: '1px solid rgba(234, 168, 18, 0.25)' }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#EAA812' }}>2021</div>
              <div style={{ fontSize: '12px', color: '#CBBFB4', fontWeight: 600 }}>Established</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#EAA812' }}>3 Outlets</div>
              <div style={{ fontSize: '12px', color: '#CBBFB4', fontWeight: 600 }}>Ernakulam & Infopark</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#EAA812' }}>100k+</div>
              <div style={{ fontSize: '12px', color: '#CBBFB4', fontWeight: 600 }}>Happy Diners</div>
            </div>
          </div>
        </div>

        {/* Right Column: Ambiance Image Card with Overlay Badges */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(234, 168, 18, 0.2)',
            border: '1px solid rgba(234, 168, 18, 0.35)',
          }}>
            <img 
              src="/zaaha-reaturent.webp" 
              alt="Zaaha Kitchen Real Restaurant Exterior" 
              style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(12, 8, 6, 0.9) 0%, rgba(12, 8, 6, 0.2) 60%, transparent 100%)',
            }} />
            
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', backdropFilter: 'blur(16px)', background: 'rgba(18, 12, 7, 0.82)', border: '1px solid rgba(234, 168, 18, 0.35)', padding: '20px', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Star color="#EAA812" fill="#EAA812" size={24} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#FAF6F0' }}>Top Recommended Foodie Hotspot</div>
                  <div style={{ fontSize: '12px', color: '#CBBFB4' }}>Verified by local food bloggers & Ernakulam foodies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
