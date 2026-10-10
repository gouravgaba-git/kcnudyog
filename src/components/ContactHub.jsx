import React from 'react';
import { MessageCircle, Mail, MapPin, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function ContactHub() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul, I am reaching out from your website kcnudyog.com to place an order / inquire about cleaning products.'
  )}`;

  return (
    <section
      id="contact"
      style={{
        paddingTop: 'clamp(48px, 8vw, 84px)',
        paddingBottom: 'clamp(48px, 8vw, 84px)',
        backgroundColor: '#F8FAFC',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* Under Progress Notice Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.85rem)',
              color: 'var(--brand-navy)',
              marginBottom: '14px',
              fontWeight: 800,
              letterSpacing: '-0.025em',
            }}
          >
            Website is Under Progress
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Our official website is currently in the building phase. You can contact us directly for orders and inquiries:
          </p>
        </div>

        {/* 4 Cards Grid (From Client Reference) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {/* Card 1: WhatsApp Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              border: '1px solid #DCFCE7',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--color-whatsapp)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#DCFCE7';
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <MessageCircle size={24} style={{ color: 'var(--color-whatsapp)' }} />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-green)', textTransform: 'uppercase' }}>
              Instant WhatsApp
            </span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--brand-navy)', margin: '4px 0 8px' }}>
              {COMPANY_INFO.phone}
            </strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'auto' }}>
              Tap to chat directly with Nakul Sakhuja to place orders and inquire about products.
            </p>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=KCN%20Udyog%20Order%20Inquiry`}
            style={{
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--brand-navy)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Mail size={24} style={{ color: 'var(--brand-navy)' }} />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy)', textTransform: 'uppercase' }}>
              Official Email
            </span>
            <strong style={{ fontSize: '1rem', color: 'var(--brand-navy)', margin: '4px 0 8px', wordBreak: 'break-all' }}>
              {COMPANY_INFO.email}
            </strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'auto' }}>
              Send inquiries and order requirements directly to our team.
            </p>
          </a>

          {/* Card 4: Location */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <MapPin size={24} style={{ color: 'var(--brand-navy)' }} />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Facility Address
            </span>
            <strong style={{ fontSize: '1rem', color: 'var(--brand-navy)', margin: '4px 0 8px', lineHeight: 1.4 }}>
              {COMPANY_INFO.address}
            </strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'auto' }}>
              Vasundhara, Ghaziabad (Uttar Pradesh / Delhi NCR)
            </p>
          </div>
        </div>

        {/* Dispatch Commitment Banner */}
        <div
          style={{
            backgroundColor: '#16195E',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 3vw, 28px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Truck size={24} style={{ color: '#38BDF8' }} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '2px' }}>
                Prompt Delivery Across Delhi NCR
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0 }}>
                Same-day / next-day delivery available for orders across Ghaziabad, Noida, Greater Noida & Delhi.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '12px 20px', fontSize: '0.9rem' }}
          >
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
