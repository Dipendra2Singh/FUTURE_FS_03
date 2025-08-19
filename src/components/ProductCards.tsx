import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Galaxy S25 Ultra",
      price: "$1,399",
      image: "/s25 ultraa.jpg",
      description: "The ultimate mobile experience with revolutionary AI, enhanced S Pen, and breakthrough camera technology.",
      features: ["250MP Camera", "S Pen Pro", "5500mAh Battery", "AI Galaxy Brain"],
      series: "S25",
      buyUrl: "https://www.samsung.com/in/"
    },
    {
      id: 2,
      name: "Galaxy S25+",
      price: "$1,199",
      image: "/s25+.jpg",
      description: "Next-generation performance with immersive display and AI-powered photography.",
      features: ["200MP Camera", "6.8\" Dynamic AMOLED", "5000mAh Battery", "AI Studio"],
      series: "S25",
      buyUrl: "https://www.samsung.com/in/"
    },
    {
      id: 3,
      name: "Galaxy S25",
      price: "$999",
      image: "/s25.jpg",
      description: "Compact excellence with flagship AI features and stunning design.",
      features: ["200MP Camera", "6.3\" Display", "4500mAh Battery", "AI Assistant"],
      series: "S25",
      buyUrl: "https://www.samsung.com/in/"
    },
    {
      id: 4,
      name: "Galaxy S24 Ultra",
      price: "$1,199",
      image: "/s24 ultra.jpg",
      description: "The ultimate Galaxy experience with S Pen, advanced cameras, and AI features.",
      features: ["200MP Camera", "S Pen Included", "5000mAh Battery", "AI Features"],
      series: "S24",
      buyUrl: "https://www.samsung.com/in/"
    },
    {
      id: 5,
      name: "Galaxy S24+",
      price: "$999",
      image: "/s24+.jpg",
      description: "Premium performance with stunning display and pro-grade cameras.",
      features: ["50MP Camera", "6.7\" Display", "4900mAh Battery", "Pro Cameras"],
      series: "S24",
      buyUrl: "https://www.samsung.com/in/"
    },
    {
      id: 6,
      name: "Galaxy S24",
      price: "$799",
      image: "/s24.jpg",
      description: "Compact powerhouse with flagship features in a perfect size.",
      features: ["50MP Camera", "6.2\" Display", "4000mAh Battery", "Flagship Features"],
      series: "S24",
      buyUrl: "https://www.samsung.com/in/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = getMaxIndex();
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Pause auto-slide on hover
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = getMaxIndex();
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Calculate max index based on screen size
  const getMaxIndex = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? products.length - 2 : products.length - 1; // Show 3 slides on desktop (2 cards each), 6 slides on mobile (1 card each)
    }
    return products.length - 2; // Default to desktop view
  };

  // Get current slide width for transform calculation
  const getSlideWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 66.666 : 100; // 66.666% for desktop (3 cards), 100% for mobile (1 card)
    }
    return 66.666; // Default to desktop view
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All 6 Galaxy Models
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our complete lineup: S24 Ultra, S24+, S24, S25 Ultra, S25+, and S25
          </p>
        </div>
        
        {/* Responsive Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 cards, Mobile: 1 card */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * getSlideWidth()}%)` }}>
            {products.map((product) => (
              <div key={product.id} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                <div className="max-w-md mx-auto">
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/300x400/374151/9CA3AF?text=Galaxy+Phone";
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                        <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium">
                          {product.series}
                        </span>
                      </div>
                      <CardDescription className="text-gray-300">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-white">{product.price}</span>
                        <a 
                          href={product.buyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                            Buy Now
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? getMaxIndex() : prev - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-gray-500 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-gray-500 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;