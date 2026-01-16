import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";

const skills = {
  "Programming Languages": ["Python", "Ruby", "C", "C++", "JavaScript", "C#"],

  "Web Development": [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Ruby on Rails",
    "WordPress",
    "Mendix (Basic)",
  ],

  "Backend & APIs": [
    "RESTful API Design",
    "MVC Architecture",
    "Authentication & Authorization (Devise, JWT)",
    "Server-side Scripting (Python, Ruby, PHP)",
  ],

  Databases: ["PostgreSQL", "MySQL", "SQLite3"],

  "Data & Core CS Concepts": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Computer Networks",
    "Secure Data Handling",
  ],

  "Testing & Code Quality": [
    "RSpec (Unit & Integration Testing)",
    "Cypress (E2E Testing)",
    "RuboCop (Linting & Code Quality)",
  ],

  "Tools & Platforms": [
    "Git",
    "GitHub",
    "GitLab",
    "VS Code",
    "Linux (Ubuntu)",
    "Firebase",
    "Cursor",
  ],

  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Clear Communication",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading title="Technical Skills" subtitle="true" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
