import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  MessageCircle,
  FileText,
  Phone,
  Check,
  Droplets,
  ShieldAlert,
  SlidersHorizontal,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function ProductDetailPage({
  product,
  onNavigate,
  onSelectProduct,
  onOpenCatalogModal,
}) {
  // Resolve latest active product from catalog
  const activeProduct =
    (product && PRODUCTS.find((p) => p.id === product.id)) || product || PRODUCTS[0];

  const allPackOptions = activeProduct.availableSizes || ['500 ml', '1 Litre', '5 Litre'];
  const allScentOptions = activeProduct.scents || (activeProduct.scent ? [activeProduct.scent] : ['Original']);

  const [selectedPack, setSelectedPack] = useState(allPackOptions[0] || '500 ml');
  const [selectedScent, setSelectedScent] = useState(allScentOptions[0] || 'Original');
  const [activeTab, setActiveTab] = useState('directions'); // 'directions' | 'safety' | 'specs'

  useEffect(() => {
    if (activeProduct) {
      const defaultPack =
        (activeProduct.availableSizes && activeProduct.availableSizes[0]) || '500 ml';
      setSelectedPack(defaultPack);

      const defaultScent =
        (activeProduct.scents && activeProduct.scents[0]) || activeProduct.scent || 'Original';
      setSelectedScent(defaultScent);
      setActiveTab('directions');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeProduct]);

  const whatsappMessage = `Hello KCN Udyog, I would like to order / inquire about *${activeProduct.name}*\n• Pack Size: ${selectedPack}\n• Scent / Variant: ${selectedScent}\nPlease provide wholesale pricing and dispatch details.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  // Find other formulations to explore
  const relatedProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Top Clean Breadcrumb Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          padding: '16px 0',
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
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
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
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#006699')}
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
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#006699')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Our Products
            </button>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#64748B', fontWeight: 500 }}>
              {activeProduct.categoryLabel}
            </span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#0F172A', fontWeight: 700 }}>
              {activeProduct.name}
            </span>
          </nav>

          {/* Quick Back to All Products */}
          <button
            onClick={() => onNavigate('products')}
            style={{
              background: 'none',
              border: 'none',
              color: '#006699',
              fontSize: '0.86rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            <ArrowLeft size={15} />
            <span>Back to All Products</span>
          </button>
        </div>
      </div>

      {/* Main Harpic-Style Hero Section: Left Content | Right Free Bottle */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(28px, 4vw, 48px)',
          paddingBottom: 'clamp(36px, 5vw, 64px)',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Title, Bullet Highlights, Pack & Scent Selectors, CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h1
                  style={{
                    fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                    fontWeight: 900,
                    color: '#2B176F',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.12,
                    marginBottom: '18px',
                  }}
                >
                  {activeProduct.name}
                </h1>

                {/* Clean Harpic-style Bullet Highlights */}
                <ul
                  style={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    margin: '0 0 8px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '1.05rem',
                    color: '#334155',
                    lineHeight: 1.5,
                  }}
                >
                  {activeProduct.features &&
                    activeProduct.features.map((feat, idx) => (
                      <li key={idx} style={{ paddingLeft: '4px' }}>
                        {feat}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Selectors Row: Pack Size & Scent */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '28px',
                  paddingTop: '6px',
                }}
              >
                {/* Select Pack Size */}
                <div>
                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#475569',
                      marginBottom: '10px',
                    }}
                  >
                    Select pack size:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {allPackOptions.map((pack) => {
                      const isSelected = selectedPack === pack;
                      return (
                        <button
                          key={pack}
                          type="button"
                          onClick={() => setSelectedPack(pack)}
                          style={{
                            padding: '10px 22px',
                            borderRadius: '4px',
                            fontSize: '0.95rem',
                            fontWeight: isSelected ? 700 : 600,
                            border: isSelected
                              ? '1.5px solid #006699'
                              : '1.5px solid #006699',
                            backgroundColor: isSelected ? '#006699' : '#FFFFFF',
                            color: isSelected ? '#FFFFFF' : '#006699',
                            cursor: 'pointer',
                            minWidth: '95px',
                            textAlign: 'center',
                            transition: 'all 0.15s ease-in-out',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.backgroundColor = '#F0F9FF';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.backgroundColor = '#FFFFFF';
                            }
                          }}
                        >
                          {pack}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Select Scent (Harpic Style) */}
                {allScentOptions && allScentOptions.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#475569',
                        marginBottom: '10px',
                      }}
                    >
                      Select scent:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {allScentOptions.map((scent) => {
                        const isSelected = selectedScent === scent;
                        return (
                          <button
                            key={scent}
                            type="button"
                            onClick={() => setSelectedScent(scent)}
                            style={{
                              padding: '10px 20px',
                              borderRadius: '4px',
                              fontSize: '0.95rem',
                              fontWeight: isSelected ? 700 : 600,
                              border: isSelected
                                ? '1.5px solid #006699'
                                : '1.5px solid #006699',
                              backgroundColor: isSelected ? '#006699' : '#FFFFFF',
                              color: isSelected ? '#FFFFFF' : '#006699',
                              cursor: 'pointer',
                              minWidth: '95px',
                              textAlign: 'center',
                              transition: 'all 0.15s ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.backgroundColor = '#F0F9FF';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                              }
                            }}
                          >
                            {scent}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Conversion Actions */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  paddingTop: '8px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '14px 26px',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    <MessageCircle size={20} />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenCatalogModal}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '14px 24px',
                      backgroundColor: '#2B176F',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F1150';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2B176F';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FileText size={19} />
                    <span>Request Wholesale Quote</span>
                  </button>
                </div>

                {/* Direct plant hotline */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.88rem',
                    color: '#64748B',
                    paddingTop: '2px',
                  }}
                >
                  <Phone size={15} color="#006699" />
                  <span>
                    Direct plant dispatch desk:{' '}
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      style={{ color: '#006699', fontWeight: 700, textDecoration: 'none' }}
                    >
                      {COMPANY_INFO.phone} (Nakul Sakhuja)
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Giant Upright Bottle Standing Freely (Harpic Style) */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '480px',
              }}
            >
              {/* Product Bottle */}
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  maxHeight: 'clamp(420px, 48vw, 540px)',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Narrative Statement (Harpic Style) */}
      <section
        style={{
          borderTop: '1px solid #F1F5F9',
          borderBottom: '1px solid #F1F5F9',
          backgroundColor: '#FAFCFE',
          padding: '48px 0',
        }}
      >
        <div className="container" style={{ maxWidth: '920px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#334155',
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400,
            }}
          >
            {activeProduct.shortDesc} Specially engineered by <strong>KCN UDYOG</strong> with
            deep-cleansing active agents for streak-free results, lasting surface protection, and
            optimum hygiene standards in both homes and facilities.
          </p>
        </div>
      </section>

      {/* Key Product Benefits (Harpic 3-Column Style) */}
      <section style={{ padding: '64px 0 54px' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
              fontWeight: 900,
              color: '#2B176F',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Key product benefits
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '40px',
              textAlign: 'center',
            }}
          >
            {/* Benefit 1 */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  marginBottom: '10px',
                }}
              >
                Deep Clean Performance
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                High-potency formulation actively breaks down stubborn deposits, grease, and hard-water
                scaling without dulling treated surfaces.
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  marginBottom: '10px',
                }}
              >
                99.9% Hygienic Protection
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Disinfects contact points thoroughly, eliminating germs and disease-causing bacteria
                to preserve sanitary spaces.
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#2B176F',
                  marginBottom: '10px',
                }}
              >
                Fresh Lingering Aroma
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Infused with premium aromatic essences that actively fight foul smells and ensure a
                delightfully refreshed ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Interactive Information Section (Directions, Safety, Specs) */}
      <section
        style={{
          backgroundColor: '#F8FAFC',
          padding: '60px 0',
          borderTop: '1px solid #E2E8F0',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Clean Tab Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '2px solid #E2E8F0',
              marginBottom: '36px',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { id: 'directions', label: 'How to Use / Directions' },
              { id: 'safety', label: 'Safety & Handling' },
              { id: 'specs', label: 'Specifications & Standards' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#006699' : '#64748B',
                    border: 'none',
                    borderBottom: isActive ? '3px solid #006699' : '3px solid transparent',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    marginBottom: '-2px',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Panel 1: Directions */}
          {activeTab === 'directions' && (
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {activeProduct.directions &&
                  activeProduct.directions.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#006699',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
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
                      <div style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.6 }}>
                        {step}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Tab Panel 2: Safety & Handling */}
          {activeTab === 'safety' && (
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeProduct.safetyAdvice &&
                  activeProduct.safetyAdvice.map((advice, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        fontSize: '1rem',
                        color: '#475569',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: '#DC2626',
                          fontWeight: 800,
                          fontSize: '1.2rem',
                          lineHeight: 1,
                        }}
                      >
                        •
                      </span>
                      <span>{advice}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Tab Panel 3: Product Specifications */}
          {activeTab === 'specs' && (
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                }}
              >
                {[
                  { label: 'Brand Name', value: 'Clean Go' },
                  { label: 'Manufacturer', value: 'KCN UDYOG' },
                  { label: 'Manufacturing Facility', value: 'Ghaziabad, Uttar Pradesh' },
                  { label: 'Available Sizes', value: '500 ml, 1 Litre, 5 Litre' },
                  { label: 'Active Fragrance', value: selectedScent },
                  { label: 'Shelf Life', value: '24 Months from MFG Date' },
                  { label: 'Supply Channels', value: 'Direct Factory & Wholesale Supply' },
                ].map((spec, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: '16px 20px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: '4px',
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Explore More Clean Go Formulations (Harpic Style Range) */}
      <section style={{ paddingTop: '64px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 900,
                  color: '#2B176F',
                  margin: 0,
                }}
              >
                More Formulations by Clean Go
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748B', margin: '4px 0 0 0' }}>
                Complete cleaning solutions directly from KCN Udyog
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              style={{
                background: 'none',
                border: 'none',
                color: '#006699',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <span>View All 6 Products</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '32px',
            }}
          >
            {relatedProducts.map((relProd) => (
              <div
                key={relProd.id}
                onClick={() => onSelectProduct(relProd)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #F1F5F9',
                  padding: '36px 20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 30px rgba(15, 23, 42, 0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#006699';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#2B176F';
                }}
              >
                <div
                  style={{
                    height: '240px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={relProd.image}
                    alt={relProd.name}
                    style={{
                      maxHeight: '220px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#2B176F',
                    margin: '0 0 6px 0',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {relProd.name}
                </h3>

                <span
                  style={{
                    fontSize: '0.84rem',
                    color: '#006699',
                    fontWeight: 700,
                  }}
                >
                  View Details & Formats →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
