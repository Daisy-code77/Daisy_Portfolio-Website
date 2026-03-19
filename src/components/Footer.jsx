import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#030014] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Daisy R</h2>
            <p className="text-textSecondary text-sm max-w-sm">
              Computer Science Engineering Student<br />
              Software Developer & AI Enthusiast
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-textSecondary text-sm font-medium mb-4">Let's Connect</h3>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/rdaisy" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full text-textSecondary hover:text-primary hover:border-primary transition-all hover-glow" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Daisy-code77" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full text-textSecondary hover:text-white hover:border-white transition-all hover-glow" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:daisy11092004@gmail.com" className="p-2 border border-white/10 rounded-full text-textSecondary hover:text-pink-500 hover:border-pink-500 transition-all hover-glow" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-textSecondary text-sm font-medium mb-2">Ready to collaborate?</h3>
            <a href="mailto:daisy11092004@gmail.com" className="text-primary hover:text-white transition-colors">
              daisy11092004@gmail.com
            </a>
            <p className="text-textSecondary text-sm mt-1">+91 9176215330</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-textSecondary">
          <p className="flex items-center gap-1 mb-4 md:mb-0">
            Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
          </p>
          <p>&copy; {new Date().getFullYear()} Daisy R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
