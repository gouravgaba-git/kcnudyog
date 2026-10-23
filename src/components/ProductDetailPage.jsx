import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Phone,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Flame,
  Droplets,
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/productsData';

export default function ProductDetailPage({
  product,
  onNavigate,
  onSelectProduct,
  onOpenCatalogModal,
}) {
  const activeProduct =
    (product && PRODUCTS.find((p) => p.id === product.id)) || product || PRODUCTS[0];

  const allPackOptions = activeProduct.availableSizes || ['500 ml', '1 Ltr', '5 Ltr'];
  const allScentOptions =
    activeProduct.scents || (activeProduct.scent ? [activeProduct.scent] : ['Original']);

  const [selectedPack, setSelectedPack] = useState(
    allPackOptions.includes('5 Ltr') ? '5 Ltr' : allPackOptions[0] || '500 ml'
  );
  const [selectedScent, setSelectedScent] = useState(allScentOptions[0] || 'Original');
  const [activeTab, setActiveTab] = useState('directions'); // 'directions' | 'safety' | 'specs'
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);

  const galleryThumbnails = [
    { id: 0, label: 'Main Can View', zoom: '1', filter: 'none' },
    { id: 1, label: 'Label Detail', zoom: '1.25', filter: 'none' },
    { id: 2, label: 'Cap & Pour Spout', zoom: '1.4', transformOrigin: 'top center' },
    { id: 3, label: 'Full Studio View', zoom: '1.05', filter: 'contrast(1.03)' },
  ];

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={16} color="#FFFFFF" />;
      case 'ShieldCheck':
        return <ShieldCheck size={16} color="#FFFFFF" />;
      case 'Clock':
        return <Clock size={16} color="#FFFFFF" />;
      case 'Flame':
        return <Flame size={16} color="#FFFFFF" />;
      case 'Droplets':
        return <Droplets size={16} color="#FFFFFF" />;
      default:
        return <CheckCircle2 size={16} color="#FFFFFF" />;
    }
  };

  useEffect(() => {
    if (activeProduct) {
      const defaultPack =
        (activeProduct.availableSizes && activeProduct.availableSizes.includes('5 Ltr'))
          ? '5 Ltr'
          : (activeProduct.availableSizes && activeProduct.availableSizes[0]) || '500 ml';
      setSelectedPack(defaultPack);

      const defaultScent =
        (activeProduct.scents && activeProduct.scents[0]) || activeProduct.scent || 'Original';
      setSelectedScent(defaultScent);
      setActiveTab('directions');
      setActiveThumbnailIndex(0);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeProduct]);

  const whatsappMessage = `Hello KCN Udyog, I would like to order / inquire about *${activeProduct.name}*\n• Pack Size: ${selectedPack}\n• Scent / Variant: ${selectedScent}\nPlease provide wholesale pricing and dispatch details.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  const relatedProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Top Clean Breadcrumb Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8EEF5',
          padding: '12px 0',
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
              fontSize: '0.84rem',
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
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00B189')}
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
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00B189')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Our Products
            </button>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#64748B', fontWeight: 600 }}>
              {activeProduct.categoryLabel}
            </span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#16195E', fontWeight: 700 }}>
              {activeProduct.name}
            </span>
          </nav>

          {/* Quick Back Link */}
          <button
            onClick={() => onNavigate('products')}
            style={{
              background: 'none',
              border: 'none',
              color: '#00B189',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 0',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to All Formulations</span>
          </button>
        </div>
      </div>

      {/* Main Reference-Inspired Product Showcase Stage */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(20px, 2.5vw, 36px)',
          paddingBottom: 'clamp(24px, 3.5vw, 40px)',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8EEF5',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 430px), 1fr))',
              gap: 'clamp(24px, 3.5vw, 52px)',
              alignItems: 'center',
            }}
          >
            {/* LEFT COLUMN: 4 Vertical Thumbnails + Large Main Product Stage */}
            <div
              className="product-detail-gallery-row"
              style={{
                display: 'flex',
                gap: 'clamp(10px, 1.8vw, 18px)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Vertical Thumbnail Strip on Desktop, Horizontal on Mobile */}
              <div
                className="product-detail-thumbnail-strip"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  flexShrink: 0,
                }}
              >
                {galleryThumbnails.map((thumb) => {
                  const isActive = activeThumbnailIndex === thumb.id;
                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setActiveThumbnailIndex(thumb.id)}
                      style={{
                        width: 'clamp(52px, 4.6vw, 66px)',
                        height: 'clamp(52px, 4.6vw, 66px)',
                        borderRadius: '6px',
                        border: isActive ? '2px solid #0F2444' : '1.5px solid #E2E8F0',
                        backgroundColor: '#FFFFFF',
                        padding: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: isActive ? '0 2px 8px rgba(15, 36, 68, 0.16)' : 'none',
                        transition: 'all 0.15s ease',
                      }}
                      title={thumb.label}
                    >
                      <img
                        src={activeProduct.image}
                        alt={thumb.label}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          transform: thumb.zoom !== '1' ? `scale(${thumb.zoom})` : 'none',
                          transformOrigin: thumb.transformOrigin || 'center',
                          filter: thumb.filter || 'none',
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Main Product Stage */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #F1F5F9',
                  padding: 'clamp(14px, 2.5vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 'clamp(340px, 38vw, 440px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  style={{
                    maxHeight: 'clamp(300px, 34vw, 420px)',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 16px 24px rgba(15, 23, 42, 0.12))',
                    transition: 'transform 0.3s ease',
                    transform:
                      galleryThumbnails[activeThumbnailIndex]?.zoom !== '1'
                        ? `scale(${galleryThumbnails[activeThumbnailIndex]?.zoom})`
                        : 'scale(1)',
                    transformOrigin:
                      galleryThumbnails[activeThumbnailIndex]?.transformOrigin || 'center',
                  }}
                />
                {/* Ground reflection shadow */}
                <div
                  style={{
                    width: '65%',
                    height: '12px',
                    background:
                      'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
                    borderRadius: '50%',
                    marginTop: '8px',
                  }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Product Information & Actions */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Product Title */}
              <h1
                style={{
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.55rem)',
                  fontWeight: 800,
                  color: '#0F2444',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.18,
                  margin: '0 0 6px',
                }}
              >
                {activeProduct.name}
              </h1>

              {/* Subtitle / Tagline */}
              <p
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 600,
                  color: '#4B5563',
                  margin: '0 0 10px',
                  lineHeight: 1.4,
                }}
              >
                {activeProduct.heroTagline || activeProduct.tagline}
              </p>

              {/* Concise Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#374151',
                  lineHeight: 1.55,
                  margin: '0 0 18px',
                  maxWidth: '620px',
                }}
              >
                {activeProduct.heroDesc || activeProduct.shortDesc}
              </p>

              {/* 4 Round Navy Icon Badges Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                {(activeProduct.iconBadges || []).map((badge, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: '#0F2444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#FFFFFF',
                      }}
                    >
                      {getBadgeIcon(badge.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.77rem',
                        fontWeight: 600,
                        color: '#1F2937',
                        lineHeight: 1.2,
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Available Pack Sizes */}
              <div style={{ marginBottom: '18px' }}>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#0F2444',
                    margin: '0 0 9px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Available Pack Sizes
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {allPackOptions.map((pack) => {
                    const isSelected = selectedPack === pack;
                    return (
                      <button
                        key={pack}
                        type="button"
                        onClick={() => setSelectedPack(pack)}
                        style={{
                          padding: '9px 24px',
                          minWidth: '82px',
                          textAlign: 'center',
                          borderRadius: '6px',
                          fontSize: '0.94rem',
                          fontWeight: isSelected ? 700 : 600,
                          border: isSelected ? '2px solid #0F2444' : '1.5px solid #CBD5E1',
                          backgroundColor: isSelected ? '#0F2444' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#0F2444',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxShadow: isSelected ? '0 2px 8px rgba(15, 36, 68, 0.18)' : 'none',
                        }}
                      >
                        {pack}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fragrance Options if applicable */}
              {allScentOptions && allScentOptions.length > 1 && (
                <div style={{ marginBottom: '18px' }}>
                  <div
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      marginBottom: '7px',
                    }}
                  >
                    Select Fragrance:{' '}
                    <span style={{ color: '#0F2444', fontWeight: 800 }}>{selectedScent}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {allScentOptions.map((scent) => {
                      const isSelected = selectedScent === scent;
                      return (
                        <button
                          key={scent}
                          type="button"
                          onClick={() => setSelectedScent(scent)}
                          style={{
                            padding: '5px 12px',
                            borderRadius: '6px',
                            fontSize: '0.82rem',
                            fontWeight: isSelected ? 700 : 500,
                            border: isSelected ? '1.5px solid #0284C7' : '1px solid #E2E8F0',
                            backgroundColor: isSelected ? '#EFF6FF' : '#FFFFFF',
                            color: isSelected ? '#0284C7' : '#475569',
                            cursor: 'pointer',
                          }}
                        >
                          {scent}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Buttons: Green 'WhatsApp Enquiry' */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                {/* Green WhatsApp Enquiry Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#0D8249',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    border: 'none',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 3px 10px rgba(13, 130, 73, 0.26)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A683A';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0D8249';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.73 7.33C8.55 7.33 8.26 7.4 8.01 7.67C7.76 7.94 7.07 8.59 7.07 9.91C7.07 11.23 8.03 12.51 8.16 12.69C8.3 12.87 10.05 15.58 12.74 16.74C13.38 17.02 13.88 17.18 14.27 17.31C14.91 17.51 15.49 17.48 15.95 17.41C16.46 17.34 17.52 16.77 17.74 16.14C17.97 15.52 17.97 14.98 17.9 14.87C17.83 14.76 17.65 14.7 17.37 14.56C17.09 14.42 15.74 13.75 15.49 13.66C15.24 13.57 15.06 13.52 14.87 13.8C14.69 14.07 14.16 14.7 14 14.88C13.84 15.07 13.68 15.09 13.4 14.95C13.12 14.81 12.22 14.52 11.16 13.57C10.33 12.83 9.77 11.92 9.61 11.64C9.45 11.37 9.59 11.22 9.73 11.08C9.86 10.96 10.02 10.75 10.16 10.59C10.3 10.43 10.35 10.31 10.44 10.13C10.53 9.95 10.49 9.79 10.42 9.65C10.35 9.51 9.8 8.15 9.57 7.6C9.35 7.07 9.12 7.14 8.95 7.13L8.73 7.33Z" />
                  </svg>
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Direct Facility Contact Desk */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  color: '#64748B',
                }}
              >
                <Phone size={14} color="#0284C7" />
                <span>
                  Direct manufacturer desk:{' '}
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    style={{ color: '#0F2444', fontWeight: 700, textDecoration: 'none' }}
                  >
                    {COMPANY_INFO.phone} (Nakul Sakhuja)
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Information Tabs: Directions, Safety, Specs */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Modern Pill Tab Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { id: 'directions', label: 'How to Use / Directions' },
              { id: 'safety', label: 'Safety & Handling' },
              { id: 'specs', label: 'Formulation Specifications' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '9999px',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#FFFFFF' : '#475569',
                    backgroundColor: isActive ? '#16195E' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isActive ? '#16195E' : '#CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Panel 1: Directions */}
          {activeTab === 'directions' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px 30px',
                border: '1px solid #E8EEF5',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16195E', marginBottom: '20px' }}>
                Application Directions & Dosage
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeProduct.directions &&
                  activeProduct.directions.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: '#00B189',
                          color: '#FFFFFF',
                          fontSize: '0.88rem',
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
                      <div style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.6 }}>{step}</div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Tab Panel 2: Safety & Handling */}
          {activeTab === 'safety' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px 30px',
                border: '1px solid #E8EEF5',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16195E', marginBottom: '20px' }}>
                Safety Precautions & Storage Advice
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {activeProduct.safetyAdvice &&
                  activeProduct.safetyAdvice.map((advice, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <ShieldCheck size={18} color="#00B189" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.6 }}>{advice}</div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Tab Panel 3: Specifications */}
          {activeTab === 'specs' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px 30px',
                border: '1px solid #E8EEF5',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16195E', marginBottom: '20px' }}>
                Technical & Batch Specifications
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '14px',
                }}
              >
                {[
                  { label: 'Brand', value: 'Clean Go' },
                  { label: 'Manufacturer', value: 'KCN UDYOG' },
                  { label: 'Manufacturing Facility', value: 'Sector-3, Vasundhara, Ghaziabad' },
                  { label: 'Available Sizes', value: '500 ml, 1 Litre, 5 Litre Can' },
                  { label: 'Active Fragrance', value: selectedScent },
                  { label: 'Active Rating', value: '★ 4.9 Verified Formulation' },
                  { label: 'Shelf Life', value: '24 Months from MFG Date' },
                  { label: 'Packaging Format', value: 'Heavy-Duty 5L HDPE Cans & Retail Bottles' },
                ].map((spec, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FAF9F6',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #E8EEF5',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#16195E', marginTop: '3px' }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Explore More Clean Go Formulations */}
      <section style={{ paddingTop: '20px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#00B189',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                COMPLETE CLEANING LINE
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#16195E',
                  margin: '4px 0 0',
                }}
              >
                More Formulations by Clean Go
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="btn btn-outline"
              style={{
                padding: '9px 18px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderRadius: '9999px',
                borderColor: '#CBD5E1',
                color: '#16195E',
              }}
            >
              <span>View All 6 Products →</span>
            </button>
          </div>

          {/* Related Products Grid: 2-col on mobile, multi-col on desktop */}
          <div className="borngood-products-grid">
            {relatedProducts.map((relProd) => (
              <div
                key={relProd.id}
                className="borngood-card"
                onClick={() => onSelectProduct(relProd)}
              >
                <div className="borngood-card-stage">
                  <img src={relProd.image} alt={relProd.name} loading="lazy" />
                </div>

                <div className="borngood-card-body" style={{ textAlign: 'center' }}>
                  <div>
                    <h3 className="borngood-card-title">
                      {relProd.name}
                    </h3>
                  </div>
                  <div className="borngood-card-actions">
                    <button
                      className="btn btn-sage borngood-btn-order"
                      style={{ width: '100%' }}
                    >
                      View Formulation →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
