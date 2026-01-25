
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-olive">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact <span className="text-orange">Us</span></h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Have questions or want to learn more? Reach out to us using the contact information below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-olive-light p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-orange font-medium">Email</p>
                  <a href="mailto:info@steenbras.co.za" className="text-white hover:text-orange transition-colors">
                    info@steenbras.co.za
                  </a>
                </div>
                
                <div>
                  <p className="text-orange font-medium">Phone</p>
                  <a href="tel:+27614749115" className="text-white hover:text-orange transition-colors">
                    +27 61 474 9115
                  </a>
                </div>
                
                <div>
                  <p className="text-orange font-medium">Address</p>
                  <address className="not-italic text-white/80">
                    9 Steenbras Street<br />
                    Brooklyn<br />
                    Cape Town<br />
                    Western Cape, 7405<br />
                    South Africa
                  </address>
                </div>
                
                <div>
                  <p className="text-orange font-medium">Office Hours</p>
                  <p className="text-white/80">
                    We are open everyday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2679183087416!2d18.46458805968245!3d-33.91962944209873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d1197ceba25%3A0x4ef92fbc1e811a7d!2s9%20Steenbras%2C%20Brooklyn%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1715452527214!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Steenbras Hostel"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
