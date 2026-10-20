import React from 'react';
import { PackageCheck, ShieldCheck, Truck, Sparkles, Building2, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/productsData';

export default function WhyUsSection({ onOpenCatalogModal, onNavigateToContact }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck size={28} color="#168DC0" />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} color="#159C79" />;
      case 'Truck':
        return <Truck size={28} color="#2B176F" />;
      case 'Sparkles':
        return <Sparkles size={28} color="#28B9C9" />;
      default:
        return <ShieldCheck size={28} color="#168DC0" />;
    }
  };

  return (
    <section
      id="why-us"
      style={{
        paddingTop: 'clamp(48px, 7vw, 84px)',
        paddingBottom: 'clamp(48px, 7vw, 84px)',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              color: '#2B176F',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '14px',
            }}
          >
            Why Choose KCN UDYOG?
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.12rem)',
              color: '#64748B',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We focus on genuine manufacturing values: dependable formulations, dual pack sizes for
            households and institutions, and fast local regional supply.
          </p>
        </div>

        {/* 4 Strength Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '28px 24px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 10px rgba(15, 23, 42, 0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#168DC0';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(22, 141, 192, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(15, 23, 42, 0.03)';
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                {getIcon(item.icon)}
              </div>

              {/* Badge */}
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#168DC0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '8px',
                }}
              >
                {item.badge}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  lineHeight: 1.3,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#475569',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Facility Credentials Banner */}
        <div
          style={{
            backgroundColor: '#2B176F',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 36px)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            boxShadow: '0 20px 40px -10px rgba(43, 23, 111, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', maxWidth: '640px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Building2 size={26} color="#38BDF8" />
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: '#38BDF8',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                <MapPin size={14} />
                <span>Manufacturing Hub</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0 6px', color: '#FFFFFF' }}>
                Vasundhara, Ghaziabad • Direct Delhi NCR Logistics
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                Local factory turnaround enables competitive wholesale rates without intermediate markup.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onNavigateToContact}
              className="btn btn-outline"
              style={{
                padding: '12px 20px',
                fontSize: '0.92rem',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                borderRadius: '10px',
              }}
            >
              Contact Facility
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
