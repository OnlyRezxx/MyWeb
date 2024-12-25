import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section id="home" className="container mx-auto px-4 py-20 relative">
      <div className="text-center space-y-6 relative z-10">
        <div className="relative">
          <div className={`absolute inset-0 blur-xl transition-colors duration-700 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40' 
              : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20'
          }`}></div>
          <h1 className={`relative text-6xl md:text-7xl font-bold mb-4 transition-colors duration-700 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-white'
          }`}>
            Hi, I'm <span className={`bg-gradient-to-r ${
              theme === 'light'
                ? 'from-blue-700 via-purple-700 to-blue-700'
                : 'from-blue-300 via-purple-300 to-blue-300'
            } text-transparent bg-clip-text`}>Reza</span>
          </h1>
        </div>
        <p className={`text-2xl md:text-3xl font-light tracking-wider ${
          theme === 'light' ? 'text-slate-700' : 'text-blue-100'
        }`}>
          Website & Minecraft Developer
        </p>
        <p className={`max-w-2xl mx-auto leading-relaxed tracking-wide ${
          theme === 'light' ? 'text-slate-600' : 'text-blue-200'
        }`}>
          A beginner developer passionate about creating engaging web experiences
          and unique Minecraft server features.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <SocialIcon href="https://github.com" icon={<Github />} />
          <SocialIcon href="https://twitter.com" icon={<Twitter />} />
          <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
          <SocialIcon href="https://instagram.com" icon={<Instagram />} />
        </div>
      </div>
    </section>
  );
}

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`p-2 rounded-full transition-all duration-300 ${
        theme === 'light' 
          ? 'hover:bg-slate-200 text-slate-700' 
          : 'hover:bg-blue-900/50 text-blue-300'
      }`}
    >
      {icon}
    </a>
  );
};