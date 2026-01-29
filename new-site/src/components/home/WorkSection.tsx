import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const WorkSection: React.FC = () => {
  // Placeholder projects - these will be replaced with actual project data
  const projects: Project[] = [
    {
      id: 'central-delivery',
      title: 'Central Delivery Platform',
      client: 'Delivery Service',
      description:
        'Custom web application for managing delivery operations with real-time tracking and automated dispatch.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      image: '/images/project-placeholder.jpg',
      link: '/work/central-delivery',
    },
    {
      id: 'drparkrx',
      title: 'Dr. Park RX',
      client: 'Healthcare',
      description:
        'Professional healthcare website with patient portal and appointment scheduling system.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: '/images/project-placeholder.jpg',
      link: '/work/drparkrx',
    },
    {
      id: 'intersky',
      title: 'Intersky Solutions',
      client: 'Technology Services',
      description:
        'Corporate website redesign with focus on lead generation and service showcasing.',
      technologies: ['React', 'Next.js', 'Framer Motion', 'Vercel'],
      image: '/images/project-placeholder.jpg',
      link: '/work/intersky',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="work" className="py-section-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-deep-tech-blue mb-4">Recent Work</h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Explore our portfolio of successful projects and the results we've
            delivered for our clients
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card padding="sm" className="group cursor-pointer h-full flex flex-col">
                <Link to={project.link} className="flex flex-col h-full">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-deep-tech-blue to-electric-cyan rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300"></div>
                    <ExternalLink
                      className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10"
                      size={48}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-charcoal group-hover:text-deep-tech-blue transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-gray">{project.client}</p>
                    </div>

                    <p className="text-slate-gray mb-4 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cool-gray text-deep-tech-blue text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Case Study Link */}
                    <div className="mt-4 pt-4 border-t border-cool-gray">
                      <span className="text-deep-tech-blue font-semibold text-sm group-hover:text-wild-tiger-orange transition-colors">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
