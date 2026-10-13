import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function CategoryGrid({ onSelectProduct, onNavigateToProducts }) {
  return (
    <section
      id="categories"
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
            Formulated for Every Surface & Space
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.12rem)',
              color: '#64748B',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Explore our specialized categories. Every formulation is engineered with high active
            agents for instant cleaning performance, safe material contact, and pleasant aromas.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
          }}
        >
          {PRODUCTS.map((prod) => {
            const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Hello KCN Udyog, I am interested in ordering *${prod.name}*. Please share pricing.`
            )}`;

            return (
              <div
                key={prod.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#168DC0';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(22, 141, 192, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.04)';
                }}
              >
                {/* Product Image Stage */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '240px',
                    position: 'relative',
                    borderBottom: '1px solid #F1F5F9',
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelectProduct(prod)}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '200px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.1))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Scent & Brand Pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2B176F' }}>
                      CLEAN GO
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: '#64748B',
                        backgroundColor: '#F1F5F9',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {prod.scent || prod.volume}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProduct(prod)}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#2B176F',
                      lineHeight: 1.3,
                      marginBottom: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    {prod.name}
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      marginBottom: '16px',
                      flexGrow: 1,
                    }}
                  >
                    {prod.shortDesc}
                  </p>

                  {/* Features List (Top 2) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {prod.features &&
                      prod.features.slice(0, 2).map((feat, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.8rem',
                            color: '#334155',
                          }}
                        >
                          <CheckCircle2 size={14} color="#159C79" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '8px',
                      marginTop: 'auto',
                    }}
                  >
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="btn btn-outline"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        borderColor: '#CBD5E1',
                        color: '#168DC0',
                        justifyContent: 'center',
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      title="Enquire on WhatsApp"
                      style={{
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MessageCircle size={17} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Catalogue Banner */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <button
            onClick={onNavigateToProducts}
            className="btn btn-navy"
            style={{
              padding: '14px 28px',
              fontSize: '0.96rem',
              fontWeight: 700,
              borderRadius: '12px',
            }}
          >
            <span>Browse Full Product Catalogue (6 Products)</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
