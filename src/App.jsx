import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionDock from './components/MobileActionDock';
import HomeHero from './components/HomeHero';

// Code-split secondary sub-pages for lightning-fast initial landing on new devices
const ProductsPage = lazy(() => import('./components/ProductsPage'));
const ProductDetailPage = lazy(() => import('./components/ProductDetailPage'));
const WhyUsPage = lazy(() => import('./components/WhyUsPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const CatalogModal = lazy(() => import('./components/CatalogModal'));

import { PRODUCTS } from './data/productsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | products | product-detail | why-us | about | contact
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  // Parse Hash Route
  const parseRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const [path, queryString] = hash.split('?');

    // Handle dedicated product detail page routes: #/product/:id or #/products/:id
    if (path.startsWith('product/') || path.startsWith('products/')) {
      const prodId = path.split('/')[1];
      const matched = PRODUCTS.find((p) => p.id === prodId) || PRODUCTS[0];
      setSelectedProduct(matched);
      setCurrentPage('product-detail');
    } else if (path === 'product') {
      const params = new URLSearchParams(queryString || '');
      const prodId = params.get('id');
      const matched = PRODUCTS.find((p) => p.id === prodId) || PRODUCTS[0];
      setSelectedProduct(matched);
      setCurrentPage('product-detail');
    } else if (path === 'products') {
      const params = new URLSearchParams(queryString || '');
      const prodId = params.get('id');
      if (prodId) {
        const matched = PRODUCTS.find((p) => p.id === prodId) || PRODUCTS[0];
        setSelectedProduct(matched);
        setCurrentPage('product-detail');
      } else {
        setCurrentPage('products');
      }
    } else if (path === 'solutions') {
      // Solutions removed: redirect to products
      setCurrentPage('products');
      window.location.hash = '#/products';
    } else if (path === 'why-us') {
      setCurrentPage('why-us');
    } else if (path === 'about') {
      setCurrentPage('about');
    } else if (path === 'contact') {
      setCurrentPage('contact');
    } else {
      setCurrentPage('home');
    }

    // Always scroll to top when a new page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    parseRoute();
    const handleHashChange = () => parseRoute();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic Navigation
  const navigate = (page, param) => {
    if (page === 'home') {
      setCurrentPage('home');
      window.location.hash = '#/';
    } else if (page === 'product' || page === 'product-detail') {
      const targetProd = param
        ? PRODUCTS.find((p) => p.id === param) || selectedProduct || PRODUCTS[0]
        : selectedProduct || PRODUCTS[0];
      setSelectedProduct(targetProd);
      setCurrentPage('product-detail');
      window.location.hash = `#/product/${targetProd.id}`;
    } else {
      setCurrentPage(page);
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.location.hash = `#/product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
      />

      {/* Main Routed Content - Dedicated Page per Route */}
      {/* Main Routed Content - Dedicated Page per Route */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {currentPage === 'home' ? (
          <HomeHero
            onExploreProducts={() => navigate('products')}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
            onSelectProduct={handleSelectProduct}
            onNavigate={navigate}
          />
        ) : (
          <Suspense
            fallback={
              <div
                style={{
                  minHeight: '60vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '3px solid #E2E8F0',
                    borderTopColor: '#00B189',
                    borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite',
                  }}
                />
                <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
                  Loading Clean Go formulations...
                </span>
              </div>
            }
          >
            {currentPage === 'products' && (
              <ProductsPage
                onSelectProduct={handleSelectProduct}
                onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
              />
            )}

            {currentPage === 'product-detail' && (
              <ProductDetailPage
                product={selectedProduct}
                onNavigate={navigate}
                onSelectProduct={handleSelectProduct}
                onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
              />
            )}

            {currentPage === 'why-us' && (
              <WhyUsPage
                onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
                onNavigateToContact={() => navigate('contact')}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onExploreProducts={() => navigate('products')}
                onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
                onNavigateToContact={() => navigate('contact')}
              />
            )}

            {currentPage === 'contact' && <ContactPage />}
          </Suspense>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigate}
        onSelectProduct={handleSelectProduct}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Dock */}
      <MobileActionDock
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
      />

      {/* Price List & Catalogue Lead Modal (Lazy loaded when opened) */}
      {isCatalogModalOpen && (
        <Suspense fallback={null}>
          <CatalogModal
            isOpen={isCatalogModalOpen}
            onClose={() => setIsCatalogModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
