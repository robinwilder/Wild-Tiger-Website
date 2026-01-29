import React from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const webDevPackages = [
    {
      name: 'Starter Site',
      price: '$3,000 - $5,000',
      description: 'Perfect for small businesses',
      features: [
        '5-10 pages',
        'Mobile responsive',
        'Basic SEO',
        'Contact form',
        '30 days support',
        'Optional hosting: +$25-50/month',
      ],
    },
    {
      name: 'Professional Site',
      price: '$5,000 - $12,000',
      description: 'For growing businesses',
      features: [
        '10-20 pages',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'Lead capture forms',
        'Analytics setup',
        '60 days support',
        'Optional hosting: +$50-100/month',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Site',
      price: '$12,000 - $30,000+',
      description: 'Complex websites and applications',
      features: [
        '20+ pages',
        'Custom functionality',
        'E-commerce capability',
        'Third-party integrations',
        'Advanced analytics',
        'Marketing automation',
        '90 days support',
        'Optional hosting: +$100-250/month',
      ],
    },
  ];

  const prototypePackages = [
    {
      name: 'Discovery Phase',
      price: '$500 - $1,500',
      description: 'Define scope and requirements',
    },
    {
      name: 'Simple Prototype',
      price: '$5,000 - $10,000',
      description: 'Basic MVP with core features',
    },
    {
      name: 'Complex Prototype',
      price: '$10,000 - $15,000',
      description: 'Advanced MVP with multiple features',
    },
    {
      name: 'Ongoing Development',
      price: '$2,000 - $5,000/month',
      description: 'Monthly retainer for continued work',
    },
    {
      name: 'Hourly Consulting',
      price: '$75 - $125/hour',
      description: 'For smaller tasks and updates',
    },
  ];

  const addOnServices = [
    { service: 'Logo & Brand Design', price: '$1,500 - $5,000' },
    { service: 'Content Writing', price: '$200 - $500/page' },
    { service: 'Photography', price: '$500 - $2,000' },
    { service: 'Video Production', price: '$1,000 - $5,000' },
    { service: 'SEO (Monthly)', price: '$500 - $2,500/month' },
    { service: 'Marketing Automation Setup', price: '$2,000 - $10,000' },
    { service: 'Website Maintenance', price: '$100 - $500/month' },
  ];

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
            <h1 className="mb-6">Transparent Pricing</h1>
            <p className="text-xl leading-relaxed mb-8">
              No hidden fees or surprises. Clear pricing for all our services. Every project is
              unique—these ranges give you an idea of what to expect.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 inline-block">
              <p className="text-lg">
                <strong>💯 Our Guarantee:</strong> No hidden fees, transparent communication, and
                quality work
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Packages */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Web Development</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Professional websites built to drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {webDevPackages.map((pkg, index) => (
              <Card
                key={index}
                padding="lg"
                className={pkg.popular ? 'ring-2 ring-wild-tiger-orange' : ''}
              >
                {pkg.popular && (
                  <div className="bg-wild-tiger-orange text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-deep-tech-blue mb-2">{pkg.price}</p>
                <p className="text-slate-gray mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check size={16} className="text-success-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant={pkg.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Development */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Prototype Development</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Fast, affordable prototypes and simple web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {prototypePackages.map((pkg, index) => (
              <Card key={index} padding="lg" className="text-center">
                <h3 className="text-xl mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-wild-tiger-orange mb-2">{pkg.price}</p>
                <p className="text-sm text-slate-gray">{pkg.description}</p>
              </Card>
            ))}
          </div>

          <Card padding="lg" className="max-w-3xl mx-auto bg-wild-tiger-orange/5 border border-wild-tiger-orange/30">
            <h4 className="text-lg font-semibold mb-2 text-charcoal">Note on Prototypes</h4>
            <p className="text-slate-gray text-sm">
              We build functional prototypes and simple web applications, not enterprise-scale
              software. Perfect for testing ideas quickly and affordably before making a larger
              investment.
            </p>
          </Card>
        </div>
      </section>

      {/* Hosting & Marketing */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card padding="lg">
              <h3 className="text-2xl mb-6 text-deep-tech-blue">Web Hosting</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start pb-3 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold">Basic Hosting</p>
                    <p className="text-sm text-slate-gray">Small business sites</p>
                  </div>
                  <p className="text-lg font-bold text-deep-tech-blue">$25-50/mo</p>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold">Professional Hosting</p>
                    <p className="text-sm text-slate-gray">High-traffic sites</p>
                  </div>
                  <p className="text-lg font-bold text-deep-tech-blue">$50-100/mo</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Enterprise Hosting</p>
                    <p className="text-sm text-slate-gray">E-commerce, web apps</p>
                  </div>
                  <p className="text-lg font-bold text-deep-tech-blue">$100-250/mo</p>
                </div>
              </div>
              <p className="text-xs text-slate-gray mt-4">
                Includes: SSL, backups, security monitoring, 99.9% uptime
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-2xl mb-6 text-success-green">Marketing Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start pb-3 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold">SEO Starter</p>
                    <p className="text-sm text-slate-gray">Local businesses</p>
                  </div>
                  <p className="text-lg font-bold text-success-green">$500-1.5K/mo</p>
                </div>
                <div className="flex justify-between items-start pb-3 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold">Growth Package</p>
                    <p className="text-sm text-slate-gray">Full marketing</p>
                  </div>
                  <p className="text-lg font-bold text-success-green">$1.5K-2.5K/mo</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Enterprise</p>
                    <p className="text-sm text-slate-gray">Custom solutions</p>
                  </div>
                  <p className="text-lg font-bold text-success-green">Custom</p>
                </div>
              </div>
              <p className="text-xs text-slate-gray mt-4">
                Includes: SEO, lead generation, automation, analytics
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Add-On Services</h2>
            <p className="text-xl text-slate-gray">
              Additional services to enhance your project
            </p>
          </div>

          <Card padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOnServices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-3 border-b border-cool-gray"
                >
                  <span className="text-slate-gray">{item.service}</span>
                  <span className="font-semibold text-deep-tech-blue">{item.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5 text-center">
            <DollarSign size={48} className="mx-auto mb-4 text-wild-tiger-orange" />
            <h2 className="text-2xl mb-4 text-charcoal">Need a Custom Quote?</h2>
            <p className="text-slate-gray mb-6 leading-relaxed">
              Every project is unique. The ranges above give you a general idea, but we're happy to
              provide a detailed custom quote based on your specific needs.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss your project and find the perfect solution for your budget.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
