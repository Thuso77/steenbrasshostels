import React from 'react';
import steenbrasLogo from '/lovable-uploads/f27de235-0046-41e9-b89c-fc1a0a66d11e.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-olive-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start mb-4">
              <a href="#home" className="block">
                <img 
                  src={steenbrasLogo}
                  alt="Steenbras Properties Logo" 
                  className="h-12 w-auto mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
              <h3 className="text-lg font-semibold">Steenbras Properties</h3>
            </div>
            <p className="text-sm text-white/70 mb-4">Serviced Communal Living Hostels – Comfort. Community. Affordability.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-orange transition-colors">Home</a></li>
              <li><a href="#amenities" className="text-white/70 hover:text-orange transition-colors">Amenities</a></li>
              <li><a href="#apply" className="text-white/70 hover:text-orange transition-colors">Apply Now</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>9 Steenbras Street, Brooklyn</li>
              <li>Cape Town, Western Cape, 7405</li>
              <li>+27 61 474 9115</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-olive-light/30 mt-12 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Steenbras Properties. All rights reserved. | <a href="https://steenbrasproperties.co.za" className="hover:text-orange transition-colors">steenbrasproperties.co.za</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
