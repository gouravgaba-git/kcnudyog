import React from 'react';
import { PackageCheck, ShieldCheck, Truck, Sparkles, Building2, MapPin, CheckCircle2, MessageCircle, FileText, Phone } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/productsData';

export default function WhyUsPage({ onOpenCatalogModal, onNavigateToContact }) {
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

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul Sakhuja, I would like to discuss wholesale supply and distribution terms for Clean Go products.'
  )}`;

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          paddingTop: 'clamp(36px, 6vw, 64px)',
          paddingBottom: 'clamp(36px, 6vw, 64px)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3rem)',
              fontWeight: 800,
              color: '#2B176F',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '14px',
            }}
          >
            Why Choose KCN UDYOG?
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto 24px',
            }}
          >
            We focus on genuine manufacturing values: dependable formulations, dual pack sizes for
            households and institutions, and fast local regional supply across Delhi NCR.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-navy"
              style={{
                padding: '12px 22px',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '10px',
              }}
            >
              <FileText size={16} />
              <span>Get Wholesale Price List</span>
            </button>

            <button
              onClick={onNavigateToContact}
              className="btn btn-outline"
              style={{
                padding: '12px 22px',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '10px',
                borderColor: '#CBD5E1',
                color: '#2B176F',
              }}
            >
              <span>Contact Facility Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Strength Cards Grid */}
      <div className="container" style={{ paddingTop: '40px' }}>
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
              <h2
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  lineHeight: 1.3,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h2>

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

        {/* Operational Facility Credentials */}
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
            marginBottom: '40px',
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
                <span>Manufacturing Facility</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0 6px', color: '#FFFFFF' }}>
                Vasundhara, Ghaziabad • Direct Delhi NCR Logistics
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                Local factory turnaround enables competitive wholesale rates without intermediate broker markup.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-primary"
              style={{
                padding: '12px 20px',
                fontSize: '0.92rem',
                backgroundColor: '#168DC0',
                borderRadius: '10px',
              }}
            >
              Request Price List
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '12px 20px',
                fontSize: '0.92rem',
                borderRadius: '10px',
              }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Distributor Advantages Table/Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(24px, 4vw, 36px)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#168DC0', textTransform: 'uppercase' }}>
              B2B PARTNERSHIP ADVANTAGES
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#2B176F', margin: '4px 0 0' }}>
              Why Retailers & Wholesalers Partner With Us
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} color="#159C79" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: '#1E293B', display: 'block' }}>
                  Direct Manufacturer Rates
                </strong>
                <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                  Maximize retail margin by purchasing directly from the manufacturing unit.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} color="#159C79" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: '#1E293B', display: 'block' }}>
                  Reliable Batch Consistency
                </strong>
                <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                  Strict chemical standards prevent thin water-diluted batches common in unbranded chemicals.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} color="#159C79" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: '#1E293B', display: 'block' }}>
                  Prompt NCR Dispatch
                </strong>
                <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                  Avoid stockouts with prompt delivery across Ghaziabad, Noida, Greater Noida, and Delhi.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <CheckCircle2 size={20} color="#159C79" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.92rem', color: '#1E293B', display: 'block' }}>
                  Direct Access to Management
                </strong>
                <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                  Speak directly with {COMPANY_INFO.person} for custom orders, flexible payment, and MOQ.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
