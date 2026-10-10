import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function Header({ onOpenCatalogModal }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I would like to inquire about your cleaning products.'
  )}`;

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)',
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
          paddingTop: '12px',
          paddingBottom: '12px',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        {/* Brand Identity */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo size="small" showTagline={true} />
        </a>

        {/* Desktop Fast-Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="header-actions">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="btn btn-outline"
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
              border: '1px solid var(--border-medium)',
            }}
            title="Call Nakul Sakhuja directly"
          >
            <Phone size={14} style={{ color: 'var(--brand-blue)' }} />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
            }}
            title="Chat with KCN Udyog on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenCatalogModal}
            className="btn btn-navy"
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
            }}
          >
            <FileText size={14} />
            <span>Get Price List</span>
          </button>
        </div>
      </div>
    </header>
  );
}
