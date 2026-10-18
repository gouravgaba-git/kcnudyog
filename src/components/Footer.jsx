import React from 'react';
import { COMPANY_INFO } from '../data/productsData';

export default function Footer({ onNavigate }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am reaching out from your website kcnudyog.com.'
  )}`;

  return (
    <div style={{ backgroundColor: 'transparent', marginTop: 'auto' }}>
      {/* Top Organic Wave Transition */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          backgroundColor: 'transparent',
        }}
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: 'clamp(36px, 5vw, 64px)',
          }}
        >
          <path
            fill="#00B189"
            d="M0,55 C240,15 480,5 720,25 C960,45 1200,85 1440,40 L1440,90 L0,90 Z"
          />
        </svg>
      </div>

      {/* Main Clean Green Footer Body */}
      <footer
        style={{
          backgroundColor: '#00B189',
          color: '#FFFFFF',
          paddingTop: '20px',
          paddingBottom: '32px',
        }}
      >
        <div className="container">
          <div className="borngood-footer-grid" style={{ paddingBottom: '36px' }}>
            {/* Left Column: Direct Facility Contact */}
            <div className="borngood-footer-left">
              <div
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  color: '#FFFFFF',
                }}
              >
                Direct Manufacturer Desk
              </div>

              {/* Direct Facility Contact Info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.92rem',
                  color: '#FFFFFF',
                  opacity: 0.95,
                }}
              >
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {COMPANY_INFO.phone} (Nakul Sakhuja)
                </a>
                <span style={{ fontSize: '0.84rem', opacity: 0.88, lineHeight: 1.45 }}>
                  {COMPANY_INFO.address}, {COMPANY_INFO.state}
                </span>
              </div>

              <div style={{ marginTop: '14px' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    padding: '7px 14px',
                    borderRadius: '6px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.73 7.33C8.55 7.33 8.26 7.4 8.01 7.67C7.76 7.94 7.07 8.59 7.07 9.91C7.07 11.23 8.03 12.51 8.16 12.69C8.3 12.87 10.05 15.58 12.74 16.74C13.38 17.02 13.88 17.18 14.27 17.31C14.91 17.51 15.49 17.48 15.95 17.41C16.46 17.34 17.52 16.77 17.74 16.14C17.97 15.52 17.97 14.98 17.9 14.87C17.83 14.76 17.65 14.7 17.37 14.56C17.09 14.42 15.74 13.75 15.49 13.66C15.24 13.57 15.06 13.52 14.87 13.8C14.69 14.07 14.16 14.7 14 14.88C13.84 15.07 13.68 15.09 13.4 14.95C13.12 14.81 12.22 14.52 11.16 13.57C10.33 12.83 9.77 11.92 9.61 11.64C9.45 11.37 9.59 11.22 9.73 11.08C9.86 10.96 10.02 10.75 10.16 10.59C10.3 10.43 10.35 10.31 10.44 10.13C10.53 9.95 10.49 9.79 10.42 9.65C10.35 9.51 9.8 8.15 9.57 7.6C9.35 7.07 9.12 7.14 8.95 7.13L8.73 7.33Z" />
                  </svg>
                  <span>WhatsApp Quick Connect</span>
                </a>
              </div>
            </div>

            {/* Center Column: Big Bold Typography & Tagline */}
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.025em',
                  lineHeight: 0.95,
                  color: '#FFFFFF',
                  margin: '0 0 10px',
                  textTransform: 'uppercase',
                }}
              >
                KCN<br />UDYOG
              </h2>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  opacity: 0.95,
                }}
              >
                HAVE A CLEAN DAY!
              </span>
            </div>

            {/* Right Column: Clean Navigation Links */}
            <div
              className="borngood-footer-right"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'flex-end',
              }}
            >
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Our Products', page: 'products' },
                { label: 'Why Us', page: 'why-us' },
                { label: 'Contact Us', page: 'contact' },
                { label: 'Commercial & 5L Bulk Supply', page: 'products' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate(item.page);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: '2px 0',
                    textAlign: 'right',
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.22)',
              paddingTop: '20px',
              textAlign: 'center',
              fontSize: '0.82rem',
              color: '#FFFFFF',
              opacity: 0.92,
              lineHeight: 1.6,
            }}
          >
            <div>
              Copyright © KCN Udyog 2026 | All Rights Reserved
            </div>
            <div style={{ fontSize: '0.76rem', opacity: 0.85, marginTop: '2px' }}>
              Clean Go™ Formulations • Sector-3, Vasundhara, Ghaziabad (Delhi NCR)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
