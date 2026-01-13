import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 bg-card border-t border-white/5 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tejas Ananta Ulawekar. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">Built with React, Tailwind CSS, and .NET aspirations.</p>
      </footer>
    </div>
  );
}
