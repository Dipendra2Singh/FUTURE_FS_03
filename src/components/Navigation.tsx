
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold flex items-center hover:opacity-80 transition-opacity">
        <img src="/samsung-8.svg" alt="Samsung Logo" className="h-10 w-auto brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </Link>
      <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base px-2 py-1 rounded hover:bg-gray-800/50">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base px-2 py-1 rounded hover:bg-gray-800/50">About</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base px-2 py-1 rounded hover:bg-gray-800/50">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
