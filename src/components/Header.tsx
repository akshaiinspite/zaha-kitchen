import React, { useState, useEffect } from 'react';
import { Utensils, MapPin, Phone, Info, Award, Menu as MenuIcon, X } from 'lucide-react';

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
    { label: 'Outlets', icon: MapPin, href: '#locations' },
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
        padding: scrolled ? '10px 24px' : '16px 32px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled 
          ? 'rgba(12, 8, 6, 0.95)' 
          : 'linear-gradient(180deg, rgba(12, 8, 6, 0.96) 0%, rgba(12, 8, 6, 0) 100%)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(234, 168, 18, 0.3)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.7)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        {/* Prominent Executive Brand Logo */}
        <a 
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none',
            userSelect: 'none',
            transition: 'transform 0.3s ease',
          }}
          className="header-logo-link"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img 
            src="/zaaha logo.png" 
            alt="Zaaha Kitchen Logo" 
            style={{
              height: scrolled ? '64px' : '82px',
              width: 'auto',
              maxHeight: '85px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 16px rgba(234, 168, 18, 0.45))',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </a>

        {/* Navigation Bar (Desktop) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(22, 15, 12, 0.85)',
          padding: '8px 12px',
          borderRadius: '9999px',
          border: '1px solid rgba(234, 168, 18, 0.3)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
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
                  fontSize: '13.5px',
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
                  e.currentTarget.style.background = 'rgba(234, 168, 18, 0.18)';
                  e.currentTarget.style.color = '#EAA812';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FAF6F0';
                }}
              >
                <Icon style={{ width: '15px', height: '15px', color: '#EAA812' }} />
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
              background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
              color: '#160F0C',
              padding: '11px 24px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '13.5px',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(234, 168, 18, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <Phone style={{ width: '16px', height: '16px' }} />
            <span>Call 9947366906</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(30, 20, 15, 0.85)',
              border: '1px solid rgba(234, 168, 18, 0.3)',
              color: '#FAF6F0',
              padding: '10px',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} color="#EAA812" /> : <MenuIcon size={22} color="#EAA812" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          marginTop: '16px',
          padding: '20px',
          background: 'rgba(22, 15, 12, 0.98)',
          borderRadius: '20px',
          border: '1px solid rgba(234, 168, 18, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
        }}>
          <div style={{ textAlign: 'center', paddingBottom: '12px', borderBottom: '1px solid rgba(234, 168, 18, 0.2)' }}>
            <img src="/zaaha logo.png" alt="Zaaha Logo" style={{ height: '70px', filter: 'drop-shadow(0 4px 12px rgba(234, 168, 18, 0.4))' }} />
          </div>
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
                  background: 'rgba(234, 168, 18, 0.1)',
                  color: '#FAF6F0',
                  border: '1px solid rgba(234, 168, 18, 0.25)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <Icon size={18} color="#EAA812" />
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

