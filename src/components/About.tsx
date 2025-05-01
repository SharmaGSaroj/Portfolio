import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 px-8 bg-black text-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-10 items-start transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-full lg:w-auto relative flex-shrink-0">
            <div className="relative z-10 w-[350px] sm:w-[450px] md:w-[500px] lg:w-[600px] aspect-square">
              <img 
                src="/assets/image/about-me.png" 
                alt="Saroj Sharma G" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sky-400 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 rounded-2xl -z-10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="terminal-window bg-slate-900 rounded-lg p-8 shadow-xl overflow-hidden relative">
              <div className="terminal-header flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-slate-400 text-sm ml-2">terminal</div>
              </div>
              <div className="terminal-content font-mono text-base leading-relaxed overflow-y-auto">
                <div className="text-green-400 mb-4 text-lg">$ python about_me.py</div>
                <div className="text-white space-y-8">
                  <div className="space-y-2">
                    <div className="text-xl text-sky-400 font-bold mb-4">=== Developer Profile ===</div>
                    <div>👤 Name: Saroj Sharma</div>
                    <div>💼 Role: Full Stack Developer</div>
                    <div>⏳ Experience: 3+ years</div>
                    <div>🛠️ Specialization: Laravel, Vue.js, SQL</div>
                    <div>📍 Location: London, Ontario</div>
                    <div>📧 Email: sarojsharma5462@gmail.com</div>
                    <div>📱 Phone: (519) 671-5426</div>
                    <div>🌐 Languages: English, Hindi, Nepali</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl text-sky-400 font-bold mb-4">=== Professional Approach ===</div>
                    <div>🎯 Technical expertise with a keen eye for design and user experience</div>
                    <div>⚡ Thrives in Agile environments</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl text-sky-400 font-bold mb-4">=== Contact Information ===</div>
                    <div>📧 Email: sarojsharma5462@gmail.com</div>
                    <div>📱 Phone: (519) 671-5426</div>
                    <div>📍 Location: London, Ontario</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#0EA5E9"
                      d="M45.2,-58.1C58.8,-45.8,70.1,-30.5,73.7,-13.4C77.3,3.7,73.2,22.6,62.5,37.4C51.8,52.2,34.5,62.9,15.3,69.8C-3.9,76.7,-25,79.8,-42.9,71.9C-60.8,64,-75.5,45.1,-79.9,23.9C-84.3,2.7,-78.4,-20.8,-65.8,-38.9C-53.2,-57,-33.9,-69.7,-13.9,-67.3C6.1,-64.9,31.6,-47.4,45.2,-58.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;