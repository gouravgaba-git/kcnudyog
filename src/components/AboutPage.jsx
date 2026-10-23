import React from 'react';
import {
  ShieldCheck,
  Truck,
  Tag,
  Users,
  Compass,
  FileText,
  MapPin,
  Building2,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/productsData';

export default function AboutPage({ onExploreProducts, onOpenCatalogModal, onNavigateToContact }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul Sakhuja, I am reaching out through kcnudyog.com to learn more about KCN Udyog and Clean Go products.'
  )}`;

  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', paddingBottom: '70px' }}>
      {/* Reference-Inspired Hero Showcase Banner */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            minHeight: '440px',
          }}
        >
          {/* Left Column: Content */}
          <div
            style={{
              padding: 'clamp(32px, 4.5vw, 56px) clamp(24px, 4vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              zIndex: 2,
            }}
          >
            {/* Small Top Brand Identity */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <Logo size="xs" showTagline={false} />
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 5.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#0F2444',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 8px',
              }}
            >
              About KCN Udyog
            </h1>

            {/* Subheading */}
            <h2
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
                fontWeight: 700,
                color: '#0F2444',
                margin: '0 0 14px',
                lineHeight: 1.35,
              }}
            >
              Cleaning Solutions for a Brighter Tomorrow.
            </h2>

            {/* Body Copy Exactly from Reference */}
            <p
              style={{
                fontSize: '0.96rem',
                color: '#374151',
                lineHeight: 1.65,
                margin: '0 0 28px',
                maxWidth: '560px',
              }}
            >
              KCN Udyog (Clean Go) is committed to providing high-quality cleaning solutions for
              homes, workplaces and institutions. We believe every space deserves to be clean, safe
              and healthy. Our products are designed to deliver effective cleaning, better hygiene
              and a fresher environment.
            </p>

            {/* 4 Golden Circular Badges in a Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              {[
                { icon: ShieldCheck, label: 'Quality\nProducts' },
                { icon: Truck, label: 'Reliable\nSupply' },
                { icon: Tag, label: 'Competitive\nPricing' },
                { icon: Users, label: 'Customer\nFocus' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#FFBE1A',
                        color: '#0F2444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(255, 190, 26, 0.35)',
                      }}
                    >
                      <IconComp size={19} strokeWidth={2.4} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#0F2444',
                        lineHeight: 1.2,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Factory Conveyor Image with Yellow Angle Accent and Floating Vision/Mission Card */}
          <div
            style={{
              position: 'relative',
              minHeight: '440px',
              backgroundImage: 'url(/images/about-conveyor-facility.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(24px, 4vw, 44px)',
              overflow: 'hidden',
            }}
          >
            {/* Visual Angled Divider on Left Border of Right Column */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '42px',
                background: 'linear-gradient(135deg, #FFBE1A 0%, #F59E0B 100%)',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                zIndex: 3,
              }}
            />

            {/* Floating Dark Navy Vision/Mission Card */}
            <div
              style={{
                backgroundColor: '#0F2444',
                borderRadius: '16px',
                padding: 'clamp(22px, 3vw, 28px)',
                maxWidth: '400px',
                width: '100%',
                boxShadow: '0 16px 36px rgba(15, 36, 68, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                zIndex: 2,
                position: 'relative',
              }}
            >
              {/* Item 1: Our Vision */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFBE1A',
                    color: '#0F2444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(255, 190, 26, 0.35)',
                  }}
                >
                  <Compass size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 4px',
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#E2E8F0',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    To make clean and hygienic spaces accessible everywhere.
                  </p>
                </div>
              </div>

              {/* Subtle Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  marginBottom: '20px',
                }}
              />

              {/* Item 2: Our Mission */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFBE1A',
                    color: '#0F2444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(255, 190, 26, 0.35)',
                  }}
                >
                  <FileText size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 4px',
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#E2E8F0',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    To deliver effective, affordable and reliable cleaning solutions for a
                    healthier tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grounded Facility Overview & Operating Principles */}
      <section style={{ paddingTop: '48px', paddingBottom: '32px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* 2-Column Operational Detail */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              alignItems: 'stretch',
              marginBottom: '48px',
            }}
          >
            {/* Manufacturing Profile Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E8EEF5',
                padding: 'clamp(24px, 3.5vw, 36px)',
                boxShadow: '0 4px 16px rgba(15, 36, 68, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: '#EFF6FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0F2444',
                    }}
                  >
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#0F2444',
                        margin: 0,
                      }}
                    >
                      Manufacturing Unit
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      KCN Udyog Production Facility
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <MapPin size={17} color="#00B189" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                      <strong>Facility Location:</strong> {COMPANY_INFO.address}, {COMPANY_INFO.state}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={17} color="#00B189" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                      <strong>Founder & Operations:</strong> {COMPANY_INFO.person}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <PackageCheck size={17} color="#00B189" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                      <strong>Packaging Versatility:</strong> Available in 500ml, 1 Litre, and
                      heavy-duty 5 Litre commercial cans.
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Truck size={17} color="#00B189" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                      <strong>Logistics Coverage:</strong> Direct dispatch across Ghaziabad, Noida,
                      Greater Noida, and Delhi NCR sectors.
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #F1F5F9' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#0D8249',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 3px 10px rgba(13, 130, 73, 0.22)',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.73 7.33C8.55 7.33 8.26 7.4 8.01 7.67C7.76 7.94 7.07 8.59 7.07 9.91C7.07 11.23 8.03 12.51 8.16 12.69C8.3 12.87 10.05 15.58 12.74 16.74C13.38 17.02 13.88 17.18 14.27 17.31C14.91 17.51 15.49 17.48 15.95 17.41C16.46 17.34 17.52 16.77 17.74 16.14C17.97 15.52 17.97 14.98 17.9 14.87C17.83 14.76 17.65 14.7 17.37 14.56C17.09 14.42 15.74 13.75 15.49 13.66C15.24 13.57 15.06 13.52 14.87 13.8C14.69 14.07 14.16 14.7 14 14.88C13.84 15.07 13.68 15.09 13.4 14.95C13.12 14.81 12.22 14.52 11.16 13.57C10.33 12.83 9.77 11.92 9.61 11.64C9.45 11.37 9.59 11.22 9.73 11.08C9.86 10.96 10.02 10.75 10.16 10.59C10.3 10.43 10.35 10.31 10.44 10.13C10.53 9.95 10.49 9.79 10.42 9.65C10.35 9.51 9.8 8.15 9.57 7.6C9.35 7.07 9.12 7.14 8.95 7.13L8.73 7.33Z" />
                  </svg>
                  <span>Connect with Nakul Sakhuja</span>
                </a>
              </div>
            </div>

            {/* Clean Go Product Line Overview */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E8EEF5',
                padding: 'clamp(24px, 3.5vw, 36px)',
                boxShadow: '0 4px 16px rgba(15, 36, 68, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0F2444',
                    margin: '0 0 10px',
                  }}
                >
                  Clean Go Formulations Range
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: 1.6, margin: '0 0 16px' }}>
                  Specialized hygiene formulations batch-tested to provide consistent viscosity, high
                  dirt removal, and surface safety:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    'Toilet Cleaner',
                    'Dish Wash Liquid',
                    'Floor Cleaner',
                    'Glass Cleaner',
                    'Hand Wash',
                    'White Phenyle',
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '9px 12px',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: '#0F2444',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ color: '#00B189', fontWeight: 800 }}>•</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '18px',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="button"
                  onClick={onExploreProducts}
                  style={{
                    backgroundColor: '#FFBE1A',
                    color: '#0F2444',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 10px rgba(255, 190, 26, 0.28)',
                  }}
                >
                  <span>Explore Product Range</span>
                  <ArrowRight size={16} />
                </button>

                {onOpenCatalogModal && (
                  <button
                    type="button"
                    onClick={onOpenCatalogModal}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#0F2444',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      border: '1.5px solid #CBD5E1',
                      cursor: 'pointer',
                    }}
                  >
                    Request Bulk Pricing
                  </button>
                )}

                {onNavigateToContact && (
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    style={{
                      backgroundColor: '#F8FAFC',
                      color: '#0F2444',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      border: '1.5px solid #CBD5E1',
                      cursor: 'pointer',
                    }}
                  >
                    Contact Facility
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
