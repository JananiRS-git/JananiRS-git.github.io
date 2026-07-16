import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  { icon: Trophy, title: "250+ Leetcode Problems", desc: "Consistently solving complex algorithmic challenges." },
  { icon: Star, title: "9.36 CGPA", desc: "Academic excellence in AI & Data Science." },
  { icon: Award, title: "Leadership Position", desc: "Joint Secretary of AI & DS Department." },
  { icon: Medal, title: "2 Internships", desc: "Practical experience in Data Science & Analytics." },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Milestones & <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <item.icon size={32} className="text-white group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-textSecondary text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
