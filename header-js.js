import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-glow-primary">
              Glow Journey
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-glow-primary font-medium">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-glow-primary font-medium">
              Features
            </Link>
            <Link href="#examples" className="text-gray-700 hover:text-glow-primary font-medium">
              Examples
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-glow-primary font-medium">
              FAQ
            </Link>
            <Link href="#contact" className="btn btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-glow-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 pb-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-glow-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-glow-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#examples" 
                className="text-gray-700 hover:text-glow-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Examples
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-700 hover:text-glow-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}