import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { BookOpen, Code, GraduationCap, Server } from "lucide-react";

export function About() {
  const items = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Education",
      desc: "BE Computer Engineering graduate with 8.4 CGPA. Strong academic foundation."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Core Fundamentals",
      desc: "Solid grasp of OOP, DSA, SQL, Git, and Linux environments (Ubuntu)."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Language Versatility",
      desc: "Experienced across C#, Ruby on Rails, Python, and JavaScript ecosystems."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Future Focus",
      desc: "Actively transitioning toward .NET and scalable backend architecture roles."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="true" />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert lg:prose-lg"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a dedicated Computer Engineering graduate with a strong passion for backend development and system architecture. 
              My journey involves a mix of academic excellence and hands-on project experience across multiple technology stacks.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              While I have explored various languages including Python and Ruby, I have found my true interest in the structured 
              and powerful world of <strong>.NET</strong> and <strong>C#</strong>. I thrive on solving complex algorithmic problems 
              and building robust applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
