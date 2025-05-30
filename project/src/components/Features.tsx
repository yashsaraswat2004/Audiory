import React from 'react';
import { Music, Upload, Search, Check, Heart, Zap, MoveUpRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features Designed for <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">GenZ</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform is built with the latest technology to deliver a seamless experience for finding the perfect music for your Instagram content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Upload className="h-8 w-8 text-pink-500" />}
            title="Easy Upload"
            description="Drag and drop your Instagram stories or posts directly into our platform. We support all common image formats."
          />
          <FeatureCard 
            icon={<Heart className="h-8 w-8 text-pink-500" />}
            title="Mood Detection"
            description="Specify the mood or let our AI detect the emotion from your content to find the perfect musical match."
          />
          <FeatureCard 
            icon={<Music className="h-8 w-8 text-pink-500" />}
            title="Vast Music Library"
            description="Access thousands of trending songs from both Bollywood and Hollywood to find the perfect match for your content."
          />
          <FeatureCard 
            icon={<Search className="h-8 w-8 text-pink-500" />}
            title="Smart Recommendations"
            description="Our algorithm analyzes your content and preferences to suggest songs that will resonate with your audience."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-pink-500" />}
            title="Instant Results"
            description="Get song recommendations in seconds, with preview functionality to ensure it's the perfect match."
          />
          <FeatureCard 
            icon={<Check className="h-8 w-8 text-pink-500" />}
            title="Language Options"
            description="Choose between Bollywood and Hollywood music to match your target audience's preferences."
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 group">
            Explore All Features
            <MoveUpRight className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
      <div className="mb-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Features;