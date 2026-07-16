import { motion } from 'framer-motion';

const timeline = [
  { year: "2023", title: "Joined AI & DS", description: "Started Bachelor of Technology at Nandha Engineering College." },
  { year: "2024", title: "Started Learning Python & Java", description: "Built strong foundations in programming and algorithms." },
  { year: "2024", title: "Built AI Projects", description: "Developed intelligent systems and participated in hackathons." },
  { year: "2025", title: "Deep Learning Workshop", description: "Enhanced knowledge in neural networks and advanced AI concepts." },
  { year: "2025", title: "Data Science Internship", description: "Worked at Training Trains on real-world datasets." },
  { year: "2025", title: "Data Analytics Internship", description: "Worked at Ether InfoTech on analytics and visualization." },
  { year: "2026", title: "Joint Secretary", description: "Organized Aura'25, hackathons, and departmental events." },
  { year: "Present", title: "Building Intelligent Solutions", description: "Continuing to learn, build, and innovate." },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My <span className="text-gradient">Journey</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              
              <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="glass-card p-6 inline-block w-full">
                  <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-textSecondary text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
