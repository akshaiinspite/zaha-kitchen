import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import footerBg from '../assets/footer_bg_ambient.png';

export const FooterSection: React.FC = () => {
  const outlets = [
    { name: 'Kalamassery Flagship Outlet', url: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Kalamassery+Ernakulam', area: 'Kalamassery, Ernakulam' },
    { name: 'Athulya Infopark Phase 1', url: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Athulya+Infopark+Phase+1+Kakkanad', area: 'Athulya Building, Kakkanad' },
    { name: 'Vismaya Infopark Phase 1', url: 'https://www.google.com/maps/search/?api=1&query=Zaaha+Kitchen+Vismaya+Infopark+Phase+1+Kakkanad', area: 'Vismaya Building, Kakkanad' },
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
        padding: 'clamp(50px, 7vw, 100px) 16px 40px 16px', 
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
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(234, 168, 18, 0.4)',
          borderRadius: '24px',
          padding: 'clamp(28px, 5vw, 50px) clamp(18px, 4vw, 40px)',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(234, 168, 18, 0.2)',
        }}>
          <span style={{ color: '#EAA812', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            VISIT US TODAY OR PLAN YOUR EVENT
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: 700, marginTop: '10px', marginBottom: '14px' }}>
            Ready to Experience <span style={{ color: '#EAA812' }}>Zaaha Kitchen?</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: 'clamp(13.5px, 1.8vw, 16px)', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: 1.7 }}>
            Visit one of our locations in Ernakulam & Infopark today or get in touch with us to plan your next catered event!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <a 
              href="tel:9947366906"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
                color: '#160F0C',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '13.5px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(234, 168, 18, 0.45)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <Phone size={16} />
              <span>Call Us: 9947366906</span>
            </a>

            <a 
              href="mailto:tasteboxinfo2023@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(30, 20, 15, 0.9)',
                border: '1px solid rgba(234, 168, 18, 0.35)',
                color: '#FAF6F0',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '13.5px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                wordBreak: 'break-all',
              }}
            >
              <Mail size={16} color="#EAA812" style={{ flexShrink: 0 }} />
              <span>Email: tasteboxinfo2023@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer 3-Column Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(234, 168, 18, 0.25)',
          alignItems: 'start',
        }}>
          {/* Column 1: Executive Brand Info featuring zaaha logo.png */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img 
                src="/zaaha logo.png" 
                alt="Zaaha Kitchen Logo" 
                style={{
                  height: 'clamp(90px, 15vw, 150px)',
                  width: 'auto',
                  maxHeight: '160px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 8px 26px rgba(234, 168, 18, 0.6))',
                  display: 'block',
                }}
              />
            </div>

            <p style={{ color: '#CBBFB4', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '18px', maxWidth: '340px' }}>
              Where Malabar & Middle Eastern culinary tradition meets modern flavor innovation in Ernakulam & Infopark IT Hubs.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              color: '#EAA812',
              fontWeight: 800,
              letterSpacing: '1px',
              background: 'rgba(234, 168, 18, 0.12)',
              border: '1px solid rgba(234, 168, 18, 0.35)',
              padding: '5px 12px',
              borderRadius: '9999px',
            }}>
              ESTABLISHED IN 2021
            </div>
          </div>

          {/* Column 2: Direct Contact Details */}
          <div>
            <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#FAF6F0', marginBottom: '18px', borderLeft: '3px solid #EAA812', paddingLeft: '10px' }}>
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="tel:9947366906" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  color: '#FAF6F0', 
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  background: 'rgba(22, 15, 12, 0.6)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(234, 168, 18, 0.25)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(234, 168, 18, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EAA812', flexShrink: 0 }}>
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#CBBFB4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Phone / WhatsApp</div>
                  <div>+91 9947366906</div>
                </div>
              </a>

              <a 
                href="mailto:tasteboxinfo2023@gmail.com" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  color: '#FAF6F0', 
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  background: 'rgba(22, 15, 12, 0.6)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(234, 168, 18, 0.25)',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(234, 168, 18, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EAA812', flexShrink: 0 }}>
                  <Mail size={16} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '10px', color: '#CBBFB4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Inquiries</div>
                  <div style={{ wordBreak: 'break-all', fontSize: '13px' }}>tasteboxinfo2023@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Outlet Map Links */}
          <div>
            <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#FAF6F0', marginBottom: '18px', borderLeft: '3px solid #EAA812', paddingLeft: '10px' }}>
              Our 3 Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(22, 15, 12, 0.7)',
                    border: '1px solid rgba(234, 168, 18, 0.25)',
                    color: '#FAF6F0',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={15} color="#EAA812" style={{ flexShrink: 0 }} />
                    <div>
                      <div>{outlet.name}</div>
                      <div style={{ fontSize: '10.5px', color: '#CBBFB4', fontWeight: 400 }}>{outlet.area}</div>
                    </div>
                  </div>
                  <ExternalLink size={14} color="#EAA812" style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright, Legal Links & Scroll to Top Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '24px' }}>
          <div style={{ fontSize: '12.5px', color: '#CBBFB4' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#EAA812' }}>Zaaha Kitchen</strong>. Crafted for Ernakulam Food Lovers.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px' }}>
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
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'rgba(234, 168, 18, 0.15)',
              border: '1px solid rgba(234, 168, 18, 0.35)',
              color: '#EAA812',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
