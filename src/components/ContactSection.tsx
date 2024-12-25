import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-slate-900/50 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-100">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-blue-300">
                <Phone className="h-5 w-5" />
                <a href="tel:+6281248537085" className="hover:text-blue-400 transition-colors">
                  +62 812-4853-7085
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-300">
                <Mail className="h-5 w-5" />
                <a href="mailto:rezzxxdev@gmail.com" className="hover:text-blue-400 transition-colors">
                  rezzxxdev@gmail.com
                </a>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
                onClick={() => window.open("https://wa.me/6281248537085")}
              >
                <Send className="h-4 w-4" />
                Message on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-slate-700/50 border border-blue-500/20 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-blue-400/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-slate-700/50 border border-blue-500/20 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-blue-400/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-slate-700/50 border border-blue-500/20 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-blue-400/50"
                ></textarea>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}