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

        {/* Responsive Product Grid: Clean Harpic-Style Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(20px, 2.5vw, 32px)',
          }}
        >
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: 'clamp(28px, 3.5vw, 40px) 24px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                minHeight: '370px',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#168DC0';
                e.currentTarget.style.boxShadow =
                  '0 20px 36px -8px rgba(22, 141, 192, 0.16), 0 0 0 1px rgba(22, 141, 192, 0.25)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.05)';
                const title = e.currentTarget.querySelector('h3');
                if (title) title.style.color = '#168DC0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
                const title = e.currentTarget.querySelector('h3');
                if (title) title.style.color = '#2B176F';
              }}
            >
              {/* Product Bottle Image Area */}
              <div
                style={{
                  flexGrow: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 0 20px',
                }}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{
                    maxHeight: '230px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 14px 20px rgba(15, 23, 42, 0.12))',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>

              {/* Clean Centered Title Below Bottle */}
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  paddingTop: '12px',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#2B176F',
                    lineHeight: 1.3,
                    margin: 0,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {prod.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
