import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Terms: React.FC = () => {
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
            <h1 className="mb-6">Terms of Service</h1>
            <p className="text-xl leading-relaxed">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card padding="lg">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Agreement to Terms</h2>
              <p className="text-slate-gray mb-6">
                By accessing or using the services of Wild Tiger Design LLC, you agree to be bound by
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Services</h2>
              <p className="text-slate-gray mb-6">
                Wild Tiger Design LLC provides web development, prototype development, web hosting, and
                marketing services. The specific scope of services will be defined in individual project
                agreements or statements of work.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Payment Terms</h2>
              <p className="text-slate-gray mb-4">Payment terms include:</p>
              <ul className="list-disc pl-6 text-slate-gray space-y-2 mb-6">
                <li>Payment schedules will be outlined in project agreements</li>
                <li>Late payments may incur additional fees</li>
                <li>Hosting and maintenance services are billed monthly or annually</li>
                <li>Refunds are handled on a case-by-case basis</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Intellectual Property</h2>
              <p className="text-slate-gray mb-6">
                Upon full payment, clients receive ownership of the code and content created specifically
                for their project. Wild Tiger Design retains the right to showcase completed work in
                our portfolio unless otherwise agreed.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Client Responsibilities</h2>
              <p className="text-slate-gray mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 text-slate-gray space-y-2 mb-6">
                <li>Providing necessary content, materials, and access in a timely manner</li>
                <li>Reviewing and approving work within agreed timelines</li>
                <li>Maintaining backups of their own content</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Warranties and Disclaimers</h2>
              <p className="text-slate-gray mb-6">
                We provide our services "as is" and make no warranties beyond those explicitly stated
                in project agreements. We are not liable for indirect, incidental, or consequential
                damages arising from the use of our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-slate-gray mb-6">
                Our liability is limited to the amount paid for the specific service in question. We
                are not liable for losses resulting from circumstances beyond our reasonable control.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Termination</h2>
              <p className="text-slate-gray mb-6">
                Either party may terminate services according to the terms outlined in individual
                project agreements. Termination does not relieve the client of payment obligations
                for work completed.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Changes to Terms</h2>
              <p className="text-slate-gray mb-6">
                We reserve the right to modify these terms at any time. Continued use of our services
                after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Governing Law</h2>
              <p className="text-slate-gray mb-6">
                These terms are governed by the laws of the State of Georgia, United States.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Contact</h2>
              <p className="text-slate-gray">
                For questions about these Terms of Service, contact us at:
                <br />
                Email: <a href="mailto:robin@wildtigerdesign.com" className="text-deep-tech-blue hover:text-wild-tiger-orange">robin@wildtigerdesign.com</a>
                <br />
                Phone: (123) 456-7890
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;
