import React from 'react';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiCplusplus,
  SiNodedotjs, 
  SiExpress, 
  SiReact, 
  SiLangchain, 
  SiOpenai, 
  SiPrisma, 
  SiNextdotjs, 
  SiDjango, 
  SiFastapi, 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiDocker, 

  SiFigma, 

  SiJira
} from 'react-icons/si';
import { GiTeamIdea } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skills: Skill[] = [
    // Group 1: Programming Languages
    { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
    { name: 'HTML', icon: <SiHtml5 className="w-4 h-4" /> },
    { name: 'CSS', icon: <SiCss3 className="w-4 h-4" /> },
    { name: 'C++', icon: <SiCplusplus className="w-4 h-4" /> },

    // Group 2: Frameworks & Libraries
    { name: 'Node', icon: <SiNodedotjs className="w-4 h-4" /> },
    { name: 'Express', icon: <SiExpress className="w-4 h-4" /> },
    { name: 'React', icon: <SiReact className="w-4 h-4" /> },
    { name: 'LangChain', icon: <SiLangchain className="w-4 h-4" /> },
    { name: 'GenAI', icon: <SiOpenai className="w-4 h-4" /> },
    { name: 'Prisma', icon: <SiPrisma className="w-4 h-4" /> },
    { name: 'NextJs', icon: <SiNextdotjs className="w-4 h-4" /> },
    { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
    { name: 'FastAPI', icon: <SiFastapi className="w-4 h-4" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="w-4 h-4" /> },

    // Group 3: Databases
    { name: 'MySQL', icon: <SiMysql className="w-4 h-4" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },

    // Group 4: Tools & Methodologies
    { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    { name: 'Github', icon: <SiGithub className="w-4 h-4" /> },
    { name: 'Postman', icon: <SiPostman className="w-4 h-4" /> },
    { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
    { name: 'Figma', icon: <SiFigma className="w-4 h-4" /> },
    { name: 'Agile', icon: <GiTeamIdea className="w-4 h-4" /> },
    { name: 'Jira', icon: <SiJira className="w-4 h-4" /> },
    { name: 'Scrum', icon: <FaTasks className="w-4 h-4" /> },
  ];

  return (
    <div className="h-full w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-100">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

export default Skills;
