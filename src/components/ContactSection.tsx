import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, UtensilsCrossed } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    outlet: 'Kalamassery Flagship Outlet',
    inquiryType: 'Table Reservation',
    date: '',
    time: '',
    guests: '2 Guests',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact-form-section" style={{ background: '#0C0806', color: '#FAF6F0', padding: '100px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.15)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '6px 18px',
            borderRadius: '9999px',
            color: '#D4AF37',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <MessageSquare size={14} />
            <span>GET IN TOUCH WITH US</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, marginTop: '8px', marginBottom: '16px', lineHeight: 1.2 }}>
            Reserve a Table or <span style={{ color: '#D4AF37' }}>Send Us a Message</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: '16px', lineHeight: 1.7 }}>
            Have a question, feedback, catering inquiry, or table reservation request? Reach out to our hospitality team directly and we will assist you immediately.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Quick Contact Info & Business Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
              background: 'rgba(22, 15, 12, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
            }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAF6F0', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <UtensilsCrossed color="#D4AF37" size={22} />
                <span>Zaaha Hospitality Desk</span>
              </h3>
              <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
                We welcome diners, corporate teams from Infopark, and tea enthusiasts across Ernakulam. Visit us or reach our hotline below:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="tel:9947366906" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#D4AF37', fontWeight: 800, letterSpacing: '1px' }}>DIRECT PHONE / WHATSAPP</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#FAF6F0' }}>+91 9947366906</div>
                  </div>
                </a>

                <a href="mailto:tasteboxinfo2023@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#D4AF37', fontWeight: 800, letterSpacing: '1px' }}>EMAIL INQUIRIES</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>tasteboxinfo2023@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#D4AF37', fontWeight: 800, letterSpacing: '1px' }}>WORKING HOURS</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FAF6F0' }}>Mon - Sun: 8:30 AM - 11:30 PM</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#D4AF37', fontWeight: 800, letterSpacing: '1px' }}>LOCATIONS</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FAF6F0' }}>Kalamassery & Infopark Phase 1, Kochi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(229, 138, 43, 0.1) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FAF6F0' }}>Live Kitchen Operational</div>
                <div style={{ fontSize: '12px', color: '#CBBFB4' }}>Fresh tea & hot fritter batches prepared continuously throughout the day.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Reservation Form */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(22, 15, 12, 0.95) 0%, rgba(14, 9, 6, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '2px solid #D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  color: '#D4AF37'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FAF6F0', marginBottom: '12px' }}>
                  Thank You, {formData.name || 'Valued Guest'}!
                </h3>
                <p style={{ color: '#CBBFB4', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
                  Your request has been sent successfully to Zaaha Kitchen. Our team will contact you shortly at <strong>{formData.phone || 'your phone number'}</strong> to confirm your details.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      outlet: 'Kalamassery Flagship Outlet',
                      inquiryType: 'Table Reservation',
                      date: '',
                      time: '',
                      guests: '2 Guests',
                      message: '',
                    });
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                    color: '#160F0C',
                    padding: '12px 28px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FAF6F0', marginBottom: '6px' }}>
                    Send an Inquiry or Reserve Table
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#CBBFB4' }}>
                    Fill out the form below and we will get back to you immediately.
                  </p>
                </div>

                {/* Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>YOUR NAME *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>PHONE NUMBER *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9947366906"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Email & Inquiry Type */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>INQUIRY TYPE</label>
                    <select 
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Catering & Events">Catering & Special Events</option>
                      <option value="Infopark Lunch Orders">Infopark Lunch Bulk Orders</option>
                      <option value="General Feedback">General Feedback & Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Outlet & Party Size */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>SELECT LOCATION OUTLET</label>
                    <select 
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Kalamassery Flagship Outlet">Kalamassery Flagship Outlet</option>
                      <option value="Athulya Infopark Phase 1">Athulya Infopark Phase 1</option>
                      <option value="Vismaya Infopark Phase 1">Vismaya Infopark Phase 1</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>NUMBER OF GUESTS</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3-5 Guests">3 - 5 Guests</option>
                      <option value="6-10 Guests">6 - 10 Guests</option>
                      <option value="10+ Guests">10+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Special Request */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>YOUR MESSAGE / SPECIAL REQUEST</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us your preferred date, time, dietary preferences, or specific inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      background: 'rgba(12, 8, 6, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#FAF6F0',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                    color: '#160F0C',
                    padding: '16px 28px',
                    borderRadius: '14px',
                    fontWeight: 800,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Send size={18} />
                  <span>Submit Inquiry & Reserve</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
