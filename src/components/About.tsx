import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-8 bg-black text-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col-reverse lg:flex-row items-center gap-10"
        >
          {/* Text Section */}
          <div className="w-full lg:w-[60%] space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
              🧠 Behind the Code
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              With over 3 years of hands-on experience, I’ve contributed to scalable backend systems, built intuitive interfaces, and collaborated across cross-functional teams to ship real-world products.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              I approach every project with curiosity, a love for clean code, and a commitment to solving problems that matter. Whether it’s fine-tuning performance or enhancing UX, I enjoy working where design and engineering intersect.
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
                className="terminal-content font-mono text-sm sm:text-base leading-relaxed overflow-y-auto max-h-fit sm:max-h-[350px] sm:overflow-y-auto overflow-hidden"
              >
                <div className="text-white space-y-8">
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <div className="text-lg text-sky-400 font-bold mb-2">=== Dev Environment ===</div>
                    <motion.div variants={fadeInUp}>💼 Full Stack Developer</motion.div>
                    <motion.div variants={fadeInUp}>⏳ 3+ years experience</motion.div>
                    <motion.div variants={fadeInUp}>🛠️ Laravel, Vue.js, MySQL</motion.div>
                    <motion.div variants={fadeInUp}>🌍 Based in London, Ontario</motion.div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-2">
                    <div className="text-lg text-sky-400 font-bold mb-2">=== Values & Focus ===</div>
                    <motion.div variants={fadeInUp}>🎯 Precision in every line of code</motion.div>
                    <motion.div variants={fadeInUp}>🎨 UX-first backend development</motion.div>
                    <motion.div variants={fadeInUp}>🚀 Collaboration in Agile teams</motion.div>
                  </motion.div>
                </div>

                {/* Decorative SVG */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 hidden sm:block">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#0EA5E9"
                      d="M45.2,-58.1C58.8,-45.8,70.1,-30.5,73.7,-13.4C77.3,3.7,73.2,22.6,62.5,37.4C51.8,52.2,34.5,62.9,15.3,69.8C-3.9,76.7,-25,79.8,-42.9,71.9C-60.8,64,-75.5,45.1,-79.9,23.9C-84.3,2.7,-78.4,-20.8,-65.8,-38.9C-53.2,-57,-33.9,-69.7,-13.9,-67.3C6.1,-64.9,31.6,-47.4,45.2,-58.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] aspect-square"
            >
              <img
                src="/assets/image/about-me.png"
                alt="Saroj Sharma G"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-sky-400 rounded-2xl -z-10"></div>
              <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
