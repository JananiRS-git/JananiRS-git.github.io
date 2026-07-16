import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Background } from './components/ui/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Background />
      <div className="fixed inset-0 noise-bg z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
