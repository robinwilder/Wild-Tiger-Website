import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Shield, Zap, Award, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart size={40} className="text-wild-tiger-orange" />,
      title: 'Personal Service',
      description:
        'Local Athens presence with direct communication. You work with real people, not ticket systems.',
    },
    {
      icon: <Shield size={40} className="text-deep-tech-blue" />,
      title: 'Transparent & Honest',
      description:
        'Clear pricing, realistic timelines, and honest about what we build and what we don\'t.',
    },
    {
      icon: <Target size={40} className="text-success-green" />,
      title: 'Problem-Solving Focus',
      description:
        'We focus on solving your business problems, not just executing tasks.',
    },
    {
      icon: <Zap size={40} className="text-electric-cyan" />,
      title: 'Modern Technology',
      description:
        'We use proven, modern tools and frameworks to build reliable solutions.',
    },
  ];

  const advantages = [
    {
      title: '12+ Years Experience',
      description: 'Web development expertise since 2012',
    },
    {
      title: 'Business Understanding',
      description: 'Entrepreneur who understands real business challenges',
    },
    {
      title: 'Full-Service',
      description: 'Design, development, hosting, and maintenance',
    },
    {
      title: 'Local Team',
      description: 'Athens, GA based with personalized service',
    },
    {
      title: 'Client Ownership',
      description: 'You own your code and data, no vendor lock-in',
    },
    {
      title: 'Affordable Pricing',
      description: 'AI-assisted development keeps costs down',
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
            <h1 className="mb-6">About Wild Tiger Design</h1>
            <p className="text-xl leading-relaxed">
              A Hull, GA-based web development company serving Athens and beyond. We build websites,
              prototypes, and digital solutions that help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-deep-tech-blue mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-gray leading-relaxed">
                <p>
                  Wild Tiger Design was founded by Robin, an entrepreneur and developer with over 12
                  years of web development experience since 2012.
                </p>
                <p>
                  As a serial entrepreneur who has built and scaled multiple successful ventures,
                  Robin brings a unique perspective that combines technical expertise with real-world
                  business understanding.
                </p>
                <p>
                  After building technical systems for delivery operations and seeing firsthand how
                  the right technology can transform a business, Robin founded Wild Tiger Design to
                  help other businesses leverage modern web development.
                </p>
                <p>
                  We're a self-taught developer who has built functional prototypes from scratch and
                  now leverages modern AI development tools to build faster and more affordably—without
                  sacrificing quality.
                </p>
              </div>
            </div>
            <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award size={24} className="text-wild-tiger-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Experience</h3>
                    <p className="text-slate-gray text-sm">
                      12+ years of web development since 2012
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users size={24} className="text-deep-tech-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Entrepreneur</h3>
                    <p className="text-slate-gray text-sm">
                      Built and scaled multiple successful ventures
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap size={24} className="text-electric-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Technical Systems</h3>
                    <p className="text-slate-gray text-sm">
                      Built delivery operations platforms and business tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target size={24} className="text-success-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Modern Approach</h3>
                    <p className="text-slate-gray text-sm">
                      Leverages AI tools for efficient, cost-effective builds
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Our Values</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} padding="lg">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{value.icon}</div>
                  <div>
                    <h3 className="text-xl mb-2">{value.title}</h3>
                    <p className="text-slate-gray">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Why Wild Tiger Design</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              What makes us different from other web development agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} padding="md" className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-charcoal">{advantage.title}</h3>
                <p className="text-sm text-slate-gray">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-deep-tech-blue mb-4">Our Approach</h2>
          </div>

          <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5">
            <div className="space-y-6 text-slate-gray leading-relaxed">
              <p>
                <strong className="text-charcoal">Client-First:</strong> We start by understanding
                your business goals and challenges. Technology is the tool, but solving your problem
                is the objective.
              </p>
              <p>
                <strong className="text-charcoal">Transparent Communication:</strong> No jargon, no
                surprises. We explain everything in plain English and keep you informed throughout
                the project.
              </p>
              <p>
                <strong className="text-charcoal">Quality & Speed:</strong> We use modern frameworks
                and AI-assisted development to build faster without cutting corners on quality or
                security.
              </p>
              <p>
                <strong className="text-charcoal">Long-Term Partnership:</strong> We're not just
                building a website—we're building a relationship. We're here for ongoing support,
                updates, and growth.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Ready to build something great? Let's discuss your project and see how we can help.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
