import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import CodeVisual from './CodeVisual';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 30, suffix: '%', label: 'Latency reduced via query tuning' },
  { value: 25, suffix: '%', label: 'Fewer post-release defects' },
];

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <LazyMotion features={domAnimation}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >
            {/* Visual */}
            <motion.div variants={fadeInUp} className="w-full lg:w-[38%] flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[320px]"
              >
                <CodeVisual />
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="w-full lg:w-[62%] space-y-8">
              <motion.div variants={fadeInUp}>
                <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
                  About
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
                  Behind the code.
                </h2>
                <p className="text-lg leading-relaxed text-muted mb-4 text-balance">
                  With 7+ years of experience, I engineer scalable web applications and optimize
                  multi-tenant architectures — with deep expertise in PHP/Laravel and modern
                  JavaScript frameworks like Vue.js and React.
                </p>
                <p className="text-lg leading-relaxed text-muted text-balance">
                  I'm a passionate advocate for Test-Driven Development and collaborative
                  engineering practices, with a track record of eliminating database performance
                  bottlenecks and designing robust relational schemas.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="block text-3xl sm:text-4xl font-semibold tracking-tight mb-1 tabular-nums"
                    />
                    <div className="text-sm text-muted leading-snug">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default About;
