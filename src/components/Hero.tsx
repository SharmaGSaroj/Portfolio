import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0f172a] text-slate-100 font-['Space_Grotesk']"
    >
      <div className={`max-w-4xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Avatar placeholder - Replace with your actual Memoji or avatar */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-4xl">
            👨‍💻
          </div>
        </div>

        {/* Main headline with gradient text */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          I build web apps
          <br />
          and care deeply about{' '}
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            clean code!
          </span>
        </h1>

        {/* Bio text */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          I'm Saroj Sharma G, a full-stack software developer with 3+ years of experience 
          in Laravel and Vue.js. Passionate about writing secure, scalable, and beautiful code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:sarojsharma5462@gmail.com"
            className="group flex items-center gap-2 bg-gradient-to-r from-sky-400 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 border-2 border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-400 px-6 py-3 rounded-full text-lg font-medium transition-all"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-12 text-slate-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;