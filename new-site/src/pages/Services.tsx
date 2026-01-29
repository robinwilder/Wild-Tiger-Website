import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Server, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={64} className="text-deep-tech-blue" />,
      title: 'Web Development',
      tagline: 'Custom Websites That Convert',
      description:
        'Professional websites and web applications built with modern technology. From small business sites to complex e-commerce platforms.',
      features: [
        'Mobile-responsive design',
        'SEO optimization',
        'Fast load times',
        'Content management systems',
        'E-commerce integration',
        'Security best practices',
      ],
      pricing: 'Starting at $3,000',
      link: '/services/web-development',
    },
    {
      icon: <Rocket size={64} className="text-wild-tiger-orange" />,
      title: 'Prototype Development',
      tagline: 'Turn Ideas Into Reality Fast',
      description:
        'Functional prototypes and simple web apps built quickly and affordably. Perfect for testing concepts, internal tools, or getting to market fast.',
      features: [
        'MVP prototypes in 4-8 weeks',
        'AI-assisted development',
        'Modern tech stack (React, Node.js, Supabase)',
        'Proof of concepts for fundraising',
        'Simple CRUD applications',
        'Honest scope and pricing',
      ],
      pricing: 'Starting at $5,000',
      link: '/services/prototype-development',
      highlight: true,
    },
    {
      icon: <Server size={64} className="text-electric-cyan" />,
      title: 'Web Hosting',
      tagline: 'Reliable & Secure Hosting',
      description:
        'Professional hosting solutions with 99.9% uptime. From small business sites to high-traffic applications.',
      features: [
        'SSL certificates included',
        'Automated daily backups',
        'Security monitoring',
        'Expert support',
        'Fast load times',
        'Easy migration from existing hosts',
      ],
      pricing: 'Starting at $25/month',
      link: '/services/web-hosting',
    },
    {
      icon: <TrendingUp size={64} className="text-success-green" />,
      title: 'Marketing Solutions',
      tagline: 'Grow Your Digital Presence',
      description:
        'Lead generation systems, SEO, and marketing automation to help scale your business and reach more customers.',
      features: [
        'Lead generation automation',
        'Local SEO optimization',
        'Marketing automation setup',
        'Analytics & reporting',
        'CRM integration',
        'Content strategy',
      ],
      pricing: 'Starting at $500/month',
      link: '/services/marketing',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-tech-blue to-electric-cyan py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Comprehensive digital solutions to help your business grow. From websites
              to prototypes to ongoing support, we've got you covered.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  padding="lg"
                  className={`h-full flex flex-col ${
                    service.highlight ? 'ring-2 ring-wild-tiger-orange' : ''
                  }`}
                >
                  <div className="mb-6">{service.icon}</div>

                  <h2 className="text-3xl mb-2">{service.title}</h2>
                  <p className="text-wild-tiger-orange font-semibold mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-slate-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-charcoal mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-gray">
                          <CheckCircle
                            size={16}
                            className="text-success-green mr-2 mt-0.5 flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-cool-gray pt-6 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-gray mb-1">Pricing</p>
                        <p className="text-xl font-bold text-deep-tech-blue">
                          {service.pricing}
                        </p>
                      </div>
                      <Link to={service.link}>
                        <Button variant="secondary" size="md">
                          Learn More
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Why Choose Wild Tiger Design</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              12+ years of experience delivering results for businesses in Athens, GA and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local & Personal',
                description:
                  'Athens-based team providing personalized service and direct communication.',
              },
              {
                title: 'Transparent Pricing',
                description:
                  'No hidden fees or surprises. Clear pricing and honest project scoping.',
              },
              {
                title: 'Full-Service',
                description:
                  'From design to development to hosting and maintenance, we handle it all.',
              },
            ].map((benefit, index) => (
              <Card key={index} padding="lg" className="text-center">
                <h3 className="text-xl mb-3 text-charcoal">{benefit.title}</h3>
                <p className="text-slate-gray">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default Services;
