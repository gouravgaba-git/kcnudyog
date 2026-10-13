import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Truck } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function Footer({ onNavigate }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am contacting you from the website.'
  )}`;

  return (
    <footer
      style={{
        backgroundColor: '#16195E',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '32px',
        paddingBottom: '24px',
      }}
    >
      <div className="container">
        {/* Main Content: Slim, non-chunky layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Brand & Dispatch Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '8px',
                width: 'fit-content',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (onNavigate) onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              title="KCN Udyog Home"
            >
              <Logo size="small" showTagline={false} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '0.84rem', fontWeight: 600 }}>
              <Truck size={16} />
              <span>Direct Delhi NCR Dispatch • Vasundhara, Ghaziabad</span>
            </div>
          </div>

          {/* Contact & Facility Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(14px, 2.5vw, 24px)',
              fontSize: '0.86rem',
              color: '#CBD5E1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}>
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#94A3B8',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>KCN UDYOG</strong>. All Rights Reserved. Clean Go™ is a brand line of KCN Udyog.
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25D366',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
            }}
          >
            <MessageCircle size={15} />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
