import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, handleSubmit] = useForm("mnndjrdp");

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            Let's build something.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-balance">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="lg:w-2/5"
          >
            <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-semibold tracking-tight mb-6">Contact information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-2.5 rounded-full">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted mb-1">Email</h4>
                    <a href="mailto:sarojsharma5462@gmail.com" className="text-[15px] hover:text-accent transition-colors">
                      sarojsharma5462@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-2.5 rounded-full">
                    <Phone className="text-accent" size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted mb-1">Phone</h4>
                    <a href="tel:+15196715426" className="text-[15px] hover:text-accent transition-colors">
                      (519) 671-5426
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-2.5 rounded-full">
                    <MapPin className="text-accent" size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted mb-1">Location</h4>
                    <p className="text-[15px]">London, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-sm font-medium text-muted mb-4">Connect</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/SharmaGSaroj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saroj-sharma-g-96027017b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="lg:w-3/5"
          >
            <SpotlightCard className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-semibold tracking-tight mb-6">Send a message</h3>

              {state.succeeded && (
                <div className="bg-accent/10 text-accent p-4 rounded-xl mb-6 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="Your message here..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden flex items-center justify-center gap-2 w-full bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded-full transition-colors disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {state.submitting ? 'Sending...' : (
                      <>
                        <Send size={16} />
                        <span>Send message</span>
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(0,0,0,0.12),transparent)] bg-[length:200%_100%] animate-shine" />
                </motion.button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
