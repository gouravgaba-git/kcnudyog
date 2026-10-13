import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Handshake, FileText, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function HomeExploreHub({ onNavigate, onOpenCatalogModal }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello KCN Udyog, I am interested in your Clean Go cleaning products line.'
  )}`;

  return (
    <section
      style={{
        paddingTop: 'clamp(48px, 6vw, 72px)',
        paddingBottom: 'clamp(48px, 6vw, 72px)',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: '#EEF2FF',
              color: '#2B176F',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={13} color="#2B176F" />
            <span>Discover More About Clean Go</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#2B176F',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}
          >
            Engineered for Homes & Establishments
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Explore how our formulations protect surfaces, why retailers trust us, or contact our
            team directly for wholesale rates.
          </p>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Pathway 1: Room Solutions */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#168DC0';
              e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(22, 141, 192, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: '#E0F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={24} color="#0284C7" />
            </div>

            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#0284C7', textTransform: 'uppercase' }}>
              ROOM-BY-ROOM HYGIENE
            </span>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2B176F', margin: '6px 0 10px' }}>
              Everyday Cleaning Solutions
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, marginBottom: '24px', flexGrow: 1 }}>
              Targeted chemistry for greasy kitchens, limescale in bathrooms, streak-free glass facades,
              and shining floors.
            </p>

            <button
              onClick={() => onNavigate('solutions')}
              className="btn btn-outline"
              style={{
                padding: '11px 16px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderColor: '#CBD5E1',
                color: '#168DC0',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
              }}
            >
              <span>Explore Room Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pathway 2: Why Choose Us */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#159C79';
              e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(21, 156, 121, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: '#DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <ShieldCheck size={24} color="#159C79" />
            </div>

            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#159C79', textTransform: 'uppercase' }}>
              DIRECT MANUFACTURING
            </span>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2B176F', margin: '6px 0 10px' }}>
              Why Choose KCN UDYOG?
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, marginBottom: '24px', flexGrow: 1 }}>
              Dual 5L commercial & retail packaging, rigorous Ghaziabad batch control, and quick Delhi NCR
              dispatch turnaround.
            </p>

            <button
              onClick={() => onNavigate('why-us')}
              className="btn btn-outline"
              style={{
                padding: '11px 16px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderColor: '#CBD5E1',
                color: '#159C79',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
              }}
            >
              <span>Learn Our Strengths</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pathway 3: Distributor & Partner */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#2B176F';
              e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(43, 23, 111, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Handshake size={24} color="#2B176F" />
            </div>

            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#2B176F', textTransform: 'uppercase' }}>
              COMMERCIAL PARTNERSHIP
            </span>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2B176F', margin: '6px 0 10px' }}>
              Stock Clean Go Products
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, marginBottom: '24px', flexGrow: 1 }}>
              Direct factory pricing with high margins for shopkeepers, supermarkets, regional wholesalers,
              and facility managers.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-outline"
              style={{
                padding: '11px 16px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderColor: '#CBD5E1',
                color: '#2B176F',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
              }}
            >
              <span>Distributor Hub</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Action Strip */}
        <div
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={20} color="#168DC0" />
            <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1E293B' }}>
              Need complete volume specs and current wholesale price brackets?
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenCatalogModal}
              className="btn btn-navy"
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <span>Get Price List</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
