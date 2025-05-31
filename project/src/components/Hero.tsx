import React, { useState } from 'react';
import { ArrowRight, Upload, Music } from 'lucide-react';
import StoryUploader from './StoryUploader';
import WaitlistWidget from './WaitlistWidget';
const Hero: React.FC = () => {
  const [showUploader, setShowUploader] = useState(false);

  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 z-[-1]"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Find the <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Perfect Music</span> for Your Instagram Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Are you someone who struggles to find the right music for your Instagram stories?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowUploader(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center group"
              >
                Try Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <WaitlistWidget />
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {showUploader ? (
              <StoryUploader onClose={() => setShowUploader(false)} />
            ) : (
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-t-3xl"></div>
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full">
                        <Upload className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Upload Your Story</h3>
                      <p className="text-gray-300">Get matched with the perfect soundtrack</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center bg-white/5 p-3 rounded-lg">
                        <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mr-3">
                          <Music className="h-5 w-5 text-pink-500" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded-full w-3/4 mb-2"></div>
                          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/5 p-3 rounded-lg">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                          <Music className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded-full w-2/3 mb-2"></div>
                          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-60"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;