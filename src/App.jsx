import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionDock from './components/MobileActionDock';
import CatalogModal from './components/CatalogModal';

// Dedicated Sub-Pages
import HomeHero from './components/HomeHero';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import WhyUsPage from './components/WhyUsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

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
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {currentPage === 'home' && (
          <HomeHero
            onExploreProducts={() => navigate('products')}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
            onSelectProduct={handleSelectProduct}
            onNavigate={navigate}
          />
        )}

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

      {/* Price List & Catalogue Lead Modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </div>
  );
}
