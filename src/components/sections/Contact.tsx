import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, Download } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's Build Something <span className="text-gradient">Amazing</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl"
          >
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center gap-8"
          >
            <a 
              href="mailto:mail2rsjanani@gmail.com"
              className="glass-card p-6 flex items-center gap-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Email</h4>
                <p className="text-textSecondary">mail2rsjanani@gmail.com</p>
              </div>
            </a>

            <div className="glass-card p-6 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Location</h4>
                <p className="text-textSecondary">India</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/JananiRS-git" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass flex-1 py-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all group"
              >
                <Github size={24} className="text-textSecondary group-hover:text-white" />
                <span className="text-sm font-medium text-textSecondary group-hover:text-white">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/janani-rs-/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass flex-1 py-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all group"
              >
                <Linkedin size={24} className="text-textSecondary group-hover:text-primary" />
                <span className="text-sm font-medium text-textSecondary group-hover:text-white">LinkedIn</span>
              </a>
            </div>
            <a 
              href="/resume/Janani_RS_Resume.pdf" 
              download="Janani_RS_Resume.pdf"
              className="glass py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all group w-full mt-4 text-white font-medium"
            >
              <Download size={20} className="text-textSecondary group-hover:text-white group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
