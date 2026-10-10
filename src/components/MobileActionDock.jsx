import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function MobileActionDock({ onOpenCatalogModal }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul, I am reaching out from your website kcnudyog.com for product supply inquiry.'
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
        borderTop: '1px solid var(--border-subtle)',
        padding: '10px 16px',
        display: 'none', // Shown via CSS media query on mobile
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        zIndex: 40,
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.08)',
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
        style={{
          flex: 1,
          padding: '10px 8px',
          fontSize: '0.85rem',
          borderRadius: '8px',
        }}
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="btn btn-outline"
        style={{
          flex: 1,
          padding: '10px 8px',
          fontSize: '0.85rem',
          borderRadius: '8px',
          borderColor: 'var(--brand-blue)',
          color: 'var(--brand-blue)',
        }}
      >
        <Phone size={16} />
        <span>Call</span>
      </a>

      <button
        onClick={onOpenCatalogModal}
        className="btn btn-navy"
        style={{
          flex: 1,
          padding: '10px 8px',
          fontSize: '0.85rem',
          borderRadius: '8px',
        }}
      >
        <FileText size={16} />
        <span>Price List</span>
      </button>
    </div>
  );
}
