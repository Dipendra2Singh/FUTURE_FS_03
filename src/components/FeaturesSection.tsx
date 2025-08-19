const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Photography",
      description: "Capture stunning photos with advanced AI that optimizes every shot automatically.",
      icon: "📸"
    },
    {
      title: "S Pen Precision",
      description: "Write, draw, and navigate with the most advanced S Pen experience yet.",
      icon: "✏️"
    },
    {
      title: "All-Day Battery",
      description: "Power through your day with intelligent battery management and fast charging.",
      icon: "🔋"
    },
    {
      title: "5G Connectivity",
      description: "Stay connected with blazing-fast 5G speeds for streaming and downloading.",
      icon: "📶"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovation That Inspires
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience cutting-edge technology designed to enhance every moment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;