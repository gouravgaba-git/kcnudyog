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
          paddingTop: '16px',
          paddingBottom: '36px',
        }}
      >
        <div className="container" style={{ maxWidth: '640px' }}>
          {/* Centered Brand Title & Tagline */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 8.5vw, 3.4rem)',
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
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                opacity: 0.95,
              }}
            >
              HAVE A CLEAN DAY!
            </div>

            {/* Social Media Header */}
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginTop: '22px',
                marginBottom: '14px',
              }}
            >
              SHOW US SOME ❤ ON SOCIAL MEDIA
            </div>

            {/* Social Icons Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: '#FFFFFF', opacity: 0.95, display: 'inline-flex' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#FFFFFF', opacity: 0.95, display: 'inline-flex' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: '#FFFFFF', opacity: 0.95, display: 'inline-flex' }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{ color: '#FFFFFF', opacity: 0.95, display: 'inline-flex' }}
              >
                <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.73 7.33C8.55 7.33 8.26 7.4 8.01 7.67C7.76 7.94 7.07 8.59 7.07 9.91C7.07 11.23 8.03 12.51 8.16 12.69C8.3 12.87 10.05 15.58 12.74 16.74C13.38 17.02 13.88 17.18 14.27 17.31C14.91 17.51 15.49 17.48 15.95 17.41C16.46 17.34 17.52 16.77 17.74 16.14C17.97 15.52 17.97 14.98 17.9 14.87C17.83 14.76 17.65 14.7 17.37 14.56C17.09 14.42 15.74 13.75 15.49 13.66C15.24 13.57 15.06 13.52 14.87 13.8C14.69 14.07 14.16 14.7 14 14.88C13.84 15.07 13.68 15.09 13.4 14.95C13.12 14.81 12.22 14.52 11.16 13.57C10.33 12.83 9.77 11.92 9.61 11.64C9.45 11.37 9.59 11.22 9.73 11.08C9.86 10.96 10.02 10.75 10.16 10.59C10.3 10.43 10.35 10.31 10.44 10.13C10.53 9.95 10.49 9.79 10.42 9.65C10.35 9.51 9.8 8.15 9.57 7.6C9.35 7.07 9.12 7.14 8.95 7.13L8.73 7.33Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2-Column Links Layout (Matching Born Good Mobile Reference) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              maxWidth: '360px',
              margin: '0 auto 36px',
              gap: '16px 20px',
              textAlign: 'left',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('why-us');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                We Are Eco-friendly
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('why-us');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                We Care
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('products');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                Commercial Lineup
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                FAQs
              </button>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('why-us');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                Shipping Policy
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('why-us');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="footer-link-btn"
              >
                Refund Policy
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="footer-link-btn"
                style={{ textDecoration: 'none' }}
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="footer-link-btn"
                style={{ textDecoration: 'none' }}
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.22)',
              paddingTop: '20px',
              textAlign: 'center',
              fontSize: '0.78rem',
              color: '#FFFFFF',
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            <div>
              Copyright © KCN Udyog 2026 | All Rights Reserved
            </div>
            <div style={{ fontSize: '0.72rem', opacity: 0.88, marginTop: '2px' }}>
              Terms of Service | Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
