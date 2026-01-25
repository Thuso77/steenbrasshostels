import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
        <div className="flex items-center">
          <a href="#home" className="block">
            <img 
              src={steenbrasLogo}
              alt="Steenbras Hostels Logo" 
              className="h-16 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-orange transition-colors">Home</a>
          <a href="#amenities" className="text-white hover:text-orange transition-colors">Amenities</a>
          <a href="#contact" className="text-white hover:text-orange transition-colors">Contact</a>
          <Button className="bg-orange hover:bg-orange-light text-white" asChild>
            <a href="https://wa.me/27614749115" target="_blank" rel="noopener noreferrer">
              Apply via WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-olive-dark py-4 px-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#amenities" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Amenities</a>
            <a href="#contact" className="text-white hover:text-orange transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="bg-orange hover:bg-orange-light text-white w-full" asChild>
              <a href="https://wa.me/27614749115" target="_blank" rel="noopener noreferrer">
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
