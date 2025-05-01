import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, handleSubmit] = useForm("mnndjrdp");

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-2/5"
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(6.5px)',
                WebkitBackdropFilter: 'blur(6.5px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '2rem'
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-400/20 p-3 rounded-full">
                    <Mail className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:sarojsharma5462@gmail.com" className="text-slate-300 hover:text-sky-400 transition-colors">
                      sarojsharma5462@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sky-400/20 p-3 rounded-full">
                    <Phone className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+15196715426" className="text-slate-300 hover:text-sky-400 transition-colors">
                      (519) 671-5426
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sky-400/20 p-3 rounded-full">
                    <MapPin className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-slate-300">London, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/SharmaGSaroj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saroj-sharma-g-96027017b/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(6.5px)',
                WebkitBackdropFilter: 'blur(6.5px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '2rem'
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Chat</h3>

              {state.succeeded && (
                <div className="bg-green-400/20 text-green-400 p-4 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Your message here..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex items-center justify-center gap-2 w-full bg-sky-400 hover:bg-sky-500 text-slate-900 font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
                >
                  {state.submitting ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
