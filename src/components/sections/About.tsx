import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';

const traits = [
  { icon: Brain, label: 'Student', color: 'text-primary' },
  { icon: Rocket, label: 'Innovator', color: 'text-secondary' },
  { icon: Lightbulb, label: 'Learner', color: 'text-accent' },
  { icon: Code, label: 'Problem Solver', color: 'text-success' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Who Am <span className="text-gradient">I?</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-textSecondary leading-relaxed mb-6">
              I am an <span className="text-white font-medium">Artificial Intelligence and Data Science</span> student passionate about building intelligent systems, exploring Machine Learning, Deep Learning, and solving real-world problems through innovative technology.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed">
              I enjoy learning new technologies, creating impactful projects, collaborating with teams, and continuously improving my technical and leadership skills. My goal is to leverage data and AI to build products that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px] group-hover:bg-secondary/20 transition-colors duration-500" />
            
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {traits.map((trait, index) => (
                <div key={index} className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2">
                  <trait.icon size={32} className={trait.color} />
                  <span className="font-medium text-white">{trait.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
