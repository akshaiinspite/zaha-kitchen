import React, { useEffect } from 'react';
import { Scale, CreditCard, RefreshCw, Truck, ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { FooterSection } from './FooterSection';
import termsBanner from '../assets/terms_conditions_banner.png';

interface TermsConditionsPageProps {
  onNavigateHome: () => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ background: '#0C0806', minHeight: '100vh', color: '#FAF6F0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Top Floating Navigation Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 32px',
        background: 'rgba(12, 8, 6, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(234, 168, 18, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={onNavigateHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(234, 168, 18, 0.15)',
              border: '1px solid rgba(234, 168, 18, 0.4)',
              color: '#EAA812',
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(234, 168, 18, 0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(234, 168, 18, 0.15)')}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          
          <div style={{ fontSize: '14px', color: '#CBBFB4', fontWeight: 600 }}>
            Legal / <span style={{ color: '#EAA812' }}>Terms & Conditions</span>
          </div>
        </div>

        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src="/zaaha logo.png" alt="Zaaha Kitchen" style={{ height: '55px', objectFit: 'contain' }} />
        </a>
      </div>

      {/* Prominent Hero Banner Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '40px',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        {/* Banner Display Card */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(234, 168, 18, 0.4)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(234, 168, 18, 0.25)',
          minHeight: '340px',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
          {/* Generated Banner Image */}
          <img 
            src={termsBanner} 
            alt="Terms & Conditions Banner" 
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Dark Gold Gradient Overlay for Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(12, 8, 6, 0.2) 0%, rgba(12, 8, 6, 0.7) 50%, rgba(12, 8, 6, 0.96) 100%)',
          }} />

          {/* Content Overlay */}
          <div style={{ position: 'relative', zIndex: 10, padding: '40px 36px', maxWidth: '800px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(234, 168, 18, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 168, 18, 0.5)',
              color: '#EAA812',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              <Scale size={16} />
              <span>LEGAL AGREEMENT & PAYMENT TERMS</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#FAF6F0',
              lineHeight: 1.2,
              marginBottom: '14px',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}>
              Terms & <span style={{ color: '#EAA812' }}>Conditions</span>
            </h1>

            <p style={{
              fontSize: '15.5px',
              color: '#E0D4C8',
              lineHeight: 1.7,
              margin: 0,
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}>
              Welcome to Zaaha Kitchen (Tastebox Foods). Please review these terms governing food ordering, table reservations, corporate catering services, online payment transactions, cancellations, and refunds.
            </p>

            <div style={{ fontSize: '13px', color: '#EAA812', fontWeight: 600, marginTop: '16px' }}>
              Last Updated: August 12, 2026 | Effective Date: August 12, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>

          {/* Highlights Summary Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={highlightCardStyle}>
              <CreditCard color="#EAA812" size={24} />
              <h3 style={highlightTitleStyle}>INR (₹) Currency & Taxes</h3>
              <p style={highlightDescStyle}>All menu prices are listed in Indian Rupees (INR ₹). Applicable Goods & Services Tax (GST) is calculated at checkout.</p>
            </div>

            <div style={highlightCardStyle}>
              <RefreshCw color="#EAA812" size={24} />
              <h3 style={highlightTitleStyle}>5-7 Days Refund Policy</h3>
              <p style={highlightDescStyle}>Approved refunds for cancelled orders or payment discrepancies are processed back to the original source within 5 to 7 working days.</p>
            </div>

            <div style={highlightCardStyle}>
              <Truck color="#EAA812" size={24} />
              <h3 style={highlightTitleStyle}>30-45 Mins Delivery Zone</h3>
              <p style={highlightDescStyle}>Serving Kalamassery, Kakkanad Infopark Phase 1 & 2, and surrounding Ernakulam areas within standard timelines.</p>
            </div>
          </div>

          {/* Section Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            {/* 1. Ownership & Service Overview */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>1</span>
                Ownership & Service Overview
              </h2>
              <p style={paragraphStyle}>
                This website is owned and operated by <strong>Zaaha Kitchen</strong> (operating under <strong>Tastebox Foods</strong>, registered in Ernakulam, Kerala, India). Zaaha Kitchen operates multi-cuisine dining outlets at Kalamassery Flagship, Athulya Infopark Phase 1, and Vismaya Infopark Phase 1, providing dining, takeaway, food delivery, and outdoor/corporate catering services.
              </p>
              <p style={paragraphStyle}>
                By browsing our site, placing an order, or transferring payments via online gateways, you agree to comply with and be legally bound by these Terms and Conditions.
              </p>
            </div>

            {/* 2. Menu Pricing, Taxes & Payment Gateway Rules */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>2</span>
                Pricing, Currency & Payment Terms
              </h2>
              <p style={paragraphStyle}>
                All menu items, catering packages, and delivery fees are quoted in <strong>Indian Rupees (INR ₹)</strong>. Pricing is subject to change without prior notice, but confirmed orders will be honored at the agreed rate.
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>Accepted Payment Modes:</strong> We accept online payments via Credit Cards, Debit Cards, Net Banking, Unified Payments Interface (UPI - Google Pay, PhonePe, Paytm, BHIM), and authorized digital wallets via secured Payment Gateways (Razorpay / PayU / Stripe).
                </li>
                <li style={liStyle}>
                  <strong>Tax Details:</strong> Orders are subject to GST as mandated by the Government of India and the Commercial Taxes Department of Kerala.
                </li>
                <li style={liStyle}>
                  <strong>Payment Authorization:</strong> You represent that you are authorized to use the chosen payment method. Transactions are authenticated via 2-Factor Authentication (OTP / 3D Secure) mandated by the Reserve Bank of India (RBI).
                </li>
              </ul>
            </div>

            {/* 3. Cancellation Policy */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>3</span>
                Cancellation Policy
              </h2>
              <p style={paragraphStyle}>We understand plans change. Our cancellation terms depend on the order category:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
                <div style={innerBoxStyle}>
                  <h4 style={innerBoxHeadingStyle}><RefreshCw size={16} color="#EAA812"/> Immediate Food Orders</h4>
                  <p style={innerBoxTextStyle}>Orders placed for immediate delivery/takeaway can be cancelled within <strong>5 minutes</strong> of order placement. Once kitchen preparation has commenced, food orders cannot be cancelled or refunded.</p>
                </div>

                <div style={innerBoxStyle}>
                  <h4 style={innerBoxHeadingStyle}><ShieldCheck size={16} color="#EAA812"/> Catering & Bulk Event Bookings</h4>
                  <ul style={{ ...ulStyle, margin: 0, paddingLeft: '16px' }}>
                    <li style={{ fontSize: '13px', color: '#CBBFB4' }}>Cancelled 48+ hours prior: 90% refund of advance paid.</li>
                    <li style={{ fontSize: '13px', color: '#CBBFB4' }}>Cancelled 24-48 hours prior: 50% refund.</li>
                    <li style={{ fontSize: '13px', color: '#CBBFB4' }}>Cancelled within 24 hours: Non-refundable due to raw ingredient preparation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Refund & Return Policy */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>4</span>
                Refund & Return Policy
              </h2>
              <p style={paragraphStyle}>
                Due to the perishable nature of freshly prepared food, returns are generally not accepted. However, refunds or replacements will be issued under the following conditions:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>Incorrect or Damaged Items:</strong> If you receive an incorrect item, missing item, or food affected by transit damage, notify our helpline immediately (+91 9947366906) along with photos/proof within 1 hour of delivery.
                </li>
                <li style={liStyle}>
                  <strong>Failed Payment / Order Unconfirmed:</strong> If your bank account or payment card is debited but the order fails to generate confirmation, the payment gateway will automatically initiate a reversal within 3 to 5 business days.
                </li>
                <li style={liStyle}>
                  <strong>Refund Processing Timeline:</strong> Approved refunds will be credited back to the original source account (UPI / Card / NetBanking) within <strong>5 to 7 working days</strong> according to standard banking processing cycles.
                </li>
              </ul>
            </div>

            {/* 5. Shipping & Delivery Policy */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>5</span>
                Shipping & Delivery Policy
              </h2>
              <p style={paragraphStyle}>
                Zaaha Kitchen provides food delivery services across designated operational zones in Ernakulam (Kalamassery, Kakkanad Infopark, Edapally, and neighboring regions).
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>Estimated Delivery Time:</strong> Standard food delivery timelines range between 30 to 45 minutes depending on traffic and weather conditions.
                </li>
                <li style={liStyle}>
                  <strong>Customer Availability:</strong> Customers must ensure an accurate contact number and delivery address. If delivery fails due to an incorrect address or unreachability after arrival, the order will be marked fulfilled without refund eligibility.
                </li>
              </ul>
            </div>

            {/* 6. Code of Conduct & Intellectual Property */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>6</span>
                Intellectual Property & Website Conduct
              </h2>
              <p style={paragraphStyle}>
                All contents, brand logos ("Zaaha Kitchen", "Tastebox"), graphics, imagery, menu descriptions, and site design are the exclusive intellectual property of Zaaha Kitchen. Unauthorized copying, modification, or commercial exploitation is strictly prohibited under Indian copyright and trademark law.
              </p>
            </div>

            {/* 7. Limitation of Liability & Governing Law */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>7</span>
                Limitation of Liability & Jurisdiction
              </h2>
              <p style={paragraphStyle}>
                Zaaha Kitchen shall not be liable for indirect, incidental, or consequential damages resulting from website downtime, payment gateway latency, or third-party delivery delays.
              </p>
              <p style={paragraphStyle}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the Courts in <strong>Ernakulam / Kochi, Kerala, India</strong>.
              </p>
            </div>

            {/* 8. Contact Information */}
            <div className="policy-block" style={{ ...blockStyle, borderColor: 'rgba(234, 168, 18, 0.4)' }}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>8</span>
                Questions & Merchant Contact Information
              </h2>
              <p style={paragraphStyle}>
                For any inquiries regarding our Terms & Conditions, payment gateway queries, or corporate catering bookings, please contact us:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '20px' }}>
                <div style={contactBoxStyle}>
                  <Mail color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Official Email</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>tasteboxinfo2023@gmail.com</div>
                  </div>
                </div>

                <div style={contactBoxStyle}>
                  <Phone color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Customer Helpline / WhatsApp</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>+91 9947366906</div>
                  </div>
                </div>

                <div style={contactBoxStyle}>
                  <MapPin color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Registered Address</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#FAF6F0' }}>Kalamassery Flagship Outlet, Ernakulam, Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Shared Luxury Footer */}
      <FooterSection />
    </div>
  );
};

const highlightCardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(28, 18, 11, 0.9) 0%, rgba(18, 12, 7, 0.9) 100%)',
  border: '1px solid rgba(234, 168, 18, 0.3)',
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
};

const highlightTitleStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 700,
  color: '#EAA812',
  margin: 0,
};

const highlightDescStyle: React.CSSProperties = {
  fontSize: '13.5px',
  color: '#CBBFB4',
  lineHeight: 1.6,
  margin: 0,
};

const blockStyle: React.CSSProperties = {
  background: 'rgba(20, 14, 10, 0.85)',
  border: '1px solid rgba(234, 168, 18, 0.25)',
  borderRadius: '20px',
  padding: '36px 32px',
  backdropFilter: 'blur(12px)',
};

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 700,
  color: '#FAF6F0',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
};

const numberBadgeStyle: React.CSSProperties = {
  background: 'rgba(234, 168, 18, 0.15)',
  border: '1px solid rgba(234, 168, 18, 0.4)',
  color: '#EAA812',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 800,
  flexShrink: 0,
};

const paragraphStyle: React.CSSProperties = {
  color: '#CBBFB4',
  fontSize: '15px',
  lineHeight: 1.7,
  marginBottom: '12px',
};

const innerBoxStyle: React.CSSProperties = {
  background: 'rgba(28, 18, 11, 0.6)',
  border: '1px solid rgba(234, 168, 18, 0.2)',
  borderRadius: '14px',
  padding: '20px',
};

const innerBoxHeadingStyle: React.CSSProperties = {
  fontSize: '15px',
  fontWeight: 700,
  color: '#FAF6F0',
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const innerBoxTextStyle: React.CSSProperties = {
  fontSize: '13.5px',
  color: '#CBBFB4',
  lineHeight: 1.6,
  margin: 0,
};

const ulStyle: React.CSSProperties = {
  paddingLeft: '20px',
  margin: '12px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const liStyle: React.CSSProperties = {
  color: '#CBBFB4',
  fontSize: '14.5px',
  lineHeight: 1.6,
};

const contactBoxStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  background: 'rgba(28, 18, 11, 0.8)',
  border: '1px solid rgba(234, 168, 18, 0.25)',
  padding: '16px 20px',
  borderRadius: '14px',
};

export default TermsConditionsPage;
