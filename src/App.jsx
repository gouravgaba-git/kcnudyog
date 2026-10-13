import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionDock from './components/MobileActionDock';
import CatalogModal from './components/CatalogModal';
import ProductDetailModal from './components/ProductDetailModal';

// Homepage Components
import HomeHero from './components/HomeHero';
import CategoryGrid from './components/CategoryGrid';
import LifestyleSection from './components/LifestyleSection';
import WhyUsSection from './components/WhyUsSection';
import DistributorCTA from './components/DistributorCTA';

// Dedicated Sub-Pages
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

import { PRODUCTS } from './data/productsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | products | about | contact
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  // Parse Hash Route
  const parseRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const [path, queryString] = hash.split('?');

    if (path === 'products') {
      setCurrentPage('products');
      if (queryString) {
        const params = new URLSearchParams(queryString);
        const prodId = params.get('id');
        if (prodId) {
          const matched = PRODUCTS.find((p) => p.id === prodId);
          if (matched) setSelectedProduct(matched);
        }
      }
    } else if (path === 'about') {
      setCurrentPage('about');
    } else if (path === 'contact') {
      setCurrentPage('contact');
    } else {
      setCurrentPage('home');
      // If there's an anchor on home (e.g. #solutions, #why-us)
      if (path && (path === 'solutions' || path === 'why-us' || path === 'categories')) {
        setTimeout(() => {
          const el = document.getElementById(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  useEffect(() => {
    parseRoute();
    const handleHashChange = () => parseRoute();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic Navigation
  const navigate = (page, anchor = null) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (anchor) {
        window.location.hash = `#/${anchor}`;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.location.hash = '#/';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `#/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Select product helper (also updates url hash for shareable link)
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
      />

      {/* Main Routed Content */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {currentPage === 'home' && (
          <>
            <HomeHero
              onExploreProducts={() => navigate('products')}
              onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
              onSelectProduct={handleSelectProduct}
              onNavigate={navigate}
            />
            <CategoryGrid
              onSelectProduct={handleSelectProduct}
              onNavigateToProducts={() => navigate('products')}
            />
            <LifestyleSection onSelectProduct={handleSelectProduct} />
            <WhyUsSection
              onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
              onNavigateToContact={() => navigate('contact')}
            />
            <DistributorCTA
              onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
              onNavigateToContact={() => navigate('contact')}
            />
          </>
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={handleCloseProductModal}
      />

      {/* Price List & Catalogue Lead Modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </div>
  );
}
