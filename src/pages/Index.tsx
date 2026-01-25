
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

import Amenities from '@/components/Amenities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Header />
        <main className="flex-grow">
          <Hero />
          
          <Amenities />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
