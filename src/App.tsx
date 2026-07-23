import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Curatorial from './components/Curatorial';
import Writing from './components/Writing';
import Press from './components/Press';
import Biography from './components/Biography';
import EditModal from './components/EditModal';
import { ActiveSection, SiteDataProvider, useSiteData } from './context/SiteDataContext';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

function SiteShell() {
  const { activeSection, setActiveSection } = useSiteData();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeSection]);

  return (
    <div className="site-shell">
      <Header
        activeSection={activeSection}
        setActiveSection={(section) => setActiveSection(section as ActiveSection)}
      />

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

      <EditModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <SiteDataProvider>
        <Routes>
          <Route path="/" element={<SiteShell />} />
          <Route path="/template" element={<SiteShell />} />
          <Route path="/edit" element={<SiteShell />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteDataProvider>
    </BrowserRouter>
  );
}
