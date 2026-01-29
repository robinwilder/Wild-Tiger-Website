import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Blog: React.FC = () => {
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
            <h1 className="mb-6">Blog & Resources</h1>
            <p className="text-xl leading-relaxed">
              Insights, tips, and best practices for web development and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card padding="lg">
            <h2 className="text-deep-tech-blue mb-6">Coming Soon</h2>
            <p className="text-lg text-slate-gray mb-8 leading-relaxed">
              We're working on bringing you valuable content about web development, digital marketing,
              and business technology. Check back soon for articles, tutorials, and case studies.
            </p>
            <p className="text-slate-gray">
              In the meantime, feel free to{' '}
              <a href="/contact" className="text-deep-tech-blue hover:text-wild-tiger-orange font-semibold">
                contact us
              </a>{' '}
              with any questions you have.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
