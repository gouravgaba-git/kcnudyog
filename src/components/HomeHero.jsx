import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Package, MessageCircle, FileText } from 'lucide-react';
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
        paddingTop: 'clamp(40px, 6vw, 72px)',
        paddingBottom: 'clamp(48px, 7vw, 80px)',
        overflow: 'hidden',
        borderBottom: '1px solid #F1F5F9',
      }}
    >
      {/* Background Soft Gradients */}
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
          {/* Eyebrow Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#EEF2FF',
              border: '1px solid #E0E7FF',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} color="#2B176F" />
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#2B176F',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              CLEAN GO BY KCN UDYOG
            </span>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>•</span>
            <span style={{ fontSize: '0.82rem', color: '#168DC0', fontWeight: 600 }}>
              Direct Factory Quality
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5.2vw, 3.8rem)',
              fontWeight: 800,
              color: '#2B176F',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
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
              margin: '0 auto 32px',
            }}
          >
            Everyday hygiene essentials engineered with high active ingredients. Formulated for
            uncompromising grease removal, deep descaling, and lasting freshness for households and
            commercial establishments.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
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

            <button
              onClick={onOpenCatalogModal}
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
              <FileText size={18} color="#2B176F" />
              <span>Get Price List</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '14px 22px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
              }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
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
              margin: '0 auto 40px',
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
            marginTop: '20px',
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

          {/* 6 Real Bottles Showcase Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
              gap: '14px',
            }}
          >
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '14px 10px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#168DC0';
                  e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(22, 141, 192, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                }}
              >
                {/* Category Pill */}
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#168DC0',
                    backgroundColor: '#F0F9FF',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {prod.categoryLabel.split(' ')[0]}
                </span>

                {/* Bottle Image Container */}
                <div
                  style={{
                    height: '160px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '150px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.08))',
                    }}
                  />
                </div>

                {/* Name */}
                <div
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    color: '#2B176F',
                    textAlign: 'center',
                    lineHeight: 1.25,
                    marginBottom: '4px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {prod.name.replace('Clean Go ', '')}
                </div>

                {/* Scent / Volume tag */}
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#64748B',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                  }}
                >
                  {prod.scent || prod.volume}
                </div>

                {/* Quick Action Link */}
                <span
                  style={{
                    marginTop: '8px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#168DC0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  View Specs →
                </span>
              </div>
            ))}
          </div>

          {/* Stage Floor Reflection Line */}
          <div
            style={{
              width: '80%',
              height: '3px',
              margin: '20px auto 0',
              background: 'radial-gradient(ellipse at center, rgba(22, 141, 192, 0.4) 0%, rgba(255,255,255,0) 80%)',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
