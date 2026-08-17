import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6 text-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-[15px] font-semibold text-white cursor-pointer"
          >
            Saroj Sharma
          </Link>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="text-sm text-center md:text-right">
            © {currentYear} Saroj Sharma G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
