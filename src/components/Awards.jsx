import { Award, CheckCircle2, Languages } from 'lucide-react';

const Awards = () => {
  const awardsList = [
    "Student All-Rounder Award (2019)",
    "Best Student Award (2020)",
    "Excellent Speech Award (2020)",
    "World Record Participation – Pilogathon (Social Impact), Udayan Care (2024)",
    "Oracle IT Readiness Certification (2024)",
    "Aspire Leadership Program Completion Badge (2024)",
    "Media Department Representative of the Year – Udayan Care (2025)",
    "Oracle Cloud Infrastructure & AI Foundations Associate Certification (2025)",
    "AI Tools & Fluency Design – Microsoft (2025)",
    "AI Integrated Leadership Certificate – Aspire, USA (2025)",
    "Software Engineering Job Simulation – Electronic Arts (USA) (2025)",
    "Nobel Global Internship Completion Certificate (USA) (2025)"
  ];

  const strengths = [
    "Problem Solving & Analytical Thinking",
    "Leadership & Team Collaboration",
    "Effective Communication & Presentation",
    "Adaptability & Quick Learning",
    "Time Management & Execution"
  ];

  const languages = [
    { name: "TAMIL", proficiency: "Fluent – Speak, Read, Write" },
    { name: "ENGLISH", proficiency: "Fluent – Speak, Read, Write" },
    { name: "HINDI", proficiency: "BASIC UNDERSTANDING" }
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Awards & Recognition
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-card border border-white/5 rounded-xl p-8 hover-glow transition-all duration-300 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#030014] rounded-lg border border-white/5">
              <Award className="text-pink-500" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Awards & Certifications</h3>
          </div>
          <ul className="space-y-4">
            {awardsList.map((award, index) => (
              <li key={index} className="flex items-start gap-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={16} />
                <span className="text-textSecondary text-sm md:text-base">{award}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div className="bg-card border border-white/5 rounded-xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#030014] rounded-lg border border-white/5">
                <CheckCircle2 className="text-emerald-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Core Strengths</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {strengths.map((str, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-textSecondary text-sm">{str}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-white/5 rounded-xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#030014] rounded-lg border border-white/5">
                <Languages className="text-blue-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-white tracking-wide">{lang.name}</span>
                  <span className="text-textSecondary text-sm mt-1 sm:mt-0">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
