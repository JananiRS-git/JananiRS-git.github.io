import { motion } from 'framer-motion';

const skills = [
  { category: "Programming", items: ["Python", "Java"] },
  { category: "Artificial Intelligence", items: ["Machine Learning", "Deep Learning", "Time Series Forecasting"] },
  { category: "Data", items: ["Data Visualization", "Web Scraping"] },
  { category: "Design", items: ["UI/UX Design"] },
  { category: "Tools", items: ["Git", "GitHub", "Tableau"] }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              style={{ perspective: 1000 }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-textSecondary group-hover:border-primary/50 group-hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              {/* Animated progress circle decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-secondary/20 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite_reverse] transition-all duration-500 delay-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
