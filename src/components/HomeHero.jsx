import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  PackageCheck,
  MessageCircle,
  FileText,
  Phone,
  Droplets,
  Flame,
  HeartHandshake,
  Wind,
  Zap,
  Shield,
  Recycle,
  Star,
  CheckCircle2,
} from 'lucide-react';
import {
  PRODUCTS,
  COMPANY_INFO,
  CIRCLE_CATEGORIES,
  TRUST_RIBBON_ITEMS,
  TRANSPARENCY_PILLARS,
  TESTIMONIALS,
  LIFESTYLE_SOLUTIONS,
} from '../data/productsData';

export default function HomeHero({ onExploreProducts, onOpenCatalogModal, onSelectProduct, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCircleIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={22} color="#00B189" />;
      case 'Droplets':
        return <Droplets size={22} color="#0284C7" />;
      case 'Flame':
        return <Flame size={22} color="#D97706" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} color="#159C79" />;
      case 'HeartHandshake':
        return <HeartHandshake size={22} color="#10B981" />;
      case 'PackageCheck':
        return <PackageCheck size={22} color="#2B176F" />;
      default:
        return <Sparkles size={22} color="#00B189" />;
    }
  };

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Wind':
        return <Wind size={26} color="#0284C7" />;
      case 'Zap':
        return <Zap size={26} color="#D97706" />;
      case 'Shield':
        return <Shield size={26} color="#00B189" />;
      case 'Recycle':
        return <Recycle size={26} color="#159C79" />;
      default:
        return <ShieldCheck size={26} color="#00B189" />;
    }
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : selectedCategory === 'bulk-commercial'
      ? PRODUCTS
      : selectedCategory === 'handwash'
      ? PRODUCTS.filter((p) => p.id === 'handwash')
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  const whatsappGeneralUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am interested in exploring your Clean Go cleaning products line.'
  )}`;

  return (
    <div style={{ backgroundColor: '#FAF9F6', overflow: 'hidden' }}>
      {/* 1. Born Good Circular Category Strip */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8EEF5',
          padding: '12px 0 10px',
        }}
      >
        <div className="container">
          <div className="circle-cat-strip">
            {CIRCLE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const el = document.getElementById('bestsellers-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`circle-cat-item ${isActive ? 'active' : ''}`}
                >
                  <div
                    className="circle-cat-bubble"
                    style={{
                      backgroundColor: isActive ? cat.bg : '#FFFFFF',
                      borderColor: isActive ? cat.color : '#E2E8F0',
                    }}
                  >
                    {getCircleIcon(cat.icon)}
                  </div>
                  <span
                    className="circle-cat-label"
                    style={{ color: isActive ? cat.color : '#334155' }}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Hero Section - Born Good Warmth & Clean Typography */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(40px, 6vw, 76px)',
          paddingBottom: 'clamp(48px, 7vw, 84px)',
          background: 'linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%)',
        }}
      >
        {/* Soft Ambient Pastel Glows */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '8%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(0, 177, 137, 0.08) 0%, rgba(250, 249, 246, 0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(142, 185, 229, 0.1) 0%, rgba(250, 249, 246, 0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Main Headline from Brand Identity */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.8vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              maxWidth: '920px',
              margin: '0 auto 16px',
            }}
          >
            <span style={{ color: '#0F2444', display: 'block' }}>
              CLEAN SPACES.
            </span>
            <span style={{ color: '#F59E0B', display: 'block' }}>
              BETTER LIVING.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
              fontWeight: 500,
              color: '#1E293B',
              lineHeight: 1.5,
              maxWidth: '680px',
              margin: '0 auto 10px',
            }}
          >
            Reliable cleaning solutions for homes, workplaces and institutions.
          </p>

          {/* Brand Tagline Accent with curved underline */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                fontFamily: "'Caveat', cursive, sans-serif",
                fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                fontWeight: 700,
                color: '#0F2444',
                fontStyle: 'italic',
                letterSpacing: '0.01em',
                lineHeight: 1.1,
              }}
            >
              Har jagah saaf-safai.
            </span>
            <svg
              width="170"
              height="14"
              viewBox="0 0 170 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: '-2px' }}
              aria-hidden="true"
            >
              <path
                d="M4 10C50 4 120 4 166 8"
                stroke="#F59E0B"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Hero CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={onExploreProducts}
              className="btn btn-sage"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '9999px',
              }}
            >
              <span>Explore Formulations</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onOpenCatalogModal}
              className="btn btn-outline"
              style={{
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '9999px',
                borderColor: '#CBD5E1',
                color: '#16195E',
                backgroundColor: '#FFFFFF',
              }}
            >
              <FileText size={17} color="#16195E" />
              <span>Get Price List & Catalogue</span>
            </button>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 3vw, 36px)',
              flexWrap: 'wrap',
              fontSize: '0.88rem',
              color: '#475569',
              fontWeight: 600,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <PackageCheck size={16} color="#0284C7" />
              <span>Available in 500ml & 5L Commercial Cans</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#0284C7" />
              <span>Direct Manufacturer Supply</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={16} color="#0284C7" />
              <span>Supply Across Delhi NCR & Pan India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Born Good Iconic Trust Ribbon (#8EB9E5 Sky Ribbon) */}
      <section className="trust-ribbon">
        <div className="container">
          <div className="trust-ribbon-content">
            {TRUST_RIBBON_ITEMS.map((item, idx) => (
              <div key={idx} className="trust-ribbon-item">
                <CheckCircle2 size={16} color="#FFFFFF" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Evergreen Classics / Most Loved Formulations Product Showcase */}
      <section
        id="bestsellers-grid"
        style={{
          paddingTop: 'clamp(48px, 7vw, 84px)',
          paddingBottom: 'clamp(48px, 7vw, 84px)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#00B189',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              EVERGREEN CLASSICS
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                color: '#16195E',
                letterSpacing: '-0.025em',
                marginTop: '6px',
                marginBottom: '12px',
              }}
            >
              Meet Our Most Loved Formulations
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Crafted with high active concentrations, refreshing scents, and surface-safe pH
              balances. Available in retail packs and heavy-duty 5L commercial cans.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            {filteredProducts.map((prod) => {
              const whatsappOrderUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                `Hello KCN Udyog, I would like to order *${prod.name}* (500ml / 5L Commercial Can). Please share pricing and dispatch details.`
              )}`;

              return (
                <div
                  key={prod.id}
                  className="borngood-card"
                  onClick={() => onSelectProduct(prod)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Top Badges */}
                  <div className="card-active-badge">
                    <Sparkles size={12} color="#0284C7" />
                    <span>{prod.activeBadge || 'Active Formula'}</span>
                  </div>

                  <div className="card-refill-badge">
                    <span>5L Commercial Can</span>
                  </div>

                  {/* Bottle Showcase Stage */}
                  <div className="borngood-card-stage">
                    <img src={prod.image} alt={prod.name} />
                  </div>

                  {/* Card Content */}
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
                            <Star
                              key={i}
                              size={13}
                              fill="#F59E0B"
                              color="#F59E0B"
                              strokeWidth={0}
                            />
                          ))}
                        </div>
                        <span className="star-rating-count">
                          {prod.rating || '4.9'} ({prod.reviewCount || '140+'} reviews)
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 800,
                          color: '#16195E',
                          lineHeight: 1.35,
                          marginBottom: '8px',
                        }}
                      >
                        {prod.name}
                      </h3>

                      {/* Short Benefit Statement */}
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

          {/* Bottom Grid Strip */}
          <div
            style={{
              marginTop: '36px',
              padding: '20px 24px',
              backgroundColor: '#FAF9F6',
              borderRadius: '16px',
              border: '1px solid #E8EEF5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, color: '#16195E', fontSize: '0.98rem' }}>
                Need wholesale supply or custom institutional cartons?
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '2px' }}>
                We deliver direct 5L cans and bulk master boxes to hotels, banquets, clinics & offices.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenCatalogModal}
                className="btn btn-navy"
                style={{
                  padding: '9px 18px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                }}
              >
                Request Price List
              </button>

              <button
                onClick={onExploreProducts}
                className="btn btn-sage"
                style={{
                  padding: '9px 18px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                }}
              >
                <span>View All 6 Products →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Toxins Out, Performance In" - Born Good Signature Philosophy Grid */}
      <section
        style={{
          paddingTop: 'clamp(48px, 7vw, 84px)',
          paddingBottom: 'clamp(48px, 7vw, 84px)',
          backgroundColor: '#FAF9F6',
          borderTop: '1px solid #E8EEF5',
          borderBottom: '1px solid #E8EEF5',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#00B189',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              TRANSPARENCY & INTEGRITY
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                color: '#16195E',
                letterSpacing: '-0.025em',
                marginTop: '6px',
                marginBottom: '12px',
              }}
            >
              Toxins Out. Performance In.
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Most commercial cleaning products either smell like choking acid or are watered down with
              fillers. Here is how KCN Udyog formulates differently.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
            }}
          >
            {TRANSPARENCY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  border: '1px solid #E8EEF5',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 30px -6px rgba(0, 177, 137, 0.12)';
                  e.currentTarget.style.borderColor = '#00B189';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.03)';
                  e.currentTarget.style.borderColor = '#E8EEF5';
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {getPillarIcon(pillar.icon)}
                </div>

                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#00B189',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '4px',
                  }}
                >
                  {pillar.tag}
                </div>

                <h3
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    color: '#16195E',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#64748B',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.subtitle}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The 5L Forever Refill & Bulk Care Banner (Born Good Sustainable Refill Concept) */}
      <section
        style={{
          paddingTop: 'clamp(48px, 6vw, 76px)',
          paddingBottom: 'clamp(48px, 6vw, 76px)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #16195E 0%, #0F1242 100%)',
              borderRadius: '28px',
              padding: 'clamp(32px, 5vw, 60px)',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(22, 25, 94, 0.25)',
            }}
          >
            {/* Soft decorative background glows */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 177, 137, 0.25) 0%, rgba(22, 25, 94, 0) 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '36px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: 'rgba(2, 132, 199, 0.2)',
                    color: '#BAE6FD',
                    border: '1px solid rgba(2, 132, 199, 0.4)',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    display: 'inline-block',
                    marginBottom: '16px',
                  }}
                >
                  5L COMMERCIAL & INSTITUTIONAL SUPPLY
                </span>

                <h2
                  style={{
                    fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '16px',
                  }}
                >
                  Heavy-Duty Cleaning Power. Direct Factory Pricing.
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    color: '#CBD5E1',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  Formulated for high-frequency daily hygiene in offices, banquets, restaurants, hospitals,
                  schools, and large households. Our sturdy 5 Litre commercial cans deliver maximum
                  cleaning strength at economical manufacturer-direct pricing.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '14px',
                  }}
                >
                  <button
                    onClick={onOpenCatalogModal}
                    className="btn btn-sage"
                    style={{
                      padding: '12px 24px',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      borderRadius: '12px',
                    }}
                  >
                    <span>Request 5L Commercial Rates</span>
                    <ArrowRight size={17} />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                      'Hello Nakul, I want to inquire about ordering 5L Cans in bulk for my facility/home.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      padding: '12px 22px',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      borderRadius: '12px',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <MessageCircle size={17} />
                    <span>WhatsApp Nakul Sakhuja</span>
                  </a>
                </div>
              </div>

              {/* 3 Metric Badges */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '18px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 177, 137, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Recycle size={24} color="#6EE7B7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#6EE7B7' }}>
                      Sturdy 5L HDPE Cans
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                      Commercial-grade packaging designed for easy handling and high-volume usage
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '18px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(142, 185, 229, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Zap size={24} color="#8EB9E5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#8EB9E5' }}>
                      Lower Cost Per Liter
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                      Cut retail packaging markup by buying manufacturer-direct in bulk
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '18px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(251, 191, 36, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Truck size={24} color="#FDE68A" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FDE68A' }}>
                      Reliable Local Supply
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                      Direct batch deliveries across Ghaziabad, Noida, and Delhi NCR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Solutions by Space / Room (Lifestyle Section) */}
      <section
        style={{
          paddingTop: 'clamp(48px, 7vw, 84px)',
          paddingBottom: 'clamp(48px, 7vw, 84px)',
          backgroundColor: '#FAF9F6',
          borderTop: '1px solid #E8EEF5',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#00B189',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              CLEANING BY SPACE
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                color: '#16195E',
                letterSpacing: '-0.025em',
                marginTop: '6px',
                marginBottom: '12px',
              }}
            >
              Formulated for Every Corner of Your Life
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Whether it is greasy cookware, hard-water limescale, or mirror-finish glass, we have an
              exact chemical balance for each surface.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
            }}
          >
            {LIFESTYLE_SOLUTIONS.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  border: '1px solid #E8EEF5',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#00B189';
                  e.currentTarget.style.boxShadow = '0 16px 28px -6px rgba(0, 177, 137, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E8EEF5';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.03)';
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: item.accentColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '8px',
                    }}
                  >
                    {item.room}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#16195E',
                      lineHeight: 1.3,
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const matched = PRODUCTS.find((p) => p.id === item.productId);
                    if (matched) onSelectProduct(matched);
                    else onExploreProducts();
                  }}
                  className="btn btn-outline"
                  style={{
                    padding: '10px 16px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    borderColor: '#E2E8F0',
                    color: '#16195E',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.actionText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "The Good Feedback" - Born Good Signature Testimonial Section */}
      <section
        style={{
          paddingTop: 'clamp(48px, 7vw, 84px)',
          paddingBottom: 'clamp(48px, 7vw, 84px)',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E8EEF5',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#00B189',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              COMMUNITY LOVE & PROOF
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                color: '#16195E',
                letterSpacing: '-0.025em',
                marginTop: '6px',
                marginBottom: '12px',
              }}
            >
              The Good Feedback
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Real reviews from homemakers, hospital administrators, and banquet managers who count on
              Clean Go every day.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                style={{
                  backgroundColor: '#FAF9F6',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  border: '1px solid #E8EEF5',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: '#334155',
                      lineHeight: 1.65,
                      marginBottom: '20px',
                      fontStyle: 'italic',
                    }}
                  >
                    "{t.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: '#16195E', fontSize: '0.95rem' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '1px' }}>
                      {t.role} • {t.location}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: '#DCFCE7',
                      color: '#15803D',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Direct Contact & Fast Dispatch Hub */}
      <section
        style={{
          paddingTop: 'clamp(40px, 5vw, 64px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          backgroundColor: '#FAF9F6',
          borderTop: '1px solid #E8EEF5',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 800,
              color: '#16195E',
              marginBottom: '12px',
            }}
          >
            Ready to Experience Clean Go?
          </h2>
          <p style={{ fontSize: '0.96rem', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
            Reach out directly to Nakul Sakhuja for retail packs, 5L institutional cans, regional
            distributorship terms, or price lists.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn btn-outline"
              style={{
                padding: '12px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '9999px',
                borderColor: '#CBD5E1',
                color: '#16195E',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Phone size={16} color="#00B189" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sage"
              style={{
                padding: '12px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-navy"
              style={{
                padding: '12px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '9999px',
              }}
            >
              <span>Visit Facility Page →</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
