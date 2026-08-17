import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Github, Clock } from 'lucide-react';
import type { Project } from './Projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
        >
          <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0c]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 backdrop-blur p-2 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            <div className="h-56 sm:h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                <span className="text-sm text-muted whitespace-nowrap mt-1.5">{project.date}</span>
              </div>

              {project.status === 'in-progress' && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                  <Clock size={12} />
                  In progress
                </span>
              )}

              <p className="text-[15px] text-muted leading-relaxed mb-6">{project.description}</p>

              {project.details && project.details.length > 0 && (
                <ul className="space-y-2.5 mb-6">
                  {project.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-muted bg-white/5 px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-sm font-medium px-4 py-2.5 rounded-full transition-colors"
                  >
                    <Github size={16} />
                    View code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black hover:bg-white/90 text-sm font-medium px-4 py-2.5 rounded-full transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                )}
                {!project.codeLink && !project.liveLink && (
                  <span className="text-sm text-muted">Links coming soon.</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
