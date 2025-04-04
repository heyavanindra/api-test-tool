import { Link } from "react-router";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white h-screen w-full flex justify-center items-center px-4">
      <div className="text-center space-y-8">
        <div className="text-4xl md:text-5xl font-extrabold tracking-wide animate-fade-in">
          Welcome to the <span className="text-amber-400">API Testing Tool</span>
        </div>

        <Link
          to="/test"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-amber-200"
        >
          Start Testing 🚀
        </Link>
      </div>
    </div>
  );
};

export default Home;
