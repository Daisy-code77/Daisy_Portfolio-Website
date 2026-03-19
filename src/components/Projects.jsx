import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer & Job Recommendation System",
      description: "Built an AI-based system to evaluate resumes and recommend relevant job roles. Implemented NLP techniques for keyword extraction and skill matching.",
      tech: ["Python", "NLP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Daisy-code77/Final-Year-Project_AI-Powered-Resume-Analyser",
      live: "https://final-year-project-41ca5.web.app/"
    },
    {
      title: "Global Medical Price Intelligence Platform",
      description: "Built a web-based platform to compare medical product prices across multiple sources. Designed search, filtering, and price comparison features for better user decision-making.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      github: "https://github.com/Daisy-code77/Global-Medical-Price-Intelligence",
      live: "https://med-price-platform-2026.web.app/"
    },
    {
      title: "AI Knowledge Intelligence Platform",
      description: "Developed an AI-powered knowledge system to analyze documents and enable intelligent question-answering. Implemented features like summarization, semantic search, and structured knowledge extraction.",
      tech: ["Python", "NLP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Daisy-code77/AI-Knowledge-Intelligence-Platform-System",
      live: "https://ai-knowledge-platform.web.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Featured Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-card border border-white/5 rounded-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover-glow">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FolderGit2 className="text-primary" size={28} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors" aria-label="Github repository">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-textSecondary text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
            </div>
            
            <div className="p-6 pt-0 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 flex items-center justify-center gap-2 border border-white/10 rounded-lg hover:border-primary hover:text-primary transition-all text-sm"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
