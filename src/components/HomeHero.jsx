import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Package, MessageCircle, FileText, Phone } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function HomeHero({ onExploreProducts, onOpenCatalogModal, onSelectProduct, onNavigate }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am interested in exploring your Clean Go cleaning products line.'
  )}`;

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(36px, 5vw, 64px)',
        paddingBottom: 'clamp(48px, 6vw, 72px)',
        overflow: 'hidden',
        flexGrow: 1,
      }}
    >
      {/* Background Soft Ambient Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(22, 141, 192, 0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(43, 23, 111, 0.05) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Hero Text */}
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5.2vw, 3.8rem)',
              fontWeight: 800,
              color: '#2B176F',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
            }}
          >
            A Cleaner Home.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #168DC0 0%, #28B9C9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              A Better Everyday.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 28px',
            }}
          >
            Everyday hygiene essentials engineered with high active ingredients. Formulated for
            uncompromising grease removal, deep descaling, and lasting freshness for households and
            commercial establishments.
          </p>

          {/* Two Primary CTAs + Fast Action Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {/* CTA 1: Explore Products */}
            <button
              onClick={onExploreProducts}
              className="btn btn-primary"
              style={{
                padding: '14px 26px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                backgroundColor: '#168DC0',
                boxShadow: '0 8px 20px rgba(22, 141, 192, 0.28)',
              }}
            >
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </button>

            {/* CTA 2: Contact Us */}
            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-outline"
              style={{
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                borderColor: '#CBD5E1',
                color: '#2B176F',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Phone size={17} color="#2B176F" />
              <span>Contact Us</span>
            </button>

            {/* CTA 3: Get Price List */}
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-navy"
              style={{
                padding: '14px 22px',
                fontSize: '0.96rem',
                fontWeight: 700,
                borderRadius: '12px',
              }}
            >
              <FileText size={17} />
              <span>Get Price List</span>
            </button>

            {/* CTA 4: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '14px 22px',
                fontSize: '0.96rem',
                fontWeight: 700,
                borderRadius: '12px',
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Value Metrics */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 3vw, 36px)',
              flexWrap: 'wrap',
              paddingTop: '12px',
              borderTop: '1px solid #F1F5F9',
              maxWidth: '720px',
              margin: '0 auto 32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
              <Package size={16} color="#168DC0" />
              <span>5L Cans & Domestic Packs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
              <ShieldCheck size={16} color="#159C79" />
              <span>Factory Quality Controlled</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
              <Truck size={16} color="#2B176F" />
              <span>Fast Delhi NCR Dispatch</span>
            </div>
          </div>
        </div>

        {/* Product Lineup Stage (Authentic Photographs) */}
        <div
          style={{
            position: 'relative',
            marginTop: '10px',
            background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(20px, 3vw, 36px) clamp(16px, 2vw, 24px) 24px',
            boxShadow: '0 20px 40px -15px rgba(43, 23, 111, 0.07)',
          }}
        >
          {/* Stage Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#168DC0',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              The Clean Go Product Lineup
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: '#2B176F',
                fontWeight: 800,
                marginTop: '4px',
                marginBottom: 0,
              }}
            >
              Real Packaging. Authentic Formulations.
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 0' }}>
              Click any bottle below to view detailed specifications, directions & sizes
            </p>
          </div>

          {/* 6 Real Bottles Showcase Grid - Clean Harpic-Style Showcase */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
              gap: '16px',
            }}
          >
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '24px 14px 18px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                  minHeight: '260px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#168DC0';
                  e.currentTarget.style.boxShadow =
                    '0 16px 28px -6px rgba(22, 141, 192, 0.16), 0 0 0 1px rgba(22, 141, 192, 0.2)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#168DC0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.03)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#2B176F';
                }}
              >
                {/* Bottle Image Container */}
                <div
                  style={{
                    height: '170px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px 0 12px',
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '160px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 14px rgba(15, 23, 42, 0.1))',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    color: '#2B176F',
                    textAlign: 'center',
                    lineHeight: 1.25,
                    margin: 0,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {prod.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Stage Strip */}
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ fontSize: '0.86rem', color: '#64748B' }}>
              Want to see individual product directions, safety & pack sizes?
            </div>
            <button
              onClick={onExploreProducts}
              className="btn btn-navy"
              style={{
                padding: '8px 16px',
                fontSize: '0.84rem',
                fontWeight: 700,
                borderRadius: '8px',
              }}
            >
              <span>Browse Full Catalogue →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
