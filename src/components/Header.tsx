import React, { useState, useEffect } from 'react';
import { Utensils, MapPin, Phone, Calendar, Info, Award, Menu as MenuIcon, X, Coffee } from 'lucide-react';

interface HeaderProps {
  activeStop?: number;
  onSelectStop?: (stopIndex: number) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', icon: Info, href: '#about' },
    { label: 'Multicuisine', icon: Utensils, href: '#cuisine' },
    { label: 'Menu', icon: Coffee, href: '#menu' },
    { label: 'Outlets', icon: MapPin, href: '#locations' },
    { label: 'Catering', icon: Calendar, href: '#catering' },
    { label: 'Why Zaaha', icon: Award, href: '#why-us' },
    { label: 'Contact & Reserve', icon: Phone, href: '#contact-form-section' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -60, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 24px' : '20px 32px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled 
          ? 'rgba(12, 8, 6, 0.94)' 
          : 'linear-gradient(180deg, rgba(12, 8, 6, 0.95) 0%, rgba(12, 8, 6, 0) 100%)',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        {/* Brand Logo */}
        <a 
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            userSelect: 'none',
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #D4AF37 0%, #C85A17 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.35)',
          }}>
            <Utensils style={{ width: '24px', height: '24px', color: '#160F0C' }} />
          </div>
          <div>
            <h1 className="font-heading" style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              color: '#FAF6F0',
              lineHeight: 1.1,
              margin: 0,
            }}>
              ZAAHA <span style={{ color: '#D4AF37' }}>KITCHEN</span>
            </h1>
            <p style={{
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#CBBFB4',
              textTransform: 'uppercase',
              fontWeight: 600,
              margin: 0,
            }}>
              Ernakulam • Est. 2021
            </p>
          </div>
        </a>

        {/* Navigation Bar (Desktop) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(22, 15, 12, 0.75)',
          padding: '6px 10px',
          borderRadius: '9999px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
        }} className="desktop-nav">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#FAF6F0',
                  background: 'transparent',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
                  e.currentTarget.style.color = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FAF6F0';
                }}
              >
                <Icon style={{ width: '15px', height: '15px', color: '#D4AF37' }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Call CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a 
            href="tel:9947366906"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
              color: '#160F0C',
              padding: '10px 22px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <Phone style={{ width: '16px', height: '16px' }} />
            <span>Call 9947366906</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(30, 20, 15, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              color: '#FAF6F0',
              padding: '10px',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          marginTop: '16px',
          padding: '16px',
          background: 'rgba(22, 15, 12, 0.96)',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  scrollToSection(item.href);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#FAF6F0',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <Icon size={18} color="#D4AF37" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;

