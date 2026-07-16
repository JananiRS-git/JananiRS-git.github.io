import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-textSecondary font-medium">
          Made with <span className="text-accent animate-pulse inline-block">❤️</span> by Janani R S
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="/resume/Janani_RS_Resume.pdf" 
            download="Janani_RS_Resume.pdf"
            className="text-sm font-medium text-textSecondary hover:text-white transition-colors border-r border-white/10 pr-6"
          >
            Resume
          </a>
          <a 
            href="https://github.com/JananiRS-git" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textSecondary hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/janani-rs-/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:mail2rsjanani@gmail.com" 
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="glass p-3 rounded-full hover:bg-white/10 transition-colors group"
        >
          <ArrowUp size={20} className="text-textSecondary group-hover:text-white group-hover:-translate-y-1 transition-all" />
        </button>
      </div>
    </footer>
  );
};
