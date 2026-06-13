import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 text-white">
      <Navbar />

  
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden">

  
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
            Generate Your
            <span className="text-cyan-400"> Learning Path</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Create personalized AI-powered learning roadmaps
            for React, Java, DSA, Full Stack Development,
            AI/ML and more.
          </p>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose LearnPath AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-cyan-400 text-xl font-bold">
              Personalized Paths
            </h3>

            <p className="text-gray-400 mt-3">
              Generate customized learning paths based on your goals.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-cyan-400 text-xl font-bold">
              Skill Based
            </h3>

            <p className="text-gray-400 mt-3">
              Supports React, Java, DSA, Full Stack and AI/ML.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-cyan-400 text-xl font-bold">
              Career Ready
            </h3>

            <p className="text-gray-400 mt-3">
              Includes projects, milestones and interview preparation.
            </p>
          </div>

        </div>
      </section>

   
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400">
              5+
            </h2>

            <p className="text-gray-400">
              Domains
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400">
              100+
            </h2>

            <p className="text-gray-400">
              Roadmaps
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400">
              50+
            </h2>

            <p className="text-gray-400">
              Projects
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400">
              24/7
            </h2>

            <p className="text-gray-400">
              Available
            </p>
          </div>

        </div>
      </section>

   
      <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center">
        <h2 className="text-xl font-bold text-cyan-400">
          LearnPath AI
        </h2>

        <p className="text-gray-400 mt-2">
          AI Powered Learning Roadmaps
        </p>

        <p className="text-gray-500 mt-4">
          © 2026 LearnPath AI. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;