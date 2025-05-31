import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <Hero />
      <AnnouncementBar />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default App;