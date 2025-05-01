import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl 
        px-6 py-2 backdrop-blur-md border border-white/10 rounded-full 
        transition-all duration-300 ${isScrolled ? 'bg-white/10 shadow-lg' : 'bg-white/5'}`}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center space-x-10">
        <span
          onClick={() => scroll.scrollToTop()}
          className={`flex items-center gap-1 cursor-pointer text-sm transition-all select-none ${
            activeSection === 'home' ? 'text-sky-400 font-bold' : 'text-slate-200 hover:text-sky-400'
          }`}
        >
          <Home size={16} />
          Home
        </span>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="relative text-sky-400 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-sky-400"
            className="relative cursor-pointer transition-all text-sm text-slate-200 hover:text-sky-400"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center justify-between">
        {/* Hamburger icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center gap-[4px] w-6 h-6 z-50"
        >
          <div className="w-4 h-[2px] bg-white rounded-sm"></div>
          <div className="w-5 h-[2px] bg-white rounded-sm"></div>
          <div className="w-3 h-[2px] bg-white rounded-sm"></div>
        </button>

        {/* Home button - hidden when menu is open */}
        {!menuOpen && (
          <span
            onClick={() => scroll.scrollToTop()}
            className={`ml-4 flex items-center gap-1 cursor-pointer text-sm transition-all select-none ${
              activeSection === 'home' ? 'text-sky-400 font-bold' : 'text-slate-200 hover:text-sky-400'
            }`}
          >
            <Home size={16} />
            Home
          </span>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-[#0f172a]/90 backdrop-blur-lg 
              rounded-xl shadow-lg p-4 space-y-3 z-40 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => setMenuOpen(false)}
                activeClass="text-sky-400 font-bold"
                className="block text-sm text-slate-200 hover:text-sky-400"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
