import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Privacy: React.FC = () => {
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
            <h1 className="mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-charcoal mb-4">Introduction</h2>
              <p className="text-slate-gray mb-6">
                Wild Tiger Design LLC ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when
                you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Information We Collect</h2>
              <p className="text-slate-gray mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-slate-gray space-y-2 mb-6">
                <li>Personal information (name, email address, phone number) that you provide voluntarily</li>
                <li>Usage data and analytics about how you interact with our website</li>
                <li>Technical information such as IP address, browser type, and device information</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-slate-gray mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-slate-gray space-y-2 mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our services and fulfill our contractual obligations</li>
                <li>Improve our website and services</li>
                <li>Send you relevant information about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Data Security</h2>
              <p className="text-slate-gray mb-6">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Third-Party Services</h2>
              <p className="text-slate-gray mb-6">
                We may use third-party services (such as analytics providers or hosting services) that
                may collect information about you. These third parties have their own privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Your Rights</h2>
              <p className="text-slate-gray mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-slate-gray space-y-2 mb-6">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Contact Us</h2>
              <p className="text-slate-gray">
                If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;
