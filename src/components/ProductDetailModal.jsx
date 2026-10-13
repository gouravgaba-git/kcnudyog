import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Check, AlertCircle, ShieldCheck, Sparkles, Package, Info, Droplets } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const [selectedPack, setSelectedPack] = useState(null);

  // Sync selected pack when product changes
  useEffect(() => {
    if (product) {
      const defaultPack =
        (product.commercialPacks && product.commercialPacks[0]) ||
        (product.availableSizes && product.availableSizes[0]) ||
        product.volume ||
        '5 Litre Commercial Can';
      setSelectedPack(defaultPack);
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const whatsappMessage = `Hello KCN Udyog, I am interested in *${product.name}* (Selected Pack: ${selectedPack || '5L Can'}). Please share current pricing and order minimums.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  const allPackOptions = Array.from(
    new Set([
      ...(product.commercialPacks || []),
      ...(product.retailPacks || []),
      ...(product.availableSizes || []),
    ])
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="animate-slide-up"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          border: '1px solid #E2E8F0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid #F1F5F9',
            backgroundColor: '#FAFAFC',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '4px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(22, 141, 192, 0.1)',
                color: '#168DC0',
              }}
            >
              {product.categoryLabel || 'Cleaning Solution'}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              Official Product Details
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close product modal"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#E2E8F0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#F1F5F9')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            overflowY: 'auto',
            padding: 'clamp(18px, 3vw, 32px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(20px, 4vw, 36px)',
            alignItems: 'start',
          }}
        >
          {/* Left: Product Visual Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '340px',
              }}
            >
              {/* Real Photo */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxHeight: '300px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.12))',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* Packaging Highlights below image */}
            <div
              style={{
                width: '100%',
                marginTop: '16px',
                padding: '12px 16px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>MANUFACTURED BY</div>
                <div style={{ fontSize: '0.85rem', color: '#2B176F', fontWeight: 800 }}>KCN UDYOG</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#E2E8F0' }} />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>FACILITY LOCATION</div>
                <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 700 }}>Ghaziabad, NCR</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#E2E8F0' }} />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>DISPATCH</div>
                <div style={{ fontSize: '0.85rem', color: '#15803D', fontWeight: 700 }}>Direct Batches</div>
              </div>
            </div>
          </div>

          {/* Right: Product Details & Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Title & Tagline */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#168DC0',
                    backgroundColor: '#F0F9FF',
                    padding: '3px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {product.brand}
                </span>
                {product.scent && (
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#475569',
                      backgroundColor: '#F1F5F9',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Droplets size={12} color="#168DC0" />
                    {product.scent}
                  </span>
                )}
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#2B176F',
                  lineHeight: 1.25,
                  margin: '0 0 8px 0',
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {product.shortDesc}
              </p>
            </div>

            {/* Pack Size Selector */}
            {allPackOptions.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Package size={14} color="#168DC0" />
                  <span>SELECT PACK SIZE / REQUIREMENT:</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {allPackOptions.map((pack) => {
                    const isSelected = selectedPack === pack;
                    return (
                      <button
                        key={pack}
                        onClick={() => setSelectedPack(pack)}
                        style={{
                          padding: '7px 12px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          border: isSelected ? '2px solid #168DC0' : '1px solid #CBD5E1',
                          backgroundColor: isSelected ? '#F0F9FF' : '#FFFFFF',
                          color: isSelected ? '#0369A1' : '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {isSelected && <Check size={13} color="#168DC0" strokeWidth={3} />}
                        <span>{pack}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#2B176F',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <ShieldCheck size={15} color="#2B176F" />
                  <span>KEY FORMULATION HIGHLIGHTS</span>
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.84rem',
                        color: '#334155',
                        lineHeight: 1.45,
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Directions for Use */}
            {product.directions && product.directions.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Info size={14} color="#168DC0" />
                  <span>DIRECTIONS FOR USE:</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontSize: '0.82rem',
                    color: '#475569',
                    lineHeight: 1.45,
                  }}
                >
                  {product.directions.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px' }}>
                      <span
                        style={{
                          fontWeight: 700,
                          color: '#168DC0',
                          minWidth: '16px',
                        }}
                      >
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Safety Advice */}
            {product.safetyAdvice && product.safetyAdvice.length > 0 && (
              <div
                style={{
                  backgroundColor: '#FFFBEB',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  border: '1px solid #FEF3C7',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                }}
              >
                <AlertCircle size={16} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.78rem', color: '#92400E', lineHeight: 1.45 }}>
                  <strong style={{ display: 'block', marginBottom: '2px', color: '#B45309' }}>
                    Safety Guidance:
                  </strong>
                  {product.safetyAdvice.join(' • ')}
                </div>
              </div>
            )}

            {/* WhatsApp Enquiry Button */}
            <div style={{ marginTop: '6px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  width: '100%',
                  padding: '13px 20px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  justifyContent: 'center',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageCircle size={19} />
                <span>Enquire via WhatsApp for {selectedPack || 'Order'}</span>
              </a>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#64748B',
                  textAlign: 'center',
                  marginTop: '8px',
                }}
              >
                Direct connection with manufacturer • Fast bulk quote & dispatch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
