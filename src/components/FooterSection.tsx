import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import footerBg from '../assets/footer_bg_ambient.png';

export const FooterSection: React.FC = () => {
  const outlets = [
    { name: 'Kalamassery Flagship Outlet', url: 'https://maps.app.goo.gl/gmpzsYieQeAF5PCQA', area: 'Kalamassery, Ernakulam' },
    { name: 'Athulya Infopark Phase 1', url: 'https://maps.app.goo.gl/FS6bvm7yuV5fEgqE9', area: 'Athulya Building, Kakkanad' },
    { name: 'Vismaya Infopark Phase 1', url: 'https://maps.app.goo.gl/XgVZ7mqVRDgiu3Hq7', area: 'Vismaya Building, Kakkanad' },
  ];

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="contact" 
      style={{ 
        position: 'relative',
        color: '#FAF6F0', 
        padding: '100px 24px 40px 24px', 
        borderTop: '1px solid rgba(234, 168, 18, 0.3)', 
        overflow: 'hidden',
        background: '#080504',
      }}
    >
      {/* Generated Ambient Background Texture with Dark Luxury Blend Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.35,
        filter: 'blur(2px) contrast(1.1)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(12, 8, 6, 0.94) 0%, rgba(8, 5, 4, 0.98) 100%)',
        zIndex: 2,
      }} />

      {/* Main Footer Container */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Banner CTA Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(28, 18, 11, 0.95) 0%, rgba(18, 12, 7, 0.95) 100%)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(234, 168, 18, 0.4)',
          borderRadius: '28px',
          padding: '50px 40px',
          textAlign: 'center',
          marginBottom: '80px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(234, 168, 18, 0.2)',
        }}>
          <span style={{ color: '#EAA812', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            VISIT US TODAY OR PLAN YOUR EVENT
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, marginTop: '10px', marginBottom: '16px' }}>
            Ready to Experience <span style={{ color: '#EAA812' }}>Zaaha Kitchen?</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', maxWidth: '640px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
            Visit one of our locations in Ernakulam & Infopark today or get in touch with us to plan your next catered event!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <a 
              href="tel:9947366906"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
                color: '#160F0C',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(234, 168, 18, 0.45)',
                transition: 'all 0.3s ease',
              }}
            >
              <Phone size={18} />
              <span>Call Us: 9947366906</span>
            </a>

            <a 
              href="mailto:tasteboxinfo2023@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(30, 20, 15, 0.9)',
                border: '1px solid rgba(234, 168, 18, 0.35)',
                color: '#FAF6F0',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <Mail size={18} color="#EAA812" />
              <span>Email: tasteboxinfo2023@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer 3-Column Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(234, 168, 18, 0.25)',
          alignItems: 'start',
        }}>
          {/* Column 1: Executive Brand Info featuring zaaha logo.png */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img 
                src="/zaaha logo.png" 
                alt="Zaaha Kitchen Logo" 
                style={{
                  height: '185px',
                  width: 'auto',
                  maxHeight: '210px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 8px 26px rgba(234, 168, 18, 0.6))',
                  display: 'block',
                }}
              />
            </div>

            <p style={{ color: '#CBBFB4', fontSize: '14.5px', lineHeight: 1.7, marginBottom: '22px', maxWidth: '340px' }}>
              Where Malabar & Middle Eastern culinary tradition meets modern flavor innovation in Ernakulam & Infopark IT Hubs.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: '#EAA812',
              fontWeight: 800,
              letterSpacing: '1px',
              background: 'rgba(234, 168, 18, 0.12)',
              border: '1px solid rgba(234, 168, 18, 0.35)',
              padding: '6px 14px',
              borderRadius: '9999px',
            }}>
              ESTABLISHED IN 2021
            </div>
          </div>

          {/* Column 2: Direct Contact Details */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FAF6F0', marginBottom: '22px', borderLeft: '3px solid #EAA812', paddingLeft: '12px' }}>
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href="tel:9947366906" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  color: '#FAF6F0', 
                  textDecoration: 'none', 
                  fontSize: '15px', 
                  fontWeight: 600,
                  background: 'rgba(22, 15, 12, 0.6)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(234, 168, 18, 0.25)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(234, 168, 18, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EAA812', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#CBBFB4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Phone / WhatsApp</div>
                  <div>+91 9947366906</div>
                </div>
              </a>

              <a 
                href="mailto:tasteboxinfo2023@gmail.com" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  color: '#FAF6F0', 
                  textDecoration: 'none', 
                  fontSize: '15px', 
                  fontWeight: 600,
                  background: 'rgba(22, 15, 12, 0.6)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(234, 168, 18, 0.25)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(234, 168, 18, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EAA812', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#CBBFB4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Inquiries</div>
                  <div>tasteboxinfo2023@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Outlet Map Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FAF6F0', marginBottom: '22px', borderLeft: '3px solid #EAA812', paddingLeft: '12px' }}>
              Our 3 Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {outlets.map((outlet, i) => (
                <a
                  key={i}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(22, 15, 12, 0.7)',
                    border: '1px solid rgba(234, 168, 18, 0.25)',
                    color: '#FAF6F0',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={16} color="#EAA812" style={{ flexShrink: 0 }} />
                    <div>
                      <div>{outlet.name}</div>
                      <div style={{ fontSize: '11px', color: '#CBBFB4', fontWeight: 400 }}>{outlet.area}</div>
                    </div>
                  </div>
                  <ExternalLink size={15} color="#EAA812" style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright, Legal Links & Scroll to Top Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', paddingTop: '32px' }}>
          <div style={{ fontSize: '13.5px', color: '#CBBFB4' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#EAA812' }}>Zaaha Kitchen</strong>. Crafted for Ernakulam Food Lovers. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '13.5px' }}>
            <a 
              href="/privacy-policy" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/privacy-policy');
                window.dispatchEvent(new Event('popstate'));
              }}
              style={{ color: '#CBBFB4', textDecoration: 'none', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#EAA812')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBBFB4')}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(234, 168, 18, 0.4)' }}>•</span>
            <a 
              href="/terms-and-conditions" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/terms-and-conditions');
                window.dispatchEvent(new Event('popstate'));
              }}
              style={{ color: '#CBBFB4', textDecoration: 'none', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#EAA812')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBBFB4')}
            >
              Terms & Conditions
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '9999px',
              background: 'rgba(234, 168, 18, 0.15)',
              border: '1px solid rgba(234, 168, 18, 0.35)',
              color: '#EAA812',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
