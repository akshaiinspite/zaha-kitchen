import React from 'react';
import { UtensilsCrossed, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import multicuisineImg from '../assets/why_multicuisine_real.png';
import qualityImg from '../assets/why_quality_real.png';
import foodiesImg from '../assets/why_foodies_real.png';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Diverse Multicuisine Menu',
      icon: UtensilsCrossed,
      image: multicuisineImg,
      badge: '4 ICONIC CUISINES',
      desc: 'A delicious mix of local tradition, rich Arabic spreads, Continental classics, and Chinese favorites all crafted under one roof.',
    },
    {
      title: 'Uncompromising Quality',
      icon: ShieldCheck,
      image: qualityImg,
      badge: 'FRESH & HANDCRAFTED',
      desc: 'Fresh ingredients, authentic spices, cold-pressed oils, and masterfully crafted dishes prepared with pure culinary passion.',
    },
    {
      title: 'Loved by Foodies & Bloggers',
      icon: HeartHandshake,
      image: foodiesImg,
      badge: 'VERIFIED HOTSPOT',
      desc: 'A tried-and-tested favorite among local food lovers, families, IT professionals, and top Ernakulam food bloggers since 2021.',
    },
  ];

  return (
    <section id="why-us" style={{ background: '#0C0806', color: '#FAF6F0', padding: 'clamp(50px, 7vw, 100px) 16px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px auto' }}>
          <span style={{ color: '#EAA812', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            WHY CHOOSE ZAAHA KITCHEN?
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, marginTop: '10px', marginBottom: '14px' }}>
            Ernakulam’s Most Loved <span style={{ color: '#EAA812' }}>Culinary Destination</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.7 }}>
            Here is why thousands of food enthusiasts, families, and tech professionals choose Zaaha Kitchen every single day.
          </p>
        </div>

        {/* 3 Key Pillars Grid with Real Human Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(22, 15, 12, 0.95) 0%, rgba(16, 10, 7, 0.95) 100%)',
                  border: '1px solid rgba(234, 168, 18, 0.3)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#EAA812';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(234, 168, 18, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(234, 168, 18, 0.3)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.6)';
                }}
              >
                {/* Real Photo Header Image */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(16, 10, 7, 0.95) 0%, rgba(16, 10, 7, 0.2) 60%, transparent 100%)',
                  }} />

                  {/* Top Badge */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(12, 8, 6, 0.85)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(234, 168, 18, 0.4)',
                    color: '#EAA812',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    letterSpacing: '1px',
                  }}>
                    {p.badge}
                  </span>

                  {/* Icon floating on image edge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '20px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#160F0C',
                    boxShadow: '0 8px 24px rgba(234, 168, 18, 0.4)',
                    zIndex: 2,
                  }}>
                    <Icon size={22} />
                  </div>
                </div>

                {/* Card Content Area */}
                <div style={{ padding: '28px 20px 24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#FAF6F0', marginBottom: '10px', lineHeight: 1.25 }}>
                      {p.title}
                    </h3>

                    <p style={{ color: '#CBBFB4', fontSize: '13.5px', lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive Full-Width Malabar Culinary Artistry Showcase Banner */}
        <div style={{
          marginTop: '60px',
          width: '100%',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(234, 168, 18, 0.45)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(234, 168, 18, 0.2)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Full Background Image */}
          <img 
            src="/design haza.png" 
            alt="Zaaha Kitchen Malabar Heritage Art" 
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Dark Professional Gradient Overlays for High Legibility */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(12, 8, 6, 0.96) 0%, rgba(12, 8, 6, 0.88) 55%, rgba(12, 8, 6, 0.5) 100%)',
          }} />

          {/* Foreground Text Content */}
          <div style={{
            width: '100%',
            padding: 'clamp(28px, 5vw, 60px) clamp(18px, 4vw, 36px)',
            position: 'relative',
            zIndex: 2,
          }}>
            <div style={{ maxWidth: '680px' }}>
              {/* Tag Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(234, 168, 18, 0.18)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(234, 168, 18, 0.5)',
                color: '#EAA812',
                fontSize: '10.5px',
                fontWeight: 800,
                padding: '5px 14px',
                borderRadius: '9999px',
                letterSpacing: '1.2px',
                marginBottom: '16px',
                maxWidth: '100%',
                flexWrap: 'wrap',
              }}>
                <Sparkles size={12} style={{ flexShrink: 0 }} />
                <span>MALABAR HERITAGE ARTISTRY</span>
              </div>

              <span style={{ color: '#EAA812', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                TRADITION IN EVERY BITE
              </span>

              <h3 className="font-heading" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: 700, marginBottom: '14px', color: '#FAF6F0', lineHeight: 1.2 }}>
                Celebrating Authentic <span style={{ color: '#EAA812' }}>Malabar Culinary Culture</span>
              </h3>

              <p style={{ color: '#E0D6CC', fontSize: 'clamp(13.5px, 1.8vw, 15.5px)', lineHeight: 1.6, marginBottom: '24px' }}>
                From steaming hot <strong>Puttu & Beef (പുട്ടും ബീഫും)</strong> to freshly poured <strong>Meter Chaya (ചായ)</strong>, our kitchen preserves the authentic soul of Malabar and Middle Eastern gastronomy with original heritage recipes passed down over generations.
              </p>

              {/* Highlights Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                <div style={{
                  background: 'rgba(18, 12, 8, 0.85)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(234, 168, 18, 0.35)',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                }}>
                  <div style={{ color: '#EAA812', fontWeight: 800, fontSize: '14px', marginBottom: '2px' }}>☕ Meter Chaya</div>
                  <div style={{ color: '#CBBFB4', fontSize: '12px', lineHeight: 1.4 }}>Frothy, spiced & freshly pulled tea</div>
                </div>
                <div style={{
                  background: 'rgba(18, 12, 8, 0.85)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(234, 168, 18, 0.35)',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                }}>
                  <div style={{ color: '#EAA812', fontWeight: 800, fontSize: '14px', marginBottom: '2px' }}>🍲 Puttu & Beef</div>
                  <div style={{ color: '#CBBFB4', fontSize: '12px', lineHeight: 1.4 }}>Steamed rice cylinders & rich beef roast</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
