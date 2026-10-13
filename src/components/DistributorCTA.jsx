import React from 'react';
import { MessageCircle, FileText, CheckCircle2, TrendingUp, Handshake, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function DistributorCTA({ onOpenCatalogModal, onNavigateToContact }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am a retailer / distributor / bulk buyer interested in stocking Clean Go products. Please share your wholesale catalogue and commercial terms.'
  )}`;

  return (
    <section
      id="distributors"
      style={{
        paddingTop: 'clamp(48px, 7vw, 84px)',
        paddingBottom: 'clamp(48px, 7vw, 84px)',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
            borderRadius: '24px',
            border: '1px solid #CBD5E1',
            padding: 'clamp(32px, 5vw, 56px) clamp(20px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -15px rgba(43, 23, 111, 0.08)',
          }}
        >
          {/* Subtle Decorative Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(22, 141, 192, 0.15) 0%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#2B176F',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Looking to Stock or Distribute Clean Go Products?
              </h2>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                We supply supermarkets, grocery stores, corporate facility managers, and regional
                wholesalers with factory-direct pricing, dependable supply batches, and flexible order
                quantities.
              </p>

              {/* Partnership Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  marginBottom: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#159C79" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B' }}>
                    Direct Factory Pricing
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#159C79" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B' }}>
                    Commercial (5L) & Retail Cans
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#159C79" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B' }}>
                    Same-Day / Next-Day NCR Dispatch
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#159C79" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B' }}>
                    Low MOQ for Initial Trial
                  </span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    padding: '13px 22px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenCatalogModal}
                  className="btn btn-navy"
                  style={{
                    padding: '13px 22px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                  }}
                >
                  <FileText size={18} />
                  <span>Request Wholesale Price List</span>
                </button>
              </div>
            </div>

            {/* Right Card: Quick Commercial Specs */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '28px',
                border: '1px solid #CBD5E1',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid #F1F5F9',
                }}
              >
                <TrendingUp size={22} color="#168DC0" />
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2B176F', margin: 0 }}>
                    Commercial Supply Overview
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    High-margin fast moving inventory
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    padding: '12px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#168DC0' }}>
                    BULK INSTITUTIONAL SUPPLY
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B', marginTop: '2px' }}>
                    5 Litre Heavy-Duty Cans & 50 Litre Drums for corporate offices, hospitals, schools & malls.
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#159C79' }}>
                    RETAIL CONSUMER PACKAGING
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B', marginTop: '2px' }}>
                    Attractive shelf-ready bottles for grocery stores, supermarkets, and local trade.
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2B176F' }}>
                    DIRECT CONTACT FOR DEALERSHIP
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#2B176F', marginTop: '2px' }}>
                    {COMPANY_INFO.person} • {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
