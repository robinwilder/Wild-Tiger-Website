import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Mail, BarChart, Users, Zap } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Marketing: React.FC = () => {
  const services = [
    {
      icon: <Target size={40} className="text-wild-tiger-orange" />,
      title: 'Lead Generation',
      description: 'Automated systems to find and capture qualified leads for your business.',
    },
    {
      icon: <TrendingUp size={40} className="text-deep-tech-blue" />,
      title: 'Local SEO',
      description: 'Get found by local customers searching for your services in Athens, GA.',
    },
    {
      icon: <Mail size={40} className="text-electric-cyan" />,
      title: 'Marketing Automation',
      description: 'CRM integration and email sequences that nurture leads automatically.',
    },
    {
      icon: <BarChart size={40} className="text-success-green" />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing and track ROI.',
    },
    {
      icon: <Users size={40} className="text-wild-tiger-orange" />,
      title: 'CRM Integration',
      description: 'Connect your website with your CRM for seamless lead management.',
    },
    {
      icon: <Zap size={40} className="text-deep-tech-blue" />,
      title: 'Conversion Optimization',
      description: 'Improve your website to convert more visitors into customers.',
    },
  ];

  const packages = [
    {
      name: 'SEO Starter',
      price: '$500-$1,500',
      period: '/month',
      description: 'Perfect for local businesses',
      features: [
        'Local SEO optimization',
        'Google Business Profile setup',
        'Basic analytics setup',
        'Monthly reporting',
      ],
    },
    {
      name: 'Growth Package',
      price: '$1,500-$2,500',
      period: '/month',
      description: 'For businesses ready to scale',
      features: [
        'Everything in SEO Starter',
        'Lead generation automation',
        'Email marketing campaigns',
        'CRM integration',
        'Content strategy',
        'Bi-weekly reporting',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-service marketing solutions',
      features: [
        'Everything in Growth Package',
        'Advanced automation',
        'Multi-channel campaigns',
        'Dedicated account manager',
        'Weekly strategy calls',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-success-green to-deep-tech-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Marketing Automation That Scales Your Business</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Lead generation systems, SEO, and marketing automation to help you reach more
              customers and grow your business.
            </p>
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
              >
                Grow Your Business
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Our Marketing Services</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg mb-2">{service.title}</h3>
                <p className="text-slate-gray text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">How It Works</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Strategy Session',
                description:
                  'We learn about your business, target audience, and growth goals to create a custom plan.',
              },
              {
                step: '2',
                title: 'Implementation',
                description:
                  'Set up automation systems, optimize your website, and create campaigns.',
              },
              {
                step: '3',
                title: 'Launch & Monitor',
                description:
                  'Launch your campaigns and monitor performance with detailed analytics.',
              },
              {
                step: '4',
                title: 'Optimize & Scale',
                description:
                  'Continuously optimize based on data and scale what works best.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-success-green text-white rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-charcoal">{item.title}</h3>
                  <p className="text-slate-gray">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Marketing Packages</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Choose the package that fits your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                padding="lg"
                className={pkg.popular ? 'ring-2 ring-success-green' : ''}
              >
                {pkg.popular && (
                  <div className="bg-success-green text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-deep-tech-blue">{pkg.price}</span>
                  <span className="text-slate-gray">{pkg.period}</span>
                </div>
                <p className="text-slate-gray mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-gray">
                      <TrendingUp
                        size={16}
                        className="text-success-green mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
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

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's create a marketing strategy that drives real results for your business.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Start Growing Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
