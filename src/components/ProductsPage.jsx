import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, Check, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from '../data/productsData';

export default function ProductsPage({ onSelectProduct, onOpenCatalogModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === activeCategory);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Page Header Banner */}
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
            Our Products
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto 24px',
            }}
          >
            Everyday cleaning essentials for every corner of your home, office, and commercial space.
            Formulated in Ghaziabad for powerful dirt removal and surface-safe performance.
          </p>

          <button
            onClick={onOpenCatalogModal}
            className="btn btn-navy"
            style={{
              padding: '12px 24px',
              fontSize: '0.92rem',
              fontWeight: 700,
              borderRadius: '10px',
            }}
          >
            <span>Request Full Price List & Catalog</span>
          </button>
        </div>
      </section>

      {/* Main Content & Filter Bar */}
      <div className="container" style={{ paddingTop: '32px' }}>
        {/* Category Filter Pills */}
        <div
          style={{
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>
              <Filter size={15} color="#168DC0" />
              <span>FILTER BY CATEGORY:</span>
            </div>

            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              Showing {filteredProducts.length} of {PRODUCTS.length} products
            </span>
          </div>

          <div className="filter-pills-container">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className="pill-count">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Product Grid: 2-col on mobile, 3-col on tablet/desktop */}
        <div className="product-grid">
          {filteredProducts.map((prod) => {
            const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Hello KCN Udyog, I would like to order / inquire about *${prod.name}*.`
            )}`;

            return (
              <div
                key={prod.id}
                className="product-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}
              >
                {/* Image Wrap */}
                <div
                  className="product-card-image-wrap"
                  style={{
                    backgroundColor: '#F8FAFC',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '220px',
                    position: 'relative',
                    cursor: 'pointer',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                  onClick={() => onSelectProduct(prod)}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#168DC0',
                      backgroundColor: '#FFFFFF',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    {prod.categoryLabel.split(' ')[0]}
                  </span>

                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '180px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.08))',
                    }}
                  />
                </div>

                {/* Card Info */}
                <div
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2B176F' }}>
                      CLEAN GO
                    </span>
                    {prod.scent && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: '#64748B',
                          backgroundColor: '#F1F5F9',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '120px',
                        }}
                      >
                        {prod.scent}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProduct(prod)}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#2B176F',
                      lineHeight: 1.25,
                      marginBottom: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    {prod.name}
                  </h3>

                  {/* Short description */}
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#475569',
                      lineHeight: 1.45,
                      marginBottom: '12px',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prod.shortDesc}
                  </p>

                  {/* Available Sizes Tag */}
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: '#168DC0',
                      fontWeight: 600,
                      marginBottom: '14px',
                      backgroundColor: '#F0F9FF',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    📦 {prod.volume || '5L Commercial & Retail'}
                  </div>

                  {/* Actions */}
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
                        padding: '8px 10px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        borderColor: '#CBD5E1',
                        color: '#168DC0',
                        justifyContent: 'center',
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      title="Enquire on WhatsApp"
                      style={{
                        padding: '8px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
