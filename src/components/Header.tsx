import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'press', label: 'Selected Press' },
    { id: 'exhibitions', label: 'Selected Exhibitions' },
    { id: 'writing', label: 'Selected Writing' },
  ];

  React.useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  return (
    <>
      <header className="nav-desktop">
        <nav aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <header className="nav-mobile fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#eee]">
        <div className="flex items-center justify-between px-[15px] h-[52px]">
          <span className="text-[13px] text-[#666] truncate pr-4">
            {navItems.find((item) => item.id === activeSection)?.label ?? 'Menu'}
          </span>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="nav-link !border-0 text-[14px] shrink-0"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[52px] bg-[rgba(0,0,0,0.94)] overflow-y-auto"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left text-[16px] px-[15px] py-[16px] border-t border-white/15 bg-transparent cursor-pointer ${
                    activeSection === item.id ? 'text-white/55' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
