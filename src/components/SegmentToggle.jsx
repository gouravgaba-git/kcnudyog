import React from 'react';
import { Home, Building2 } from 'lucide-react';

export default function SegmentToggle({ isCommercial, setIsCommercial }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '36px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          backgroundColor: '#E2E8F0',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)',
          maxWidth: '100%',
        }}
      >
        <button
          onClick={() => setIsCommercial(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            backgroundColor: !isCommercial ? '#FFFFFF' : 'transparent',
            color: !isCommercial ? 'var(--brand-navy)' : 'var(--text-secondary)',
            fontWeight: !isCommercial ? 700 : 500,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: !isCommercial ? '0 2px 6px rgba(15, 23, 42, 0.1)' : 'none',
            transition: 'all 200ms ease',
          }}
        >
          <Home size={16} style={{ color: !isCommercial ? 'var(--brand-blue)' : 'inherit' }} />
          <span>For Homes & Retail (500ml / 1L)</span>
        </button>

        <button
          onClick={() => setIsCommercial(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            backgroundColor: isCommercial ? 'var(--brand-navy)' : 'transparent',
            color: isCommercial ? '#FFFFFF' : 'var(--text-secondary)',
            fontWeight: isCommercial ? 700 : 500,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: isCommercial ? '0 2px 6px rgba(22, 25, 94, 0.25)' : 'none',
            transition: 'all 200ms ease',
          }}
        >
          <Building2 size={16} style={{ color: isCommercial ? '#38BDF8' : 'inherit' }} />
          <span>Commercial & Bulk (5L / 50L)</span>
        </button>
      </div>

      <p
        style={{
          marginTop: '10px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}
      >
        {isCommercial ? (
          <>
            Displaying <strong>Industrial & Institutional packs</strong> for hotels, hospitals, facility contractors & distributors.
          </>
        ) : (
          <>
            Displaying <strong>Domestic retail packaging</strong> designed for household hygiene and daily protection.
          </>
        )}
      </p>
    </div>
  );
}
