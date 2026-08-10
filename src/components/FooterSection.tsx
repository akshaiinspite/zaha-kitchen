import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Utensils, ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const outlets = [
    { name: 'Kalamassery Flagship Outlet', url: 'https://maps.app.goo.gl/gmpzsYieQeAF5PCQA', area: 'Kalamassery, Ernakulam' },
    { name: 'Athulya Infopark Phase 1', url: 'https://maps.app.goo.gl/FS6bvm7yuV5fEgqE9', area: 'Athulya Building, Kakkanad' },
    { name: 'Vismaya Infopark Phase 1', url: 'https://maps.app.goo.gl/XgVZ7mqVRDgiu3Hq7', area: 'Vismaya Building, Kakkanad' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ background: '#080504', color: '#FAF6F0', padding: '100px 24px 40px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.25)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Banner CTA Box */}
        <div style={{
          background: 'linear-gradient(135deg, #1C120B 0%, #120C07 100%)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '28px',
          padding: '50px 40px',
          textAlign: 'center',
          marginBottom: '80px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15)',
        }}>
          <span style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            VISIT US TODAY OR PLAN YOUR EVENT
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, marginTop: '10px', marginBottom: '16px' }}>
            Ready to Experience <span style={{ color: '#D4AF37' }}>Zaaha Kitchen?</span>
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
                background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                color: '#160F0C',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
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
                border: '1px solid rgba(212, 175, 55, 0.35)',
                color: '#FAF6F0',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              <Mail size={18} color="#D4AF37" />
              <span>Email: tasteboxinfo2023@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer 3 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #C85A17 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Utensils size={22} color="#160F0C" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FAF6F0', margin: 0 }}>
                ZAAHA <span style={{ color: '#D4AF37' }}>KITCHEN</span>
              </h3>
            </div>

            <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              Where culinary tradition meets modern flavour innovation right in the heart of Ernakulam & Infopark IT Hubs.
            </p>
            <div style={{ fontSize: '13px', color: '#D4AF37', fontWeight: 700 }}>
              ESTABLISHED IN 2021
            </div>
          </div>

          {/* Col 2: Direct Contact Details */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FAF6F0', marginBottom: '20px' }}>
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href="tel:9947366906" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#CBBFB4', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <Phone size={18} style={{ margin: 'auto' }} />
                </div>
                <span>+91 9947366906</span>
              </a>

              <a 
                href="mailto:tasteboxinfo2023@gmail.com" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#CBBFB4', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                  <Mail size={18} style={{ margin: 'auto' }} />
                </div>
                <span>tasteboxinfo2023@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Outlet Map Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FAF6F0', marginBottom: '20px' }}>
              Our 3 Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                    background: 'rgba(22, 15, 12, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#FAF6F0',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={14} color="#D4AF37" />
                    <span>{outlet.name}</span>
                  </div>
                  <ExternalLink size={14} color="#D4AF37" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '32px' }}>
          <div style={{ fontSize: '13px', color: '#8E8275' }}>
            © {new Date().getFullYear()} <strong>Zaaha Kitchen</strong>. Crafted for Ernakulam Food Lovers. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
