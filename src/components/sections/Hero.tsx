import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-textSecondary mb-4 flex items-center gap-2">
              Hi <span className="animate-bounce inline-block">👋</span> I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">JANANI R S</span>
            </h1>
            
            <div className="h-[40px] overflow-hidden mb-6">
              <motion.div
                animate={{ y: [0, -40, -80, -120, -160, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "anticipate" }}
                className="text-2xl md:text-3xl font-medium text-white"
              >
                <div className="h-[40px] flex items-center">Artificial Intelligence Student</div>
                <div className="h-[40px] flex items-center text-primary">Machine Learning Enthusiast</div>
                <div className="h-[40px] flex items-center text-secondary">Deep Learning Explorer</div>
                <div className="h-[40px] flex items-center text-accent">Problem Solver</div>
                <div className="h-[40px] flex items-center text-success">AI Project Builder</div>
                <div className="h-[40px] flex items-center">Artificial Intelligence Student</div>
              </motion.div>
            </div>

            <p className="text-lg text-textSecondary max-w-xl leading-relaxed">
              "I build intelligent solutions that combine Artificial Intelligence, Machine Learning, and innovative technologies to solve real-world challenges."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity bg-[length:200%_auto] animate-aurora" />
              <span className="relative">Explore My Work</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/resume/Janani_RS_Resume.pdf" 
              download="Janani_RS_Resume.pdf"
              className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Socials & Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4 pt-8 border-t border-white/10"
          >
            <div className="flex gap-4">
              <a 
                href="https://github.com/JananiRS-git" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass p-3 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110 group"
              >
                <Github size={20} className="group-hover:animate-pulse" />
              </a>
              <a 
                href="https://www.linkedin.com/in/janani-rs-/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass p-3 rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 group"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
              </a>
              <a 
                href="mailto:mail2rsjanani@gmail.com" 
                className="glass p-3 rounded-full hover:bg-accent hover:text-white transition-all hover:scale-110 group"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">9.36</span>
                <span className="text-textSecondary">CGPA</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">250+</span>
                <span className="text-textSecondary">Leetcode</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">6+</span>
                <span className="text-textSecondary">Projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Decorative glowing rings */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
          
          <div className="relative w-64 h-64 glass rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_100px_rgba(124,58,237,0.3)] hover:shadow-[0_0_150px_rgba(124,58,237,0.5)] transition-shadow duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay" />
             <div className="text-5xl font-display font-bold text-white/50">JR</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
