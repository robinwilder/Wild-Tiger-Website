import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={48} className="text-wild-tiger-orange" />,
      title: 'Discovery & Strategy',
      duration: '1 Week',
      description: 'We start by understanding your business, goals, and target audience.',
      details: [
        'Initial consultation call',
        'Discuss project requirements and scope',
        'Define success metrics',
        'Create project timeline and milestones',
        'Provide detailed quote',
      ],
    },
    {
      icon: <PenTool size={48} className="text-deep-tech-blue" />,
      title: 'Design',
      duration: '1-2 Weeks',
      description: 'Create mockups and designs that align with your brand and goals.',
      details: [
        'Wireframes and site structure',
        'Visual design mockups',
        'Review and feedback',
        'Revisions and approval',
        'Finalize design assets',
      ],
    },
    {
      icon: <Code size={48} className="text-electric-cyan" />,
      title: 'Development',
      duration: '2-4 Weeks',
      description: 'Build your website with clean, modern code and best practices.',
      details: [
        'Set up development environment',
        'Front-end development',
        'Back-end integration',
        'Content implementation',
        'Regular progress updates',
      ],
    },
    {
      icon: <TestTube size={48} className="text-success-green" />,
      title: 'Testing & Refinement',
      duration: '1 Week',
      description: 'Thorough testing across devices and browsers to ensure quality.',
      details: [
        'Cross-browser testing',
        'Mobile responsiveness check',
        'Performance optimization',
        'Security audit',
        'Final adjustments',
      ],
    },
    {
      icon: <Rocket size={48} className="text-wild-tiger-orange" />,
      title: 'Launch',
      duration: '1-2 Days',
      description: 'Deploy your website and make it live for the world to see.',
      details: [
        'Final client approval',
        'Deploy to production',
        'DNS configuration',
        'SSL certificate setup',
        'Submit to search engines',
      ],
    },
    {
      icon: <HeadphonesIcon size={48} className="text-deep-tech-blue" />,
      title: 'Support & Maintenance',
      duration: 'Ongoing',
      description: 'Ongoing support to keep your website running smoothly.',
      details: [
        'Training on content management',
        'Initial support period included',
        'Bug fixes and updates',
        'Performance monitoring',
        'Optional maintenance plans',
      ],
    },
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
            <h1 className="mb-6">Our Process</h1>
            <p className="text-xl leading-relaxed">
              A proven, transparent process to deliver your project on time and on budget. We keep
              you informed every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="relative">
                  <div className="absolute -left-4 top-8 w-12 h-12 bg-wild-tiger-orange text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-8">
                    <div className="lg:col-span-1">
                      <div className="mb-4">{step.icon}</div>
                      <h2 className="text-2xl mb-2 text-charcoal">{step.title}</h2>
                      <p className="text-wild-tiger-orange font-semibold mb-3">{step.duration}</p>
                      <p className="text-slate-gray">{step.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-semibold text-charcoal mb-3">What Happens:</h3>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-success-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-slate-gray">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Transparent Communication</h2>
            <p className="text-xl text-slate-gray">
              We keep you informed throughout the entire process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center">
              <h3 className="text-lg font-semibold mb-2">Weekly Updates</h3>
              <p className="text-sm text-slate-gray">
                Regular progress reports so you always know where we are
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <h3 className="text-lg font-semibold mb-2">Direct Access</h3>
              <p className="text-sm text-slate-gray">
                Email, phone, or video calls - communicate however works best for you
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-slate-gray">
                We typically respond to messages within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss your project and walk through how we can bring your vision to life.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
