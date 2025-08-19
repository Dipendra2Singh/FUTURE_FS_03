
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Galaxy S24 Ultra
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Epic in Every Way
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Meet the most powerful Galaxy yet. With advanced AI, stunning cameras, and the iconic S Pen, redefine what's possible.
        </p>

      </div>
    </div>
  );
};

export default HeroSection;
