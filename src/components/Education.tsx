import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="education" 
      ref={ref}
      className="py-20 px-6 bg-slate-800 text-slate-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My academic background and learning journey
          </p>
        </div>
        
        <div className={`bg-slate-700/50 rounded-2xl p-8 shadow-lg transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-start gap-5">
            <div className="bg-sky-400/20 p-3 rounded-full">
              <GraduationCap className="text-sky-400" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Diploma in Interactive Media Design</h3>
              <p className="text-sky-400 text-lg mb-4">Fanshawe College, London, ON</p>
              
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <Calendar size={18} />
                <span>April 2023</span>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <Award className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Graduated with honors and distinction</p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Built full-stack web applications with Lumen and Vue.js in real-world project teams</p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="text-yellow-400 mt-1" size={18} />
                  <p className="text-slate-200">Key courses: Web Development, UI/UX Design, Database Management, Mobile App Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-10 bg-slate-700/50 rounded-2xl p-8 shadow-lg transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '100ms' }}>
          <div className="flex items-start gap-5">
            <div className="bg-sky-400/20 p-3 rounded-full">
              <Award className="text-sky-400" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Certifications</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-2">
                  <Award className="text-yellow-400 mt-1" size={18} />
                  <div>
                    <p className="text-slate-100 font-medium">Laravel Certified Developer</p>
                    <p className="text-slate-300 text-sm">Laravel, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="text-yellow-400 mt-1" size={18} />
                  <div>
                    <p className="text-slate-100 font-medium">AWS Certified Cloud Practitioner</p>
                    <p className="text-slate-300 text-sm">Amazon Web Services, 2022</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="text-yellow-400 mt-1" size={18} />
                  <div>
                    <p className="text-slate-100 font-medium">Full Stack Web Development</p>
                    <p className="text-slate-300 text-sm">Udemy, 2021</p>
                  </div>
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