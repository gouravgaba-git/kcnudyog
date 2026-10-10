import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, FileDown, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function CatalogModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    products: {
      dishwash: true,
      handwash: true,
      bathroom: true,
      floor: true,
    },
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [errorMessage, setErrorMessage] = useState('');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone / WhatsApp number.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleProductToggle = (key) => {
    setFormData((prev) => ({
      ...prev,
      products: {
        ...prev.products,
        [key]: !prev.products[key],
      },
    }));
  };

  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hello Nakul, I submitted a price list request on kcnudyog.com. My name is ${formData.name} (${formData.phone}). Please share the product rate sheet.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '16px',
        animation: 'fadeIn 150ms ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '480px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border-subtle)',
          padding: 'clamp(20px, 4vw, 32px)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle size={32} style={{ color: 'var(--brand-green)' }} />
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-navy)', marginBottom: '8px' }}>
              Request Received!
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.phone}</strong> with the product price list.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '12px', fontSize: '0.95rem' }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <button
                onClick={() => {
                  setStatus('idle');
                  onClose();
                }}
                className="btn btn-outline"
                style={{ padding: '10px' }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--brand-blue)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Direct Pricing & Catalog
              </span>
              <h3 id="modal-title" style={{ fontSize: '1.35rem', color: 'var(--brand-navy)', marginTop: '4px' }}>
                Get Product Price List
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Enter your contact details to receive our official product rates and catalog.
              </p>
            </div>

            {errorMessage && (
              <div
                style={{
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  color: '#B91C1C',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  marginBottom: '16px',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--brand-navy)',
                    marginBottom: '6px',
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--brand-navy)',
                    marginBottom: '6px',
                  }}
                >
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Products selection */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--brand-navy)',
                    marginBottom: '8px',
                  }}
                >
                  Products Interested In:
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                  }}
                >
                  {[
                    { key: 'dishwash', label: 'Dishwash Liquid' },
                    { key: 'handwash', label: 'Handwash' },
                    { key: 'bathroom', label: 'Bathroom Cleaner' },
                    { key: 'floor', label: 'Floor Cleaner' },
                  ].map((p) => (
                    <label
                      key={p.key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        padding: '6px 8px',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '6px',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.products[p.key]}
                        onChange={() => handleProductToggle(p.key)}
                        style={{ accentColor: 'var(--brand-blue)' }}
                      />
                      <span>{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-navy"
                style={{
                  padding: '12px',
                  fontSize: '1rem',
                  marginTop: '8px',
                  opacity: status === 'submitting' ? 0.7 : 1,
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <FileDown size={18} />
                    <span>Send Price List Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
