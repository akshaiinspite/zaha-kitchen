import React, { useState, useEffect, useRef } from 'react';
import { 
  Coffee, Utensils, Sparkles, Compass, Plus, Minus, RotateCcw, 
  Play, Pause, ArrowRight, Flame, Cookie
} from 'lucide-react';
import tableFlatlayImg from '../assets/table_flatlay.png';

export interface CameraStop {
  id: number;
  name: string;
  category: string;
  tag: string;
  price: string;
  title: string;
  description: string;
  scale: number;
  x: number; // Percentage shift (-50 to 50)
  y: number; // Percentage shift (-50 to 50)
  pinTop: string;
  pinLeft: string;
  badgeIcon: React.ElementType;
}

const STOPS: CameraStop[] = [
  {
    id: 0,
    name: 'Full Spread View',
    category: 'KERALA TEA ROOM',
    tag: 'Authentic Naadan Flatlay',
    price: 'Traditional Menu',
    title: 'Authentic Kerala Chaya & Evening Snacks',
    description: 'Welcome to Zaha Kitchen. Scroll down or click the glowing pins to inspect our freshly pulled meter tea, banana fritters (pazham pori), crispy vadas, unniyappams, and samosas up close.',
    scale: 1.0,
    x: 0,
    y: 0,
    pinTop: '50%',
    pinLeft: '50%',
    badgeIcon: Compass,
  },
  {
    id: 1,
    name: 'Kerala Meter Chaya',
    category: 'SIGNATURE BREW',
    tag: 'Frothy • Spiced Assam Tea',
    price: '₹20',
    title: 'Piping Hot Kerala Glass Chaya',
    description: 'Freshly pulled frothy tea served in a classic Kerala glass tumbler over a brass saucer with aromatic cardamom and crushed ginger.',
    scale: 2.35,
    x: 0,
    y: -3,
    pinTop: '48%',
    pinLeft: '50%',
    badgeIcon: Coffee,
  },
  {
    id: 2,
    name: 'Pazham Pori',
    category: 'KERALA SPECIAL',
    tag: 'Ripe Nendran Banana • Golden Fry',
    price: '₹30 / 2 pcs',
    title: 'Crispy Kerala Pazham Pori',
    description: 'Slices of sweet ripe Kerala Nendran bananas dipped in spiced flour batter and fried to golden crisp perfection. The ultimate companion for evening chai.',
    scale: 2.35,
    x: 28,
    y: 18,
    pinTop: '38%',
    pinLeft: '20%',
    badgeIcon: Utensils,
  },
  {
    id: 3,
    name: 'Uzhunnu Vada & Chutney',
    category: 'HOT SAVOURIES',
    tag: 'Crisp Lentil Donuts • Coconut Dip',
    price: '₹35 / 2 pcs',
    title: 'Crispy Uzhunnu Vada & Fresh Chutney',
    description: 'Deep-fried urad dal savoury donuts spiced with black pepper and curry leaves, served on fresh banana leaf with homemade coconut chutney and red chili dip.',
    scale: 2.35,
    x: -28,
    y: 22,
    pinTop: '32%',
    pinLeft: '80%',
    badgeIcon: Flame,
  },
  {
    id: 4,
    name: 'Sweet Unniyappam',
    category: 'TRADITIONAL SWEET',
    tag: 'Jaggery & Roasted Coconut',
    price: '₹40 / 4 pcs',
    title: 'Soft & Spongy Kerala Unniyappam',
    description: 'Traditional fried rice & banana fritters sweetened with pure jaggery, green cardamom, and toasted coconut bits fried in ghee.',
    scale: 2.35,
    x: 28,
    y: -22,
    pinTop: '78%',
    pinLeft: '20%',
    badgeIcon: Cookie,
  },
  {
    id: 5,
    name: 'Kerala Samosas',
    category: 'CRISPY BITES',
    tag: 'Spiced Potato & Pepper Mix',
    price: '₹45 / 2 pcs',
    title: 'Hot Kerala Style Samosas',
    description: 'Crunchy golden pastry stuffed with spicy onion, potato, and Kerala black pepper spice mix served fresh on banana leaf.',
    scale: 2.35,
    x: -28,
    y: -15,
    pinTop: '65%',
    pinLeft: '86%',
    badgeIcon: Sparkles,
  },
];

interface HeroProps {
  activeStop: number;
  onStopChange: (index: number) => void;
}

export const HeroTableZoom: React.FC<HeroProps> = ({ activeStop, onStopChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [manualZoomOffset, setManualZoomOffset] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const currentStop = STOPS[activeStop];

  // Scroll Driven Progression
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.clientHeight - window.innerHeight;
      
      if (totalHeight > 0 && rect.top <= 0) {
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 0.999);
        const calculatedIndex = Math.floor(progress * STOPS.length);
        
        if (calculatedIndex !== activeStop && calculatedIndex >= 0 && calculatedIndex < STOPS.length) {
          onStopChange(calculatedIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStop, onStopChange]);

  // Auto Orbit Timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      onStopChange((activeStop + 1) % STOPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, activeStop, onStopChange]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetCamera = () => {
    setManualZoomOffset(0);
    setDragOffset({ x: 0, y: 0 });
    onStopChange(0);
  };

  // Compute final scale & translations
  const finalScale = currentStop.scale + manualZoomOffset;
  const finalX = currentStop.x + (dragOffset.x / 10);
  const finalY = currentStop.y + (dragOffset.y / 10);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        height: '400vh', // Tall scroll track for smooth scroll-driven panning
        background: '#0C0806',
      }}
    >
      {/* Sticky Viewport Stage */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Tabletop Image Stage with Smooth Transform Matrix */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: isDragging ? 'none' : 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `scale(${finalScale}) translate(${finalX}%, ${finalY}%)`,
            transformOrigin: 'center center',
          }}
        >
          {/* Realistic Kerala Table Flatlay Photograph */}
          <img 
            src={tableFlatlayImg} 
            alt="Kerala Style Tea & Snacks Table Flatlay"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.92) contrast(1.06)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />

          {/* Steam Micro-Animations Over Center Kerala Tea Glass */}
          <div style={{
            position: 'absolute',
            top: '44%',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}>
            <div className="steam-particle" style={{ animationDelay: '0s', left: '-8px' }}></div>
            <div className="steam-particle" style={{ animationDelay: '1.2s', left: '6px' }}></div>
            <div className="steam-particle" style={{ animationDelay: '2.4s', left: '-2px' }}></div>
          </div>

          {/* Interactive Hotspot Pins Over Kerala Dishes */}
          {STOPS.filter(s => s.id !== 0).map((stop) => {
            const isActive = activeStop === stop.id;
            return (
              <div
                key={stop.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onStopChange(stop.id);
                  setDragOffset({ x: 0, y: 0 });
                }}
                style={{
                  position: 'absolute',
                  top: stop.pinTop,
                  left: stop.pinLeft,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                }}
              >
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Glowing Pulse Ring */}
                  <div className="animate-pulse-pin" style={{
                    position: 'absolute',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(229, 138, 43, 0.4)',
                  }} />

                  {/* Center Pin Icon Button */}
                  <button style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: isActive 
                      ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' 
                      : 'rgba(22, 15, 12, 0.92)',
                    border: `2px solid ${isActive ? '#FFFFFF' : '#D4AF37'}`,
                    color: isActive ? '#160F0C' : '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                    transition: 'all 0.3s ease',
                  }}>
                    <stop.badgeIcon size={18} />
                  </button>

                  {/* Tooltip Label */}
                  <div style={{
                    position: 'absolute',
                    top: '46px',
                    whiteSpace: 'nowrap',
                    background: 'rgba(12, 8, 6, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#FAF6F0',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  }}>
                    {stop.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Dark Gradient Vignette overlays */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(12, 8, 6, 0) 30%, rgba(12, 8, 6, 0.75) 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '240px',
          background: 'linear-gradient(to top, #0C0806 0%, rgba(12, 8, 6, 0) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Left Side Floating HUD Information Card */}
        <div 
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            maxWidth: '460px',
            width: 'calc(100vw - 80px)',
            padding: '28px',
            zIndex: 30,
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto',
          }}
        >
          {/* Category Pill & Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#D4AF37',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                {currentStop.category}
              </span>
              <span style={{ fontSize: '12px', color: '#CBBFB4', fontWeight: 600 }}>
                {currentStop.tag}
              </span>
            </div>
            <span style={{
              fontSize: '16px',
              fontWeight: 800,
              color: '#D4AF37',
              fontFamily: 'var(--font-heading)',
            }}>
              {currentStop.price}
            </span>
          </div>

          {/* Dish Title */}
          <h2 className="font-heading" style={{
            fontSize: '26px',
            fontWeight: 700,
            color: '#FAF6F0',
            lineHeight: 1.25,
            marginBottom: '10px',
          }}>
            {currentStop.title}
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '13.5px',
            color: '#CBBFB4',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}>
            {currentStop.description}
          </p>

          {/* Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {activeStop !== 0 ? (
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                color: '#160F0C',
                padding: '12px 18px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)',
              }}>
                <span>Order This Dish ({currentStop.price})</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={() => onStopChange(1)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                  color: '#160F0C',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Explore Kerala Table</span>
                <ArrowRight size={16} />
              </button>
            )}

            <button
              onClick={() => onStopChange((activeStop + 1) % STOPS.length)}
              style={{
                background: 'rgba(30, 20, 15, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#FAF6F0',
                padding: '12px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Next Item"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side Camera & Zoom Controls HUD */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 30,
          pointerEvents: 'auto',
        }}>
          {/* Zoom In */}
          <button
            onClick={() => setManualZoomOffset((prev: number) => Math.min(prev + 0.3, 1.5))}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(22, 15, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
            title="Zoom In"
          >
            <Plus size={18} />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => setManualZoomOffset((prev: number) => Math.max(prev - 0.3, -0.5))}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(22, 15, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
            title="Zoom Out"
          >
            <Minus size={18} />
          </button>

          {/* Reset Camera */}
          <button
            onClick={resetCamera}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(22, 15, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
            title="Reset View"
          >
            <RotateCcw size={18} />
          </button>

          {/* Auto Orbit Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: isPlaying ? 'rgba(212, 175, 55, 0.25)' : 'rgba(22, 15, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${isPlaying ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)'}`,
              color: isPlaying ? '#D4AF37' : '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
            title={isPlaying ? 'Pause Auto Orbit' : 'Play Auto Orbit'}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>

        {/* Bottom Center Table Focus Indicator Bar */}
        <div style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 18px',
          borderRadius: '9999px',
          background: 'rgba(12, 8, 6, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          zIndex: 30,
          pointerEvents: 'auto',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', letterSpacing: '1px' }}>
            NAADAN TABLE FOCUS:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {STOPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => onStopChange(idx)}
                style={{
                  height: '6px',
                  width: activeStop === idx ? '24px' : '8px',
                  borderRadius: '3px',
                  background: activeStop === idx ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
                title={s.name}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .glass-panel {
            left: 20px !important;
            right: 20px !important;
            width: calc(100vw - 40px) !important;
            bottom: 20px !important;
            padding: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};
