import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  MessageCircle,
  FileText,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Droplets,
  Package,
  AlertTriangle,
  Factory,
  Check,
  Building2,
  Clock,
  Layers,
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function ProductDetailPage({
  product,
  onNavigate,
  onSelectProduct,
  onOpenCatalogModal,
}) {
  // If product is not provided, fall back to first product
  const activeProduct = product || PRODUCTS[0];

  const allPackOptions = Array.from(
    new Set([
      ...(activeProduct.commercialPacks || []),
      ...(activeProduct.retailPacks || []),
      ...(activeProduct.availableSizes || []),
    ])
  );

  const [selectedPack, setSelectedPack] = useState(
    allPackOptions[0] || activeProduct.volume || '5 Litre Commercial Can'
  );

  useEffect(() => {
    if (activeProduct) {
      const defaultPack =
        (activeProduct.commercialPacks && activeProduct.commercialPacks[0]) ||
        (activeProduct.availableSizes && activeProduct.availableSizes[0]) ||
        activeProduct.volume ||
        '5 Litre Commercial Can';
      setSelectedPack(defaultPack);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeProduct]);

  const whatsappMessage = `Hello KCN Udyog, I am interested in *${activeProduct.name}* (Selected Format: ${selectedPack}). Please share current wholesale pricing and order minimums.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  // Find related products (exclude current)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Breadcrumb & Return Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '14px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb Links */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#64748B',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => onNavigate('home')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#64748B',
                cursor: 'pointer',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#168DC0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Home
            </button>
            <ChevronRight size={14} color="#94A3B8" />
            <button
              onClick={() => onNavigate('products')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#64748B',
                cursor: 'pointer',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#168DC0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Our Products
            </button>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#168DC0', fontWeight: 600 }}>
              {activeProduct.categoryLabel}
            </span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#0F172A', fontWeight: 700 }}>
              {activeProduct.name}
            </span>
          </nav>

          {/* Quick Back to All Products Button */}
          <button
            onClick={() => onNavigate('products')}
            className="btn btn-outline"
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 700,
              borderColor: '#CBD5E1',
              color: '#334155',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to All Products</span>
          </button>
        </div>
      </div>

      {/* Main Product Hero Stage */}
      <div className="container" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px -4px rgba(15, 23, 42, 0.05)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            padding: 'clamp(24px, 4vw, 48px)',
            alignItems: 'start',
          }}
        >
          {/* Left: Product Visual Stage */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: 'clamp(24px, 4vw, 40px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '420px',
                background: 'radial-gradient(circle at center, #FFFFFF 0%, #F1F5F9 100%)',
              }}
            >
              {/* Brand Floating Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Sparkles size={14} color="#168DC0" />
                <span>CLEAN GO ORIGINAL</span>
              </div>

              {/* Scent Badge */}
              {activeProduct.scent && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(22, 141, 192, 0.1)',
                    color: '#168DC0',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: '1px solid rgba(22, 141, 192, 0.2)',
                  }}
                >
                  🍃 {activeProduct.scent}
                </div>
              )}

              {/* Product Bottle Image */}
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                style={{
                  maxHeight: '380px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 25px rgba(15, 23, 42, 0.15))',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* Manufacturer Trust Banner Below Image */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #E2E8F0',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>MANUFACTURED BY</div>
                <div style={{ fontSize: '0.88rem', color: '#2B176F', fontWeight: 800 }}>KCN UDYOG</div>
              </div>
              <div style={{ borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>PLANT LOCATION</div>
                <div style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 700 }}>Ghaziabad, NCR</div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>DISPATCH SUPPLY</div>
                <div style={{ fontSize: '0.88rem', color: '#15803D', fontWeight: 800 }}>Direct Batches</div>
              </div>
            </div>
          </div>

          {/* Right: Product Details, Pack Selection & Inquiry CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Header info */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#168DC0',
                  marginBottom: '10px',
                }}
              >
                <span>{activeProduct.categoryLabel}</span>
                <span>•</span>
                <span>CLEAN GO</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  fontWeight: 800,
                  color: '#2B176F',
                  lineHeight: 1.2,
                  marginBottom: '10px',
                }}
              >
                {activeProduct.name}
              </h1>

              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#168DC0',
                  marginBottom: '14px',
                  lineHeight: 1.4,
                }}
              >
                {activeProduct.tagline || 'Powerful Cleaning For a Healthier Home'}
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.6,
                }}
              >
                {activeProduct.shortDesc}
              </p>
            </div>

            {/* Key Benefits List */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '18px 20px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ShieldCheck size={17} color="#168DC0" />
                <span>Formulation Highlights & Efficacy</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeProduct.features &&
                  activeProduct.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.9rem',
                        color: '#334155',
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color="#15803D"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Pack Size Selector */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <label
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Package size={16} color="#168DC0" />
                  <span>Select Packaging Size / Format:</span>
                </label>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#15803D',
                    fontWeight: 700,
                  }}
                >
                  ✓ Direct Factory Supply
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {allPackOptions.map((pack) => {
                  const isSelected = selectedPack === pack;
                  return (
                    <button
                      key={pack}
                      type="button"
                      onClick={() => setSelectedPack(pack)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '12px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        border: isSelected ? '2px solid #168DC0' : '1px solid #CBD5E1',
                        backgroundColor: isSelected ? '#F0F9FF' : '#FFFFFF',
                        color: isSelected ? '#168DC0' : '#334155',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {isSelected && <Check size={14} color="#168DC0" />}
                      <span>{pack}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* High-Impact Conversion Actions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                paddingTop: '6px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                  gap: '12px',
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    padding: '14px 20px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <MessageCircle size={19} />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCatalogModal}
                  className="btn btn-navy"
                  style={{
                    padding: '14px 20px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    justifyContent: 'center',
                  }}
                >
                  <FileText size={18} />
                  <span>Request Wholesale Quote</span>
                </button>
              </div>

              {/* Call Brand Desk */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.85rem',
                  color: '#475569',
                }}
              >
                <span>Prefer direct phone call?</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  style={{
                    color: '#2B176F',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Phone size={14} color="#168DC0" />
                  <span>{COMPANY_INFO.phone} (Nakul Sakhuja)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections (Harpic Style Tabs/Blocks) */}
        <div
          style={{
            marginTop: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
          }}
        >
          {/* Block 1: How to Use / Directions */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '28px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(22, 141, 192, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Droplets size={20} color="#168DC0" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2B176F' }}>
                  How to Use / Directions
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Recommended application for best performance
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activeProduct.directions &&
                activeProduct.directions.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: '#2B176F',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                      {step}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Block 2: Safety Advice & Precautionary Guidance */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '28px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#FEF2F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AlertTriangle size={20} color="#DC2626" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2B176F' }}>
                  Safety & Storage Advice
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Safe handling instructions for institutions & homes
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {activeProduct.safetyAdvice &&
                activeProduct.safetyAdvice.map((advice, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ color: '#DC2626', fontWeight: 700 }}>•</span>
                    <span>{advice}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Block 3: Technical Specifications & Commercial Formats */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '28px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(27, 23, 111, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Layers size={20} color="#2B176F" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2B176F' }}>
                  Product Specifications
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  Manufacturing and supply details
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Brand Name</span>
                <span style={{ color: '#2B176F', fontWeight: 800 }}>Clean Go</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Manufacturer</span>
                <span style={{ color: '#0F172A', fontWeight: 700 }}>KCN UDYOG</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Manufacturing Plant</span>
                <span style={{ color: '#0F172A', fontWeight: 700 }}>Ghaziabad, Uttar Pradesh</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Scent Profile</span>
                <span style={{ color: '#168DC0', fontWeight: 700 }}>{activeProduct.scent || 'Clean Fresh'}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Shelf Life</span>
                <span style={{ color: '#0F172A', fontWeight: 700 }}>24 Months from MFG</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                }}
              >
                <span style={{ color: '#64748B', fontWeight: 600 }}>Target Users</span>
                <span style={{ color: '#0F172A', fontWeight: 700, textAlign: 'right', maxWidth: '200px' }}>
                  Institutions & Domestic
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Clean Go Products (Harpic Style "Explore Range") */}
        <div style={{ marginTop: '56px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  fontWeight: 800,
                  color: '#2B176F',
                }}
              >
                More Formulations by Clean Go
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
                Complete your hygiene and facility cleaning system
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="btn btn-outline"
              style={{
                fontSize: '0.84rem',
                fontWeight: 700,
                borderColor: '#CBD5E1',
                color: '#168DC0',
              }}
            >
              <span>View All 6 Products</span>
              <ChevronRight size={15} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
            }}
          >
            {relatedProducts.map((relProd) => (
              <div
                key={relProd.id}
                onClick={() => onSelectProduct(relProd)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#168DC0';
                  e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(22, 141, 192, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '16px',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <img
                    src={relProd.image}
                    alt={relProd.name}
                    style={{
                      maxHeight: '150px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.1))',
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#168DC0',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {relProd.categoryLabel}
                </div>

                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#2B176F',
                    marginBottom: '6px',
                  }}
                >
                  {relProd.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#64748B',
                    lineHeight: 1.4,
                    marginBottom: '14px',
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {relProd.shortDesc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '10px',
                    borderTop: '1px solid #F1F5F9',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#168DC0',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    View Product Page <ChevronRight size={14} />
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>
                    {relProd.volume || '5L Can'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
