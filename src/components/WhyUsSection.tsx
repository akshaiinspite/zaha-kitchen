import React from 'react';
import { UtensilsCrossed, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Diverse Multicuisine Menu',
      icon: UtensilsCrossed,
      desc: 'A delicious mix of local tradition, rich Arabic spreads, Continental classics, and Chinese favorites all crafted under one roof.',
    },
    {
      title: 'Uncompromising Quality',
      icon: ShieldCheck,
      desc: 'Fresh ingredients, authentic spices, cold-pressed oils, and masterfully crafted dishes prepared with pure culinary passion.',
    },
    {
      title: 'Loved by Foodies & Bloggers',
      icon: HeartHandshake,
      desc: 'A tried-and-tested favorite among local food lovers, families, IT professionals, and top Ernakulam food bloggers since 2021.',
    },
  ];

  return (
    <section id="why-us" style={{ background: '#0C0806', color: '#FAF6F0', padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            WHY CHOOSE ZAAHA KITCHEN?
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '16px' }}>
            Ernakulam’s Most Loved <span style={{ color: '#D4AF37' }}>Culinary Destination</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            Here is why thousands of food enthusiasts, families, and tech professionals choose Zaaha Kitchen every single day.
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(22, 15, 12, 0.9) 0%, rgba(16, 10, 7, 0.9) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  position: 'relative',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#160F0C',
                  marginBottom: '24px',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.35)',
                }}>
                  <Icon size={28} />
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAF6F0', marginBottom: '14px', lineHeight: 1.3 }}>
                  {p.title}
                </h3>

                <p style={{ color: '#CBBFB4', fontSize: '15px', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
