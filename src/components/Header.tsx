import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'curatorial', label: 'Curatorial' },
    { id: 'writing', label: 'Writing & Essays' },
    { id: 'press', label: 'Selected Press' },
    { id: 'biography', label: 'Biography' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f5]/80 backdrop-blur-md border-b border-[#ece8df]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveSection('home');
            setIsOpen(false);
          }}
          className="text-left group cursor-pointer focus:outline-none"
          id="btn-brand-logo"
        >
          <h1 className="font-serif text-xl md:text-2xl tracking-widest text-[#1a1917] font-semibold uppercase transition-colors duration-300 group-hover:text-[#827b72]">
            Nicole Dial-Kay
          </h1>
          <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-[#827b72] uppercase mt-0.5">
            Curator of Exhibitions & Collections
          </p>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="relative py-2 font-sans text-xs tracking-widest uppercase font-medium cursor-pointer focus:outline-none"
              id={`nav-item-${item.id}`}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.id ? 'text-[#1a1917]' : 'text-[#827b72] hover:text-[#1a1917]'
                }`}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1a1917]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1a1917] hover:text-[#827b72] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
          id="btn-mobile-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f4f2ea] border-b border-[#ece8df] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`py-3 text-left font-sans text-xs tracking-widest uppercase font-semibold transition-colors ${
                    activeSection === item.id ? 'text-[#1a1917] pl-2 border-l-2 border-[#1a1917]' : 'text-[#827b72] hover:text-[#1a1917]'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
