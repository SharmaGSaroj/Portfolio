import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  details?: string[];
  techStack: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
  status?: 'completed' | 'in-progress';
  category: string[];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 6,
      title: "YaTri Technologies — Custom WordPress Theme",
      date: "2025 · Ongoing",
      description: "Building a custom WordPress theme for YaTri Technologies, a Nepal-based industrial engineering firm offering consulting, automation, robotics, and manufacturing engineering under one roof.",
      details: [
        "Custom theme built from the ground up rather than a page-builder template, for full control over layout and performance.",
        "Design translates the client's 'one accountable team' positioning into clear, structured service and discipline sections.",
      ],
      techStack: ["WordPress", "PHP", "JavaScript", "CSS3"],
      image: "/images/yatri-technologies.jpg",
      liveLink: "https://www.yatritechnologies.com/",
      status: "in-progress",
      category: ["frontend", "backend"]
    },
    {
      id: 5,
      title: "Peeks",
      date: "2025",
      description: "A self-contained WordPress plugin that adds a TikTok/Instagram-Reels-style vertical video feed for property listings, plus a host-facing dashboard for uploading and managing them.",
      details: [
        "Built for WPRentals-based sites, but degrades gracefully on WordPress setups without it.",
        "Host-facing dashboard for uploading, ordering, and managing property video content.",
        "Like, bookmark, view-count, and social share (WhatsApp, Facebook, X) built into each video card, with booking price and a direct 'Book Now' CTA.",
        "Packaged as a self-contained plugin rather than a theme fork, so it drops into existing sites.",
      ],
      techStack: ["WordPress", "PHP", "JavaScript", "MySQL"],
      image: "/images/peeks-desktop.jpg",
      liveLink: "https://letusstay.ca/peeks",
      status: "completed",
      category: ["fullstack"]
    },
    {
      id: 1,
      title: "Deep Seek (Local Search Engine)",
      date: "Jan 2025",
      description: "Built a search engine using Next.js (frontend), FastAPI (backend), and OLLAMA for deep search with RAG integration.",
      details: [
        "Next.js frontend styled with Tailwind CSS for a fast, responsive UI.",
        "FastAPI backend integrating OLLAMA for local deep search with Retrieval-Augmented Generation.",
        "PostgreSQL for data storage, containerized with Docker for a consistent local setup.",
      ],
      techStack: ["Next.js", "Python", "OLLAMA", "PostgreSQL", "Tailwind CSS", "Docker", "OpenAI API"],
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/Personal-AI",
      status: "completed",
      category: ["fullstack"]
    },
    {
      id: 2,
      title: "Cyber Bullying in Basketball",
      date: "Mar 2023",
      description: "Created a forum app to combat cyberbullying in Canadian basketball using Vue.js, Lumen API, and JWT-based auth.",
      details: [
        "Vue.js frontend with a PHP Lumen API backend and JWT-based authentication.",
        "MySQL database backing a forum-style community platform, styled with SASS and Bootstrap.",
      ],
      techStack: ["Vue.js", "PHP Lumen", "MySQL", "SASS", "Bootstrap", "JWT"],
      image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/Cyberbullyin-in-basketball",
      status: "completed",
      category: ["frontend", "backend"]
    },
    {
      id: 3,
      title: "RokuFlash Back Streaming App",
      date: "Apr 2023",
      description: "Entertainment Roku app for classic content using Vue.js, Firebase Auth, and IMDB API integration.",
      details: [
        "Vue.js frontend with a PHP Lumen backend and MySQL database.",
        "Firebase Authentication and IMDB API integration for content metadata.",
      ],
      techStack: ["Vue.js", "PHP Lumen", "MySQL", "IMDB API", "Bootstrap", "Firebase"],
      image: "https://images.pexels.com/photos/8466717/pexels-photo-8466717.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/SharmaG_Saroj-Bhavya_Thakkar-Rokufullbuild",
      status: "completed",
      category: ["fullstack"]
    },
    {
      id: 4,
      title: "ChatApp (Real-Time Messaging)",
      date: "Feb 2023",
      description: "Real-time chat app with Vue.js frontend, Node/Express backend, and Socket.io for instant messaging.",
      details: [
        "Vue.js frontend with a Node.js/Express backend.",
        "Socket.io powering real-time bidirectional messaging, styled with Tailwind CSS.",
      ],
      techStack: ["Vue.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/SharmaG_S_Chatapp",
      status: "completed",
      category: ["backend"]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 bg-[#0a0a0c] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="text-[13px] font-semibold tracking-wide text-accent uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            Selected work.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-balance">
            A collection of real-world work that showcases my development skills and impact. Click any card for details.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id ? 'text-black' : 'text-muted hover:text-white'
              }`}
            >
              {filter === category.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {filter !== category.id && (
                <span className="absolute inset-0 bg-white/5 hover:bg-white/10 rounded-full -z-10 transition-colors" />
              )}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                custom={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              >
                <SpotlightCard
                  onClick={() => setSelectedProject(project)}
                  className="group h-full cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.status === 'in-progress' && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-medium text-white bg-black/60 backdrop-blur px-2.5 py-1 rounded-full">
                        <Clock size={12} className="text-accent" />
                        In progress
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <span className="text-xs text-muted whitespace-nowrap mt-1">{project.date}</span>
                    </div>
                    <p className="text-[15px] text-muted leading-relaxed mb-5">{project.description}</p>
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-muted bg-white/5 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                        >
                          <Github size={15} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <span className="ml-auto text-sm font-medium text-muted group-hover:text-white transition-colors">
                        Details →
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
