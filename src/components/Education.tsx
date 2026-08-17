import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

const roles: Role[] = [
  {
    title: 'Software Developer (Intermediate)',
    company: 'Dlytica Inc. — London, ON',
    period: 'Dec 2024 – Present',
    points: [
      'Design, implement, and maintain high-quality backend application logic and database schemas for the AI360 multi-tenant SaaS platform using Laravel 11 and Vue.js 3.',
      'Champion code quality by practicing Test-Driven Development (TDD), writing comprehensive automated unit and integration test suites via PHPUnit to secure database integrity.',
      'Translate complex business and operational requirements into clean architectural patterns, robust data flows, and highly efficient relational schemas.',
      'Collaborate actively within a high-velocity, pair-programming-friendly engineering team, conducting thorough code reviews to ship maintainable software tooling.',
      'Identify, isolate, and refactor legacy query implementations, substantially increasing environment execution speeds and runtime performance.',
    ],
  },
  {
    title: 'Full-Stack Laravel Developer',
    company: 'EventConnect Inc. — London, ON',
    period: 'June 2023 – Oct 2024',
    points: [
      'Reduced database and API latency by 30% through aggressive query profiling, index optimization, and streamlined Eloquent model execution for high-volume datasets.',
      'Cut post-release defects and regressions by 25% through the implementation of structured, automated testing frameworks.',
      'Managed and prepared complex web platform schemas serving thousands of concurrent relational data records across North America.',
      'Collaborated closely with cross-functional stakeholders in an Agile lifecycle to regularly deliver scalable, high-quality enterprise features.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Dlytica Inc. — Remote',
    period: 'Feb 2021 – May 2023',
    points: [
      'Engineered and scaled custom PHP framework utilities, data transformation pipelines, and secure web components to support legacy architecture modernization.',
      'Configured secure, high-integrity third-party API configurations and webhooks, facilitating uninterrupted data syncing across distinct networks.',
      'Optimized legacy frontend assets and relational database query parameters, achieving 30% measurable software execution speedups.',
    ],
  },
];

type Study = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

const studies: Study[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Information Technology (BSc CSIT)',
    school: 'Tribhuvan University',
    period: '2017 – 2021',
    detail:
      'Core focus on Database Management Systems (DBMS), Advanced Object-Oriented Programming, Relational Algebra, and Data Structures.',
  },
  {
    degree: 'Diploma in Interactive Media Design',
    school: 'Fanshawe College — London, ON',
    period: 'Graduated: April 2023',
    detail:
      'Applied robust MVC development, core system architecture design, and data accessibility parameters in real-world team projects.',
  },
];

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6 bg-[#0a0a0c] text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {roles.map((role) => (
            <motion.div
              key={role.title + role.period}
              variants={fadeInUp}
              className="group relative py-10 md:py-12 pl-0 md:pl-6 transition-all duration-300"
            >
              <span className="absolute left-0 top-10 bottom-10 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 hidden md:block" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{role.title}</h3>
                  <p className="text-accent text-base mt-0.5">{role.company}</p>
                </div>
                <span className="text-sm text-muted whitespace-nowrap">{role.period}</span>
              </div>
              <ul className="space-y-2.5">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div id="education" variants={fadeInUp} className="mt-24 mb-16">
          <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Academic background.
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {studies.map((study) => (
            <motion.div
              key={study.degree}
              variants={fadeInUp}
              className="group relative py-8 md:py-10 pl-0 md:pl-6 transition-all duration-300"
            >
              <span className="absolute left-0 top-8 bottom-8 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 hidden md:block" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">{study.degree}</h3>
                  <p className="text-accent text-base mt-0.5">{study.school}</p>
                </div>
                <span className="text-sm text-muted whitespace-nowrap">{study.period}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">{study.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
