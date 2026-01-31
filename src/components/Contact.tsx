
import React from 'react';
import { MessageCircle, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section bg-olive">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to <span className="text-orange">Apply</span></h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Ready to join our community? Follow the steps below to start your application process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Application Steps */}
          <div className="bg-olive-light p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Start Your Application</h3>
            </div>
            
            <p className="text-white/90 mb-6">
              To commence the application process, please send a WhatsApp message to the number below with the following information:
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Name & Surname",
                "Occupation",
                "Current Address",
                "When will you like to check in? (if approved)",
                "How long do you plan to stay? (if approved)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-white/80 mb-6 italic">
              After we receive this information, we will schedule a viewing with you.
            </p>
            
            <Button className="w-full bg-orange hover:bg-orange-light text-white text-lg py-6" asChild>
              <a href="https://wa.me/27840302781" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Apply via WhatsApp: +27 84 030 2781
              </a>
            </Button>
          </div>
          
          {/* Required Documents */}
          <div className="bg-olive-light p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange p-3 rounded-full">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Required Documents</h3>
            </div>
            
            <p className="text-white/90 mb-6">
              Before you apply, please note that the application process will require you to provide the following documentation:
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "A copy of your ID / Passport",
                "Confirmation of current address",
                "Confirmation of employment / 3 months bank statement"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-olive/50 p-4 rounded-lg">
                  <FileText className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-orange/10 border border-orange/30 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
              <p className="text-white/80 text-sm">
                Steenbras Hostels reserves the right to approve or reject any applications without providing reasons for its decision.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-olive-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm mb-1">Phone / WhatsApp</p>
                <a href="tel:+27840302781" className="text-white hover:text-orange transition-colors text-lg font-medium">
                  +27 84 030 2781
                </a>
              </div>
              
              <div>
                <p className="text-white/60 text-sm mb-1">Address</p>
                <address className="not-italic text-white/90">
                  9 Steenbras Street<br />
                  Brooklyn<br />
                  Cape Town<br />
                  Western Cape, 7405<br />
                  South Africa
                </address>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2679183087416!2d18.46458805968245!3d-33.91962944209873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d1197ceba25%3A0x4ef92fbc1e811a7d!2s9%20Steenbras%2C%20Brooklyn%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1715452527214!5m2!1sen!2sza"
                width="100%"
                height="300"
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
