import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  SiLaravel, 
  SiVuedotjs, 
  SiJavascript, 
  SiPhp, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiWordpress,
  SiShopify,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiPostman,
  SiJira,
  SiTrello,
  SiReact,
  SiTypescript
} from "react-icons/si";

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <SiReact />, color: "#61DAFB" },
    { icon: <SiVuedotjs />, color: "#4FC08D" },
    { icon: <SiJavascript />, color: "#F7DF1E" },
    { icon: <SiTypescript />, color: "#3178C6" },
    { icon: <SiHtml5 />, color: "#E34F26" },
    { icon: <SiCss3 />, color: "#1572B6" },
    { icon: <SiTailwindcss />, color: "#06B6D4" },
    { icon: <SiSass />, color: "#CC6699" },
    { icon: <SiLaravel />, color: "#FF2D20" },
    { icon: <SiPhp />, color: "#777BB4" },
    { icon: <SiNodedotjs />, color: "#339933" },
    { icon: <SiNextdotjs />, color: "#ffffff" },
    { icon: <SiMysql />, color: "#4479A1" },
    { icon: <SiPostgresql />, color: "#4169E1" },
    { icon: <SiMongodb />, color: "#47A248" },
    { icon: <SiFirebase />, color: "#FFCA28" },
    { icon: <SiWordpress />, color: "#21759B" },
    { icon: <SiShopify />, color: "#7AB55C" },
    { icon: <SiGithub />, color: "#ffffff" },
    { icon: <SiDocker />, color: "#2496ED" },
    { icon: <SiPostman />, color: "#FF6C37" },
    { icon: <SiJira />, color: "#0052CC" },
    { icon: <SiTrello />, color: "#0052CC" }
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 px-6 bg-[#0A0B14] overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B14] via-[#12141F] to-[#0A0B14] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-16">Tech Stack</h2>

        <div className="w-full max-w-6xl">
          <div className={`honeycomb transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="honeycomb-cell"
              >
                <div className="honeycomb-content bg-[#151823] hover:bg-[#1A1E2A]
                              flex items-center justify-center group relative
                              shadow-lg shadow-black/50">
                  <div
                    className="text-3xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 honeycomb-glow"
                    style={{ 
                      background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .honeycomb {
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            transform: translateY(25px);
          }
          
          .honeycomb-cell {
            flex: 0 1 80px;
            max-width: 80px;
            height: 92px;
            margin: 1.5px 1px;
            position: relative;
            padding: 0.5em;
          }
          
          .honeycomb-cell:nth-child(odd) {
            transform: translateX(44px);
          }
          
          .honeycomb-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            transition: all 0.3s ease;
            transform-origin: center;
          }

          .honeycomb-content:hover {
            transform: scale(1.1);
          }

          .honeycomb-glow {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }

          @media (max-width: 640px) {
            .honeycomb-cell:nth-child(odd) {
              transform: translateX(0);
            }
            .honeycomb {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;