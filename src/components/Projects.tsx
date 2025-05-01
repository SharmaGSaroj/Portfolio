import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
  category: string[];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Deep Seek (Local Search Engine)",
      date: "Jan 2025",
      description: "Built a search engine using Next.js (frontend), FastAPI (backend), and OLLAMA for deep search with RAG integration.",
      techStack: ["Next.js", "Python", "OLLAMA", "PostgreSQL", "Tailwind CSS", "Docker", "OpenAI API"],
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/Personal-AI",
      category: ["fullstack"]
    },
    {
      id: 2,
      title: "Cyber Bullying in Basketball",
      date: "Mar 2023",
      description: "Created a forum app to combat cyberbullying in Canadian basketball using Vue.js, Lumen API, and JWT-based auth.",
      techStack: ["Vue.js", "PHP Lumen", "MySQL", "SASS", "Bootstrap", "JWT"],
      image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/Cyberbullyin-in-basketball",
      category: ["frontend", "backend"]
    },
    {
      id: 3,
      title: "RokuFlash Back Streaming App",
      date: "Apr 2023",
      description: "Entertainment Roku app for classic content using Vue.js, Firebase Auth, and IMDB API integration.",
      techStack: ["Vue.js", "PHP Lumen", "MySQL", "IMDB API", "Bootstrap", "Firebase"],
      image: "https://images.pexels.com/photos/8466717/pexels-photo-8466717.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/SharmaG_Saroj-Bhavya_Thakkar-Rokufullbuild",
      category: ["fullstack"]
    },
    {
      id: 4,
      title: "ChatApp (Real-Time Messaging)",
      date: "Feb 2023",
      description: "Real-time chat app with Vue.js frontend, Node/Express backend, and Socket.io for instant messaging.",
      techStack: ["Vue.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      codeLink: "https://github.com/SharmaGSaroj/SharmaG_S_Chatapp",
      category: ["backend"]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-black text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A collection of my real-world work that showcases my development skills and impact.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-sky-400 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={i}
              className="overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(6.5px)',
                WebkitBackdropFilter: 'blur(6.5px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-slate-400">{project.date}</span>
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-700 text-sky-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
