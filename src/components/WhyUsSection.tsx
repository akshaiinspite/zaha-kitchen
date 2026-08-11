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
    <section id="why-us" style={{ background: '#0C0806', color: '#FAF6F0', padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#EAA812', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            WHY CHOOSE ZAAHA KITCHEN?
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '16px' }}>
            Ernakulam’s Most Loved <span style={{ color: '#EAA812' }}>Culinary Destination</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            Here is why thousands of food enthusiasts, families, and tech professionals choose Zaaha Kitchen every single day.
          </p>
        </div>

        {/* 3 Key Pillars Grid with Real Human Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(22, 15, 12, 0.95) 0%, rgba(16, 10, 7, 0.95) 100%)',
                  border: '1px solid rgba(234, 168, 18, 0.3)',
                  borderRadius: '24px',
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
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
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
                    top: '16px',
                    right: '16px',
                    background: 'rgba(12, 8, 6, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(234, 168, 18, 0.4)',
                    color: '#EAA812',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    letterSpacing: '1px',
                  }}>
                    {p.badge}
                  </span>

                  {/* Icon floating on image edge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-24px',
                    left: '28px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#160F0C',
                    boxShadow: '0 8px 24px rgba(234, 168, 18, 0.4)',
                    zIndex: 2,
                  }}>
                    <Icon size={26} />
                  </div>
                </div>

                {/* Card Content Area */}
                <div style={{ padding: '36px 28px 32px 28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAF6F0', marginBottom: '12px', lineHeight: 1.25 }}>
                      {p.title}
                    </h3>

                    <p style={{ color: '#CBBFB4', fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Malabar Culinary Artistry Showcase Banner featuring design haza.png */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, rgba(28, 18, 11, 0.95) 0%, rgba(18, 12, 7, 0.95) 100%)',
          border: '1px solid rgba(234, 168, 18, 0.4)',
          borderRadius: '28px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          padding: '40px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(234, 168, 18, 0.2)',
        }}>
          {/* Left Column: Professionally Framed design haza.png */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(234, 168, 18, 0.45)',
              boxShadow: '0 16px 40px rgba(234, 168, 18, 0.25)',
              position: 'relative',
              background: '#0C0806',
            }}>
              <img 
                src="/design haza.png" 
                alt="Zaaha Kitchen Malabar Heritage Art" 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '420px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(12, 8, 6, 0.88)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(234, 168, 18, 0.5)',
                color: '#EAA812',
                fontSize: '11px',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '9999px',
                letterSpacing: '1.5px',
              }}>
                ✨ MALABAR HERITAGE ARTISTRY
              </div>
            </div>
          </div>

          {/* Right Column: Heritage Description & Highlights */}
          <div>
            <span style={{ color: '#EAA812', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="#EAA812" />
              <span>TRADITION IN EVERY BITE</span>
            </span>
            <h3 className="font-heading" style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, marginTop: '10px', marginBottom: '16px', color: '#FAF6F0' }}>
              Celebrating Authentic <span style={{ color: '#EAA812' }}>Malabar Culinary Culture</span>
            </h3>
            <p style={{ color: '#CBBFB4', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
              From steaming hot <strong>Puttu & Beef (പുട്ടും ബീഫും)</strong> to freshly poured <strong>Meter Chaya (ചായ)</strong>, our kitchen preserves the authentic soul of Malabar and Middle Eastern gastronomy with original heritage recipes passed down over generations.
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              <div style={{ background: 'rgba(234, 168, 18, 0.1)', border: '1px solid rgba(234, 168, 18, 0.28)', padding: '16px', borderRadius: '16px' }}>
                <div style={{ color: '#EAA812', fontWeight: 800, fontSize: '14.5px', marginBottom: '4px' }}>☕ Meter Chaya (ചായ)</div>
                <div style={{ color: '#CBBFB4', fontSize: '12.5px', lineHeight: 1.4 }}>Frothy, spiced & freshly pulled cardamom tea</div>
              </div>
              <div style={{ background: 'rgba(234, 168, 18, 0.1)', border: '1px solid rgba(234, 168, 18, 0.28)', padding: '16px', borderRadius: '16px' }}>
                <div style={{ color: '#EAA812', fontWeight: 800, fontSize: '14.5px', marginBottom: '4px' }}>🍲 Puttu & Beef (പുട്ടും ബീഫും)</div>
                <div style={{ color: '#CBBFB4', fontSize: '12.5px', lineHeight: 1.4 }}>Steamed rice cylinders with rich beef roast</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
