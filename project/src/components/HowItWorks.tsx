import React from 'react';
import { Upload, Search, Music, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">MusicMatch</span> Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our simple three-step process helps you find the perfect soundtrack for your Instagram content in seconds.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 transform -translate-y-1/2 z-0"></div> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <StepCard 
              icon={<Upload className="h-10 w-10 text-white" />}
              title="Upload Your Content"
              description="Upload your Instagram story or post image to our platform with a simple drag and drop interface."
              number={1}
            />
            <StepCard 
              icon={<Search className="h-10 w-10 text-white" />}
              title="Specify Your Preferences"
              description="Tell us your mood and language preference for the music you're looking for."
              number={2}
            />
            <StepCard 
              icon={<Music className="h-10 w-10 text-white" />}
              title="Get Perfect Matches"
              description="Receive personalized song recommendations that perfectly complement your content."
              number={3}
            />
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">?</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Want to see it in action?</h3>
              <p className="text-gray-300 mb-4">Try our demo and see how quickly you can find the perfect music for your Instagram content.</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-flex items-center">
                Try Demo
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, number }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute -top-5 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
        <span className="text-white font-bold">{number}</span>
      </div>
      <div className="mb-6 mt-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default HowItWorks;