import React from 'react';
import { Sparkles, Building2, ShieldCheck, HeartHandshake, Truck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function AboutPage({ onExploreProducts, onOpenCatalogModal, onNavigateToContact }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul Sakhuja, I am reaching out through kcnudyog.com to learn more about KCN Udyog and Clean Go products.'
  )}`;

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section
        style={{
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
          borderBottom: '1px solid #E2E8F0',
          paddingTop: 'clamp(40px, 6vw, 72px)',
          paddingBottom: 'clamp(40px, 6vw, 72px)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: '#EEF2FF',
              color: '#2B176F',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={13} color="#2B176F" />
            <span>Manufacturing Heritage</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              fontWeight: 800,
              color: '#2B176F',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
            }}
          >
            About KCN UDYOG
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto',
            }}
          >
            Engineering dependable, high-efficacy cleaning essentials that bring peace of mind to
            households and professional facility managers across Delhi NCR.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <div className="container" style={{ paddingTop: '48px' }}>
        {/* Story Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '64px',
          }}
        >
          {/* Left Text */}
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#168DC0',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              OUR MISSION & PURPOSE
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                fontWeight: 800,
                color: '#2B176F',
                lineHeight: 1.25,
                margin: '8px 0 16px',
              }}
            >
              Formulated Locally. Engineered for Real Hygiene.
            </h2>

            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
              Founded with the vision to make professional-grade cleaning formulations accessible and
              honest, <strong>KCN UDYOG</strong> manufactures specialized hygiene essentials under our
              flagship brand line, <strong>Clean Go</strong>.
            </p>

            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
              Unlike generic suppliers, our production facility in <strong>Sector-3, Vasundhara, Ghaziabad</strong>{' '}
              maintains strict batch oversight. From active degreasing agents in our dishwash liquid to
              thick descaling acids in our toilet cleaner, each product is balanced to clean thoroughly
              without damaging surfaces or leaving harsh toxic fumes.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreProducts}
                className="btn btn-primary"
                style={{
                  padding: '12px 20px',
                  fontSize: '0.92rem',
                  backgroundColor: '#168DC0',
                  borderRadius: '10px',
                }}
              >
                Explore Product Range
              </button>

              <button
                onClick={onOpenCatalogModal}
                className="btn btn-outline"
                style={{
                  padding: '12px 20px',
                  fontSize: '0.92rem',
                  borderColor: '#CBD5E1',
                  color: '#2B176F',
                  borderRadius: '10px',
                }}
              >
                Request Product Specs
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: '0 12px 30px -10px rgba(43, 23, 111, 0.08)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#EEF2FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={24} color="#2B176F" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2B176F', margin: 0 }}>
                  Operational Profile
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  KCN UDYOG Manufacturing Facility
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#168DC0" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#1E293B', display: 'block' }}>
                    Facility Address:
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                    {COMPANY_INFO.address}, {COMPANY_INFO.state}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <ShieldCheck size={18} color="#159C79" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#1E293B', display: 'block' }}>
                    Direct Batch Formulations:
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                    High active matter formulations batch-tested for consistent cleaning viscosity.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <HeartHandshake size={18} color="#2B176F" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#1E293B', display: 'block' }}>
                    Key Point of Contact:
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                    {COMPANY_INFO.person} (Founder & Operations)
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Truck size={18} color="#168DC0" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#1E293B', display: 'block' }}>
                    Regional Logistics:
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                    Ghaziabad, Noida, Greater Noida, and all Delhi NCR sectors.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginTop: '20px',
                justifyContent: 'center',
                borderRadius: '10px',
              }}
            >
              <MessageCircle size={17} />
              <span>Connect with Nakul Sakhuja</span>
            </a>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#168DC0',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              HOW WE OPERATE
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#2B176F',
                marginTop: '6px',
                marginBottom: 0,
              }}
            >
              Our Manufacturing Principles
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '20px',
            }}
          >
            <div
              style={{
                padding: '24px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🧪</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2B176F', marginBottom: '8px' }}>
                Surface Safety First
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Every formulation is engineered with pH precision to clean aggressively without etching
                vitrified tiles, marble, or chrome fittings.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📦</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2B176F', marginBottom: '8px' }}>
                Dual Pack Flexibility
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                We bridge the gap between large 5L / 50L institutional bulk containers and ergonomic
                everyday domestic retail packaging.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>⚡</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2B176F', marginBottom: '8px' }}>
                Direct Manufacturer Pricing
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Eliminating layers of distributors means retailers, facility managers, and families
                receive premium cleaning efficacy at honest rates.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🌿</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2B176F', marginBottom: '8px' }}>
                Pleasant Everyday Aromas
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Infused with natural scents like fresh rose, lemon, pine jasmine, and green apple so
                clean spaces feel refreshing rather than chemical-heavy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
