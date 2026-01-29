import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-tech-blue to-electric-cyan py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Support</h1>
            <p className="text-xl leading-relaxed">
              We're here to help. Get support for your website or project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card padding="lg">
              <Mail size={48} className="text-wild-tiger-orange mb-4" />
              <h2 className="text-2xl mb-3">Email Support</h2>
              <p className="text-slate-gray mb-4">
                Send us an email and we'll get back to you within 24 hours during business days.
              </p>
              <a
                href="mailto:robin@wildtigerdesign.com"
                className="text-deep-tech-blue hover:text-wild-tiger-orange font-semibold"
              >
                robin@wildtigerdesign.com
              </a>
            </Card>

            <Card padding="lg">
              <Phone size={48} className="text-deep-tech-blue mb-4" />
              <h2 className="text-2xl mb-3">Phone Support</h2>
              <p className="text-slate-gray mb-4">
                Call us during business hours for immediate assistance.
              </p>
              <a
                href="tel:+1234567890"
                className="text-deep-tech-blue hover:text-wild-tiger-orange font-semibold"
              >
                (123) 456-7890
              </a>
              <p className="text-sm text-slate-gray mt-2">Mon-Fri, 9AM-6PM EST</p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5">
              <h2 className="text-2xl mb-6 text-center">What We Can Help With</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Website updates and changes',
                  'Technical issues and bugs',
                  'Content management help',
                  'Hosting and domain questions',
                  'Performance optimization',
                  'Security concerns',
                  'SEO and marketing questions',
                  'General website questions',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <MessageCircle size={20} className="text-success-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-gray">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-deep-tech-blue mb-6">Ongoing Support Plans</h2>
          <p className="text-lg text-slate-gray mb-8">
            Need regular maintenance and support? Ask about our monthly support plans.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Learn More About Support Plans
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Support;
