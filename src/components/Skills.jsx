import { Code2, Database, Layout, Server, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout className="text-pink-500" size={24} />,
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-500" size={24} />,
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Databases",
      icon: <Database className="text-emerald-500" size={24} />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "AI & ML",
      icon: <Brain className="text-purple-500" size={24} />,
      skills: ["NLP", "Generative AI", "LLMs", "Prompt Engineering"]
    },
    {
      title: "Tools & Core Concepts",
      icon: <Wrench className="text-orange-500" size={24} />,
      skills: ["Git", "GitHub", "Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Technical Skills
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-card border border-white/5 rounded-xl p-6 hover-glow transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#030014] rounded-lg border border-white/5">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-[#030014] border border-white/10 rounded-full text-sm text-textSecondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
