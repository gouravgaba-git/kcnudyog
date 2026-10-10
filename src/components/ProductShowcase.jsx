import React from 'react';
import { Sparkles, Package, MessageCircle, ArrowRight } from 'lucide-react';
import ProductVisualizer from './ProductVisualizer';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function ProductShowcase({ isCommercial, onOpenCatalogModal }) {
  return (
    <section
      id="products"
      style={{
        paddingTop: 'clamp(40px, 6vw, 64px)',
        paddingBottom: 'clamp(40px, 6vw, 64px)',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 28px' }}>
          <div
            className="badge badge-navy"
            style={{ marginBottom: '10px' }}
          >
            Formulation Portfolio
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
              color: 'var(--brand-navy)',
              marginBottom: '12px',
            }}
          >
            Engineered for Maximum Hygiene & Stain Removal
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Every product is manufactured with high-purity surfactants, balanced active foam, and strict quality control standards at our Vasundhara, Ghaziabad facility.
          </p>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
            gap: '24px',
          }}
        >
          {PRODUCTS.map((prod) => {
            const packList = isCommercial ? prod.commercialPacks : prod.retailPacks;
            const targetAudience = isCommercial ? prod.commercialTarget : prod.retailTarget;

            const productWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Hello Nakul, I want to inquire about ${prod.name} (${isCommercial ? 'Wholesale/Commercial Packs' : 'Retail Packs'}) from KCN Udyog.`
            )}`;

            return (
              <div
                key={prod.id}
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                {/* Visualizer Area */}
                <div style={{ padding: '16px' }}>
                  <ProductVisualizer
                    type={prod.bottleType}
                    liquidColor={prod.liquidColor}
                    liquidGradient={prod.liquidGradient}
                    isCommercial={isCommercial}
                    name={prod.name}
                  />
                </div>

                {/* Content Area */}
                <div
                  style={{
                    padding: '0 20px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--brand-blue)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {prod.category}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--brand-navy)',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {prod.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: '14px',
                    }}
                  >
                    {prod.shortDesc}
                  </p>

                  {/* Scent & Specs Tag */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: '#F1F5F9',
                        color: 'var(--brand-navy)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      🌿 {prod.scent}
                    </span>
                    <span
                      style={{
                        backgroundColor: '#F1F5F9',
                        color: 'var(--brand-navy)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      🧪 {prod.ph}
                    </span>
                  </div>

                  {/* Available Sizes Box */}
                  <div
                    style={{
                      backgroundColor: 'var(--surface-subtle)',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--brand-navy)',
                        marginBottom: '4px',
                      }}
                    >
                      <Package size={13} style={{ color: 'var(--brand-blue)' }} />
                      <span>Available Packaging:</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {packList.map((pack, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                            backgroundColor: '#FFFFFF',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            border: '1px solid #E2E8F0',
                          }}
                        >
                          {pack}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                    <a
                      href={productWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{
                        flex: 1,
                        padding: '10px 12px',
                        fontSize: '0.85rem',
                      }}
                      title={`Order ${prod.name} on WhatsApp`}
                    >
                      <MessageCircle size={15} />
                      <span>Order Sample</span>
                    </a>

                    <button
                      onClick={onOpenCatalogModal}
                      className="btn btn-outline"
                      style={{
                        padding: '10px 12px',
                        fontSize: '0.85rem',
                      }}
                      title="Request wholesale price sheet"
                    >
                      <span>Rate Sheet</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
