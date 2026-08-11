import React, { useState } from 'react';
import { 
  Coffee, Utensils, Flame, Sparkles, Sun, 
  GlassWater, CookingPot, Layers, 
  Maximize2, ArrowRight, BookOpen
} from 'lucide-react';
import teaSnacksImg from '../assets/dish_kerala_tea_snacks_1786103823980.png';
import { MENU_CATEGORIES, TOTAL_MENU_ITEMS_COUNT } from '../data/menuData';
import { FullMenuModal } from './FullMenuModal';

export const MenuSection: React.FC = () => {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState<boolean>(false);
  const [modalCategory, setModalCategory] = useState<string>('all');

  // Map category icon names to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'Utensils': return Utensils;
      case 'Flame': return Flame;
      case 'CookingPot': return CookingPot;
      case 'Layers': return Layers;
      case 'Coffee': return Coffee;
      case 'GlassWater': return GlassWater;
      default: return Sparkles;
    }
  };

  // Open Full Menu Page/Modal targeting specific category or all
  const openFullMenu = (catId: string = 'all') => {
    setModalCategory(catId);
    setIsFullMenuOpen(true);
  };

  return (
    <section 
      id="menu" 
      style={{ 
        background: '#0C0806', 
        color: '#FAF6F0', 
        padding: '100px 24px', 
        position: 'relative', 
        zIndex: 10, 
        borderTop: '1px solid rgba(212, 175, 55, 0.15)' 
      }}
    >
      {/* Decorative Gold Glow Header Line */}
      <div style={{
        width: '120px',
        height: '3px',
        background: 'linear-gradient(90deg, #D4AF37, #E58A2B)',
        margin: '0 auto 24px auto',
        borderRadius: '2px',
        boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
      }} />

      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 56px auto' }}>
        <span style={{
          color: '#D4AF37',
          fontSize: '12px',
          fontWeight: 800,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
        }}>
          OUR COMPLETE DINING MENU ({TOTAL_MENU_ITEMS_COUNT} DISHES)
        </span>
        <h2 className="font-heading" style={{
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          fontWeight: 700,
          marginTop: '12px',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}>
          Handcrafted Dishes & <span style={{ color: '#D4AF37' }}>Authentic Flavors</span>
        </h2>
        <p style={{ color: '#CBBFB4', fontSize: '16.5px', lineHeight: 1.7, margin: '0 auto', maxWidth: '760px' }}>
          Explore our complete selection of {TOTAL_MENU_ITEMS_COUNT} items spanning 8 authentic food categories. Prepared fresh daily with traditional recipes.
        </p>

        {/* Primary CTA: Open Full Menu Page */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => openFullMenu('all')}
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
              color: '#160F0C',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <BookOpen size={20} />
            <span>Open Complete 105-Item Menu Page</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Landing Page Categories Showcase Grid */}
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '28px',
        alignItems: 'stretch',
      }}>
        {MENU_CATEGORIES.map((category) => {
          const Icon = getCategoryIcon(category.iconName);
          const topHighlights = category.items.slice(0, 4);

          return (
            <div 
              key={category.id}
              onClick={() => openFullMenu(category.id)}
              style={{
                background: 'rgba(22, 15, 12, 0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 175, 55, 0.28)',
                borderRadius: '24px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#D4AF37';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.28)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.5)';
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#160F0C',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)',
                  }}>
                    <Icon size={24} />
                  </div>

                  <span style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    color: '#D4AF37',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                  }}>
                    {category.items.length} Items Available
                  </span>
                </div>

                {/* Category Title & Description */}
                <h3 style={{ fontSize: '21px', fontWeight: 700, color: '#FAF6F0', margin: '0 0 8px 0', lineHeight: 1.2 }}>
                  {category.title}
                </h3>
                <p style={{ color: '#CBBFB4', fontSize: '13.5px', lineHeight: 1.6, margin: '0 0 20px 0', minHeight: '44px' }}>
                  {category.description}
                </p>

                {/* Highlights Preview Chips */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {topHighlights.map((dish) => (
                    <div 
                      key={dish.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(30, 20, 15, 0.6)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(212, 175, 55, 0.15)',
                      }}
                    >
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#FAF6F0' }}>
                        {dish.name}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: '#D4AF37', fontFamily: 'monospace' }}>
                        {dish.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Category Items Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openFullMenu(category.id);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(229, 138, 43, 0.15) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#D4AF37',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <span>View {category.shortTitle} Menu ({category.items.length})</span>
                <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Master CTA Banner */}
      <div style={{
        maxWidth: '1320px',
        margin: '56px auto 0 auto',
        background: 'linear-gradient(135deg, rgba(30, 20, 15, 0.95) 0%, rgba(18, 12, 7, 0.95) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.35)',
        borderRadius: '28px',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'center',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)'
      }}>
        <div style={{ padding: '44px' }}>
          <span style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            DIGITAL MENU CATALOG
          </span>
          <h3 className="font-heading" style={{ fontSize: '30px', fontWeight: 700, marginTop: '8px', marginBottom: '14px', color: '#FAF6F0' }}>
            Want to Browse All 105 Items With Prices?
          </h3>
          <p style={{ color: '#CBBFB4', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
            Open our dedicated digital menu page to filter by category, search specific dishes, or switch to compact menu sheet layout.
          </p>
          <button
            onClick={() => openFullMenu('all')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
              color: '#160F0C',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
            }}
          >
            <Maximize2 size={18} />
            <span>Open Complete 105-Item Menu Page</span>
          </button>
        </div>

        <div style={{ height: '100%', minHeight: '280px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={teaSnacksImg} 
            alt="Kerala Food Spread" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(18, 12, 7, 0.85) 0%, transparent 60%)' }} />
        </div>
      </div>

      {/* Interactive Full Screen Menu Page View */}
      <FullMenuModal 
        isOpen={isFullMenuOpen} 
        onClose={() => setIsFullMenuOpen(false)} 
        initialCategory={modalCategory}
      />
    </section>
  );
};

export default MenuSection;
