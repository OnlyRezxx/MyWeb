import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, FileCode, FileType, Database, Server, Blocks } from "lucide-react";
import { useTheme } from "next-themes";

export function SkillsSection() {
  const { theme } = useTheme();

  const webSkills = [
    { name: "HTML5", icon: <FileCode className="w-5 h-5" />, description: "Semantic markup and modern HTML5 features" },
    { name: "CSS3", icon: <FileType className="w-5 h-5" />, description: "Styling, animations, and responsive design" },
    { name: "JavaScript", icon: <Code className="w-5 h-5" />, description: "DOM manipulation and modern ES6+ features" },
    { name: "PHP", icon: <Database className="w-5 h-5" />, description: "Server-side scripting and basic backend development" },
    { name: "Tailwind CSS", icon: <FileType className="w-5 h-5" />, description: "Utility-first CSS framework for rapid development" }
  ];

  const minecraftSkills = [
    { name: "Java", icon: <Code className="w-5 h-5" />, description: "Plugin development for Minecraft servers" },
    { name: "PocketMine", icon: <Server className="w-5 h-5" />, description: "Server management and customization" },
    { name: "Paper", icon: <Blocks className="w-5 h-5" />, description: "High-performance server implementation" },
    { name: "Purpur", icon: <Server className="w-5 h-5" />, description: "Advanced server optimization" }
  ];

  const cardClass = theme === 'light'
    ? 'bg-white/80 border-slate-200 hover:border-slate-300'
    : 'bg-card/50 border-blue-500/20 hover:border-blue-400/30';

  const titleClass = theme === 'light'
    ? 'text-slate-800'
    : 'text-foreground';

  const textClass = theme === 'light'
    ? 'text-slate-700'
    : 'text-foreground/90';

  const hoverClass = theme === 'light'
    ? 'hover:bg-slate-50'
    : 'hover:bg-blue-500/10';

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-blue-600/10 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-10 ${titleClass}`}>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className={`${cardClass} transition-all duration-300 backdrop-blur-lg`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${titleClass}`}>
                <Globe className="w-6 h-6" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {webSkills.map((skill) => (
                <div key={skill.name} className={`space-y-2 ${hoverClass} p-4 rounded-lg transition-all duration-300`}>
                  <div className="flex items-center gap-2">
                    <span className={textClass}>{skill.icon}</span>
                    <span className={`font-medium ${titleClass}`}>{skill.name}</span>
                  </div>
                  <p className={`text-sm ${theme === 'light' ? 'text-slate-600' : 'text-foreground/70'}`}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className={`${cardClass} transition-all duration-300 backdrop-blur-lg`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${titleClass}`}>
                <Code className="w-6 h-6" />
                Minecraft Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {minecraftSkills.map((skill) => (
                <div key={skill.name} className={`space-y-2 ${hoverClass} p-4 rounded-lg transition-all duration-300`}>
                  <div className="flex items-center gap-3">
                    <span className={textClass}>{skill.icon}</span>
                    <span className={`font-medium ${titleClass}`}>{skill.name}</span>
                  </div>
                  <p className={`text-sm ${theme === 'light' ? 'text-slate-600' : 'text-foreground/70'}`}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}