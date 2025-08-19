import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-white text-2xl font-bold">
              SAMSUNG
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the future of mobile technology with Samsung's innovative Galaxy series. 
              Experience cutting-edge features and unparalleled performance.
            </p>

          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Galaxy S24 Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">GalaxyS25 Series</a></li>
           
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Repair Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Software Updates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Samsung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Newsroom</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Sustainability</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold text-lg mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates about Samsung products and innovations.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Samsung Electronics Co., Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
