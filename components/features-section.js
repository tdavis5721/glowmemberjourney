import { Zap, Award, LifeBuoy, Layout, RefreshCw, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Layout className="h-8 w-8 text-glow-primary" />,
      title: 'Drag & Drop Interface',
      description: 'Easily build customer journeys with our intuitive drag and drop interface.'
    },
    {
      icon: <Users className="h-8 w-8 text-glow-primary" />,
      title: 'User Touchpoints',
      description: 'Identify key touchpoints in your customer journey to optimize experiences.'
    },
    {
      icon: <Zap className="h-8 w-8 text-glow-primary" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with templates or build your own journey from scratch.'
    },
    {
      icon: <Award className="h-8 w-8 text-glow-primary" />,
      title: 'Best Practices',
      description: 'Built-in best practices and examples from successful customer journeys.'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-glow-primary" />,
      title: 'Export & Share',
      description: 'Export your journey maps for presentations or share with team members.'
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-glow-primary" />,
      title: 'Support',
      description: 'Get help when you need it with our dedicated customer success team.'
    }
  ];
  
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Glow Member Journey Builder the perfect tool for mapping your customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}