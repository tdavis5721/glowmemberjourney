import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Glow Journey</h3>
            <p className="text-gray-600">
              Build beautiful customer journey maps with our interactive tool.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-glow-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-600 hover:text-glow-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-gray-600 hover:text-glow-primary">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-glow-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-glow-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-glow-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-glow-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-glow-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: info@glowjourney.com
              </li>
              <li className="text-gray-600">
                Phone: +1 (123) 456-7890
              </li>
              <li className="text-gray-600">
                Address: 123 Journey St, Suite 100
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Glow Journey. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-glow-primary text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-glow-primary text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-glow-primary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
