import React, { useState, useRef } from 'react';
import { Upload, X, Check, Loader2, Music, Heart, Zap, Sparkle, Headphones } from 'lucide-react';

interface StoryUploaderProps {
  onClose: () => void;
}

const MoodOption: React.FC<{
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ icon, label, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`relative flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
      isSelected
        ? 'bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/50'
        : 'bg-white/5 border border-white/10 hover:bg-white/10'
    }`}
  >
    <div className="mb-2">{icon}</div>
    <span className="text-sm text-white">{label}</span>
    {isSelected && (
      <div className="absolute top-2 right-2">
        <Check size={16} className="text-pink-500" />
      </div>
    )}
  </div>
);

const StoryUploader: React.FC<StoryUploaderProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [mood, setMood] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [recommendedSongs, setRecommendedSongs] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
      
      // Simulate upload progress
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setStep(2);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(droppedFile);
      
      // Simulate upload progress
      simulateUpload();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
  };

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  const handleFindSongs = () => {
    setStep(3);
    
    // Simulate loading recommendations
    setTimeout(() => {
      // Mock recommended songs
      setRecommendedSongs([
        {
          id: 1,
          title: "Levitating",
          artist: "Dua Lipa",
          albumArt: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          duration: "3:23"
        },
        {
          id: 2,
          title: "As It Was",
          artist: "Harry Styles",
          albumArt: "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          duration: "2:47"
        },
        {
          id: 3,
          title: "Blinding Lights",
          artist: "The Weeknd",
          albumArt: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          duration: "3:20"
        },
        {
          id: 4,
          title: "Heat Waves",
          artist: "Glass Animals",
          albumArt: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          duration: "3:58"
        }
      ]);
    }, 1500);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Your Story</h2>
            
            <div 
              className="border-2 border-dashed border-white/20 rounded-xl p-6 mb-6 text-center cursor-pointer hover:border-pink-500/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {preview ? (
                <div className="relative mb-4">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                      <div className="w-full max-w-[80%]">
                        <div className="relative pt-1">
                          <div className="text-white text-center mb-2">Uploading... {Math.round(uploadProgress)}%</div>
                          <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-white/20">
                            <div 
                              style={{ width: `${uploadProgress}%` }}
                              className="bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-200"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8">
                  <div className="flex justify-center mb-4">
                    <Upload className="h-12 w-12 text-white/70" />
                  </div>
                  <p className="text-white/70 mb-2">Drag and drop your story image here</p>
                  <p className="text-white/50 text-sm">or click to browse</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
              />
            </div>
            
            {file && !isUploading && (
              <div className="flex justify-end">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        );
        
      case 2:
        return (
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What's Your Vibe?</h2>
            
            <div className="flex gap-4 mb-8">
              <div className="w-1/3">
                {preview && (
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full aspect-square object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-semibold text-white mb-4">Select Mood</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <MoodOption
                    icon={<Heart size={24} className="text-pink-500" />}
                    label="Romantic"
                    isSelected={mood === 'romantic'}
                    onClick={() => handleMoodSelect('romantic')}
                  />
                  <MoodOption
                    icon={<Zap size={24} className="text-yellow-500" />}
                    label="Energetic"
                    isSelected={mood === 'energetic'}
                    onClick={() => handleMoodSelect('energetic')}
                  />
                  <MoodOption
                    icon={<Sparkle size={24} className="text-blue-500" />}
                    label="Chill"
                    isSelected={mood === 'chill'}
                    onClick={() => handleMoodSelect('chill')}
                  />
                  <MoodOption
                    icon={<Headphones size={24} className="text-purple-500" />}
                    label="Sad"
                    isSelected={mood === 'sad'}
                    onClick={() => handleMoodSelect('sad')}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">Select Language</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleLanguageSelect('bollywood')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      language === 'bollywood' 
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/50' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-white">Bollywood</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('hollywood')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      language === 'hollywood' 
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/50' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-white">Hollywood</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setStep(1)}
                className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                Back
              </button>
              <button 
                onClick={handleFindSongs}
                disabled={!mood || !language}
                className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full transition-all ${
                  !mood || !language ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                Find Songs
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {recommendedSongs.length > 0 ? 'Perfect Songs for Your Story' : 'Finding Perfect Songs...'}
            </h2>
            
            {recommendedSongs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-12 w-12 text-pink-500 animate-spin mb-4" />
                <p className="text-white/70">Analyzing your story and finding the best match...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {recommendedSongs.map((song) => (
                    <div 
                      key={song.id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 relative">
                          <img 
                            src={song.albumArt} 
                            alt={song.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Music className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{song.title}</h3>
                          <p className="text-white/70 text-sm">{song.artist}</p>
                          <p className="text-white/50 text-xs mt-1">{song.duration}</p>
                        </div>
                        <div className="ml-4">
                          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-white/70 mb-4">Not what you're looking for?</p>
                  <button className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all">
                    Generate More Recommendations
                  </button>
                </div>
              </>
            )}
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setStep(2)}
                className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                Back
              </button>
              {recommendedSongs.length > 0 && (
                <button 
                  onClick={onClose}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>
        
        {/* Steps indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-pink-500' : 'bg-white/20'
            }`}>
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <div className={`w-16 h-1 ${
              step >= 2 ? 'bg-pink-500' : 'bg-white/20'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-pink-500' : 'bg-white/20'
            }`}>
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <div className={`w-16 h-1 ${
              step >= 3 ? 'bg-pink-500' : 'bg-white/20'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-pink-500' : 'bg-white/20'
            }`}>
              <span className="text-white text-sm font-medium">3</span>
            </div>
          </div>
        </div>
        
        {renderStepContent()}
      </div>
    </div>
  );
};

export default StoryUploader;