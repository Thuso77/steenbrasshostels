import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import steenbrasLogo from '@/assets/steenbras-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-olive-dark py-4 sticky top-0 z-50 shadow-md">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="#home" className="block">
            <img 
              src={steenbrasLogo}
              alt="Steenbras Hostels Logo" 
              className="h-20 md:h-28 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <a href="/#home" className="text-white hover:text-orange transition-colors">Home</a>
          <Link to="/gallery" className="text-white hover:text-orange transition-colors">Gallery</Link>
          <a href="/#amenities" className="text-white hover:text-orange transition-colors">Amenities</a>
          <a href="/#contact" className="text-white hover:text-orange transition-colors">Contact</a>
        </nav>

        {/* WhatsApp Button */}
        <div className="hidden md:block flex-shrink-0">
          <Button className="bg-orange hover:bg-orange-light text-white" asChild>
            <a href="https://wa.me/27840302781?text=Hello%2C%20I%20would%20like%20to%20apply.%0A%0AName%20%26%20Surname%3A%0AOccupation%3A%0ACurrent%20Address%3A%0APreferred%20Check-in%20Date%20(if%20approved)%3A%0APlanned%20Length%20of%20Stay%20(if%20approved)%3A" target="_blank" rel="noopener noreferrer">
              Apply via WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-olive-dark py-4 px-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="/#home" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Home</a>
            <Link to="/gallery" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Gallery</Link>
            <a href="/#amenities" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Amenities</a>
            <a href="/#contact" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="bg-orange hover:bg-orange-light text-white w-full" asChild>
              <a href="https://wa.me/27840302781?text=Hello%2C%20I%20would%20like%20to%20apply.%0A%0AName%20%26%20Surname%3A%0AOccupation%3A%0ACurrent%20Address%3A%0APreferred%20Check-in%20Date%20(if%20approved)%3A%0APlanned%20Length%20of%20Stay%20(if%20approved)%3A" target="_blank" rel="noopener noreferrer">
                Apply via WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
