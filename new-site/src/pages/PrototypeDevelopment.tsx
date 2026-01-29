import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Clock, CheckCircle, XCircle, Target } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const PrototypeDevelopment: React.FC = () => {
  const useCases = [
    {
      icon: <Lightbulb size={40} className="text-wild-tiger-orange" />,
      title: 'Startup MVPs',
      description: 'Validate your idea with users before investing in full development.',
    },
    {
      icon: <Target size={40} className="text-deep-tech-blue" />,
      title: 'Internal Tools',
      description: 'Custom dashboards and tools to streamline your business operations.',
    },
    {
      icon: <Zap size={40} className="text-electric-cyan" />,
      title: 'Proof of Concepts',
      description: 'Show investors and stakeholders what your idea can do.',
    },
    {
      icon: <DollarSign size={40} className="text-success-green" />,
      title: 'Simple SaaS',
      description: 'Basic subscription apps and member portals to test the market.',
    },
  ];

  const whatWeBuild = [
    'Functional prototypes that work',
    'Simple CRUD applications',
    'Internal dashboards and tools',
    'Basic SaaS MVPs',
    'Proof of concepts for fundraising',
    'Member/customer portals',
  ];

  const whatWeDontBuild = [
    'Complex enterprise systems',
    'Native mobile apps (iOS/Android)',
    'Highly scalable platforms (1000s of concurrent users)',
    'Production-grade apps with extensive features',
    'AI/ML heavy applications',
    'Real-time collaborative tools',
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Define core features only - what\'s the minimum to test your idea?',
      timeline: '1 week',
    },
    {
      title: 'Rapid Build',
      description: 'Build your prototype using modern frameworks and AI assistance.',
      timeline: '4-8 weeks',
    },
    {
      title: 'Test & Iterate',
      description: 'Get feedback from users and make adjustments.',
      timeline: '1-2 weeks',
    },
    {
      title: 'Launch or Handoff',
      description: 'Deploy for testing or transition to advanced dev team.',
      timeline: 'Ongoing',
    },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Node.js',
    'Supabase',
    'Tailwind CSS',
    'Vercel',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wild-tiger-orange to-deep-tech-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Turn Your Idea Into a Working Prototype</h1>
            <p className="text-xl mb-4 leading-relaxed">
              Fast, affordable prototypes and simple web applications. Perfect for testing ideas,
              internal tools, or getting to market quickly.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-8">
              <p className="text-white/90 text-lg">
                <strong>Honest positioning:</strong> We build functional prototypes and simple web
                applications, not enterprise-scale software. Perfect for testing ideas quickly and
                affordably.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-deep-tech-blue hover:bg-white/90"
                >
                  Start Your Prototype
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

      {/* Use Cases */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Perfect For</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              When you need something fast and affordable to test an idea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-lg mb-2">{useCase.title}</h3>
                <p className="text-slate-gray text-sm">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build vs Don't Build */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Clear Expectations</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              We're transparent about what we build and what we don't
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card padding="lg" className="border-2 border-success-green">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle size={24} className="text-success-green" />
                </div>
                <h3 className="text-2xl text-charcoal">What We Build</h3>
              </div>
              <ul className="space-y-3">
                {whatWeBuild.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-cool-gray">
                <p className="text-sm text-slate-gray">
                  <strong>Timeline:</strong> 4-8 weeks typical
                </p>
                <p className="text-sm text-slate-gray mt-2">
                  <strong>Pricing:</strong> $5,000 - $15,000
                </p>
              </div>
            </Card>

            <Card padding="lg" className="border-2 border-slate-gray/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-gray/10 rounded-full flex items-center justify-center mr-4">
                  <XCircle size={24} className="text-slate-gray" />
                </div>
                <h3 className="text-2xl text-charcoal">What We Don't Build</h3>
              </div>
              <ul className="space-y-3">
                {whatWeDontBuild.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle size={20} className="text-slate-gray mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-cool-gray">
                <p className="text-sm text-slate-gray">
                  For these projects, we recommend partnering with specialized development agencies
                  or building an in-house team.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Approach */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-deep-tech-blue mb-6">Modern Tech Stack</h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                We use proven, modern frameworks combined with AI-assisted development to build
                prototypes faster and more affordably.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-deep-tech-blue text-white rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Card padding="lg" className="bg-electric-cyan/10 border border-electric-cyan/30">
                <h4 className="font-semibold text-charcoal mb-2">AI-Assisted Development</h4>
                <p className="text-sm text-slate-gray">
                  We leverage modern AI tools to build faster and keep costs down, while maintaining
                  quality and functionality.
                </p>
              </Card>
            </div>
            <Card padding="lg">
              <h3 className="text-2xl mb-6 text-charcoal">Pricing Models</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-cool-gray">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-charcoal">Simple Prototype</p>
                    <p className="text-xl font-bold text-deep-tech-blue">$5K-$10K</p>
                  </div>
                  <p className="text-sm text-slate-gray">Basic features, 4-6 weeks</p>
                </div>
                <div className="pb-4 border-b border-cool-gray">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-charcoal">Complex Prototype/MVP</p>
                    <p className="text-xl font-bold text-deep-tech-blue">$10K-$15K</p>
                  </div>
                  <p className="text-sm text-slate-gray">Multiple features, 6-8 weeks</p>
                </div>
                <div className="pb-4 border-b border-cool-gray">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-charcoal">Hourly Consulting</p>
                    <p className="text-xl font-bold text-deep-tech-blue">$75-$125/hr</p>
                  </div>
                  <p className="text-sm text-slate-gray">For smaller tasks and updates</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-charcoal">Monthly Retainer</p>
                    <p className="text-xl font-bold text-deep-tech-blue">$2K-$5K/mo</p>
                  </div>
                  <p className="text-sm text-slate-gray">Ongoing development and support</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Our Process</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Rapid development focused on getting you a working prototype fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-16 h-16 bg-wild-tiger-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-slate-gray text-sm mb-3">{step.description}</p>
                <div className="flex items-center justify-center text-deep-tech-blue text-sm font-semibold">
                  <Clock size={16} className="mr-1" />
                  {step.timeline}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use Us */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-deep-tech-blue mb-4">Is This Right For You?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="lg" className="bg-success-green/5 border border-success-green">
              <h3 className="text-xl mb-4 text-charcoal flex items-center">
                <CheckCircle size={24} className="text-success-green mr-2" />
                When to Use Us
              </h3>
              <ul className="space-y-2 text-slate-gray text-sm">
                <li>• You need something fast and affordable</li>
                <li>• You want to test an idea with real users</li>
                <li>• You need proof of concept for investors</li>
                <li>• You're building internal business tools</li>
                <li>• You want to validate before big investment</li>
              </ul>
            </Card>

            <Card padding="lg" className="bg-slate-gray/5 border border-slate-gray/30">
              <h3 className="text-xl mb-4 text-charcoal flex items-center">
                <XCircle size={24} className="text-slate-gray mr-2" />
                When NOT to Use Us
              </h3>
              <ul className="space-y-2 text-slate-gray text-sm">
                <li>• You need a polished, production-grade app</li>
                <li>• You expect thousands of concurrent users</li>
                <li>• You need native mobile apps (iOS/Android)</li>
                <li>• You require complex integrations</li>
                <li>• You need 24/7 enterprise support</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Build Your Prototype?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's discuss your idea and see if a prototype is the right fit for your needs.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-wild-tiger-orange hover:bg-wild-tiger-orange/90"
            >
              Start Your Prototype
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrototypeDevelopment;
