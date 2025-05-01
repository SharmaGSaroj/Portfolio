import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-slate-800 py-8 px-6 text-slate-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-xl font-bold text-slate-100 cursor-pointer"
            >
              Saroj<span className="text-sky-400">.</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            <Link to="hero" smooth={true} duration={500} className="hover:text-sky-400 transition-colors cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-sky-400 transition-colors cursor-pointer">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-sky-400 transition-colors cursor-pointer">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-sky-400 transition-colors cursor-pointer">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-sky-400 transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>© {currentYear} Saroj Sharma G. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;