import React from 'react';
import { ArrowRight, Sparkles, Utensils, Bath, Maximize2, ShieldCheck, MessageCircle, FileText } from 'lucide-react';
import { LIFESTYLE_SOLUTIONS, PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function SolutionsPage({ onSelectProduct, onOpenCatalogModal, onNavigateToContact }) {
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

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am interested in your Clean Go room hygiene and cleaning solutions.'
  )}`;

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
            Cleaning Solutions for Everyday Life
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto 24px',
            }}
          >
            Different surfaces demand distinct chemical chemistry. Every Clean Go formulation is
            engineered for the exact dirt, grease, scale, and traffic patterns across your spaces.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-navy"
              style={{
                padding: '12px 22px',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '10px',
              }}
            >
              <FileText size={16} />
              <span>Request Complete Price List</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '12px 20px',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '10px',
              }}
            >
              <MessageCircle size={17} />
              <span>Chat with Cleaning Expert</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Lifestyle Solutions Grid */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {LIFESTYLE_SOLUTIONS.map((sol) => {
            const product = getProductForLifestyle(sol.productId);

            return (
              <div
                key={sol.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = sol.accentColor;
                  e.currentTarget.style.boxShadow = '0 16px 32px -10px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.04)';
                }}
              >
                {/* Visual Product Stage */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
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
                  {/* Room Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                    }}
                  >
                    {getIconForRoom(sol.id)}
                    <span>{sol.room}</span>
                  </div>

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

                  {/* Highlight Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: sol.accentColor,
                      color: sol.id === 'kitchen' ? '#000000' : '#FFFFFF',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {sol.highlightBadge}
                  </span>
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
                  <h2
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#2B176F',
                      lineHeight: 1.3,
                      marginBottom: '8px',
                    }}
                  >
                    {sol.title}
                  </h2>

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

        {/* Commercial Supply CTA Banner */}
        <div
          style={{
            backgroundColor: '#16195E',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 36px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 6px' }}>
              Custom Formulation Supply for Commercial Spaces
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', margin: 0, maxWidth: '600px' }}>
              Supplying 5L commercial cans and 50L facility drums for hotels, corporate offices,
              hospitals, and shopping complexes across Delhi NCR.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onNavigateToContact}
              className="btn btn-primary"
              style={{ padding: '12px 20px', fontSize: '0.92rem', backgroundColor: '#168DC0' }}
            >
              Contact Facility Team
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '12px 20px', fontSize: '0.92rem' }}
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
