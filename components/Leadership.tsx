import { ArrowUpRight } from "lucide-react";

const Leadership = () => {
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
        <div className="bg-neutral-50 border border-neutral-300 rounded-md p-3">
          <div className="text-md font-bold text-neutral-800 mb-1">
            Coditas Solutions LLP JAN-24 JUN-24
          </div>
          <div className="text-black font-bold">Associate Software Intern</div>
          <p className="text-black">
            • Leveraged the Langchain framework to build Retrieval-Augmented
            Generation (RAG) applications, enabling natural language querying on
            diverse data sources such as PDFs, YouTube videos, and web-scraped
            content.
          </p>

          <p className="text-black">
            • Acquired in-depth knowledge of generative AI, including large
            language models (LLMs), vector databases, embeddings, context length
            considerations, and various prompting techniques.
          </p>

          <p className="text-black">
            • Designed a RAG system that interfaces with SQL databases, allowing
            users to query database contents in natural language and receive
            relevant responses.
          </p>

          <p className="text-black">
            • Implemented a Streamlit-based interface to dynamically visualize
            query results through generated graphs, facilitating easier data
            interpretation and insights.
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default Leadership;
