import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import JourneyBuilder from '../components/JourneyBuilder';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-glow-dark">Glow Member Journey Builder</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create and visualize your customer journey map with our interactive builder. Drag and drop components to design the perfect experience.
          </p>
        </motion.div>
        
        <JourneyBuilder />
      </div>
    </Layout>
  );
}