import React from 'react';
import { ShieldCheck, Sparkles, MapPin, CheckCircle2, Clock, MessageCircle, FileDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function HeroSection({ onOpenCatalogModal }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hi Nakul, I want to inquire about bulk/retail cleaning products from KCN Udyog.'
  )}`;

  return (
    <section
      style={{
        paddingTop: 'clamp(32px, 6vw, 64px)',
        paddingBottom: 'clamp(32px, 6vw, 56px)',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Value Prop & Authority */}
          <div>
            {/* Location & Facility Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#EFF6FF',
                color: 'var(--brand-blue-hover)',
                border: '1px solid #BFDBFE',
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '18px',
              }}
            >
              <MapPin size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>Vasundhara, Ghaziabad • Facility Active & Supplying</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--brand-navy)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '18px',
              }}
            >
              Industrial-Grade Cleaning Essentials for Homes & Businesses.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '28px',
                maxWidth: '560px',
              }}
            >
              KCN Udyog manufactures next-generation <strong>Dishwash Liquids</strong>, <strong>Antibacterial Handwashes</strong>, <strong>Bathroom Descalers</strong>, and <strong>Multi-Surface Cleaners</strong>. We serve retail households and commercial establishments across Delhi NCR.
            </p>

            {/* Direct CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  padding: '14px 24px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                }}
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp (+91 9310581585)</span>
              </a>

              <button
                onClick={onOpenCatalogModal}
                className="btn btn-navy"
                style={{
                  padding: '14px 24px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(22, 25, 94, 0.2)',
                }}
              >
                <FileDown size={18} />
                <span>Request Catalog & Rates</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={20} style={{ color: 'var(--brand-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Certified Formulations
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Active Grease-Cut Enzymes
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={20} style={{ color: 'var(--brand-navy)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Direct Factory Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Launch Timeline & Live Status Card */}
          <div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(20px, 3.5vw, 32px)',
                position: 'relative',
              }}
            >
              {/* Header inside card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--brand-blue)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Portal Deployment Status
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginTop: '2px', color: 'var(--brand-navy)' }}>
                    kcnudyog.com Live Roadmap
                  </h3>
                </div>

                <div className="badge badge-blue" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                  85% Complete
                </div>
              </div>

              {/* Progress Meter Bar */}
              <div
                style={{
                  height: '10px',
                  backgroundColor: '#E2E8F0',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '85%',
                    backgroundColor: 'var(--brand-blue)',
                    borderRadius: '9999px',
                    transition: 'width 1s ease-in-out',
                  }}
                />
              </div>

              {/* Milestones List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    backgroundColor: '#F0FDF4',
                    borderRadius: '8px',
                    border: '1px solid #DCFCE7',
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-green)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#166534', display: 'block' }}>
                      R&D Chemical Formulation & Quality Audits
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#15803D' }}>
                      Lab-tested for germicidal efficiency & surface safety.
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    backgroundColor: '#F0FDF4',
                    borderRadius: '8px',
                    border: '1px solid #DCFCE7',
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-green)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#166534', display: 'block' }}>
                      Bulk Packaging & Bottling Line
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#15803D' }}>
                      Standardized 500ml, 1 Litre bottles & 5 Litre commercial cans.
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    backgroundColor: '#EFF6FF',
                    borderRadius: '8px',
                    border: '1px solid #DBEAFE',
                  }}
                >
                  <div className="pulse-dot" style={{ marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#1E40AF', display: 'block' }}>
                      Distributor & Wholesale Onboarding
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#2563EB' }}>
                      Supplying direct to Ghaziabad, Noida & Delhi NCR facilities.
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '10px 12px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    opacity: 0.85,
                  }}
                >
                  <Clock size={18} style={{ color: 'var(--text-muted)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>
                      Official Full E-Commerce Portal
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Direct checkout and tracking rolling out shortly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Notice Footer inside card */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px dashed var(--border-subtle)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span>Orders are currently dispatched offline</span>
                <span style={{ fontWeight: 700, color: 'var(--brand-navy)' }}>
                  Call +91 9310581585
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
