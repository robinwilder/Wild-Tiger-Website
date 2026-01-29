import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Wild Tiger Design
            </h3>
            <p className="text-cool-gray mb-4">
              Premium web development for Athens, GA and beyond
            </p>
            <div className="space-y-2 text-sm text-cool-gray">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Hull, GA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a
                  href="mailto:robin@wildtigerdesign.com"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  robin@wildtigerdesign.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a
                  href="tel:+1234567890"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-cool-gray">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/prototype-development"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Prototype Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-hosting"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/marketing"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Marketing Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-cool-gray">
              <li>
                <Link
                  to="/about"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Blog/Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Recommendations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-cool-gray">
              <li>
                <Link
                  to="/support"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-wild-tiger-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="pt-4 border-t border-slate-gray mt-4">
                <p className="text-xs text-slate-gray mb-1">Need IT Services?</p>
                <a
                  href="https://clinicnetworking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-wild-tiger-orange transition-colors"
                >
                  We recommend Clinic Networking →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cool-gray text-sm mb-4 md:mb-0">
            © 2024 Wild Tiger Design LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-cool-gray text-sm">Made with ❤️ in Athens, GA</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cool-gray hover:text-wild-tiger-orange transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
