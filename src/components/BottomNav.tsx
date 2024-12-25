import { Home, User, Code, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface BottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function BottomNav({ activeSection, onSectionChange }: BottomNavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavItemClass = (section: string) => {
    return `text-blue-300 hover:text-blue-400 transition-all duration-300 transform ${
      activeSection === section
        ? "text-blue-400 scale-110 shadow-glow"
        : "hover:scale-110"
    }`;
  };

  return (
    <>
      <Progress value={scrollProgress} className="fixed top-0 left-0 right-0 z-50 h-1 bg-blue-950" />
      <nav className={`fixed bottom-4 left-1/2 -translate-x-1/2 ${
        theme === 'light' 
          ? 'bg-white/80 border-slate-200' 
          : 'bg-gradient-to-t from-slate-900/90 to-slate-900/50 border-blue-500/20'
        } backdrop-blur-lg border px-6 py-3 rounded-full shadow-lg z-50`}>
        <div className="flex items-center gap-6">
          <button onClick={() => onSectionChange("home")} className={getNavItemClass("home")}>
            <Home className="w-6 h-6" />
          </button>
          <button onClick={() => onSectionChange("about")} className={getNavItemClass("about")}>
            <User className="w-6 h-6" />
          </button>
          <button onClick={() => onSectionChange("skills")} className={getNavItemClass("skills")}>
            <Code className="w-6 h-6" />
          </button>
          <button onClick={() => onSectionChange("contact")} className={getNavItemClass("contact")}>
            <Mail className="w-6 h-6" />
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}