import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Server, TrendingUp, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
  note?: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code size={48} className="text-deep-tech-blue" />,
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technology, designed to convert visitors into customers.',
      benefits: [
        'Mobile-responsive design',
        'SEO optimization',
        'Fast load times',
        'Content management systems',
      ],
      link: '/services/web-development',
    },
    {
      icon: <Rocket size={48} className="text-wild-tiger-orange" />,
      title: 'Prototype Development',
      description:
        'MVP prototypes and simple web apps built quickly and affordably. Perfect for testing ideas and validating concepts.',
      benefits: [
        'Fast, affordable prototypes',
        'AI-assisted development',
        'Functional proof of concepts',
        '4-8 week typical timeline',
      ],
      link: '/services/prototype-development',
      note: 'Fast, affordable prototypes for testing ideas',
    },
    {
      icon: <Server size={48} className="text-electric-cyan" />,
      title: 'Web Hosting',
      description:
        'Reliable, secure hosting solutions with 99.9% uptime. From small business sites to high-traffic applications.',
      benefits: [
        'SSL certificates included',
        'Automated backups',
        'Security monitoring',
        'Expert support',
      ],
      link: '/services/web-hosting',
    },
    {
      icon: <TrendingUp size={48} className="text-success-green" />,
      title: 'Marketing Solutions',
      description:
        'Lead generation systems, SEO, and marketing automation to help scale your business and reach more customers.',
      benefits: [
        'Lead generation systems',
        'Local SEO optimization',
        'Marketing automation',
        'Analytics & reporting',
      ],
      link: '/services/marketing',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-section-lg bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-deep-tech-blue mb-4">Our Services</h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              padding="lg"
              className="group cursor-pointer"
              hoverable
            >
              <Link to={service.link} className="block">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>

                <h3 className="text-2xl mb-4 text-charcoal group-hover:text-deep-tech-blue transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {service.note && (
                  <div className="bg-electric-cyan/10 border border-electric-cyan/30 rounded-lg px-4 py-2 mb-6">
                    <p className="text-sm text-deep-tech-blue font-medium">
                      💡 {service.note}
                    </p>
                  </div>
                )}

                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-gray text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-wild-tiger-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-deep-tech-blue font-semibold group-hover:text-wild-tiger-orange transition-colors">
                  Learn More
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </Link>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
