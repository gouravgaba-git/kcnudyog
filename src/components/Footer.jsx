import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, PRODUCTS } from '../data/productsData';

export default function Footer({ onNavigate, onSelectProduct, onOpenCatalogModal }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am contacting you from the website.'
  )}`;

  return (
    <footer
      style={{
        backgroundColor: '#16195E',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: 'clamp(48px, 6vw, 64px)',
        paddingBottom: 'clamp(32px, 4vw, 48px)',
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(28px, 4vw, 40px)',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* White pill container for official logo */}
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '8px',
                width: 'fit-content',
              }}
            >
              <Logo size="small" showTagline={false} />
            </div>

            <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
              KCN UDYOG manufactures high-performance cleaning solutions under the <strong>Clean Go</strong>{' '}
              brand for households, commercial spaces, and industrial facilities.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '0.82rem', fontWeight: 600 }}>
              <Truck size={16} />
              <span>Direct Delhi NCR Dispatch</span>
            </div>
          </div>

          {/* Column 2: Product Catalogue */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Product Range
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => {
                      if (onSelectProduct) onSelectProduct(prod);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#94A3B8',
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Partnership */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Company & Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#94A3B8',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#94A3B8',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  Our Products Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#94A3B8',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  About KCN Udyog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#94A3B8',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  Contact & Dealership
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#38BDF8',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Request Wholesale Price List →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Facility & Dispatch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                <MapPin size={17} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.state}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                <Phone size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                <Mail size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#94A3B8' }}>
                <Clock size={16} color="#94A3B8" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
