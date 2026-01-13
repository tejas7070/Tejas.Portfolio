import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Professional Experience" subtitle="true" />

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-[1px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-background border-4 border-primary z-10" />

            {/* Left Side (Date) */}
            <div className="w-full md:w-1/2 md:pr-12 pl-20 md:pl-0 md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-1">
                <Calendar className="w-4 h-4" />
                Dec 2022 – Feb 2023
              </div>
            </div>

            {/* Right Side (Content) */}
            <div className="w-full md:w-1/2 md:pl-12 pl-20">
              <div className="p-6 rounded-2xl bg-card border border-white/5 shadow-lg hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-foreground">Python Developer Intern</h3>
                <div className="text-primary font-medium mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Sahu Technologies Pvt. Ltd.
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4 marker:text-primary">
                  <li>Automated repetitive data tasks using Python scripts, saving hours of manual work.</li>
                  <li>Reduced processing time by ~20% through efficient algorithm implementation.</li>
                  <li>Improved overall team efficiency and reduced manual data entry errors.</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/5">
                   <button 
                     disabled
                     className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                     title="Certificate link placeholder"
                   >
                     View Internship Certificate (Unavailable)
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
