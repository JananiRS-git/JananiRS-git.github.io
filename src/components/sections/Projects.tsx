import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Smart Healthcare Management System",
    tags: ["Machine Learning", "Python", "Data Science"],
    size: "large"
  },
  {
    title: "Restaurant Management System",
    tags: ["Java", "UI", "Database"],
    size: "small"
  },
  {
    title: "Quantum Fiscal Management Portal",
    tags: ["Web Dev", "Finance", "Dashboard"],
    size: "small"
  },
  {
    title: "Stock Price Prediction using LSTM",
    tags: ["Deep Learning", "Time Series", "Python"],
    size: "medium"
  },
  {
    title: "Voice Assistant",
    tags: ["AI", "NLP", "Python"],
    size: "small"
  },
  {
    title: "IoT-Based Accident Detection & Alert System",
    tags: ["IoT", "Hardware", "Sensors"],
    size: "medium"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card group overflow-hidden relative ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="absolute inset-0 bg-surface/50 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
                <div className="absolute inset-0 noise-bg" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium px-2 py-1 bg-white/10 rounded border border-white/20 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a 
                      href="https://github.com/JananiRS-git" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a 
                      href="https://github.com/JananiRS-git" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
