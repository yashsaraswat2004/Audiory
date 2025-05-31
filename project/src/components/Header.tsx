import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Search, User } from 'lucide-react';
import WaitingListWidget from './WaitlistWidget';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Audiory
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-pink-400 transition-colors">Home</a>
            <a href="#how-it-works" className="text-white hover:text-pink-400 transition-colors">How It Works</a>
            <a href="#features" className="text-white hover:text-pink-400 transition-colors">Features</a>
            <WaitingListWidget/>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-white hover:text-pink-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#how-it-works" 
                className="text-white hover:text-pink-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-white hover:text-pink-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              {/* <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity self-start">
                Login
              </button> */}
              <WaitingListWidget />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;