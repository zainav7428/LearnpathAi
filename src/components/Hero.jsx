function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 overflow-hidden">

   
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

    
      <div className="absolute bottom-0 right-20 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
        Generate Your
        <span className="text-cyan-400"> Learning Path</span>
      </h1>

      <p className="relative z-10 mt-8 text-gray-400 text-lg max-w-2xl">
        Create personalized AI-powered learning roadmaps
        for any skill and achieve your goals faster.
      </p>

      <button className="relative z-10 mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-cyan-500/30">
        Get Started
      </button>
    </section>
  );
}

export default Hero;