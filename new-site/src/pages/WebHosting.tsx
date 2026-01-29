import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Clock, Zap, HardDrive, HeadphonesIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const WebHosting: React.FC = () => {
  const features = [
    {
      icon: <Shield size={40} className="text-success-green" />,
      title: 'SSL Certificates',
      description: 'Free SSL certificates included for secure HTTPS connections.',
    },
    {
      icon: <HardDrive size={40} className="text-deep-tech-blue" />,
      title: 'Automated Backups',
      description: 'Daily automated backups to protect your data.',
    },
    {
      icon: <Shield size={40} className="text-wild-tiger-orange" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and malware protection.',
    },
    {
      icon: <Zap size={40} className="text-electric-cyan" />,
      title: 'Fast Performance',
      description: 'Optimized servers for fast page load times.',
    },
    {
      icon: <Clock size={40} className="text-success-green" />,
      title: '99.9% Uptime',
      description: 'Reliable hosting with guaranteed uptime SLA.',
    },
    {
      icon: <HeadphonesIcon size={40} className="text-deep-tech-blue" />,
      title: 'Expert Support',
      description: 'Direct access to our team when you need help.',
    },
  ];

  const packages = [
    {
      name: 'Basic Hosting',
      price: '$25-$50',
      period: '/month',
      description: 'Perfect for small business websites',
      features: [
        'Up to 10 GB storage',
        'SSL certificate included',
        'Daily backups',
        'Email support',
        '99.9% uptime guarantee',
      ],
    },
    {
      name: 'Professional Hosting',
      price: '$50-$100',
      period: '/month',
      description: 'For high-traffic websites',
      features: [
        'Up to 50 GB storage',
        'SSL certificate included',
        'Daily backups',
        'Priority support',
        'CDN integration',
        '99.9% uptime guarantee',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Hosting',
      price: '$100-$250',
      period: '/month',
      description: 'E-commerce and web applications',
      features: [
        'Up to 200 GB storage',
        'SSL certificate included',
        'Real-time backups',
        '24/7 phone support',
        'CDN integration',
        'Database optimization',
        '99.9% uptime guarantee',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-tech-blue to-electric-cyan py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Reliable & Secure Web Hosting</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Professional hosting solutions with 99.9% uptime, automated backups, and expert support.
              From small business sites to high-traffic applications.
            </p>
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Everything Included</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              All the features you need for reliable, secure hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-gray text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Hosting Plans</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
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
                <div className="mb-4">
                  <span className="text-4xl font-bold text-deep-tech-blue">{pkg.price}</span>
                  <span className="text-slate-gray">{pkg.period}</span>
                </div>
                <p className="text-slate-gray mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-gray">
                      <Server size={16} className="text-success-green mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Migration */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-deep-tech-blue mb-6">Easy Migration</h2>
          <p className="text-xl text-slate-gray mb-8 leading-relaxed">
            Already have a website? We'll handle the migration for you at no extra cost.
            Zero downtime guaranteed.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Request Migration
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Choose a hosting plan and we'll have you up and running in no time.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Start Hosting Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;
