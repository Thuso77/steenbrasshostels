
import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// Import gallery images - Exterior
import exterior1 from '@/assets/gallery/exterior-1.jpeg';
import exterior2 from '@/assets/gallery/exterior-2.jpeg';

// Import gallery images - Gardens
import garden1 from '@/assets/gallery/garden-1.jpeg';
import garden2 from '@/assets/gallery/garden-2.jpeg';
import garden3 from '@/assets/gallery/garden-3.jpeg';

// Import gallery images - Common Areas
import patio1 from '@/assets/gallery/patio-1.jpeg';
import patio2 from '@/assets/gallery/patio-2.jpeg';
import patio3 from '@/assets/gallery/patio-3.jpeg';
import patio4 from '@/assets/gallery/patio-4.jpeg';
import passage1 from '@/assets/gallery/passage-1.jpeg';

// Import gallery images - Bedrooms
import bedroom1 from '@/assets/gallery/bedroom-1.jpeg';
import bedroom2 from '@/assets/gallery/bedroom-2.jpeg';
import bedroom3 from '@/assets/gallery/bedroom-3.jpeg';
import bedroom4 from '@/assets/gallery/bedroom-4.jpeg';

// Import gallery images - Bathrooms
import toilet1 from '@/assets/gallery/toilet-1.jpeg';
import shower1 from '@/assets/gallery/shower-1.jpeg';

// Import gallery images - Facilities
import kitchen1 from '@/assets/gallery/kitchen-1.jpeg';
import kitchen2 from '@/assets/gallery/kitchen-2.jpeg';
import solar1 from '@/assets/gallery/solar-1.jpeg';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Bedrooms - First to showcase rooms
  { src: bedroom4, alt: 'Comfortable Bunk Beds with Window View', category: 'Bedrooms' },
  { src: bedroom1, alt: 'Cozy Bunk Bed Room', category: 'Bedrooms' },
  { src: bedroom2, alt: 'Spacious Dorm Room with Multiple Bunks', category: 'Bedrooms' },
  { src: bedroom3, alt: 'Bunk Beds with Modern Decor', category: 'Bedrooms' },
  
  // Bathrooms
  { src: shower1, alt: 'Clean Shower Facility', category: 'Bathrooms' },
  { src: toilet1, alt: 'Modern Toilet Facility', category: 'Bathrooms' },
  
  // Common Areas
  { src: passage1, alt: 'Clean Hallway with Storage', category: 'Common Areas' },
  { src: patio1, alt: 'Covered Patio Area with Seating', category: 'Common Areas' },
  { src: patio2, alt: 'Outdoor Dining Tables', category: 'Common Areas' },
  { src: patio3, alt: 'Patio with Hanging Plants', category: 'Common Areas' },
  { src: patio4, alt: 'Covered Walkway to Patio', category: 'Common Areas' },
  
  // Facilities
  { src: kitchen1, alt: 'Modern Shared Kitchen', category: 'Facilities' },
  { src: kitchen2, alt: 'Kitchen Sink Area', category: 'Facilities' },
  { src: solar1, alt: 'Solar Power System with Battery Backup', category: 'Facilities' },
  
  // Exterior
  { src: exterior1, alt: 'Hostel Front View with Garden', category: 'Exterior' },
  { src: exterior2, alt: 'Building and Outdoor Seating', category: 'Exterior' },
  
  // Gardens
  { src: garden1, alt: 'Garden Entrance with Planter', category: 'Gardens' },
  { src: garden2, alt: 'Backyard Garden with Bench', category: 'Gardens' },
  { src: garden3, alt: 'Side Garden Area', category: 'Gardens' },
];

const categories = ['All', 'Bedrooms', 'Bathrooms', 'Common Areas', 'Facilities', 'Exterior', 'Gardens'];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Header />
        <main className="flex-grow bg-olive">
          <section className="section">
            <div className="container-custom">
              {/* Back Button */}
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-orange transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>

              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our <span className="text-orange">Hostel Gallery</span>
                </h1>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Take a virtual tour of our comfortable and well-maintained hostel facilities
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange text-white shadow-lg'
                        : 'bg-olive-light text-white/80 hover:bg-olive-dark hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-xs font-semibold text-orange uppercase tracking-wider">
                          {image.category}
                        </span>
                        <p className="text-white font-medium mt-1">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox */}
              <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                <DialogContent className="max-w-5xl w-full bg-olive-dark/95 border-olive-light p-0 overflow-hidden">
                  <VisuallyHidden>
                    <DialogTitle>Image Gallery</DialogTitle>
                  </VisuallyHidden>
                  <div className="relative">
                    <button
                      onClick={() => setLightboxOpen(false)}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-olive-dark/80 text-white hover:bg-orange transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    
                    {filteredImages.length > 0 && (
                      <>
                        <img
                          src={filteredImages[currentImageIndex]?.src}
                          alt={filteredImages[currentImageIndex]?.alt}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-olive-dark to-transparent">
                          <p className="text-white text-center font-medium">
                            {filteredImages[currentImageIndex]?.alt}
                          </p>
                          <p className="text-orange text-center text-sm mt-1">
                            {currentImageIndex + 1} / {filteredImages.length}
                          </p>
                        </div>

                        {filteredImages.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-olive-dark/80 text-white hover:bg-orange transition-colors"
                            >
                              <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-olive-dark/80 text-white hover:bg-orange transition-colors"
                            >
                              <ChevronRight className="h-6 w-6" />
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
};

export default GalleryPage;
