import { ArrowUpRight, ChevronDown, Code, Database, Brain, BarChart3 } from "lucide-react";
import { useState } from "react";

const Leadership = () => {
  const [isOpen, setIsOpen] = useState(false);

  const techStack = [
    "LangChain", "RAG", "Python", "Streamlit", "SQL", "LLMs", "Vector DBs"
  ];

  const achievements = [
    {
      icon: <Code className="w-4 h-4" />,
      title: "Built AI-Powered Query System",
      description: "Developed RAG applications for natural language querying across PDFs, YouTube videos, and web content"
    },
    {
      icon: <Brain className="w-4 h-4" />,
      title: "Mastered Generative AI",
      description: "Deep expertise in LLMs, vector databases, embeddings, and advanced prompting techniques"
    },
    {
      icon: <Database className="w-4 h-4" />,
      title: "SQL Database Integration",
      description: "Created natural language interface for database querying with contextually relevant responses"
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: "Interactive Data Visualization",
      description: "Built Streamlit dashboard with dynamic graph generation for actionable insights"
    }
  ];

  return (
    <div className="group w-full md:w-3/3 p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900">
          Experience/Internship
        </h2>
        <span className="text-neutral-400 group-hover:text-neutral-700 transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="bg-neutral-50 border border-neutral-300 rounded-md p-4">
          {/* Company Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-lg font-bold text-neutral-800">
                Coditas Solutions LLP
              </div>
              <div className="text-neutral-900 font-semibold">Associate Software Engineering Intern</div>
            </div>
            <div className="bg-neutral-200 text-neutral-800 px-3 py-1 rounded-full text-sm font-medium border border-neutral-300">
              Jan-24 Jun-24
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md text-xs font-medium border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights - Always Visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-neutral-100 border-l-4 border-neutral-400 p-3 rounded-r-md">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-semibold text-neutral-900">Built RAG Applications</span>
              </div>
              <p className="text-xs text-neutral-700 mt-1">Natural language querying across multiple data sources</p>
            </div>
            <div className="bg-neutral-100 border-l-4 border-neutral-400 p-3 rounded-r-md">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-semibold text-neutral-900">Interactive Dashboards</span>
              </div>
              <p className="text-xs text-neutral-700 mt-1">Streamlit-based visualization with dynamic graphs</p>
            </div>
          </div>
          
          {/* Expandable Details */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <span className="text-sm font-bold">View All Details</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] mt-4' : 'max-h-0'}`}>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-neutral-200 rounded-md">
                  <div className="bg-neutral-200 text-neutral-700 p-2 rounded-full flex-shrink-0 border border-neutral-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;