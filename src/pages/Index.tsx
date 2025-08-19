
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductCards from "@/components/ProductCards";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      <HeroSection />
      <ProductCards />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
