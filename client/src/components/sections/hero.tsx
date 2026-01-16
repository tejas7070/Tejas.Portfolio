import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Hi, I'm <br />
            <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Tejas Ulawekar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Software Developer | Computer Engineering Graduate
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-lg leading-relaxed">
            Passionate about building practical software solutions with strong fundamentals in OOP, problem-solving, and system design.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <ScrollLink to="projects" smooth={true} offset={-100}>
              <button className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollLink>
            
            <a href="/Resume.pdf#view=fitH" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all flex items-center gap-2 border border-white/5">
              Resume <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-6 text-muted-foreground ml-3">
            <a href="https://github.com/tejas7070/" className="hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/tejas-ulawekar/" className="hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"><Linkedin className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto bg-gradient-to-tr from-secondary to-card rounded-3xl border border-white/10 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             {/* Abstract Code visual or profile image placeholder */}
             <div className="w-full h-full bg-background rounded-2xl overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="font-mono text-sm text-blue-400 mb-2">class Developer {`{`}</div>
                  <div className="font-mono text-xs text-muted-foreground pl-4">
                    constructor() {`{`} <br/>
                    &nbsp;&nbsp;this.name = "Tejas"; <br/>
                    &nbsp;&nbsp;this.stack = ["C#", "Python", "React"]; <br/>
                    {`}`}
                  </div>
                  <div className="font-mono text-sm text-blue-400 mt-2">{`}`}</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
