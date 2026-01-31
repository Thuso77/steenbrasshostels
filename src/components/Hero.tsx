
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1920&h=1080",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=1920&h=1080",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1920&h=1080",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1920&h=1080"
  ];

  useEffect(() => {
    // Preload images for better performance
    const preloadImages = () => {
      let loadedCount = 0;
      images.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  return (
    <section id="home" className="relative bg-olive-dark min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full relative">
          {imagesLoaded ? (
            images.map((src, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-olive/70 z-10"></div>
                <img
                  src={src}
                  alt={`Steenbras Hostel Interior ${index + 1}`}
                  className="object-cover w-full h-full"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))
          ) : (
            <div className="absolute inset-0 bg-olive-dark flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          )}
        </div>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-wide">
            <span className="block text-orange uppercase">WELCOME TO</span>
            <span className="block text-white uppercase drop-shadow-lg">STEENBRAS HOSTELS</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-white/90 font-medium">
            Serviced Communal Living Hostels – Comfort. Community. Affordability.
          </p>
          <p className="mb-8 text-white/80">
            Experience affordable communal living with all the amenities you need for a comfortable stay.
            Our hostels provide a clean, safe environment for low-income individuals seeking quality accommodation in Cape Town.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="btn-primary">
              <a href="/gallery" aria-label="View our gallery">Gallery</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
