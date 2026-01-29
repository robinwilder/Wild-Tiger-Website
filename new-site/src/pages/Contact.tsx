import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

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
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl leading-relaxed">
              Ready to start your project? Fill out the form below and we'll get back to you within
              24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section-lg bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-2xl mb-6 text-charcoal">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric-cyan focus:border-electric-cyan outline-none transition ${
                          errors.name ? 'border-red-500' : 'border-cool-gray'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric-cyan focus:border-electric-cyan outline-none transition ${
                          errors.email ? 'border-red-500' : 'border-cool-gray'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cool-gray rounded-lg focus:ring-2 focus:ring-electric-cyan focus:border-electric-cyan outline-none transition"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric-cyan focus:border-electric-cyan outline-none transition ${
                          errors.service ? 'border-red-500' : 'border-cool-gray'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="prototype">Prototype Development</option>
                        <option value="hosting">Web Hosting</option>
                        <option value="marketing">Marketing Solutions</option>
                        <option value="not-sure">Not Sure / Consultation</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-cool-gray rounded-lg focus:ring-2 focus:ring-electric-cyan focus:border-electric-cyan outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-success-green/10 border border-success-green/30 rounded-lg">
                      <p className="text-sm text-success-green font-medium">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-sm text-red-600 font-medium">
                        Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <p className="text-sm text-slate-gray text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card padding="lg">
                <h3 className="text-xl mb-6 text-charcoal">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail size={24} className="text-wild-tiger-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Email</p>
                      <a
                        href="mailto:robin@wildtigerdesign.com"
                        className="text-deep-tech-blue hover:text-wild-tiger-orange transition-colors"
                      >
                        robin@wildtigerdesign.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="text-wild-tiger-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-deep-tech-blue hover:text-wild-tiger-orange transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={24} className="text-wild-tiger-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Location</p>
                      <p className="text-slate-gray">
                        Hull, GA
                        <br />
                        Serving Athens Area & Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card padding="lg" className="bg-gradient-to-br from-deep-tech-blue/5 to-electric-cyan/5">
                <h3 className="text-lg mb-3 text-charcoal">Business Hours</h3>
                <div className="space-y-2 text-sm text-slate-gray">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9AM - 6PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </Card>

              <Card padding="lg" className="bg-wild-tiger-orange/5 border border-wild-tiger-orange/30">
                <h3 className="text-lg mb-2 text-charcoal">Response Time</h3>
                <p className="text-sm text-slate-gray">
                  We typically respond to all inquiries within 24 hours during business days. For
                  urgent matters, please call us directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-deep-tech-blue mb-4">Service Area</h2>
          <p className="text-lg text-slate-gray mb-8">
            Based in Hull, GA, proudly serving Athens, GA and surrounding areas. We also work with
            clients nationwide through remote collaboration.
          </p>
          <div className="bg-cool-gray/30 rounded-lg p-12 text-slate-gray">
            [Map Placeholder - Google Maps Integration Coming Soon]
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
