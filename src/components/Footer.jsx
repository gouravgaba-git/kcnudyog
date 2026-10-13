import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0F172A',
        color: '#94A3B8',
        paddingTop: '24px',
        paddingBottom: '24px',
        borderTop: '1px solid #1E293B',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                background: '#FFFFFF',
                padding: '4px 8px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              }}
            >
              <Logo size="xs" />
            </div>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '0.95rem', display: 'block', letterSpacing: '0.02em' }}>
                KCN UDYOG
              </strong>
              <span style={{ color: '#64748B', fontSize: '0.78rem' }}>GoCare Cleaning Formulations</span>
            </div>
          </div>
          <div>
            170 Sector-3, Vasundhara, Ghaziabad, Uttar Pradesh
          </div>
          <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} KCN Udyog. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
