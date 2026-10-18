import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function Header({
  currentPage,
  onNavigate,
  onOpenCatalogModal,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (linkId) => {
    setMobileMenuOpen(false);
    onNavigate(linkId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am inquiring about Clean Go products from kcnudyog.com.'
  )}`;

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E8EEF5',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 8px 0 rgba(15, 23, 42, 0.04)',
      }}
    >
      {/* Top Brand Value Announcement Bar */}
      <div
        style={{
          backgroundColor: '#0F2444',
          color: '#FFFFFF',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          padding: '7px 12px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
        }}
      >
        <span>⚡ High-Active Formulations</span>
        <span style={{ color: '#F59E0B' }}>•</span>
        <span>Removes Tough Grease & Stains</span>
        <span style={{ color: '#F59E0B' }}>•</span>
        <span>Kills 99.9% Germs</span>
        <span style={{ color: '#F59E0B' }}>•</span>
        <span>Available in 5L Commercial Cans</span>
        <span style={{ color: '#F59E0B' }}>•</span>
        <span style={{ color: '#FCD34D', fontWeight: 700 }}>Direct Manufacturer Supply</span>
      </div>

      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '10px',
          paddingBottom: '10px',
          gap: '16px',
        }}
      >
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          title="KCN Udyog Home"
        >
          <Logo size="small" showTagline={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.id ||
              (link.id === 'products' && currentPage === 'product-detail');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#00B189' : '#334155',
                  backgroundColor: isActive ? '#E6F8F3' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#00B189';
                    e.currentTarget.style.backgroundColor = '#FAF9F6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#334155';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div
          className="header-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {onOpenCatalogModal && (
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-outline"
              style={{
                padding: '7px 14px',
                fontSize: '0.82rem',
                fontWeight: 700,
                borderRadius: '9999px',
                borderColor: '#CBD5E1',
                color: '#16195E',
              }}
            >
              Get Price List
            </button>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sage"
            style={{
              padding: '7px 15px',
              fontSize: '0.82rem',
              fontWeight: 700,
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            color: '#16195E',
            cursor: 'pointer',
            display: 'none', // Controlled by CSS media queries
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="animate-slide-up"
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => {
              const isActive =
                currentPage === link.id ||
                (link.id === 'products' && currentPage === 'product-detail');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#168DC0' : '#1E293B',
                    backgroundColor: isActive ? '#F0F9FF' : '#F8FAFC',
                    border: '1px solid',
                    borderColor: isActive ? '#BAE6FD' : '#E2E8F0',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} color={isActive ? '#168DC0' : '#94A3B8'} />
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: '8px' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn btn-outline"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '0.88rem',
                justifyContent: 'center',
                borderColor: '#CBD5E1',
                color: '#334155',
                borderRadius: '10px',
              }}
            >
              <Phone size={15} color="#168DC0" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
