import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, Search, Sparkles, Sun, Utensils, Flame, CookingPot, 
  Layers, Coffee, GlassWater, Printer, 
  Grid, List, ArrowLeft
} from 'lucide-react';
import { MENU_CATEGORIES, TOTAL_MENU_ITEMS_COUNT } from '../data/menuData';
import type { MenuCategory } from '../data/menuData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ 
  isOpen, 
  onClose, 
  initialCategory = 'all' 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg' | 'popular'>('all');
  const [viewMode, setViewMode] = useState<'compact' | 'grid'>('compact');

  useEffect(() => {
    const lenisInstance = (window as any).lenis;
    if (isOpen) {
      setSelectedCategory(initialCategory);
      document.body.style.overflow = 'hidden';
      if (lenisInstance) {
        lenisInstance.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (lenisInstance) {
        lenisInstance.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (lenisInstance) {
        lenisInstance.start();
      }
    };
  }, [isOpen, initialCategory]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Map category icon names to Lucide components
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

  // Filtered menu logic
  const filteredData = useMemo(() => {
    return MENU_CATEGORIES.map(category => {
      // Category filter check
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      // Items filter
      const items = category.items.filter(item => {
        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase().trim();
          const matchName = item.name.toLowerCase().includes(q);
          const matchBadge = item.badge ? item.badge.toLowerCase().includes(q) : false;
          if (!matchName && !matchBadge) return false;
        }

        // Diet filter
        if (dietFilter === 'veg' && !item.isVeg) return false;
        if (dietFilter === 'nonveg' && item.isVeg) return false;
        if (dietFilter === 'popular' && !item.popular) return false;

        return true;
      });

      if (items.length === 0) return null;

      return {
        ...category,
        items,
      };
    }).filter(Boolean) as MenuCategory[];
  }, [selectedCategory, searchQuery, dietFilter]);

  // Total matching items count
  const matchingItemsCount = useMemo(() => {
    return filteredData.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredData]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(8, 5, 4, 0.96)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.3s ease-out forwards',
        color: '#FAF6F0',
      }}
    >
      {/* Top Header Controls Bar */}
      <div style={{
        background: '#140D0A',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#160F0C',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
            }}>
              <Utensils size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 className="font-heading" style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#FAF6F0' }}>
                  ZAAHA KITCHEN
                </h2>
                <span style={{
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#D4AF37',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}>
                  {TOTAL_MENU_ITEMS_COUNT} Items Total
                </span>
              </div>
              <p style={{ fontSize: '11px', color: '#CBBFB4', margin: '2px 0 0 0' }}>
                Official Dining Menu Catalog • Kalamassery & Kakkanad
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div style={{
            flex: '1 1 320px',
            maxWidth: '460px',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(30, 20, 15, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '9999px',
              padding: '6px 16px',
            }}>
              <Search size={16} color="#D4AF37" style={{ marginRight: '10px', flexShrink: 0 }} />
              <input 
                type="text"
                placeholder="Search all 105 dishes (e.g. Appam, Majboos, Mojito, Pazhampori)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FAF6F0',
                  fontSize: '13.5px',
                  fontWeight: 500,
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#CBBFB4',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Action Tools & Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* View Mode Toggle */}
            <div style={{
              display: 'flex',
              background: 'rgba(30, 20, 15, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '10px',
              padding: '2px',
            }}>
              <button
                onClick={() => setViewMode('compact')}
                title="Compact Menu Sheet View"
                style={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: viewMode === 'compact' ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' : 'transparent',
                  color: viewMode === 'compact' ? '#160F0C' : '#CBBFB4',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                <List size={15} />
                <span className="hide-mobile">Menu Sheet</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                title="Grid Card View"
                style={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: viewMode === 'grid' ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' : 'transparent',
                  color: viewMode === 'grid' ? '#160F0C' : '#CBBFB4',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                <Grid size={15} />
                <span className="hide-mobile">Cards</span>
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              title="Print Menu"
              style={{
                background: 'rgba(30, 20, 15, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#FAF6F0',
                padding: '8px 12px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              <Printer size={15} color="#D4AF37" />
              <span className="hide-mobile">Print</span>
            </button>

            {/* Back to Landing Page Button */}
            <button
              onClick={onClose}
              title="Back to Landing Page"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                color: '#160F0C',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12.5px',
                fontWeight: 800,
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Main Page</span>
            </button>

            {/* Close Modal X Button */}
            <button
              onClick={onClose}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                color: '#FAF6F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.color = '#160F0C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
                e.currentTarget.style.color = '#FAF6F0';
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Header Navigation & Filter Tabs */}
      <div style={{
        background: '#19110D',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '12px 24px',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '7px 16px',
                borderRadius: '9999px',
                background: selectedCategory === 'all' 
                  ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' 
                  : 'rgba(30, 20, 15, 0.7)',
                color: selectedCategory === 'all' ? '#160F0C' : '#FAF6F0',
                border: `1px solid ${selectedCategory === 'all' ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)'}`,
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>All Categories</span>
              <span style={{
                fontSize: '10.5px',
                background: selectedCategory === 'all' ? 'rgba(0,0,0,0.2)' : 'rgba(212, 175, 55, 0.2)',
                padding: '1px 6px',
                borderRadius: '9999px',
              }}>
                {TOTAL_MENU_ITEMS_COUNT}
              </span>
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  background: selectedCategory === cat.id 
                    ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' 
                    : 'rgba(30, 20, 15, 0.7)',
                  color: selectedCategory === cat.id ? '#160F0C' : '#FAF6F0',
                  border: `1px solid ${selectedCategory === cat.id ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)'}`,
                  fontWeight: 700,
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>{cat.shortTitle}</span>
                <span style={{
                  fontSize: '10.5px',
                  background: selectedCategory === cat.id ? 'rgba(0,0,0,0.2)' : 'rgba(212, 175, 55, 0.2)',
                  padding: '1px 6px',
                  borderRadius: '9999px',
                }}>
                  {cat.items.length}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Dietary Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <span style={{ fontSize: '11px', color: '#CBBFB4', fontWeight: 600, marginRight: '4px' }}>
              Filter:
            </span>
            <button
              onClick={() => setDietFilter('all')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: dietFilter === 'all' ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
                background: dietFilter === 'all' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: dietFilter === 'all' ? '#D4AF37' : '#CBBFB4',
                cursor: 'pointer',
              }}
            >
              All
            </button>
            <button
              onClick={() => setDietFilter('popular')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: dietFilter === 'popular' ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
                background: dietFilter === 'popular' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                color: dietFilter === 'popular' ? '#D4AF37' : '#CBBFB4',
                cursor: 'pointer',
              }}
            >
              ★ Bestsellers
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: dietFilter === 'veg' ? '1px solid #4CAF50' : '1px solid rgba(255,255,255,0.1)',
                background: dietFilter === 'veg' ? 'rgba(76, 175, 80, 0.2)' : 'transparent',
                color: dietFilter === 'veg' ? '#4CAF50' : '#CBBFB4',
                cursor: 'pointer',
              }}
            >
              🟢 Pure Veg
            </button>
            <button
              onClick={() => setDietFilter('nonveg')}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: dietFilter === 'nonveg' ? '1px solid #FF5722' : '1px solid rgba(255,255,255,0.1)',
                background: dietFilter === 'nonveg' ? 'rgba(255, 87, 34, 0.2)' : 'transparent',
                color: dietFilter === 'nonveg' ? '#FF5722' : '#CBBFB4',
                cursor: 'pointer',
              }}
            >
              🔴 Non-Veg
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: '32px 24px 60px 24px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Items Found Counter Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          }}>
            <p style={{ fontSize: '14px', color: '#CBBFB4', margin: 0 }}>
              Showing <strong style={{ color: '#D4AF37' }}>{matchingItemsCount}</strong> items 
              {selectedCategory !== 'all' && ` in ${MENU_CATEGORIES.find(c => c.id === selectedCategory)?.title}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {(searchQuery || selectedCategory !== 'all' || dietFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setDietFilter('all');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#D4AF37',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* No Results Fallback */}
          {filteredData.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#CBBFB4' }}>
              <Utensils size={48} color="#D4AF37" style={{ marginBottom: '16px', opacity: 0.6 }} />
              <h3 style={{ fontSize: '20px', color: '#FAF6F0', margin: '0 0 8px 0' }}>No Dishes Match Your Search</h3>
              <p style={{ fontSize: '14px' }}>Try searching for another dish name or reset your category and diet filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setDietFilter('all'); }}
                style={{
                  marginTop: '16px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                  color: '#160F0C',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                View Complete 105 Items Menu
              </button>
            </div>
          )}

          {/* MENU SHEET / COMPACT LIST VIEW (Classic Professional Restaurant Layout) */}
          {viewMode === 'compact' && filteredData.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '32px',
              alignItems: 'start',
            }}>
              {filteredData.map((category) => {
                const IconComponent = getCategoryIcon(category.iconName);
                return (
                  <div 
                    key={category.id}
                    style={{
                      background: 'rgba(22, 15, 12, 0.85)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {/* Category Title Header */}
                    <div style={{
                      padding: '18px 24px',
                      background: 'linear-gradient(135deg, rgba(35, 24, 18, 0.9) 0%, rgba(20, 13, 9, 0.9) 100%)',
                      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#160F0C',
                          fontWeight: 800,
                        }}>
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#FAF6F0' }}>
                            {category.title}
                          </h3>
                          <p style={{ fontSize: '11px', color: '#D4AF37', margin: 0, fontWeight: 600 }}>
                            {category.items.length} items available
                          </p>
                        </div>
                      </div>

                      <span style={{
                        background: 'rgba(212, 175, 55, 0.15)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#D4AF37',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                      }}>
                        {category.badge}
                      </span>
                    </div>

                    {/* Compact Items Table / Leader Dots Rows */}
                    <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {category.items.map((item) => (
                        <div 
                          key={item.id}
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px',
                            padding: '4px 0',
                          }}
                        >
                          {/* Veg/Non-Veg dot */}
                          <span 
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            style={{
                              width: '10px',
                              height: '10px',
                              border: `1.5px solid ${item.isVeg ? '#4CAF50' : '#E53935'}`,
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '2px',
                              marginRight: '2px',
                              flexShrink: 0,
                            }}
                          >
                            <span style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              background: item.isVeg ? '#4CAF50' : '#E53935',
                            }} />
                          </span>

                          {/* Item Name */}
                          <span style={{ 
                            fontSize: '14.5px', 
                            fontWeight: item.popular ? 700 : 500, 
                            color: item.popular ? '#FFFFFF' : '#FAF6F0',
                            whiteSpace: 'nowrap',
                          }}>
                            {item.name}
                          </span>

                          {/* Item Badge */}
                          {item.badge && (
                            <span style={{
                              fontSize: '9.5px',
                              fontWeight: 800,
                              color: item.popular ? '#160F0C' : '#D4AF37',
                              background: item.popular 
                                ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' 
                                : 'rgba(212, 175, 55, 0.12)',
                              border: item.popular ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                              padding: '1px 6px',
                              borderRadius: '9999px',
                              flexShrink: 0,
                            }}>
                              {item.badge}
                            </span>
                          )}

                          {/* Dot Leader Line */}
                          <div style={{
                            flexGrow: 1,
                            borderBottom: '1px dotted rgba(212, 175, 55, 0.25)',
                            margin: '0 4px',
                            alignSelf: 'center',
                          }} />

                          {/* Price */}
                          <span style={{
                            fontSize: '15px',
                            fontWeight: 800,
                            color: '#D4AF37',
                            fontFamily: 'monospace',
                            flexShrink: 0,
                            letterSpacing: '0.5px',
                          }}>
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* GRID CARD VIEW MODE */}
          {viewMode === 'grid' && filteredData.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {filteredData.map((category) => {
                const IconComponent = getCategoryIcon(category.iconName);
                return (
                  <div key={category.id}>
                    {/* Category Banner Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                      paddingBottom: '10px',
                      borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#160F0C',
                        }}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '22px', fontWeight: 700, margin: 0, color: '#FAF6F0' }}>
                            {category.title}
                          </h3>
                          <p style={{ fontSize: '12px', color: '#CBBFB4', margin: 0 }}>
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <span style={{
                        background: 'rgba(212, 175, 55, 0.15)',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        color: '#D4AF37',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 14px',
                        borderRadius: '9999px',
                      }}>
                        {category.items.length} items
                      </span>
                    </div>

                    {/* Cards Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                      gap: '16px',
                    }}>
                      {category.items.map((item) => (
                        <div 
                          key={item.id}
                          style={{
                            background: 'rgba(22, 15, 12, 0.9)',
                            border: item.popular ? '1px solid rgba(212, 175, 55, 0.6)' : '1px solid rgba(212, 175, 55, 0.2)',
                            borderRadius: '16px',
                            padding: '16px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '12px',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                            position: 'relative',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                              {/* Veg dot */}
                              <span 
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                                style={{
                                  width: '12px',
                                  height: '12px',
                                  border: `1.5px solid ${item.isVeg ? '#4CAF50' : '#E53935'}`,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: '3px',
                                }}
                              >
                                <span style={{
                                  width: '5px',
                                  height: '5px',
                                  borderRadius: '50%',
                                  background: item.isVeg ? '#4CAF50' : '#E53935',
                                }} />
                              </span>

                              {item.badge && (
                                <span style={{
                                  fontSize: '10px',
                                  fontWeight: 800,
                                  color: item.popular ? '#160F0C' : '#D4AF37',
                                  background: item.popular 
                                    ? 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)' 
                                    : 'rgba(212, 175, 55, 0.15)',
                                  border: item.popular ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                                  padding: '2px 8px',
                                  borderRadius: '9999px',
                                }}>
                                  {item.badge}
                                </span>
                              )}
                            </div>

                            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FAF6F0', margin: 0 }}>
                              {item.name}
                            </h4>
                          </div>

                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '8px',
                            borderTop: '1px dashed rgba(212, 175, 55, 0.15)',
                          }}>
                            <span style={{ fontSize: '18px', fontWeight: 800, color: '#D4AF37', fontFamily: 'monospace' }}>
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Embedded CSS for responsive styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default FullMenuModal;
