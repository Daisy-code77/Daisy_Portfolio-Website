import { BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E Computer Science and Engineering",
      institution: "T.J.S ENGINEERING COLLEGE (AUTONOMOUS)",
      board: "Anna University's Syllabus",
      score: "Current CGPA: 8.5",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Major: Computer Science with Mathematics",
      institution: "LOUDER'S GIRLS MATRICULATION HR.SEC.SCHOOL",
      board: "State Board",
      score: "",
      icon: <BookOpen className="text-pink-500" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Education
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-[#030014]"></div>
            
            <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
              <div className="bg-card border border-white/5 rounded-xl p-6 hover-glow transition-all duration-300">
                <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 && 'md:flex-row-reverse'}`}>
                  <div className="p-2 bg-[#030014] rounded-lg border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white content-start">{item.degree}</h3>
                </div>
                
                <h4 className="text-primary font-medium mb-2">{item.institution}</h4>
                {item.board && <p className="text-sm text-textSecondary mb-2">{item.board}</p>}
                {item.score && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                    {item.score}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Central line for desktop */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default Education;
