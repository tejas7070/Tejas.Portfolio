import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Bank Manager",
    subtitle: "Account Management System",
    tech: ["C#", "Windows Forms", "SQL Server"],
    desc: "Desktop application demonstrating core OOP principles. Features encapsulation, polymorphism, and inheritance to model Savings vs Current accounts with distinct interest logic.",
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "VLI",
    subtitle: "Visual Language Interpreter",
    tech: ["Python", "TensorFlow", "OpenCV"],
    desc: "AI-powered accessibility tool converting sign language gestures into text and speech. Supports translation for Hindi, Marathi, and English to bridge communication gaps.",
    color: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Vault Info",
    subtitle: "Confidential Information Sharing Platform",
    tech: ["Ruby on Rails", "MVC Architecture", "PostgreSQL", "Authentication"],
    desc: "Secure information-sharing platform where users can view public titles, while full content access is restricted using passkey-based authorization. Built with Rails MVC to demonstrate access control, secure data handling, and role-based content visibility.",
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "ShirtZone",
    subtitle: "Full-Stack E-Commerce Platform",
    tech: [
      "Ruby on Rails API",
      "React",
      "Vite",
      "PostgreSQL",
      "Authentication",
    ],
    desc: "Full-stack e-commerce application featuring user authentication, product listing, cart management, and database-backed order flow. Built with a Ruby on Rails REST API and a modern React + Vite frontend to demonstrate scalable, API-driven architecture.",
    color: "from-blue-500/20 to-indigo-500/5",
  },

  {
    title: "SignMaster",
    subtitle: "Digital Signature Tool",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
    desc: "Web-based utility allowing users to draw, customize, and download digital signatures. Utilizes HTML5 Canvas API for smooth drawing interactions.",
    color: "from-purple-500/20 to-pink-500/5",
  },
  {
    title: "TransactPro",
    subtitle: "Core Banking System",
    tech: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
    desc: "A comprehensive banking solution handling account management, secure credit/debit transactions, and role-based access control. Implemented data masking for sensitive user information.",
    color: "from-red-500/20 to-orange-500/5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Featured Projects" subtitle="true" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-lg"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 flex flex-col h-full z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-background/50 transition-colors">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {/* Placeholder links since URLs weren't provided */}
                    <button
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-4">
                  {project.subtitle}
                </p>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
