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
          paddingTop: 'clamp(24px, 4vw, 52px)',
          paddingBottom: 'clamp(20px, 3.5vw, 42px)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(1.5rem, 5.2vw, 2.7rem)',
              fontWeight: 800,
              color: '#16195E',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '8px',
            }}
          >
            Honest Formulations for Every Surface
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.85rem, 3.2vw, 1.05rem)',
              color: '#475569',
              lineHeight: 1.55,
              margin: '0 auto 16px',
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

        {/* Responsive Product Grid: 2-col on mobile, multi-col on desktop */}
        <div className="borngood-products-grid">
          {filteredProducts.map((prod) => {
            const whatsappOrderUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Hello KCN Udyog, I would like to order *${prod.name}* from kcnudyog.com. Please share dispatch details and pricing.`
            )}`;

            return (
              <div
                key={prod.id}
                className="borngood-card"
                onClick={() => onSelectProduct(prod)}
              >
                {/* Active formulation badge */}
                <div className="card-active-badge">
                  <Sparkles size={11} color="#00B189" />
                  <span>{prod.activeBadge || 'Active Formula'}</span>
                </div>

                <div className="card-refill-badge">
                  <span>5L Can</span>
                </div>

                {/* Bottle Showcase Stage */}
                <div className="borngood-card-stage">
                  <img src={prod.image} alt={prod.name} loading="lazy" />
                </div>

                {/* Card Content Details */}
                <div className="borngood-card-body">
                  <div>
                    {/* Review Stars */}
                    <div className="borngood-card-rating">
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#00B189" color="#00B189" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="star-rating-count">
                        {prod.rating || '4.9'} ({prod.reviewCount || '130+'})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="borngood-card-title">
                      {prod.name}
                    </h3>

                    {/* Short Description - hidden on 2-col mobile cards */}
                    <p className="borngood-card-desc">
                      {prod.shortDesc}
                    </p>

                    {/* Fragrance & Eco Pill */}
                    <div className="borngood-card-pills">
                      <span className="pill-scent">
                        🍃 {prod.scent || 'Fresh Aroma'}
                      </span>
                      <span className="pill-safe">
                        ✓ {prod.transparencyPill || 'Surface Safe'}
                      </span>
                    </div>
                  </div>

                  {/* Dual Action on Desktop, Full-width Quick Order on Mobile */}
                  <div className="borngood-card-actions" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="btn btn-outline borngood-btn-specs"
                    >
                      View Specs
                    </button>

                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sage borngood-btn-order"
                    >
                      <MessageCircle size={14} />
                      <span>Order Now</span>
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
