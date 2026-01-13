import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";

const skills = {
  "Core Concepts": ["OOPS", "Data Structures", "MVC Architecture", "RESTful APIs", "Auth & Authorization"],
  "Languages": ["C#", "Python", "Ruby", "C / C++", "JavaScript", "SQL"],
  "Frameworks & Libraries": [".NET (Learning)", "Ruby on Rails", "React.js", "Next.js", "Flask", "Mendix"],
  "Tools & Platforms": ["Git / GitHub", "Linux (Ubuntu)", "PostgreSQL", "MySQL", "VS Code", "Firebase"]
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
