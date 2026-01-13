import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-mono">
            Tejas.dev
          </span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="nav-link text-sm font-medium cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="mailto:tejas@example.com"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-card border-b border-border md:hidden p-4 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-base font-medium p-2 hover:bg-accent rounded-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="mailto:tejas@example.com"
            className="w-full text-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </nav>
  );
}
