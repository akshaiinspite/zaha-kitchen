import React, { useState } from 'react';
import { PartyPopper, Briefcase, Heart, CheckCircle2, Send } from 'lucide-react';
import cateringImg from '../assets/zaaha_catering_buffet_1786103848515.png';

export const CateringSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: 'Corporate Gathering', guestCount: '50-100', date: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const cateringServices = [
    {
      title: 'Open-Air Events & Parties',
      icon: PartyPopper,
      desc: 'Lush outdoor live counters, grill stations, mocktail bars, and buffet setups for weddings, garden parties, and evening bashes.',
    },
    {
      title: 'Corporate Gatherings & Celebrations',
      icon: Briefcase,
      desc: 'Seamless catering solutions for Infopark tech hubs, corporate launches, annual team meets, and executive luncheons.',
    },
    {
      title: 'Private Milestones & Gatherings',
      icon: Heart,
      desc: 'Intimate family reunions, birthday bashes, housewarmings, and anniversary dinners with tailored multicuisine spreads.',
    },
  ];

  return (
    <section id="catering" style={{ background: '#120C07', color: '#FAF6F0', padding: '100px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            CATERING & SPECIAL EVENTS
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '16px' }}>
            Bringing the <span style={{ color: '#D4AF37' }}>Zaaha Experience</span> to Your Celebrations
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            Planning a special occasion? We craft customized menus designed to delight guests who truly appreciate good food, ensuring your event is effortless and memorable.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          {cateringServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <div 
                key={i}
                style={{
                  background: 'rgba(22, 15, 12, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(229, 138, 43, 0.2) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                  marginBottom: '20px',
                }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FAF6F0', marginBottom: '10px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner with Form */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(22, 15, 12, 0.95) 0%, rgba(12, 8, 6, 0.95) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '28px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
        }}>
          {/* Left: Image & Features */}
          <div style={{ position: 'relative', minHeight: '380px' }}>
            <img 
              src={cateringImg} 
              alt="Zaaha Outdoor Catering Event"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12, 8, 6, 0.92) 0%, rgba(12, 8, 6, 0.3) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
              <div style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 800, letterSpacing: '1px', marginBottom: '6px' }}>
                FULL SERVICE CATERING
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FAF6F0', marginBottom: '12px' }}>
                Custom Menus For 20 to 1000+ Guests
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FAF6F0' }}>
                  <CheckCircle2 size={16} color="#D4AF37" />
                  <span>Live Arabic Grill & Mandi Counters</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FAF6F0' }}>
                  <CheckCircle2 size={16} color="#D4AF37" />
                  <span>Continental Sizzler & Pasta Stations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FAF6F0' }}>
                  <CheckCircle2 size={16} color="#D4AF37" />
                  <span>Traditional Kerala Chai & Evening Snacks Spread</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Quote Inquiry Form */}
          <div style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAF6F0', marginBottom: '8px' }}>
              Plan Your Catering Event
            </h3>
            <p style={{ fontSize: '13.5px', color: '#CBBFB4', marginBottom: '24px' }}>
              Get a custom menu recommendation & quote directly from our team:
            </p>

            {submitted ? (
              <div style={{ padding: '24px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid #D4AF37', borderRadius: '16px', color: '#FAF6F0', textAlign: 'center' }}>
                <CheckCircle2 size={36} color="#D4AF37" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Catering Inquiry Received!</h4>
                <p style={{ fontSize: '13px', color: '#CBBFB4' }}>Our catering manager will call you shortly at {formData.phone || '9947366906'}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px' }}>YOUR NAME</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(12, 8, 6, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#FAF6F0', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px' }}>PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="9947366906"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(12, 8, 6, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#FAF6F0', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px' }}>ESTIMATED GUESTS</label>
                    <select 
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(12, 8, 6, 0.8)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#FAF6F0', outline: 'none' }}
                    >
                      <option value="20-50">20 - 50 Guests</option>
                      <option value="50-100">50 - 100 Guests</option>
                      <option value="100-300">100 - 300 Guests</option>
                      <option value="300+">300+ Guests</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                    color: '#160F0C',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
                  }}
                >
                  <Send size={16} />
                  <span>Request Custom Catering Menu</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CateringSection;
