import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Database, UserCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { FooterSection } from './FooterSection';
import privacyBanner from '../assets/privacy_policy_banner.png';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome }) => {
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
            Legal / <span style={{ color: '#EAA812' }}>Privacy Policy</span>
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
            src={privacyBanner} 
            alt="Privacy Policy Banner" 
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
              <ShieldCheck size={16} />
              <span>PAYMENT GATEWAY COMPLIANCE & PRIVACY TRUST</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#FAF6F0',
              lineHeight: 1.2,
              marginBottom: '14px',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}>
              Privacy <span style={{ color: '#EAA812' }}>Policy</span>
            </h1>

            <p style={{
              fontSize: '15.5px',
              color: '#E0D4C8',
              lineHeight: 1.7,
              margin: 0,
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}>
              At Zaaha Kitchen (Tastebox Foods), we prioritize your personal data privacy and financial transaction security. Learn how we collect, safeguard, and process your information for dining, online orders, and payment gateway processing.
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
          
          {/* Quick Notice Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(28, 18, 11, 0.9) 0%, rgba(18, 12, 7, 0.9) 100%)',
            border: '1px solid rgba(234, 168, 18, 0.35)',
            borderRadius: '20px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}>
            <div style={{
              background: 'rgba(234, 168, 18, 0.2)',
              padding: '14px',
              borderRadius: '14px',
              color: '#EAA812',
              flexShrink: 0,
            }}>
              <Lock size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#EAA812', marginBottom: '8px' }}>
                Secure Payment Guarantee & Card Data Safety
              </h3>
              <p style={{ color: '#CBBFB4', fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                Zaaha Kitchen does <strong>NOT</strong> store your credit card numbers, CVVs, or online banking passwords on our servers. All financial transactions are securely processed through RBI-authorized, PCI-DSS Level 1 compliant Payment Gateways (e.g. Razorpay, Stripe, PayU, PhonePe) using 256-bit SSL encryption.
              </p>
            </div>
          </div>

          {/* Section List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            {/* 1. Introduction */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>1</span>
                Introduction & Entity Information
              </h2>
              <p style={paragraphStyle}>
                This Privacy Policy describes how <strong>Zaaha Kitchen</strong> (also registered under <strong>Tastebox Foods</strong>, hereinafter referred to as "we", "us", "our", or "Zaaha Kitchen") collects, uses, stores, and protects personal information obtained from users visiting our website, mobile interface, or using our food ordering and event catering services in Ernakulam, Kerala, India.
              </p>
              <p style={paragraphStyle}>
                By accessing our website, placing an order, booking a table, or initiating a transaction, you consent to the data practices described in this Privacy Policy.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>2</span>
                Information We Collect
              </h2>
              <p style={paragraphStyle}>
                We collect personal information necessary to deliver high-quality dining experiences, process online payment orders, and manage customer communications:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
                <div style={innerBoxStyle}>
                  <h4 style={innerBoxHeadingStyle}><UserCheck size={16} color="#EAA812"/> Personal Identification Information</h4>
                  <p style={innerBoxTextStyle}>Name, contact phone number, email address, physical delivery address, and dietary preferences supplied during ordering or table reservations.</p>
                </div>

                <div style={innerBoxStyle}>
                  <h4 style={innerBoxHeadingStyle}><Lock size={16} color="#EAA812"/> Payment & Financial Data</h4>
                  <p style={innerBoxTextStyle}>Transaction tokens, payment method type (UPI, Card, NetBanking), order totals, and payment status returned by encrypted Payment Gateways.</p>
                </div>

                <div style={innerBoxStyle}>
                  <h4 style={innerBoxHeadingStyle}><Database size={16} color="#EAA812"/> Technical & Device Data</h4>
                  <p style={innerBoxTextStyle}>IP address, browser type, device identifiers, session timestamps, and page interaction metrics collected automatically to optimize website performance.</p>
                </div>
              </div>
            </div>

            {/* 3. How We Use Information */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>3</span>
                How We Use Your Information
              </h2>
              <p style={paragraphStyle}>Your information is utilized solely for legitimate operational and business purposes, including:</p>
              <ul style={ulStyle}>
                <li style={liStyle}>Processing, confirming, and delivering your food orders and catering services.</li>
                <li style={liStyle}>Processing online transactions and issuing digital tax invoices via payment gateways.</li>
                <li style={liStyle}>Sending real-time order status updates, delivery tracking alerts, and booking receipts.</li>
                <li style={liStyle}>Responding to customer support inquiries, feedback, and refund requests.</li>
                <li style={liStyle}>Ensuring website security, preventing fraudulent transactions, and complying with Indian taxation & legal regulations.</li>
              </ul>
            </div>

            {/* 4. Payment Gateway Security & Third-Party Sharing */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>4</span>
                Payment Gateways & Third-Party Data Sharing
              </h2>
              <p style={paragraphStyle}>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes. Data is shared exclusively with authorized service providers essential for service delivery:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>Payment Gateway Partners:</strong> Your payment parameters are transmitted securely via API integration to payment aggregators (e.g. Razorpay, PayU, PhonePe, Stripe) for payment verification and settlement.
                </li>
                <li style={liStyle}>
                  <strong>Delivery Partners & Outlets:</strong> Delivery personnel and Zaaha Kitchen flagship outlets (Kalamassery & Kakkanad Infopark) receive delivery address and contact details required to dispatch orders.
                </li>
                <li style={liStyle}>
                  <strong>Legal Obligations:</strong> We may disclose information if required by law enforcement or government authorities under applicable legal statutes in India.
                </li>
              </ul>
            </div>

            {/* 5. Cookies & Tracking */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>5</span>
                Cookies & Web Analytics
              </h2>
              <p style={paragraphStyle}>
                Our website uses standard session cookies and analytics tools to enhance user navigation, maintain active order carts, and monitor site usage. You can modify your browser settings to decline cookies, though certain interactive features may be limited.
              </p>
            </div>

            {/* 6. Data Security & Retention */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>6</span>
                Data Security & Retention Policy
              </h2>
              <p style={paragraphStyle}>
                We implement industry-standard physical, technical, and managerial safeguards including HTTPS encryption and restricted administrative access to shield personal data against unauthorized access, loss, or alteration. Order history and financial records are retained in compliance with statutory Indian accounting regulations.
              </p>
            </div>

            {/* 7. User Rights */}
            <div className="policy-block" style={blockStyle}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>7</span>
                Your Privacy Rights & Choices
              </h2>
              <p style={paragraphStyle}>You have the right to:</p>
              <ul style={ulStyle}>
                <li style={liStyle}>Request access to or a copy of your personal data stored with Zaaha Kitchen.</li>
                <li style={liStyle}>Request correction of inaccurate or incomplete personal records.</li>
                <li style={liStyle}>Request deletion of personal data (subject to legal retention requirements).</li>
                <li style={liStyle}>Opt-out of promotional SMS or email communications at any time.</li>
              </ul>
            </div>

            {/* 8. Contact Information */}
            <div className="policy-block" style={{ ...blockStyle, borderColor: 'rgba(234, 168, 18, 0.4)' }}>
              <h2 style={headingStyle}>
                <span style={numberBadgeStyle}>8</span>
                Privacy Inquiries & Grievance Contact
              </h2>
              <p style={paragraphStyle}>
                For any privacy questions, data requests, or payment gateway queries regarding this policy, please reach out to our team:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '20px' }}>
                <div style={contactBoxStyle}>
                  <Mail color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Email Support</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>tasteboxinfo2023@gmail.com</div>
                  </div>
                </div>

                <div style={contactBoxStyle}>
                  <Phone color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Direct Phone / WhatsApp</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FAF6F0' }}>+91 9947366906</div>
                  </div>
                </div>

                <div style={contactBoxStyle}>
                  <MapPin color="#EAA812" size={20} />
                  <div>
                    <div style={{ fontSize: '11px', color: '#9E8E81', textTransform: 'uppercase' }}>Headquarters / Flagship Outlet</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#FAF6F0' }}>Kalamassery Flagship Outlet, Ernakulam, Kerala</div>
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

export default PrivacyPolicyPage;
