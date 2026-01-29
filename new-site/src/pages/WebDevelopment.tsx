import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Code2, RefreshCw, Server, CheckCircle, Clock, DollarSign } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const WebDevelopment: React.FC = () => {
  const serviceTypes = [
    {
      icon: <Globe size={40} className="text-deep-tech-blue" />,
      title: 'Business Websites',
      description: 'Professional sites for local businesses with SEO and lead generation.',
    },
    {
      icon: <ShoppingCart size={40} className="text-wild-tiger-orange" />,
      title: 'E-commerce',
      description: 'Online stores with secure payment integration and inventory management.',
    },
    {
      icon: <Code2 size={40} className="text-electric-cyan" />,
      title: 'Web Applications',
      description: 'Custom software solutions built to your specific business needs.',
    },
    {
      icon: <RefreshCw size={40} className="text-success-green" />,
      title: 'Redesigns',
      description: 'Modernize your existing website with fresh design and better performance.',
    },
    {
      icon: <Server size={40} className="text-deep-tech-blue" />,
      title: 'Web Hosting',
      description: 'Reliable, secure hosting with 99.9% uptime and expert support.',
    },
  ];

  const features = [
    'Mobile-responsive design',
    'SEO optimization',
    'Fast load times (Core Web Vitals)',
    'Security best practices',
    'Content management systems',
    'Analytics integration',
    'Reliable hosting and maintenance',
    'Accessible (WCAG compliant)',
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Strategy',
      description: 'We learn about your business, goals, and target audience.',
      timeline: '1 week',
    },
    {
      step: '2',
      title: 'Design & Development',
      description: 'Create mockups, get your approval, and build your site.',
      timeline: '3-6 weeks',
    },
    {
      step: '3',
      title: 'Testing & Refinement',
      description: 'Thorough testing across devices and browsers.',
      timeline: '1 week',
    },
    {
      step: '4',
      title: 'Launch & Support',
      description: 'Go live and provide ongoing support and training.',
      timeline: 'Ongoing',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites take 4-8 weeks from start to finish. Complex sites with custom features may take 8-12 weeks.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All projects include 30-90 days of support depending on the package. We also offer ongoing maintenance plans.',
    },
    {
      question: 'Can I update the website myself?',
      answer: 'Absolutely. We build sites with user-friendly content management systems and provide training.',
    },
    {
      question: 'Do you help with content and images?',
      answer: 'Yes, we can assist with copywriting and source professional images. These are available as add-on services.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-tech-blue to-electric-cyan py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Custom Websites That Convert Visitors to Customers</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Professional web development for businesses in Athens, GA and beyond. From simple
              business sites to complex e-commerce platforms, we build websites that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-deep-tech-blue"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">What We Build</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Comprehensive web development services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-slate-gray text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-deep-tech-blue mb-6">Everything You Need</h2>
              <p className="text-lg text-slate-gray mb-8 leading-relaxed">
                We build websites with all the features modern businesses need to succeed online.
                Every site is mobile-responsive, fast, secure, and optimized for search engines.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-success-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-slate-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5">
              <h3 className="text-2xl mb-6 text-charcoal">Pricing Ranges</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold text-charcoal">Starter Site</p>
                    <p className="text-sm text-slate-gray">5-10 pages, perfect for small businesses</p>
                  </div>
                  <p className="text-xl font-bold text-deep-tech-blue">$3K-$5K</p>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-cool-gray">
                  <div>
                    <p className="font-semibold text-charcoal">Professional Site</p>
                    <p className="text-sm text-slate-gray">10-20 pages, custom design & CMS</p>
                  </div>
                  <p className="text-xl font-bold text-deep-tech-blue">$5K-$12K</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">Enterprise Site</p>
                    <p className="text-sm text-slate-gray">20+ pages, e-commerce, custom features</p>
                  </div>
                  <p className="text-xl font-bold text-deep-tech-blue">$12K+</p>
                </div>
              </div>
              <Link to="/pricing">
                <Button variant="secondary" size="md" className="w-full mt-6">
                  See Full Pricing
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Our Process</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              A proven, transparent process to deliver your website on time and on budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} padding="lg" className="text-center relative">
                <div className="w-16 h-16 bg-deep-tech-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-slate-gray text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-center text-wild-tiger-orange text-sm font-semibold">
                  <Clock size={16} className="mr-1" />
                  {item.timeline}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} padding="lg">
                <h3 className="text-lg mb-2 text-charcoal">{faq.question}</h3>
                <p className="text-slate-gray">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss your project and create a website that drives real results for your business.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
