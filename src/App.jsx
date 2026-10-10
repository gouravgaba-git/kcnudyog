import React, { useState } from 'react';
import Header from './components/Header';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';
import CatalogModal from './components/CatalogModal';
import MobileActionDock from './components/MobileActionDock';

export default function App() {
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Clean Header */}
      <Header onOpenCatalogModal={() => setIsCatalogModalOpen(true)} />

      {/* Main Section: Website Under Progress & Contact For Order */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <ContactHub />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Dock */}
      <MobileActionDock onOpenCatalogModal={() => setIsCatalogModalOpen(true)} />

      {/* Price List Request Modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </div>
  );
}
