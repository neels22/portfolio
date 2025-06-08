const About = () => {
  const highlights = ["Master's in SE", "Distributed Systems", "LLM Apps", "Summer 2026"];
  const values = ["Clean Code", "Architecture", "Learning"];

  return (
    <div className="h-full w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-300">
      <h2 className="text-xl font-semibold text-neutral-900 mb-3">About</h2>
      
      {/* Key Highlights */}
      <div className="flex flex-wrap gap-2 mb-3">
        {highlights.map((item, index) => (
          <span
            key={index}
            className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md text-xs font-medium border border-neutral-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Main Description */}
      <p className="text-neutral-800 text-sm mb-3 leading-relaxed">
        <span className="font-semibold text-neutral-900">Seeking summer internship</span> to apply expertise in 
        distributed systems, full-stack development, and LLM applications to real-world challenges.
      </p>

      {/* Values */}
      <div className="flex flex-wrap gap-2">
        {values.map((value, index) => (
          <span
            key={index}
            className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium border border-neutral-200"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;