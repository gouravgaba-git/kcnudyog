import React, { useState } from 'react';
import {
  Sparkles,
  MessageCircle,
  Filter,
  Star,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from '../data/productsData';

export default function ProductsPage({ onSelectProduct, onOpenCatalogModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === activeCategory);

  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '80vh', paddingBottom: '90px' }}>
      {/* Page Header Banner */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8EEF5',
          paddingTop: 'clamp(40px, 6vw, 68px)',
          paddingBottom: 'clamp(36px, 5vw, 56px)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)',
              fontWeight: 800,
              color: '#16195E',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '14px',
            }}
          >
            Honest Formulations for Every Surface
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto 24px',
            }}
          >
            High-active cleaning formulations engineered to cut heavy grease, remove stubborn stains, and
            kill 99.9% germs. Available in retail packs and heavy-duty 5L commercial cans.
          </p>
        </div>
      </section>

      {/* Main Content & Filter Bar */}
      <div className="container" style={{ paddingTop: '36px' }}>
        {/* Category Filter Pills */}
        <div
          style={{
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.85rem', fontWeight: 700 }}>
              <Filter size={15} color="#00B189" />
              <span>COLLECTION FILTER:</span>
            </div>

            <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
              Showing {filteredProducts.length} of {PRODUCTS.length} formulations
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
                  style={{
                    backgroundColor: isActive ? '#00B189' : '#FFFFFF',
                    borderColor: isActive ? '#00B189' : '#CBD5E1',
                    color: isActive ? '#FFFFFF' : '#334155',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 177, 137, 0.25)' : 'none',
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    className="pill-count"
                    style={{
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#F1F5F9',
                      color: isActive ? '#FFFFFF' : '#64748B',
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Product Grid: Born Good Clean D2C Style */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 2.5vw, 30px)',
          }}
        >
          {filteredProducts.map((prod) => {
            const whatsappOrderUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Hello KCN Udyog, I would like to order *${prod.name}* from kcnudyog.com. Please share dispatch details and pricing.`
            )}`;

            return (
              <div
                key={prod.id}
                className="borngood-card"
                onClick={() => onSelectProduct(prod)}
                style={{ cursor: 'pointer' }}
              >
                {/* Active formulation badge */}
                <div className="card-active-badge">
                  <Sparkles size={12} color="#00B189" />
                  <span>{prod.activeBadge || 'Active Formula'}</span>
                </div>

                <div className="card-refill-badge">
                  <span>5L Commercial Can</span>
                </div>

                {/* Bottle Showcase Stage */}
                <div className="borngood-card-stage">
                  <img src={prod.image} alt={prod.name} />
                </div>

                {/* Card Content Details */}
                <div
                  style={{
                    padding: '20px 22px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    borderTop: '1px solid #F1F5F9',
                  }}
                >
                  <div>
                    {/* Review Stars */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '8px',
                      }}
                    >
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="star-rating-count">
                        {prod.rating || '4.9'} ({prod.reviewCount || '130+'} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      style={{
                        fontSize: '1.12rem',
                        fontWeight: 800,
                        color: '#16195E',
                        lineHeight: 1.35,
                        marginBottom: '8px',
                      }}
                    >
                      {prod.name}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: '#64748B',
                        lineHeight: 1.55,
                        marginBottom: '14px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {prod.shortDesc}
                    </p>

                    {/* Fragrance & Eco Pill */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                        marginBottom: '18px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '9999px',
                          backgroundColor: '#F1F5F9',
                          color: '#475569',
                        }}
                      >
                        🍃 {prod.scent || 'Fresh Aroma'}
                      </span>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          padding: '3px 9px',
                          borderRadius: '9999px',
                          backgroundColor: '#E6F8F3',
                          color: '#00B189',
                        }}
                      >
                        ✓ {prod.transparencyPill || 'Surface Safe'}
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                      paddingTop: '12px',
                      borderTop: '1px solid #F1F5F9',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="btn btn-outline"
                      style={{
                        padding: '9px 12px',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        borderRadius: '10px',
                        borderColor: '#CBD5E1',
                        color: '#16195E',
                      }}
                    >
                      View Specs
                    </button>

                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sage"
                      style={{
                        padding: '9px 12px',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        borderRadius: '10px',
                        textDecoration: 'none',
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional & Bulk Inquiry Banner */}
        <div
          style={{
            marginTop: '56px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E8EEF5',
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#00B189',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              COMMERCIAL PROCUREMENT
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: 800,
                color: '#16195E',
                margin: '6px 0 10px',
              }}
            >
              Procuring for Hospitals, Hotels, Banquets or Facilities?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Order in 5 Litre heavy-duty cans or 50L institutional carboys with custom GST billing,
              batch compliance certificates, and direct dispatch from Vasundhara, Ghaziabad.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello Nakul, I want to inquire about B2B / wholesale bulk procurement for Clean Go products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                padding: '12px 22px',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '12px',
                borderColor: '#CBD5E1',
                color: '#16195E',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Nakul</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
