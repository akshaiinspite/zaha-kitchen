import React, { useState } from 'react';
import { Sparkles, ArrowRight, Utensils } from 'lucide-react';
import arabicImg from '../assets/dish_arabic_mandi_1786103780403.png';
import continentalImg from '../assets/dish_continental_steak_1786103795932.png';
import chineseImg from '../assets/dish_chinese_dragon_1786103811125.png';
import naadanImg from '../assets/dish_kerala_tea_snacks_1786103823980.png';

export const CuisineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cuisines = [
    {
      id: 0,
      title: 'Rich Arabic Delicacies',
      subtitle: 'Smoked Mandi, Kebabs & Hummus Spreads',
      image: arabicImg,
      description: 'Immerse yourself in authentic Middle Eastern flavors. Tender slow-cooked chicken & mutton Mandi, char-broiled kebabs, freshly baked pita, and authentic garlic sauce.',
      highlights: ['Char-Broiled Chicken Mandi', 'Mixed Grill Platter', 'Authentic Creamy Hummus', 'Special Shawarma Wraps'],
      tag: 'Middle Eastern Heritage',
      dishMenu: [
        { name: 'Charcoal Chicken Mandi', price: '₹340 / Half', badge: 'Chef Special', desc: 'Slow-cooked spiced chicken served over fragrant rice.' },
        { name: 'Authentic Mutton Mandi', price: '₹520 / Full', badge: 'Premium', desc: 'Tender mutton cooked in traditional Yemeni herbs.' },
        { name: 'Special Chicken Shawarma Roll', price: '₹140 / Pc', badge: 'Popular', desc: 'Char-broiled chicken wrapped with garlic mayo & pickles.' }
      ]
    },
    {
      id: 1,
      title: 'Classic Continental Fare',
      subtitle: 'Pan-Seared Steaks, Sizzlers & Gourmet Pastas',
      image: continentalImg,
      description: 'Experience gourmet European classics crafted with precision. Sizzling steak platters, rich creamy Alfredo pastas, artisan burgers, and grilled seafood.',
      highlights: ['Pepper Steak Sizzler', 'Creamy Tuscan Alfredo', 'Gourmet Club Burger', 'Grilled Butter Lemon Fish'],
      tag: 'European Excellence',
      dishMenu: [
        { name: 'Sizzling Pepper Steak', price: '₹420 / Plate', badge: 'Sizzler', desc: 'Juicy tenderloin steak with pepper jus and roasted veggies.' },
        { name: 'Creamy Tuscan Fettuccine', price: '₹310 / Bowl', badge: 'Gourmet', desc: 'Rich garlic butter parmesan cream sauce with grilled chicken.' },
        { name: 'Zaaha Gourmet Club Burger', price: '₹240 / Pc', badge: 'House Special', desc: 'Double patty, fried egg, cheddar slice & crispy fries.' }
      ]
    },
    {
      id: 2,
      title: 'Zesty Chinese Favorites',
      subtitle: 'Wok-Tossed Rice, Noodles & Crispy Sizzlers',
      image: chineseImg,
      description: 'Bold, tangy, and high-fire wok creations. Fiery Dragon Chicken, Schezwan fried rice, hand-folded dim sums, and sizzling wok noodles.',
      highlights: ['Signature Dragon Chicken', 'Schezwan Triple Rice', 'Steam Dumpling Basket', 'Crispy Chili Beef'],
      tag: 'High-Fire Wok Masters',
      dishMenu: [
        { name: 'Signature Dragon Chicken', price: '₹280 / Portion', badge: 'Spicy', desc: 'Crispy fried chicken wok-tossed in sweet chili garlic glaze.' },
        { name: 'Schezwan Triple Fried Rice', price: '₹290 / Portion', badge: 'Bestseller', desc: 'Combo of wok rice, crispy noodles, and gravy.' },
        { name: 'Steamed Chicken Dim Sums', price: '₹210 / 6 pcs', badge: 'Fresh', desc: 'Hand-folded juicy chicken dumplings with spicy dip.' }
      ]
    },
    {
      id: 3,
      title: 'Traditional Naadan Recipes',
      subtitle: 'Classic Kerala Tea, Pazham Pori & Evening Bites',
      image: naadanImg,
      description: 'The soul of Ernakulam dining. Freshly pulled Kerala meter chaya, golden crispy pazham pori, piping hot uzhunnu vadas, and authentic Malabar biriyani.',
      highlights: ['Frothy Meter Chaya', 'Golden Pazham Pori', 'Uzhunnu Vada & Chutney', 'Malabar Dum Biriyani'],
      tag: 'Authentic Kerala Soul',
      dishMenu: [
        { name: 'Kerala Meter Chaya', price: '₹20 / Glass', badge: 'Bestseller', desc: 'Frothy freshly pulled cardamom ginger tea.' },
        { name: 'Crispy Pazham Pori', price: '₹30 / 2 pcs', badge: 'Hot', desc: 'Sweet Nendran banana fried in golden crispy batter.' },
        { name: 'Uzhunnu Vada & Chutney', price: '₹35 / 2 pcs', badge: 'Classic', desc: 'Crisp black lentil donuts with coconut chutney.' }
      ]
    },
  ];

  const currentCuisine = cuisines[activeTab];

  return (
    <section id="cuisine" style={{ background: '#120C07', color: '#FAF6F0', padding: '100px 24px', borderTop: '1px solid rgba(234, 168, 18, 0.2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#EAA812', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            MULTICUISINE EXCELLENCE
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '16px' }}>
            A Fusion of <span style={{ color: '#EAA812' }}>Traditional & Global</span> Flavors
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            We bring food lovers together through an extraordinary culinary journey spanning four iconic global taste traditions, prepared fresh daily without compromise.
          </p>
        </div>

        {/* Cuisine Selector Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '50px' }}>
          {cuisines.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '14px 28px',
                borderRadius: '9999px',
                background: activeTab === idx ? 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)' : 'rgba(22, 15, 12, 0.8)',
                color: activeTab === idx ? '#160F0C' : '#FAF6F0',
                border: `1px solid ${activeTab === idx ? '#EAA812' : 'rgba(234, 168, 18, 0.28)'}`,
                fontWeight: 800,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === idx ? '0 8px 25px rgba(234, 168, 18, 0.4)' : 'none',
              }}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Dynamic Display Card */}
        <div style={{
          background: 'rgba(22, 15, 12, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(234, 168, 18, 0.35)',
          borderRadius: '28px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
          marginBottom: '50px',
        }}>
          {/* Left Side Info */}
          <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(234, 168, 18, 0.15)',
              color: '#EAA812',
              border: '1px solid rgba(234, 168, 18, 0.35)',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1px',
              marginBottom: '16px',
              width: 'fit-content',
            }}>
              {currentCuisine.tag}
            </span>

            <h3 className="font-heading" style={{ fontSize: '32px', fontWeight: 700, color: '#FAF6F0', marginBottom: '8px' }}>
              {currentCuisine.title}
            </h3>
            <p style={{ color: '#EAA812', fontSize: '15px', fontWeight: 700, marginBottom: '20px' }}>
              {currentCuisine.subtitle}
            </p>
            <p style={{ color: '#CBBFB4', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              {currentCuisine.description}
            </p>

            {/* Dish Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {currentCuisine.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FAF6F0', fontSize: '13.5px', fontWeight: 600 }}>
                  <Sparkles size={14} color="#EAA812" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <a 
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#menu');
                if (target) {
                  const lenis = (window as any).lenis;
                  if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.2 });
                  else target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #EAA812 0%, #E58A2B 100%)',
                color: '#160F0C',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '14px',
                textDecoration: 'none',
                width: 'fit-content',
                boxShadow: '0 8px 24px rgba(234, 168, 18, 0.4)',
              }}
            >
              <Utensils size={16} />
              <span>Explore Menu Catalog</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Side Authentic Dish Image */}
          <div style={{ position: 'relative', minHeight: '420px' }}>
            <img 
              src={currentCuisine.image} 
              alt={currentCuisine.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(22, 15, 12, 0.8) 0%, transparent 40%)' }} />
          </div>
        </div>

        {/* Featured Dish Items Cards for Active Cuisine */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {currentCuisine.dishMenu.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(22, 15, 12, 0.8)',
                border: '1px solid rgba(234, 168, 18, 0.28)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#EAA812',
                    background: 'rgba(234, 168, 18, 0.15)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(234, 168, 18, 0.3)'
                  }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#EAA812' }}>
                    {item.price}
                  </span>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FAF6F0', marginBottom: '8px' }}>
                  {item.name}
                </h4>
                <p style={{ fontSize: '13px', color: '#CBBFB4', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuisineSection;
