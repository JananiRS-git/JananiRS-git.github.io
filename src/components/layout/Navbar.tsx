import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/resume/Janani_RS_Resume.pdf', download: 'Janani_RS_Resume.pdf' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#home" className="text-xl font-display font-bold tracking-wider text-gradient">
            JR
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                download={link.download}
                className={cn(
                  "text-sm font-medium transition-all duration-300",
                  link.name === 'Contact'
                    ? "px-5 py-2.5 glass rounded-full text-white hover:bg-white/10 hover:scale-105 border border-white/10 hover:border-primary/50 shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                    : link.name === 'Resume'
                    ? "px-5 py-2.5 bg-primary/20 hover:bg-primary/30 rounded-full text-white hover:scale-105 border border-primary/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
                    : "text-textSecondary hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-textSecondary hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-2xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                download={link.download}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium transition-all duration-300",
                  link.name === 'Contact'
                    ? "px-4 py-2 glass rounded-xl text-white text-center hover:bg-white/10 border border-white/10"
                    : link.name === 'Resume'
                    ? "px-4 py-2 bg-primary/20 rounded-xl text-white text-center hover:bg-primary/30 border border-primary/30"
                    : "text-textSecondary hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
