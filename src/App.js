import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import Experiences from './pages/Experiences';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import Lenis from 'lenis';
import { useThemeStore } from './store/useThemeStore';

import { portfolioData } from './data/portfolio';

function App() {
  const { theme } = useThemeStore();
  const { visibility } = portfolioData;

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [theme]);

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen text-navy dark:text-ghost selection:bg-secondary/30 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main>
        {visibility.home && <Home />}
        {visibility.about && <About />}
        {visibility.skills && <Skills />}
        {visibility.projects && <Projects />}
        {visibility.experience && <Experiences />}
        {visibility.contact && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
