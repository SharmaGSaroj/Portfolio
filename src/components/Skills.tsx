import React from 'react';
import {
  SiLaravel, SiVuedotjs, SiJavascript, SiPhp, SiMysql,
  SiPostgresql, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiHtml5, SiCss3, SiSass, SiTailwindcss, SiWordpress,
  SiShopify, SiFirebase, SiGithub, SiDocker, SiPostman,
  SiJira, SiTrello, SiReact, SiTypescript
} from 'react-icons/si';
import Marquee from './Marquee';

const skills = [
  { icon: <SiReact />, color: "#61DAFB", name: "React" },
  { icon: <SiVuedotjs />, color: "#4FC08D", name: "Vue.js" },
  { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
  { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
  { icon: <SiHtml5 />, color: "#E34F26", name: "HTML5" },
  { icon: <SiCss3 />, color: "#1572B6", name: "CSS3" },
  { icon: <SiTailwindcss />, color: "#06B6D4", name: "TailwindCSS" },
  { icon: <SiSass />, color: "#CC6699", name: "SASS" },
  { icon: <SiLaravel />, color: "#FF2D20", name: "Laravel" },
  { icon: <SiPhp />, color: "#777BB4", name: "PHP" },
  { icon: <SiNodedotjs />, color: "#339933", name: "Node.js" },
  { icon: <SiNextdotjs />, color: "#ffffff", name: "Next.js" },
];

const skillsRow2 = [
  { icon: <SiMysql />, color: "#4479A1", name: "MySQL" },
  { icon: <SiPostgresql />, color: "#4169E1", name: "PostgreSQL" },
  { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
  { icon: <SiFirebase />, color: "#FFCA28", name: "Firebase" },
  { icon: <SiWordpress />, color: "#21759B", name: "WordPress" },
  { icon: <SiShopify />, color: "#7AB55C", name: "Shopify" },
  { icon: <SiGithub />, color: "#ffffff", name: "GitHub" },
  { icon: <SiDocker />, color: "#2496ED", name: "Docker" },
  { icon: <SiPostman />, color: "#FF6C37", name: "Postman" },
  { icon: <SiJira />, color: "#0052CC", name: "Jira" },
  { icon: <SiTrello />, color: "#0052CC", name: "Trello" },
];

const SkillTile: React.FC<{ icon: React.ReactNode; color: string; name: string }> = ({ icon, color, name }) => (
  <div className="group flex items-center gap-3 py-3.5 px-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 whitespace-nowrap">
    <div className="text-xl transition-transform duration-300 group-hover:scale-110" style={{ color }}>
      {icon}
    </div>
    <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Tools I work with.
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        <Marquee speed={38}>
          {skills.map((skill) => (
            <SkillTile key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee speed={42} reverse>
          {skillsRow2.map((skill) => (
            <SkillTile key={skill.name} {...skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
