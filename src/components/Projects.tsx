import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
  category: string;
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
      title: "Deep Seek",
      date: "Jan 2025",
      description: "Local search engine using Next.js + FastAPI + OLLAMA + PostgreSQL.",
      techStack: ["Next.js", "Python", "Tailwind CSS", "Docker", "OpenAI API"],
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      liveLink: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Athena E-Learning",
      date: "Oct 2024",
      description: "E-learning platform with Laravel, Vue.js, and Stripe integration for course payments.",
      techStack: ["Laravel", "Vue.js", "MySQL", "Stripe API", "TailwindCSS"],
      image: "https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      liveLink: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Ecom Dashboard",
      date: "May 2024",
      description: "Admin dashboard for e-commerce with real-time analytics and order management.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      category: "backend"
    },
    {
      id: 4,
      title: "Notion Clone",
      date: "Feb 2024",
      description: "Collaborative document editor with real-time syncing and markdown support.",
      techStack: ["Next.js", "TypeScript", "Firebase", "Slate.js", "TailwindCSS"],
      image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      liveLink: "#",
      category: "fullstack"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      date: "Dec 2023",
      description: "Real-time weather tracking app with location detection and 7-day forecasts.",
      techStack: ["React", "OpenWeather API", "Geolocation API", "TailwindCSS"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      liveLink: "#",
      category: "frontend"
    },
    {
      id: 6,
      title: "Authentication API",
      date: "Aug 2023",
      description: "Secure authentication API with JWT, OAuth, and role-based access control.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      codeLink: "https://github.com/SharmaGSaroj",
      category: "backend"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 px-6 bg-slate-900 text-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A collection of my recent work that showcases my skills and expertise
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map(category => (
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
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] transition-all duration-700 ${
                inView ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;