import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  const projects = [
    {
      id: 'central-delivery',
      title: 'Central Delivery Platform',
      client: 'Delivery Service',
      category: 'Web Application',
      description:
        'Custom web application for managing delivery operations with real-time tracking, automated dispatch, and customer management. Integrated with third-party logistics software to power routing, dispatch automation, and delivery optimization.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Third-party Logistics API'],
      results: [
        'Reduced dispatch time by 40%',
        'Improved delivery tracking accuracy',
        'Streamlined customer communication',
      ],
      image: '/images/project-placeholder.jpg',
    },
    {
      id: 'drparkrx',
      title: 'Dr. Park RX',
      client: 'Healthcare Provider',
      category: 'Healthcare Website',
      description:
        'Professional healthcare website with patient portal, appointment scheduling system, and HIPAA-compliant messaging.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      results: [
        'Increased online appointment bookings by 60%',
        'Improved patient communication',
        'Reduced administrative workload',
      ],
      image: '/images/project-placeholder.jpg',
    },
    {
      id: 'intersky',
      title: 'Intersky Solutions',
      client: 'Technology Services',
      category: 'Corporate Website',
      description:
        'Corporate website redesign with focus on lead generation, service showcasing, and improved user experience.',
      technologies: ['React', 'Next.js', 'Framer Motion', 'Vercel'],
      results: [
        'Increased lead generation by 45%',
        '3x faster page load times',
        'Improved mobile experience',
      ],
      image: '/images/project-placeholder.jpg',
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
            <h1 className="mb-6">Our Work</h1>
            <p className="text-xl leading-relaxed">
              Explore our portfolio of successful projects and the results we've delivered for our
              clients in Athens, GA and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card padding="lg" className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Image Placeholder */}
                    <div className="order-2 lg:order-1">
                      <div className="w-full h-64 lg:h-full bg-gradient-to-br from-deep-tech-blue to-electric-cyan rounded-lg flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300"></div>
                        <ExternalLink
                          className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10"
                          size={64}
                        />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="order-1 lg:order-2">
                      <div className="mb-2">
                        <span className="text-sm text-wild-tiger-orange font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-3xl mb-2 text-charcoal">{project.title}</h2>
                      <p className="text-slate-gray mb-1">{project.client}</p>

                      <p className="text-slate-gray mb-6 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-charcoal mb-3">
                          Technologies Used:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-deep-tech-blue text-white text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-sm font-semibold text-charcoal mb-3">Key Results:</h3>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-slate-gray">
                              <span className="w-2 h-2 bg-success-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-deep-tech-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let's create something great together. Contact us to discuss your project.
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

export default Work;
