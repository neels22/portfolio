const About = () => {
  const highlights = ["Master's in SE", "Distributed Systems", "LLM Apps", "SWE Intern @ Microsoft"];
  const values = ["Clean Code", "Architecture", "Learning"];

  return (
    <div className="h-full w-full p-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-300">
      <h2 className="text-xl font-semibold text-neutral-50 mb-3">About</h2>
      
      {/* Key Highlights */}
      <div className="flex flex-wrap gap-2 mb-3">
        {highlights.map((item, index) => (
          <span
            key={index}
            className="bg-white/15 text-neutral-200 px-2 py-1 rounded-md text-xs font-medium border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Main Description */}
      <p className="text-neutral-300 text-sm mb-3 leading-relaxed">
        <span className="font-semibold text-neutral-100">SWE Intern at Microsoft</span> with expertise in 
        distributed systems, full-stack development, and LLM applications.
      </p>

      {/* Values */}
      <div className="flex flex-wrap gap-2">
        {values.map((value, index) => (
          <span
            key={index}
            className="bg-white/15 text-neutral-300 px-2 py-1 rounded-full text-xs font-medium border border-white/10"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;