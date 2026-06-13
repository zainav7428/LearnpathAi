import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [time, setTime] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  function handleGenerate() {
    let path = [];

    const skill = goal.toLowerCase();

    if (skill.includes("react")) {
      path = [
        "HTML & CSS",
        "JavaScript Basics",
        "ES6 Concepts",
        "React Fundamentals",
        "React Hooks",
        "React Router",
        "API Integration",
        "Build React Projects",
        "Interview Preparation",
      ];
    } else if (skill.includes("java")) {
      path = [
        "Java Basics",
        "OOP Concepts",
        "Arrays & Strings",
        "Collections Framework",
        "Exception Handling",
        "File Handling",
        "Multithreading",
        "JDBC",
        "Interview Preparation",
      ];
    } else if (
      skill.includes("dsa") ||
      skill.includes("data structure")
    ) {
      path = [
        "Time Complexity",
        "Arrays",
        "Strings",
        "Linked List",
        "Stack & Queue",
        "Trees",
        "Graphs",
        "Dynamic Programming",
        "LeetCode Practice",
      ];
    } else if (
      skill.includes("full stack") ||
      skill.includes("mern")
    ) {
      path = [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Authentication",
        "Deploy Projects",
        "Interview Preparation",
      ];
    } else if (
      skill.includes("ai") ||
      skill.includes("machine learning")
    ) {
      path = [
        "Python Basics",
        "NumPy",
        "Pandas",
        "Data Visualization",
        "Machine Learning Basics",
        "Scikit Learn",
        "Deep Learning",
        "Projects",
        "Interview Preparation",
      ];
    } else {
      path = [
        `Introduction to ${goal}`,
        `${goal} Basics`,
        `${goal} Intermediate`,
        `Projects in ${goal}`,
        `Advanced ${goal}`,
        `${goal} Interview Preparation`,
      ];
    }

    setRoadmap(path);
  }

  return (
    <div className="min-h-screen bg-[#17213b] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
    
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            AI Learning Path Generator
          </h1>

          <p className="text-gray-400 mt-3">
            Transform your learning goals into a clear roadmap.
          </p>
        </div>

       
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            Create Your Personalized Learning Journey
          </h2>

          <p className="mt-2">
            Generate AI-powered learning paths.
          </p>

          <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
            Launch LearnPath AI
          </button>
        </div>

     
        <div className="grid md:grid-cols-2 gap-6 mt-8">

       
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-bold mb-4">
              Create Your Learning Path
            </h2>

            <input
              type="text"
              placeholder="React Development"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Current Skill Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
            />

            <input
              type="text"
              placeholder="2 hours/day"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
            />

            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
            >
              Generate Learning Path
            </button>
          </div>

      
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-bold mb-4">
              Your Learning Path
            </h2>

            {roadmap.length === 0 ? (
              <div className="bg-slate-800 p-4 rounded-lg text-center text-gray-400">
                No learning path generated yet
              </div>
            ) : (
              roadmap.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg mb-3"
                >
                  <h3 className="text-cyan-400 font-bold">
                    Step {index + 1}
                  </h3>

                  <p>{step}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;