
import React from 'react';
import { Bed, Bath, Sofa, Home, Utensils, Wifi, Zap, Droplet } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Wifi size={32} />,
      title: "24/7 Unlimited WiFi",
      description: "Stay connected with unlimited high-speed internet access"
    },
    {
      icon: <Droplet size={32} />,
      title: "Clean Running Water",
      description: "Enjoy access to clean running water throughout your stay"
    },
    {
      icon: <Zap size={32} />,
      title: "Backup Power",
      description: "Never worry about load shedding with our backup power solutions"
    },
    {
      icon: <Bed size={32} />,
      title: "Clean Bed & Linen",
      description: "Sleep well with a comfortable bed and fresh, clean linen"
    },
    {
      icon: <Utensils size={32} />,
      title: "Shared Kitchen",
      description: "Access to a fully equipped kitchen with provided utensils and cutlery"
    },
    {
      icon: <Bath size={32} />,
      title: "Shared Bathrooms",
      description: "Clean, well-maintained bathroom facilities"
    },
    {
      icon: <Sofa size={32} />,
      title: "Lounge/TV Room",
      description: "Relax in our comfortable communal lounge with entertainment"
    },
    {
      icon: <Home size={32} />,
      title: "Shared Garage",
      description: "Secure parking space available for residents"
    }
  ];

  return (
    <section id="amenities" className="section bg-olive">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-orange">Amenities</span></h2>
          <p className="max-w-2xl mx-auto text-white/80">
            We provide all the essentials for comfortable communal living, allowing you to focus on work and life without worrying about basic necessities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="amenity-icon">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{amenity.title}</h3>
              <p className="text-sm text-white/70">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
