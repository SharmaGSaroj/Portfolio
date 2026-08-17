import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white overflow-hidden"
    >
      {/* Soft ambient glow, Apple-keynote style */}
      <motion.div
        animate={{ opacity: [0.22, 0.34, 0.22], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(41,151,255,0.35) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Subtle grid texture, common SaaS hero backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)',
        }}
      />

      <div className="max-w-4xl text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-white/80 mb-6 border border-white/15 rounded-full px-3.5 py-1.5 bg-white/5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          Full-Stack Developer · London, ON
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tightest leading-[1.05] mb-6 text-balance"
        >
          Saroj Sharma G.
          <br />
          <span className="text-white/50">Building for the web.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto text-balance"
        >
          Results-driven full-stack developer with 7+ years of experience engineering scalable web
          applications with Laravel, Vue, and React — built on a foundation of TDD and clean,
          testable code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:sarojsharma5462@gmail.com"
            className="group relative overflow-hidden flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[15px] font-medium transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(41,151,255,0.25)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(0,0,0,0.12),transparent)] bg-[length:200%_100%] animate-shine" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 text-accent hover:text-accent-dark px-2 py-3 text-[15px] font-medium transition-colors"
          >
            <FileText className="w-4 h-4" />
            View resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-14 text-xs text-white/35"
        >
          {['Laravel 11/12', 'Vue.js 3', 'React', 'TDD · PHPUnit', 'Multi-tenant SaaS'].map((tag) => (
            <span key={tag} className="tracking-wide">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer absolute bottom-10 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
