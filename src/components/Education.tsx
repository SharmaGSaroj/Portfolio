import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Code, Layers } from 'lucide-react';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 px-6 bg-black text-slate-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My professional journey and impactful contributions
          </p>
        </div>

        {/* Experience - EventConnect */}
        <div 
          className={`transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(6.5px)',
            WebkitBackdropFilter: 'blur(6.5px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            padding: '2rem',
            marginBottom: '2.5rem'
          }}
        >
          <div className="flex items-start gap-5">
            <div className="bg-sky-400/20 p-3 rounded-full">
              <Briefcase className="text-sky-400" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Software Developer</h3>
              <p className="text-sky-400 text-lg mb-4">EventConnect Inc., London, ON</p>
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <Calendar size={18} />
                <span>June 2023 – October 2024</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <Code className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Built and optimized event management applications using Vue.js, Laravel, and PostgreSQL.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Layers className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Improved performance and reliability by 30%, and reduced system downtime by 20% through debugging and optimization.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Layers className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Led code reviews, integrated MongoDB/MySQL, and created technical documentation for APIs and dev workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience - Xtreminds */}
        <div 
          className={`transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
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
          <div className="flex items-start gap-5">
            <div className="bg-sky-400/20 p-3 rounded-full">
              <Briefcase className="text-sky-400" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">WordPress Developer</h3>
              <p className="text-sky-400 text-lg mb-4">Xtreminds IT Solution</p>
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <Calendar size={18} />
                <span>Feb 2017 – Jan 2021</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <Code className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Developed and optimized WordPress themes, plugins, and custom features using PHP and JS.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Layers className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Performed seamless site migrations with minimal downtime and optimized queries for performance gains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
