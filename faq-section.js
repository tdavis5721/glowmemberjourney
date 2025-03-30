import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: 'What is a customer journey map?',
      answer: 'A customer journey map is a visual representation of the process a customer goes through to achieve a goal with your company. It helps identify key interactions, customer emotions, pain points, and opportunities to improve the overall experience.'
    },
    {
      question: 'How do I get started with the Glow Journey Builder?',
      answer: 'Getting started is easy! Use our pre-built template or start from scratch. Add steps to your journey, customize them with titles, descriptions, and colors, and arrange them in the right order. You can export your journey when finished or continue refining it.'
    },
    {
      question: 'Can I share my journey map with my team?',
      answer: 'Yes! You can export your journey map as a JSON file that can be imported by other team members who use Glow Journey Builder. This makes it easy to collaborate on creating the perfect customer journey map.'
    },
    {
      question: 'Is Glow Journey Builder suitable for my industry?',
      answer: 'Absolutely. Glow Journey Builder is designed to be flexible for any industry or business type. Whether you\'re in e-commerce, SaaS, healthcare, education, or any other field, you can customize the journey to match your specific customer touchpoints and experiences.'
    },
    {
      question: 'How often should I update my customer journey map?',
      answer: 'We recommend revisiting your customer journey map quarterly or whenever significant changes occur in your business processes, product offerings, or customer feedback. Regular updates ensure your map accurately reflects the current customer experience.'
    },
    {
      question: 'Can I add attachments or links to my journey steps?',
      answer: 'Currently, the basic version allows text descriptions for each step. We\'re working on enhanced features that will allow you to add links, attachments, and more detailed information to each journey step in the future.'
    }
  ];
  
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using Glow Journey Builder.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openFAQ === index ? 
                  <ChevronUp className="h-5 w-5 text-glow-primary" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                }
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white border border-gray-200 rounded-b-lg"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
