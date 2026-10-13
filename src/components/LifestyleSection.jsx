import React from 'react';
import { ArrowRight, Sparkles, Utensils, Bath, Maximize2, ShieldCheck } from 'lucide-react';
import { LIFESTYLE_SOLUTIONS, PRODUCTS } from '../data/productsData';

export default function LifestyleSection({ onSelectProduct }) {
  const getProductForLifestyle = (productId) => {
    return PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  };

  const getIconForRoom = (id) => {
    switch (id) {
      case 'kitchen':
        return <Utensils size={20} color="#EAB308" />;
      case 'bathroom':
        return <Bath size={20} color="#168DC0" />;
      case 'glass':
        return <Maximize2 size={20} color="#28B9C9" />;
      case 'floors':
        return <ShieldCheck size={20} color="#159C79" />;
      default:
        return <Sparkles size={20} color="#168DC0" />;
    }
  };

  return (
    <section
      id="solutions"
      style={{
        paddingTop: 'clamp(48px, 7vw, 84px)',
        paddingBottom: 'clamp(48px, 7vw, 84px)',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 48px' }}>
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
            Cleaning Solutions for Everyday Life
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.12rem)',
              color: '#64748B',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Different surfaces demand distinct chemical chemistry. Clean Go products are engineered
            for the exact dirt, grease, scale, and traffic patterns encountered across every room.
          </p>
        </div>

        {/* 4 Lifestyle Solutions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {LIFESTYLE_SOLUTIONS.map((sol) => {
            const product = getProductForLifestyle(sol.productId);

            return (
              <div
                key={sol.id}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = sol.accentColor;
                  e.currentTarget.style.boxShadow = '0 16px 32px -10px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Visual Product Stage */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '24px 20px',
                    height: '210px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid #E2E8F0',
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelectProduct(product)}
                >
                  {/* Bottle Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '170px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.08))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#2B176F',
                      lineHeight: 1.3,
                      marginBottom: '8px',
                    }}
                  >
                    {sol.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      marginBottom: '16px',
                      flexGrow: 1,
                    }}
                  >
                    {sol.description}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#64748B',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      RECOMMENDED SOLUTION:
                    </div>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="btn btn-outline"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        justifyContent: 'space-between',
                        borderColor: '#CBD5E1',
                        color: '#2B176F',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <span>{sol.actionText}</span>
                      <ArrowRight size={15} color="#168DC0" />
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
