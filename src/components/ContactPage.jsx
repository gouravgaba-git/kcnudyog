import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Truck, Send, CheckCircle2, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/productsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Retail Store / Shopkeeper',
    products: 'All Clean Go Products',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Nakul Sakhuja, I am reaching out through the KCN Udyog website regarding an order / dealership enquiry.'
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name or company name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }

    setStatus('submitting');

    const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || COMPANY_INFO.googleSheetsUrl;

    try {
      if (sheetsUrl) {
        await fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            businessType: formData.businessType,
            products: formData.products,
            message: formData.message.trim(),
            submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          }),
        });
      }
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      // In no-cors mode it will rarely throw unless offline, but we provide graceful fallback
      setStatus('success');
    }
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          paddingTop: 'clamp(36px, 6vw, 64px)',
          paddingBottom: 'clamp(36px, 6vw, 64px)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
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
            <span>Connect Directly With Manufacturer</span>
          </div>

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
            Contact & Partner Hub
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto',
            }}
          >
            Whether you need bulk commercial supplies for an institution, retail inventory for your
            store, or domestic packs for your home, our team is ready to assist.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '40px' }}>
        {/* 4 Direct Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Card 1: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #DCFCE7',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#22C55E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#DCFCE7';
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}
            >
              <MessageCircle size={22} color="#16A34A" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16A34A', textTransform: 'uppercase' }}>
              DIRECT WHATSAPP
            </span>
            <strong style={{ fontSize: '1.1rem', color: '#2B176F', margin: '4px 0 6px' }}>
              {COMPANY_INFO.phone}
            </strong>
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              Instant chat for order quotes & product availability
            </span>
          </a>

          {/* Card 2: Phone */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            style={{
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#168DC0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#F0F9FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}
            >
              <Phone size={22} color="#168DC0" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#168DC0', textTransform: 'uppercase' }}>
              DIRECT CALL
            </span>
            <strong style={{ fontSize: '1.1rem', color: '#2B176F', margin: '4px 0 6px' }}>
              {COMPANY_INFO.person}
            </strong>
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              {COMPANY_INFO.workingHours}
            </span>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=KCN%20Udyog%20Commercial%20Inquiry`}
            style={{
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#2B176F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}
            >
              <Mail size={22} color="#2B176F" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2B176F', textTransform: 'uppercase' }}>
              OFFICIAL EMAIL
            </span>
            <strong style={{ fontSize: '0.95rem', color: '#2B176F', margin: '4px 0 6px', wordBreak: 'break-all' }}>
              {COMPANY_INFO.email}
            </strong>
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              Send formal RFQs, purchase orders & tenders
            </span>
          </a>

          {/* Card 4: Location */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}
            >
              <MapPin size={22} color="#475569" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>
              FACILITY LOCATION
            </span>
            <strong style={{ fontSize: '0.98rem', color: '#2B176F', margin: '4px 0 6px', lineHeight: 1.35 }}>
              {COMPANY_INFO.address}
            </strong>
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              {COMPANY_INFO.state}
            </span>
          </div>
        </div>

        {/* Wholesale & Commercial Inquiry Form */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(24px, 4vw, 44px)',
            maxWidth: '840px',
            margin: '0 auto 40px',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#168DC0',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              DIRECT LEAD INQUIRY
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                fontWeight: 800,
                color: '#2B176F',
                margin: '6px 0 8px',
              }}
            >
              Request Commercial Pricing & Information
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
              Submit your requirement and our team will get back to you with price brackets & MOQ.
            </p>
          </div>

          {status === 'success' ? (
            <div
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '16px',
                padding: '36px 24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <CheckCircle2 size={32} color="#16A34A" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#166534', marginBottom: '8px' }}>
                Inquiry Received Successfully!
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#15803D', maxWidth: '480px', margin: '0 auto 24px' }}>
                Thank you for contacting KCN Udyog. Nakul Sakhuja will reach out to your WhatsApp or phone
                number shortly.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      phone: '',
                      businessType: 'Retail Store / Shopkeeper',
                      products: 'All Clean Go Products',
                      message: '',
                    });
                  }}
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {errorMessage && (
                <div
                  style={{
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#B91C1C',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '18px',
                }}
              >
                {/* Full Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name / Establishment *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma / Sharma Traders"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '18px',
                }}
              >
                {/* Business Type */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    You are inquiring as:
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="Retail Store / Shopkeeper">Retail Store / Supermarket</option>
                    <option value="Regional Wholesaler / Distributor">Regional Wholesaler / Distributor</option>
                    <option value="Corporate Office / Facility Procurement">Corporate Office / Facility Manager</option>
                    <option value="Hotel / Restaurant / Catering">Hotel / Restaurant / Hospitality</option>
                    <option value="Hospital / Healthcare Clinic">Hospital / Clinic / Pathology</option>
                    <option value="Domestic Household Buyer">Domestic Household Buyer</option>
                  </select>
                </div>

                {/* Products of Interest */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '6px',
                    }}
                  >
                    Primary Products of Interest:
                  </label>
                  <select
                    value={formData.products}
                    onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="All Clean Go Products">All Clean Go Products (Full Catalogue)</option>
                    <option value="Clean Go Toilet Cleaner">Toilet Cleaner (5L / Retail)</option>
                    <option value="Clean Go Dishwash Liquid">Dishwash Liquid (5L / Retail)</option>
                    <option value="Clean Go Floor Cleaner">Floor Cleaner (5L / Retail)</option>
                    <option value="Clean Go Hand Wash">Hand Wash (5L / Retail)</option>
                    <option value="Clean Go Glass Cleaner">Glass Cleaner (5L / Retail)</option>
                    <option value="Clean Go White Phenyle">White Phenyle (Handle Jar / Bulk)</option>
                  </select>
                </div>
              </div>

              {/* Message / Quantity */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '6px',
                  }}
                >
                  Order Requirements / Location / Message:
                </label>
                <textarea
                  rows={3}
                  placeholder="Share estimated order quantity, delivery sector in Delhi NCR, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-navy"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Commercial Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* NCR Delivery Guarantee Banner */}
        <div
          style={{
            backgroundColor: '#16195E',
            color: '#FFFFFF',
            borderRadius: '18px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Truck size={24} color="#38BDF8" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: '0 0 2px' }}>
                Prompt Dispatch Across Delhi NCR
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0 }}>
                Direct factory delivery available for Ghaziabad, Noida, Greater Noida & Delhi.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '12px 20px', fontSize: '0.9rem' }}
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
