
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
    employmentStatus: '',
    moveInDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/bi4y1fmajllwyfxyap5m3r487x10gqvu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll contact you shortly to discuss your application.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          idNumber: '',
          employmentStatus: '',
          moveInDate: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="section bg-olive-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply <span className="text-orange">Now</span></h2>
            <p className="text-white/80">
              Interested in joining our community? Fill out the application form below to get started.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-olive p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="idNumber" className="block mb-2 text-sm font-medium">ID Number / Passport</label>
                <input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  value={formData.idNumber}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your ID number or passport"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="employmentStatus" className="block mb-2 text-sm font-medium">Employment Status</label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select your employment status</option>
                  <option value="full-time">Full-time Employed</option>
                  <option value="part-time">Part-time Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              
              <div className="col-span-1">
                <label htmlFor="moveInDate" className="block mb-2 text-sm font-medium">Preferred Move-In Date</label>
                <input
                  id="moveInDate"
                  name="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Button type="submit" className="w-full md:flex-1 btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              
              <Button 
                asChild
                type="button" 
                className="w-full md:flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                <a 
                  href="https://wa.me/27614749115" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
            
            <p className="text-center mt-4 text-sm text-white/70">
              By submitting this form, you agree to our terms and conditions. We'll contact you shortly to discuss your application.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
