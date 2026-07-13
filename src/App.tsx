import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Curatorial from './components/Curatorial';
import Writing from './components/Writing';
import Press from './components/Press';
import Biography from './components/Biography';

export default function App() {
  const [activeSection, setActiveSection] = React.useState<string>('about');

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeSection]);

  return (
    <div className="site-shell">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Biography />
            </motion.div>
          )}
          {activeSection === 'exhibitions' && (
            <motion.div
              key="exhibitions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Curatorial />
            </motion.div>
          )}
          {activeSection === 'writing' && (
            <motion.div
              key="writing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Writing />
            </motion.div>
          )}
          {activeSection === 'press' && (
            <motion.div
              key="press"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Press />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
