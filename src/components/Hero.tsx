import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0f172a] text-slate-100 font-['Space_Grotesk'] overflow-hidden"
    >
      {/* Left Typewriter Background (Animated, Mid-Height) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-6 w-fit max-w-[45vw] z-0 pointer-events-none"
      >
        <div className="text-green-400 text-sm md:text-base lg:text-lg font-mono leading-relaxed">
          <Typewriter
            words={[
              'npm run dev',
              'composer install && php artisan serve',
              'echo "Serving Laravel backend..."',
              'yarn build && npm start',
              'vue create your-idea',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={1800}
          />
        </div>
      </motion.div>

      {/* Right Typewriter Background (Animated, Mid-Height) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 right-6 w-fit max-w-[45vw] text-right z-0 pointer-events-none"
      >
        <div className="text-green-400 text-sm md:text-base lg:text-lg font-mono leading-relaxed">
          <Typewriter
            words={[
              'Code. Create. Launch. 🚀',
              'Think in systems, build with empathy.',
              'Debugging is like being a detective...',
              '"First, solve the problem. Then, write the code."',
              'Every line matters. 💡',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={2000}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight"
        >
          <span className="animate-pulse text-white drop-shadow-md">Hi, I'm</span>{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text animate-glow">
            Saroj Sharma G
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text animate-glow">
            Full-Stack Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          I specialize in building secure, scalable, and beautiful web applications using Laravel, Vue.js, and modern stacks. Let's bring your ideas to life!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="mailto:sarojsharma5462@gmail.com"
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </a>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 border-2 border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-400 px-6 py-3 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-md"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer animate-bounce mt-12 text-slate-500 hover:text-sky-400 transition"
        >
          ↓
        </Link>
      </div>
    </section>
  );
};

export default Hero;
