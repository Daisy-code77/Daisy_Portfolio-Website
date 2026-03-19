import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Founder",
      company: "Women Coding Training Initiative",
      date: "Jan 2025 - Present",
      location: "",
      points: [
        "Founded a weekend coding program for women without laptops",
        "Designed mobile-based curriculum using open-source tools",
        "Mentored 30+ learners, improving digital literacy and confidence"
      ]
    },
    {
      role: "Intern",
      company: "Nobel Global Internship",
      date: "Aug 2025 - Dec 2025",
      location: "Washington, USA",
      points: [
        "Completed an international internship focused on technology and leadership",
        "Worked on web design, AI tools, and collaborative platforms",
        "Strengthened communication and cross-cultural teamwork skills"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Cognifyz Technologies",
      date: "Jul 2025 - Aug 2025",
      location: "Maharashtra, India",
      points: [
        "Developed, tested, and maintained software applications",
        "Applied debugging and problem-solving skills for performance improvement",
        "Collaborated with teams to deliver scalable solutions"
      ]
    },
    {
      role: "Trainee",
      company: "Oracle IT Job Readiness Skills Course",
      date: "Aug 2024 - Jan 2025",
      location: "Hyderabad",
      points: [
        "Completed training in software development and AI tools",
        "Built real-world projects aligned with industry practices",
        "Received mentorship from industry experts"
      ]
    },
    {
      role: "Trainee",
      company: "Aspire Leadership Program",
      date: "Jun 2024 - Present",
      location: "New York, USA",
      points: [
        "Participated in global leadership and tech-for-impact projects",
        "Collaborated with peers from 15+ countries",
        "Earned Confidence Excellence Badge for communication and initiative"
      ]
    },
    {
      role: "Volunteer",
      company: "Udayan Care",
      date: "May 2021 - Present",
      location: "Delhi Headquarters",
      points: [
        "Led student engagement and social awareness initiatives",
        "Conducted workshops on communication and skill development",
        "Promoted education access through mentoring"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Experience & Leadership
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card border border-white/5 rounded-xl p-6 hover-glow transition-all duration-300 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-primary" size={20} />
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              </div>
              <h4 className="text-primary font-medium mb-1">{exp.company}</h4>
              <p className="text-sm text-textSecondary">{exp.date}</p>
              {exp.location && <p className="text-sm text-textSecondary">{exp.location}</p>}
            </div>
            <div className="md:w-2/3">
              <ul className="list-disc list-inside space-y-2 text-textSecondary/90">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
