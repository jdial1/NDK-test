import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Newspaper, Quote, X, Calendar, Globe } from 'lucide-react';
import { pressData } from '../data';
import { Press } from '../types';

export default function PressComponent() {
  const [activeTab, setActiveTab] = React.useState<'All' | 'Review' | 'Feature'>('All');
  const [selectedPress, setSelectedPress] = React.useState<Press | null>(null);

  const filteredPress = activeTab === 'All' 
    ? pressData 
    : pressData.filter(item => item.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-[#ece8df] pb-8 mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase block mb-3 font-semibold">
            Section 03 / Media Coverage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1917] tracking-tight">
            Selected Press & Critical Reviews
          </h2>
          <p className="font-sans text-sm md:text-base text-[#5e5850] max-w-2xl mt-4 leading-relaxed">
            Critical reviews and features showcasing the impact of Nicole Dial-Kay’s curated exhibitions and collections. Her projects have been featured in premier Southwestern and national contemporary art outlets.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex gap-6 mb-12 border-b border-[#ece8df]/60 pb-3">
          {(['All', 'Review', 'Feature'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 font-sans text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer focus:outline-none ${
                activeTab === tab ? 'text-[#1a1917]' : 'text-[#827b72] hover:text-[#1a1917]'
              }`}
              id={`press-tab-${tab.toLowerCase()}`}
            >
              <span>{tab === 'All' ? 'All Press' : `${tab}s`}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activePressTabLine"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1a1917]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Press List Grid */}
        <div className="space-y-8">
          {filteredPress.map((press, index) => (
            <motion.div
              key={press.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 md:p-10 bg-[#fcfbfa] border border-[#ece8df]/50 rounded-2xl flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-[#827b72]/40 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
              onClick={() => setSelectedPress(press)}
              id={`press-item-${press.id}`}
            >
              {/* Left Column: Quote and Title */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-[#827b72]">
                  <Quote size={20} className="opacity-40 shrink-0" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#827b72]">
                    {press.category} Curation
                  </span>
                </div>

                <blockquote className="font-serif text-lg md:text-xl text-[#1a1917] leading-relaxed italic">
                  "{press.quote}"
                </blockquote>

                <div className="pt-2">
                  <h4 className="font-sans text-sm font-semibold text-[#1a1917] tracking-tight group-hover:text-[#827b72] transition-colors duration-300">
                    {press.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-sans tracking-wider text-[#827b72] font-semibold">
                    <span className="font-bold text-[#5e5850]">{press.source}</span>
                    <span>•</span>
                    <span>{press.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Link / Action */}
              <div className="md:self-center shrink-0" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedPress(press)}
                  className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-semibold text-[#827b72] group-hover:text-[#1a1917] border border-[#ece8df] group-hover:border-[#827b72] px-4 py-2.5 rounded-lg transition-all duration-300 bg-white cursor-pointer hover:bg-[#faf9f5]"
                  id={`press-link-${press.id}`}
                >
                  <Newspaper size={13} />
                  <span>Read Article</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful In-App Press Reader Modal */}
        <AnimatePresence>
          {selectedPress && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="press-detail-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPress(null)}
                className="fixed inset-0 bg-[#121211]/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4 md:p-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-[#faf9f5] border border-[#ece8df] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 p-8 md:p-12"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPress(null)}
                    className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-xs hover:bg-white text-[#1a1917] hover:text-[#827b72] rounded-full border border-[#ece8df] transition-colors focus:outline-none cursor-pointer"
                    id="btn-close-press-modal"
                  >
                    <X size={18} />
                  </button>

                  {/* Header metadata */}
                  <div className="border-b border-[#ece8df] pb-6 mb-8">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#827b72] uppercase font-bold block mb-3">
                      {selectedPress.category} Clippings Archive
                    </span>
                    <h3 className="font-serif text-2xl md:text-3.5xl text-[#1a1917] tracking-tight leading-tight mb-4">
                      {selectedPress.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-sans text-[#827b72] font-semibold">
                      <span className="text-[#1a1917] font-bold">{selectedPress.source}</span>
                      <span className="text-[#ece8df] hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {selectedPress.date}
                      </span>
                    </div>
                  </div>

                  {/* Pull Quote Box */}
                  <div className="bg-[#fcfbfa] border-l-2 border-[#827b72] p-6 mb-8 rounded-r-xl">
                    <Quote size={24} className="text-[#827b72]/30 mb-2" />
                    <p className="font-serif text-base md:text-lg text-[#1a1917] italic leading-relaxed">
                      "{selectedPress.quote}"
                    </p>
                  </div>

                  {/* Full Text - Multi-column layout similar to the Allison Glenn template */}
                  <div className="font-sans text-sm md:text-base text-[#5e5850] leading-relaxed space-y-6 md:columns-1 gap-8 pt-2">
                    {selectedPress.fullText && selectedPress.fullText.map((paragraph, idx) => (
                      <p key={idx} className="break-inside-avoid">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Original citation link footer */}
                  {selectedPress.link && (
                    <div className="mt-10 pt-6 border-t border-[#ece8df] flex flex-col sm:flex-row justify-between items-center gap-4">
                      <span className="font-sans text-[11px] text-[#827b72] italic font-medium">
                        Clippings compiled for historical curatorial records.
                      </span>
                      <a
                        href={selectedPress.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-semibold text-[#827b72] hover:text-[#1a1917] border border-[#ece8df]/80 hover:border-[#827b72] px-4 py-2.5 rounded-lg transition-all duration-300 bg-white"
                        id={`original-press-link-${selectedPress.id}`}
                      >
                        <Globe size={13} className="text-[#827b72]" />
                        <span>Original Citation</span>
                        <ExternalLink size={10} className="opacity-60" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
