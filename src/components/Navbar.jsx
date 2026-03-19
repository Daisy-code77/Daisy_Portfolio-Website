import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Awards', 'Contact'];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#030014]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <a href="#home" className="text-2xl font-bold text-primary tracking-wider">Daisy R</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-textSecondary hover:text-white transition-colors uppercase tracking-wide"
              >
                {link}
              </a>
            ))}
            <a 
              href="#"
              className="px-5 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-wide glow-effect"
            >
              Resume
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030014] border-t border-white/5 absolute w-full left-0">
          <div className="px-2 pt-2 pb-6 space-y-1 mt-2">
            {navLinks.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-textSecondary hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wide"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="#"
                className="block text-center px-5 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all text-base uppercase tracking-wide"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
