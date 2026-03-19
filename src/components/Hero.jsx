import { Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-r from-primary to-purple-800">
            <img 
              src="https://image2url.com/r2/default/images/1773908991550-60ebb003-ea72-43b4-ad3d-838e313d1bc4.jpeg" 
              alt="Daisy R" 
              className="w-full h-full object-cover rounded-full border-4 border-[#030014]"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
            DAISY R
          </span>
        </h1>

        {/* Roles/Titles */}
        <h2 className="text-xl md:text-2xl text-textSecondary font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Computer Science Engineering Student | Software Developer | AI Enthusiast | Team Leader
        </h2>

        {/* Bio */}
        <p className="text-base md:text-lg text-textSecondary/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Aspiring Software Engineer with a strong foundation in AI and web development. Experienced in building real-world applications using Python and modern web technologies. Passionate about solving practical problems and developing scalable, impactful systems.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-sm text-textSecondary">
          <a href="mailto:daisy11092004@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} className="text-primary" />
            daisy11092004@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-pink-500" />
            India
          </span>
          <a href="tel:+919176215330" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} className="text-red-500" />
            +91 9176215330
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-500 to-primary hover:opacity-90 transition-opacity glow-effect"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3 rounded-md font-medium text-textSecondary border border-white/10 hover:border-primary hover:text-white transition-all bg-[#0F172A]/50"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
