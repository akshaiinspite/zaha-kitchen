import React from 'react';
import { MapPin, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';
import infoparkImg from '../assets/zaaha_location_infopark_1786103864847.png';

export const LocationsSection: React.FC = () => {
  const outlets = [
    {
      title: 'Zaaha Flagship Restaurant',
      tag: 'FLAGSHIP OUTLET',
      location: 'Kalamassery, Ernakulam',
      opened: 'Established 2021',
      description: 'Our iconic flagship restaurant offering full multicuisine dining, family seating, and private party spaces in Kalamassery.',
      mapUrl: 'https://maps.app.goo.gl/gmpzsYieQeAF5PCQA',
      hours: '11:00 AM - 11:30 PM',
      highlight: 'Full Dining & Family Hall',
    },
    {
      title: 'Infopark Phase 1 — Athulya',
      tag: 'IT HUB OUTLET',
      location: 'Athulya Building, Infopark Phase 1, Kakkanad',
      opened: 'Opened January 2024',
      description: 'Serving quick gourmet lunch meals, coffee, and evening relax spreads right inside the Athulya Building for tech professionals.',
      mapUrl: 'https://maps.app.goo.gl/FS6bvm7yuV5fEgqE9',
      hours: '8:30 AM - 10:00 PM',
      highlight: 'Quick Lunch & Work Break',
    },
    {
      title: 'Infopark Phase 1 — Vismaya',
      tag: 'NEWEST OUTLET',
      location: 'Vismaya Building, Infopark Phase 1, Kakkanad',
      opened: 'Opened November 2025',
      description: 'Our latest modern dining hub at Vismaya Building, bringing premium fusion dishes and evening hangouts to your doorstep.',
      mapUrl: 'https://maps.app.goo.gl/XgVZ7mqVRDgiu3Hq7',
      hours: '9:00 AM - 10:30 PM',
      highlight: 'After-Work Unwind Spot',
    },
  ];

  return (
    <section id="locations" style={{ background: '#0C0806', color: '#FAF6F0', padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            OUR EXPANSION & LOCATIONS
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '16px' }}>
            Serving <span style={{ color: '#D4AF37' }}>Ernakulam & Infopark</span> IT Hubs
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            Whether you need a quick, delicious lunch break or a relaxing place to unwind after work, our Infopark & Kalamassery locations bring high-quality fusion dining right to your doorstep.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          marginBottom: '60px',
        }}>
          {outlets.map((outlet, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(22, 15, 12, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                  }}>
                    {outlet.tag}
                  </span>
                  <span style={{ fontSize: '12px', color: '#CBBFB4', fontWeight: 600 }}>
                    {outlet.opened}
                  </span>
                </div>

                {/* Outlet Title */}
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FAF6F0', marginBottom: '12px', lineHeight: 1.25 }}>
                  {outlet.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#D4AF37', fontSize: '13.5px', fontWeight: 600, marginBottom: '16px' }}>
                  <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{outlet.location}</span>
                </div>

                <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {outlet.description}
                </p>

                {/* Meta details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px', background: 'rgba(12, 8, 6, 0.6)', borderRadius: '14px', marginBottom: '24px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FAF6F0' }}>
                    <Clock size={15} color="#D4AF37" />
                    <span>{outlet.hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FAF6F0' }}>
                    <Building2 size={15} color="#D4AF37" />
                    <span>{outlet.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Direction Link Button */}
              <a
                href={outlet.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                  color: '#160F0C',
                  padding: '13px 20px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Navigation size={16} />
                <span>Get Google Maps Location</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Real Infopark Ambiance Showcase Banner */}
        <div style={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
          maxHeight: '360px',
        }}>
          <img 
            src={infoparkImg} 
            alt="Zaaha Infopark Dining Ambiance" 
            style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(12, 8, 6, 0.95) 0%, rgba(12, 8, 6, 0.4) 60%, transparent 100%)',
          }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', maxWidth: '540px' }}>
            <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
              MODERN IT HUB DINING EXPERIENCE
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#FAF6F0', marginTop: '8px', marginBottom: '12px' }}>
              Welcoming Techies & Diners Every Day
            </h3>
            <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.6 }}>
              Step into our stylish lounge environments at Athulya & Vismaya Infopark Phase 1 for a quick lunch or an enjoyable evening break.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationsSection;
