import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Home } from 'lucide-react'; // Home icon

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
        rounded-full px-6 py-2 backdrop-blur-md border border-white/10 
        ${isScrolled ? 'bg-white/10 shadow-lg' : 'bg-white/5'}`}
    >
      <div className="flex items-center space-x-10">
        <span
          onClick={() => scroll.scrollToTop()}
          className={`flex items-center gap-1 cursor-pointer text-sm transition-all select-none ${
            activeSection === 'home'
              ? 'text-sky-400 font-bold'
              : 'text-slate-200 hover:text-sky-400'
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
    </nav>
  );
};

export default Navbar;
