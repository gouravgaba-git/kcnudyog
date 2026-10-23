import React, { useState, useRef } from 'react';
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  PRODUCTS,
  COMPANY_INFO,
  CIRCLE_CATEGORIES,
  TRUST_RIBBON_ITEMS,
  TESTIMONIALS,
  LIFESTYLE_SOLUTIONS,
} from '../data/productsData';

export default function HomeHero({ onExploreProducts, onOpenCatalogModal, onSelectProduct, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const catStripRef = useRef(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const reviewsScrollRef = useRef(null);

  const handleReviewScroll = () => {
    if (reviewsScrollRef.current) {
      const scrollLeft = reviewsScrollRef.current.scrollLeft;
      const cardWidth = reviewsScrollRef.current.offsetWidth * 0.82;
      const index = Math.round(scrollLeft / (cardWidth || 1));
      setActiveReviewIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
    }
  };

  const scrollToReview = (index) => {
    setActiveReviewIndex(index);
    if (reviewsScrollRef.current && reviewsScrollRef.current.children[index]) {
      reviewsScrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  const scrollCatStrip = (direction) => {
    if (catStripRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      catStripRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
          padding: '10px 0 8px',
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <div className="circle-cat-wrapper">
            <button
              type="button"
              className="circle-cat-arrow left"
              onClick={() => scrollCatStrip('left')}
              aria-label="Scroll categories left"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="circle-cat-strip" ref={catStripRef}>
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

            <button
              type="button"
              className="circle-cat-arrow right"
              onClick={() => scrollCatStrip('right')}
              aria-label="Scroll categories right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Hero Section - Clean Split Layout */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(28px, 4.5vw, 56px)',
          paddingBottom: 'clamp(32px, 5vw, 64px)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-banner-split">
            {/* Left Column: Brand Statement & Actions */}
            <div className="hero-banner-content">
              <h1 className="hero-main-title">
                <span style={{ color: '#0F2444', display: 'block' }}>
                  CLEAN SPACES.
                </span>
                <span style={{ color: '#F59E0B', display: 'block' }}>
                  BETTER LIVING.
                </span>
              </h1>

              <p className="hero-subtitle">
                Reliable cleaning solutions for homes, workplaces and institutions.
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}
              >
                <span className="hero-script-tag">
                  Har jagah saaf-safai.
                </span>
                <svg
                  width="145"
                  height="12"
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

              {/* Action Buttons */}
              <div
                className="hero-banner-ctas"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={onExploreProducts}
                  className="hero-btn-primary"
                  id="hero-explore-products-btn"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Hello KCN Udyog, I am interested in Clean Go cleaning products.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-enquiry"
                  id="hero-bulk-enquiry-btn"
                >
                  <MessageCircle size={17} color="#0F2444" />
                  <span>Bulk Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Column: 6 Product Images Placed Closely Side-by-Side */}
            <div className="hero-products-showcase">
              <div className="hero-products-row">
                <img
                  src="/images/products-tight/cleango-toilet-cleaner.webp"
                  alt="Clean Go Toilet Cleaner"
                  className="hero-product-bottle"
                  width="387"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
                <img
                  src="/images/products-tight/cleango-floor-cleaner.webp"
                  alt="Clean Go Floor Cleaner"
                  className="hero-product-bottle"
                  width="415"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
                <img
                  src="/images/products-tight/cleango-white-phenyle.webp"
                  alt="Clean Go White Phenyle"
                  className="hero-product-bottle"
                  width="343"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
                <img
                  src="/images/products-tight/cleango-glass-cleaner.webp"
                  alt="Clean Go Glass Cleaner"
                  className="hero-product-bottle"
                  width="376"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
                <img
                  src="/images/products-tight/cleango-hand-wash.webp"
                  alt="Clean Go Hand Wash"
                  className="hero-product-bottle"
                  width="390"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
                <img
                  src="/images/products-tight/cleango-dishwash-liquid.webp"
                  alt="Clean Go Dish Wash Liquid"
                  className="hero-product-bottle"
                  width="385"
                  height="600"
                  fetchPriority="high"
                  decoding="async"
                  onClick={onExploreProducts}
                />
              </div>
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

          {/* Product Cards Grid: 2-col on mobile, multi-col on desktop */}
          <div className="borngood-products-grid">
            {filteredProducts.map((prod) => {
              const whatsappOrderUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                `Hello KCN Udyog, I would like to order *${prod.name}* (500ml / 5L Commercial Can). Please share pricing and dispatch details.`
              )}`;

              return (
                <div
                  key={prod.id}
                  className="borngood-card"
                  onClick={() => onSelectProduct(prod)}
                >
                  {/* Bottle Showcase Stage */}
                  <div className="borngood-card-stage">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      decoding="async"
                      width="525"
                      height="700"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="borngood-card-body">
                    <div>
                      {/* Review Stars */}
                      <div className="borngood-card-rating">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              fill="#00B189"
                              color="#00B189"
                              strokeWidth={0}
                            />
                          ))}
                        </div>
                        <span className="star-rating-count">
                          {prod.rating || '4.9'} ({prod.reviewCount || '140+'})
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="borngood-card-title">
                        {prod.name}
                      </h3>

                      {/* Short Benefit Statement - hidden on 2-col mobile cards */}
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

      {/* 5. Solutions by Space / Room (Lifestyle Section) */}
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

      {/* 8. "the good feedback" - Born Good Signature Carousel */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="reviews-title">
            the good feedback
          </h2>

          {/* Horizontal Swipeable Track */}
          <div
            ref={reviewsScrollRef}
            onScroll={handleReviewScroll}
            className="reviews-carousel-track"
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="review-arched-card">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="review-avatar-img"
                  width="88"
                  height="88"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="review-author-name">{t.name}</div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-quote-text">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Centered Pagination Dots */}
          <div className="reviews-pagination-dots">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToReview(idx)}
                className={`reviews-dot ${activeReviewIndex === idx ? 'active' : ''}`}
                aria-label={`Go to review ${idx + 1}`}
              />
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
