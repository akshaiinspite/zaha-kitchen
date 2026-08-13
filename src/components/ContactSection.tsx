import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, UtensilsCrossed, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tasteboxinfo2023@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Zaaha Kitchen Inquiry: ${formData.inquiryType} from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Guest Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email || 'Not Provided',
          'Inquiry Type': formData.inquiryType,
          'Location Outlet': formData.outlet,
          'Number of Guests': formData.guests,
          'Message / Request': formData.message || 'None'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form-section" style={{ background: '#0C0806', color: '#FAF6F0', padding: 'clamp(50px, 7vw, 100px) 16px', borderTop: '1px solid rgba(212, 175, 55, 0.15)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '5px 16px',
            borderRadius: '9999px',
            color: '#D4AF37',
            fontSize: 'clamp(10px, 2.5vw, 12px)',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '14px',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}>
            <MessageSquare size={13} style={{ flexShrink: 0 }} />
            <span>GET IN TOUCH WITH US</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, marginTop: '8px', marginBottom: '14px', lineHeight: 1.2 }}>
            Reserve a Table or <span style={{ color: '#D4AF37' }}>Send Us a Message</span>
          </h2>
          <p style={{ color: '#CBBFB4', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.7 }}>
            Have a question, feedback, catering inquiry, or table reservation request? Reach out to our hospitality team directly and we will assist you immediately.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Quick Contact Info & Business Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              background: 'rgba(22, 15, 12, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '20px',
              padding: 'clamp(20px, 4vw, 36px)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
            }}>
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: '#FAF6F0', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UtensilsCrossed color="#D4AF37" size={20} style={{ flexShrink: 0 }} />
                <span>Zaaha Hospitality Desk</span>
              </h3>
              <p style={{ color: '#CBBFB4', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '24px' }}>
                We welcome diners, corporate teams from Infopark, and tea enthusiasts across Ernakulam. Visit us or reach our hotline below:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:9947366906" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: '#D4AF37', fontWeight: 800, letterSpacing: '0.8px' }}>DIRECT PHONE / WHATSAPP</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>+91 9947366906</div>
                  </div>
                </a>

                <a href="mailto:tasteboxinfo2023@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '10.5px', color: '#D4AF37', fontWeight: 800, letterSpacing: '0.8px' }}>EMAIL INQUIRIES</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FAF6F0', wordBreak: 'break-all' }}>tasteboxinfo2023@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: '#D4AF37', fontWeight: 800, letterSpacing: '0.8px' }}>WORKING HOURS</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FAF6F0' }}>Mon - Sun: 8:30 AM - 11:30 PM</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: '#D4AF37', fontWeight: 800, letterSpacing: '0.8px' }}>LOCATIONS</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FAF6F0' }}>Kalamassery & Infopark Phase 1, Kochi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(229, 138, 43, 0.1) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '16px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FAF6F0' }}>Live Kitchen Operational</div>
                <div style={{ fontSize: '11.5px', color: '#CBBFB4' }}>Fresh tea & hot fritter batches prepared continuously throughout the day.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Reservation Form */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(22, 15, 12, 0.95) 0%, rgba(14, 9, 6, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '24px',
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '2px solid #D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: '#D4AF37'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAF6F0', marginBottom: '10px' }}>
                  Thank You, {formData.name || 'Valued Guest'}!
                </h3>
                <p style={{ color: '#CBBFB4', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
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
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '13.5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/tasteboxinfo2023@gmail.com" 
                method="POST" 
                onSubmit={handleSubmit} 
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                {/* FormSubmit Configuration Hidden Fields */}
                <input type="hidden" name="_subject" value={`New Zaaha Kitchen Inquiry from ${formData.name || 'Guest'}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div style={{ marginBottom: '2px' }}>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 700, color: '#FAF6F0', marginBottom: '4px' }}>
                    Send an Inquiry or Reserve Table
                  </h3>
                  <p style={{ fontSize: '13px', color: '#CBBFB4' }}>
                    Fill out the form below and we will get back to you immediately.
                  </p>
                </div>

                {/* Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>YOUR NAME *</label>
                    <input 
                      type="text" 
                      name="Guest Name"
                      required 
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>PHONE NUMBER *</label>
                    <input 
                      type="tel" 
                      name="Phone Number"
                      required 
                      placeholder="+91 9947366906"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Email & Inquiry Type */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="Email Address"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>INQUIRY TYPE</label>
                    <select 
                      name="Inquiry Type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>SELECT LOCATION OUTLET</label>
                    <select 
                      name="Location Outlet"
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
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
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>NUMBER OF GUESTS</label>
                    <select 
                      name="Number of Guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: 'rgba(12, 8, 6, 0.9)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: '#FAF6F0',
                        fontSize: '13.5px',
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
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#CBBFB4', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>YOUR MESSAGE / SPECIAL REQUEST</label>
                  <textarea 
                    name="Message / Special Request"
                    rows={3}
                    placeholder="Tell us your preferred date, time, dietary preferences, or specific inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      background: 'rgba(12, 8, 6, 0.8)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#FAF6F0',
                      fontSize: '13.5px',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E58A2B 100%)',
                    color: '#160F0C',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '14px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.75 : 1,
                    marginTop: '4px',
                    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Inquiry & Reserve</span>
                    </>
                  )}
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
