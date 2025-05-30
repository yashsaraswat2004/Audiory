import React from 'react';
import { Music, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                MusicMatch
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Find the perfect music for your Instagram stories and posts to elevate your social media presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-pink-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-pink-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:border-pink-500"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MusicMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;