import React from 'react';
import { COMPANY_INFO } from '../data/productsData';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0F172A',
        color: '#94A3B8',
        paddingTop: '20px',
        paddingBottom: '20px',
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
            gap: '12px',
            fontSize: '0.85rem',
          }}
        >
          <div>
            <strong style={{ color: '#FFFFFF' }}>KCN UDYOG</strong>
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
