import { useState, useEffect } from "react";
import { BottomNav } from "@/components/BottomNav";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMounted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className={`min-h-screen relative overflow-hidden font-orbitron transition-colors duration-700 ${
      theme === 'light' 
        ? 'bg-gradient-to-b from-slate-50 to-blue-50' 
        : 'bg-[#0B0B1F]'
    }`}>
      {/* Solar System Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute transition-all duration-1000 ${
          theme === 'light' 
            ? 'opacity-100 top-10 right-10' 
            : 'opacity-0 -top-40 -right-40'
        }`}>
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 
                         animate-pulse shadow-[0_0_60px_rgba(255,165,0,0.6)] blur-sm"></div>
          <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-400 
                         animate-pulse mix-blend-screen"></div>
        </div>

        {/* Planets */}
        <div className={`absolute transition-all duration-700 ${theme === 'light' ? 'opacity-80' : 'opacity-40'}`}>
          {/* Mercury */}
          <div className="absolute top-40 left-20 w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 
                         animate-float-medium shadow-lg"></div>
          
          {/* Venus */}
          <div className="absolute top-60 right-40 w-12 h-12 rounded-full bg-gradient-to-br from-orange-200 to-yellow-400 
                         animate-float shadow-lg"></div>
          
          {/* Mars */}
          <div className="absolute bottom-40 left-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 
                         animate-float-slow shadow-lg"></div>
          
          {/* Jupiter */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-orange-300 to-yellow-600 
                         animate-float shadow-lg"></div>
        </div>

        {/* Stars - Less visible in light mode */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${theme === 'light' ? 'opacity-30' : 'opacity-80'}`}>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <HeroSection />

      <div className={`transition-all duration-500 ease-in-out ${
        mounted ? 'animate-fade-in opacity-100' : 'opacity-0'
      }`}>
        <AboutSection />
      </div>

      {!showMore && (
        <div className="text-center py-10 mb-32">
          <Button
            onClick={() => {
              setShowMore(true);
              setTimeout(() => scrollToSection("skills"), 100);
            }}
            className={`${
              theme === 'light'
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300'
                : 'bg-blue-600/30 hover:bg-blue-600/50 text-blue-100 border-blue-400/30'
            } border shadow-lg shadow-blue-500/20 backdrop-blur-sm transform hover:scale-105 
            transition-all duration-300 relative z-10 group`}
          >
            View More 
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      )}

      {showMore && (
        <div className="space-y-4 animate-[slideUp_0.5s_ease-out] transition-all duration-500 ease-in-out">
          <SkillsSection />
          <ContactSection />
        </div>
      )}

      <BottomNav activeSection={activeSection} onSectionChange={scrollToSection} />
    </div>
  );
};

export default Index;
