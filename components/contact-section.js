import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about Glow Journey Builder? We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-glow-light p-2 rounded-md mr-4">
                  <Mail className="h-5 w-5 text-glow-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">support@glowjourney.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-glow-light p-2 rounded-md mr-4">
                  <Phone className="h-5 w-5 text-glow-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-glow-light p-2 rounded-md mr-4">
                  <MapPin className="h-5 w-5 text-glow-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Office</h4>
                  <p className="text-gray-600">
                    123 Journey Street<br />
                    Suite 100<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
              >
                <p>Thank you for your message! We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-glow-primary focus:border-glow-primary"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-glow-primary focus:border-glow-primary"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-glow-primary focus:border-glow-primary"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}