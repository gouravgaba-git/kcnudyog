import React from 'react';
import { Home, Package, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function MobileActionDock({
  currentPage,
  onNavigate,
  onOpenCatalogModal,
}) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul Sakhuja, I am reaching out from your website kcnudyog.com for product supply inquiry.'
  )}`;

  return (
    <div
      className="mobile-action-dock"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '6px 12px 10px',
        display: 'none', // Controlled via media query in index.css
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 40,
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Home */}
      <button
        onClick={() => {
          onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: currentPage === 'home' ? '#168DC0' : '#64748B',
          fontSize: '0.68rem',
          fontWeight: 700,
          cursor: 'pointer',
          padding: '4px 6px',
        }}
      >
        <Home size={19} color={currentPage === 'home' ? '#168DC0' : '#64748B'} />
        <span>Home</span>
      </button>

      {/* Products */}
      <button
        onClick={() => {
          onNavigate('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color:
            currentPage === 'products' || currentPage === 'product-detail'
              ? '#168DC0'
              : '#64748B',
          fontSize: '0.68rem',
          fontWeight: 700,
          cursor: 'pointer',
          padding: '4px 6px',
        }}
      >
        <Package
          size={19}
          color={
            currentPage === 'products' || currentPage === 'product-detail'
              ? '#168DC0'
              : '#64748B'
          }
        />
        <span>Products</span>
      </button>

      {/* WhatsApp (Prominent Green Floating Center Action) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          borderRadius: '9999px',
          padding: '8px 14px',
          fontSize: '0.72rem',
          fontWeight: 700,
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
          transform: 'translateY(-6px)',
        }}
      >
        <MessageCircle size={18} color="#FFFFFF" />
        <span>WhatsApp</span>
      </a>


      {/* Call */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#64748B',
          fontSize: '0.68rem',
          fontWeight: 700,
          padding: '4px 6px',
        }}
      >
        <Phone size={19} color="#64748B" />
        <span>Call</span>
      </a>
    </div>
  );
}
