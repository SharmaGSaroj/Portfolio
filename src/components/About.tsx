import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

// Optimize animations by using simpler variants
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-8 bg-black text-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse lg:flex-row items-center gap-10"
          >
            {/* Text Section */}
            <div className="w-full lg:w-[60%] space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                🧠 Behind the Code
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                With over 3 years of hands-on experience, I've contributed to scalable backend systems, built intuitive interfaces, and collaborated across cross-functional teams to ship real-world products.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                I approach every project with curiosity, a love for clean code, and a commitment to solving problems that matter. Whether it's fine-tuning performance or enhancing UX, I enjoy working where design and engineering intersect.
              </p>

              {/* Animated Terminal */}
              <div className="terminal-window bg-slate-900 rounded-lg p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="terminal-header flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-slate-400 text-sm ml-2">terminal</div>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  transition={{ duration: 0.3 }}
                  className="terminal-content font-mono text-sm sm:text-base leading-relaxed"
                >
                  <div className="text-white space-y-8">
                    <motion.div variants={fadeInUp} transition={{ duration: 0.3 }} className="space-y-2">
                      <div className="text-lg text-sky-400 font-bold mb-2">=== Dev Environment ===</div>
                      <div>💼 Full Stack Developer</div>
                      <div>⏳ 3+ years experience</div>
                      <div>🛠️ Laravel, Vue.js, MySQL</div>
                      <div>🌍 Based in London, Ontario</div>
                    </motion.div>

                    <motion.div variants={fadeInUp} transition={{ duration: 0.3 }} className="space-y-2">
                      <div className="text-lg text-sky-400 font-bold mb-2">=== Values & Focus ===</div>
                      <div>🎯 Precision in every line of code</div>
                      <div>🎨 UX-first backend development</div>
                      <div>🚀 Collaboration in Agile teams</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <Suspense fallback={<div className="w-full max-w-[240px] aspect-square bg-slate-800 animate-pulse rounded-2xl" />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] aspect-square"
                >
                  <img
                    src="/images/about-me.webp"
                    alt="Saroj Sharma G"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                    width="400"
                    height="400"
                  />
                  <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-sky-400 rounded-2xl -z-10"></div>
                  <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 rounded-2xl -z-10"></div>
                </motion.div>
              </Suspense>
            </div>
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default About;
