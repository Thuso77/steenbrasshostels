
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

// Import common areas images for slideshow
import patio1 from '@/assets/gallery/patio-1.jpeg';
import patio2 from '@/assets/gallery/patio-2.jpeg';
import patio3 from '@/assets/gallery/patio-3.jpeg';
import patio4 from '@/assets/gallery/patio-4.jpeg';
import passage1 from '@/assets/gallery/passage-1.jpeg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: patio1, alt: 'Covered Patio Area with Seating' },
    { src: patio2, alt: 'Outdoor Dining Tables' },
    { src: patio3, alt: 'Patio with Hanging Plants' },
    { src: patio4, alt: 'Covered Walkway to Patio' },
    { src: passage1, alt: 'Clean Hallway with Storage' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative bg-olive-dark min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full relative">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-olive/70 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
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
