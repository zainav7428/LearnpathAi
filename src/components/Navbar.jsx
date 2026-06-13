import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        LearnPath AI
      </h1>

      <div className="flex items-center gap-5">

        <Link
          to="/login"
          className="text-white hover:text-cyan-400"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-cyan-500 px-5 py-2 rounded-xl text-white"
        >
          Sign Up
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;