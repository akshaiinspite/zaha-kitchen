import React from 'react';
import { MapPin, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const outlets = [
    {
      title: 'Zaaha Flagship Restaurant',
      tag: 'FLAGSHIP OUTLET',
      location: 'Kalamassery, Ernakulam',
      opened: 'Established 2021',
      description: 'Our iconic flagship restaurant offering full multicuisine dining, family seating, and private party spaces in Kalamassery.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Kalamassery+Ernakulam',
      hours: '11:00 AM - 11:30 PM',
      highlight: 'Full Dining & Family Hall',
    },
    {
      title: 'Infopark Phase 1 — Athulya',
      tag: 'IT HUB OUTLET',
      location: 'Athulya Building, Infopark Phase 1, Kakkanad',
      opened: 'Opened January 2024',
      description: 'Serving quick gourmet lunch meals, coffee, and evening relax spreads right inside the Athulya Building for tech professionals.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Athulya+Infopark+Phase+1+Kakkanad',
      hours: '8:30 AM - 10:00 PM',
      highlight: 'Quick Lunch & Work Break',
    },
    {
      title: 'Infopark Phase 1 — Vismaya',
      tag: 'NEWEST OUTLET',
      location: 'Vismaya Building, Infopark Phase 1, Kakkanad',
      opened: 'Opened November 2025',
      description: 'Our latest modern dining hub at Vismaya Building, bringing premium fusion dishes and evening hangouts to your doorstep.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Vismaya+Infopark+Phase+1+Kakkanad',
      hours: '9:00 AM - 10:30 PM',
      highlight: 'After-Work Unwind Spot',
    },
  ];

  return (
    <section id="locations" style={{ background: '#0C0806', color: '#FAF6F0', padding: 'clamp(50px, 7vw, 100px) 16px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px auto' }}>
          <span style={{ color: '#D4AF37', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            OUR EXPANSION & LOCATIONS
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, marginTop: '10px', marginBottom: '14px' }}>
            Serving <span style={{ color: '#D4AF37' }}>Ernakulam & Infopark</span> IT Hubs
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.7 }}>
            Whether you need a quick, delicious lunch break or a relaxing place to unwind after work, our Infopark & Kalamassery locations bring high-quality fusion dining right to your doorstep.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px',
        }}>
          {outlets.map((outlet, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(22, 15, 12, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '20px',
                padding: 'clamp(20px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                  }}>
                    {outlet.tag}
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#CBBFB4', fontWeight: 600 }}>
                    {outlet.opened}
                  </span>
                </div>

                {/* Outlet Title */}
                <h3 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 700, color: '#FAF6F0', marginBottom: '10px', lineHeight: 1.25 }}>
                  {outlet.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#D4AF37', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{outlet.location}</span>
                </div>

                <p style={{ color: '#CBBFB4', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '20px' }}>
                  {outlet.description}
                </p>

                {/* Meta details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '14px', background: 'rgba(12, 8, 6, 0.6)', borderRadius: '12px', marginBottom: '20px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#FAF6F0' }}>
                    <Clock size={14} color="#D4AF37" style={{ flexShrink: 0 }} />
                    <span>{outlet.hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#FAF6F0' }}>
                    <Building2 size={14} color="#D4AF37" style={{ flexShrink: 0 }} />
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
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '13px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Navigation size={15} />
                <span>Get Google Maps Location</span>
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationsSection;
