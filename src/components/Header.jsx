import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function Header({
  currentPage,
  onNavigate,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (linkId) => {
    setMobileMenuOpen(false);
    onNavigate(linkId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px 0 rgba(15, 23, 42, 0.04)',
      }}
    >
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
            gap: '6px',
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
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#168DC0' : '#334155',
                  backgroundColor: isActive ? '#F0F9FF' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#168DC0';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
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

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            color: '#2B176F',
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
