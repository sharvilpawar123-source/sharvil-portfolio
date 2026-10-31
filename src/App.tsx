import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { GitHubActivity } from './sections/GitHubActivity';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className={`min-h-screen transition-colors duration-300 relative ${isDark ? 'bg-[#0d0d0d] text-white' : 'bg-white text-[#0d0d0d]'}`}>
          <CustomCursor />
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Certifications />
            <Achievements />
            <GitHubActivity />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
