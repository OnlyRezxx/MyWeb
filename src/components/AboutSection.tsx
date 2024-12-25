import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";

export function AboutSection() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <Card className={`${
          theme === 'light'
            ? 'bg-white/80 border-slate-200'
            : 'bg-white/10 backdrop-blur-lg border-blue-500/20'
        }`}>
          <CardContent className="p-6 space-y-4">
            <h2 className={`text-3xl font-bold mb-4 ${
              theme === 'light' ? 'text-slate-800' : 'text-foreground'
            }`}>About Me</h2>
            <p className={`leading-relaxed ${
              theme === 'light' ? 'text-slate-700' : 'text-foreground/90'
            }`}>
              Hi! I'm Reza, a passionate Website and Minecraft Developer based in Kuaro, East Kalimantan, Indonesia. 
              I specialize in creating dynamic web applications and engaging Minecraft server experiences.
            </p>
            <div className={`flex items-center gap-2 ${
              theme === 'light' ? 'text-slate-600' : 'text-foreground/80'
            }`}>
              <MapPin className="h-5 w-5" />
              <span>Kuaro, East Kalimantan, Indonesia</span>
            </div>
            <p className={`leading-relaxed ${
              theme === 'light' ? 'text-slate-700' : 'text-foreground/90'
            }`}>
              As the developer behind AetharCraft, I've created unique gaming experiences including Survival Mix, 
              Skyblock, and OneBlock game modes. My expertise spans both web technologies and Minecraft server development, 
              allowing me to create comprehensive digital experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}