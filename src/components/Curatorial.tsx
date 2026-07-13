import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, MapPin, Sparkles, X, Globe, Newspaper, ExternalLink, Quote, Archive, Search } from 'lucide-react';
import { exhibitionsData, pressData, pastExhibitionsData } from '../data';
import { Exhibition, Press, PastHarwoodExhibition } from '../types';
import ExhibitionVisual from './ExhibitionVisual';

export default function Curatorial() {
  const [filter, setFilter] = React.useState<string>('All');
  const [selectedExhib, setSelectedExhib] = React.useState<Exhibition | null>(null);
  const [selectedPress, setSelectedPress] = React.useState<Press | null>(null);
  const [selectedPastExhib, setSelectedPastExhib] = React.useState<PastHarwoodExhibition | null>(null);
  const [showAllPast, setShowAllPast] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const categories = ['All', 'Centennial', 'Solo', 'Historical', 'Festival'];

  const filteredExhibitions = filter === 'All' 
    ? exhibitionsData 
    : exhibitionsData.filter(ex => ex.category === filter);

  const filteredPastExhibitions = pastExhibitionsData.filter(ex => 
    ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ex.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (ex.caption && ex.caption.toLowerCase().includes(searchQuery.toLowerCase())) ||
    ex.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getExhibPress = (exhibId: string): Press | undefined => {
    if (exhibId === 'debbie-long') return pressData.find(p => p.id === 'press-debbie-long');
    if (exhibId === 'gus-foster') return pressData.find(p => p.id === 'press-gus-foster');
    if (exhibId === 'out-of-the-box') return pressData.find(p => p.id === 'press-centennial');
    return undefined;
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-[#ece8df] pb-8 mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase block mb-3 font-semibold">
            Section 01 / Selected Works
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1917] tracking-tight">
            Curatorial Projects
          </h2>
          <p className="font-sans text-sm md:text-base text-[#5e5850] max-w-2xl mt-4 leading-relaxed">
            Exhibitions, public commissions, and permanent collections curated by Nicole Dial-Kay. Her work engages dialogue across decades, connecting mid-century minimalism and avant-garde abstraction to contemporary Southwest art.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-[#ece8df]/60 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-sans text-xs tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer focus:outline-none border ${
                filter === cat
                  ? 'bg-[#1a1917] text-white border-[#1a1917]'
                  : 'text-[#827b72] border-[#ece8df] hover:border-[#827b72] hover:text-[#1a1917]'
              }`}
              id={`filter-btn-${cat.toLowerCase()}`}
            >
              {cat === 'All' ? 'All Curated Projects' : cat}
            </button>
          ))}
        </div>

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {filteredExhibitions.map((exhib, index) => (
            <motion.div
              key={exhib.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-[#fcfbfa] border border-[#ece8df]/40 hover:border-[#827b72]/40 rounded-xl overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md"
              onClick={() => setSelectedExhib(exhib)}
              id={`exhib-card-${exhib.id}`}
            >
              <div className="aspect-video w-full overflow-hidden relative bg-[#eae6dc]">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <ExhibitionVisual id={exhib.id} title={exhib.title} category={exhib.category} />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 font-sans text-[10px] tracking-widest uppercase text-[#1a1917] font-semibold rounded-full border border-[#ece8df]">
                  {exhib.category}
                </span>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[11px] font-sans tracking-wider text-[#827b72] font-semibold">
                    <Calendar size={12} />
                    <span>{exhib.year}</span>
                    <span className="text-[#ece8df]">•</span>
                    <MapPin size={12} />
                    <span>{exhib.location.split(',')[0]}</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] group-hover:text-[#827b72] transition-colors duration-300 leading-tight mb-4">
                    {exhib.title}
                  </h3>

                  {exhib.artist && (
                    <p className="font-sans text-xs tracking-wider text-[#827b72] uppercase font-semibold mb-3">
                      Artist: {exhib.artist}
                    </p>
                  )}

                  <p className="font-sans text-sm text-[#5e5850] line-clamp-3 leading-relaxed">
                    {exhib.description}
                  </p>

                  {/* Quick Press / External Links on Card */}
                  <div className="flex flex-wrap gap-2 pt-4" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setSelectedExhib(exhib)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f4f2ea] hover:bg-[#1a1917] text-[#5e5850] hover:text-white border border-[#ece8df]/60 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      <Archive size={11} />
                      <span>Curatorial File (In-App)</span>
                    </button>

                    {exhib.link && (
                      <a
                        href={exhib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#827b72] text-[#827b72] hover:text-white border border-[#ece8df]/60 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
                      >
                        <Globe size={11} />
                        <span>Official Page</span>
                        <ExternalLink size={8} />
                      </a>
                    )}

                    {getExhibPress(exhib.id) ? (
                      <button
                        onClick={() => setSelectedPress(getExhibPress(exhib.id) || null)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#827b72] text-[#827b72] hover:text-white border border-[#ece8df]/60 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                      >
                        <Newspaper size={11} />
                        <span>Read Review</span>
                      </button>
                    ) : exhib.reviewUrl ? (
                      <a
                        href={exhib.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#827b72] text-[#827b72] hover:text-white border border-[#ece8df]/60 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
                      >
                        <Newspaper size={11} />
                        <span>Read Review</span>
                        <ExternalLink size={8} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ece8df]/60 flex items-center justify-between text-[#1a1917] group-hover:text-[#827b72] font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300">
                  <span>Explore Curatorial Details</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Past Harwood Exhibitions Directory Section */}
        <div className="mt-28 pt-16 border-t border-[#ece8df] space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#827b72] uppercase font-bold block">
                Historical Institutional Legacy
              </span>
              <h3 className="font-serif text-2xl md:text-3.5xl text-[#1a1917] tracking-tight">
                Past Harwood Exhibitions Archive
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#5e5850] max-w-2xl leading-relaxed">
                A fully digitized scholarly archive preserving the curatorial history, artistic highlights, and environmental records of past exhibitions staged at the Harwood Museum of Art.
              </p>
            </div>

            {/* In-archive Search bar */}
            <div className="relative w-full md:w-80" id="archive-search-container">
              <span className="absolute inset-y-0 left-3.5 flex items-center text-[#827b72]">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="Search historical records..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#ece8df] rounded-xl font-sans text-xs text-[#1a1917] placeholder-[#827b72]/60 focus:outline-none focus:border-[#827b72] transition-colors"
              />
            </div>
          </div>

          {/* Past Exhibitions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="past-exhibitions-grid">
            {filteredPastExhibitions.slice(0, showAllPast ? undefined : 6).map((ex, idx) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                onClick={() => setSelectedPastExhib(ex)}
                className="bg-white border border-[#ece8df]/60 hover:border-[#827b72]/50 p-6 rounded-xl flex flex-col justify-between h-full hover:shadow-md transition-all duration-300 group cursor-pointer text-left"
                id={`past-exhib-card-${ex.id}`}
              >
                <div className="space-y-4">
                  {/* Category / Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-widest uppercase font-bold text-[#827b72] bg-[#fcfbfa] border border-[#ece8df]/50 px-2 py-0.5 rounded-md">
                      Past Exhibition
                    </span>
                    <span className="font-sans text-[10px] text-[#827b72] font-semibold flex items-center gap-1">
                      <Calendar size={11} />
                      {ex.date.split('—')[0].split(' ')[0]}
                    </span>
                  </div>

                  {ex.image && (
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#ece8df]/40 relative bg-[#eae6dc]">
                      <img
                        src={ex.image}
                        alt={ex.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Title & Date */}
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base text-[#1a1917] group-hover:text-[#827b72] leading-snug tracking-tight transition-colors duration-300">
                      {ex.title}
                    </h4>
                    <p className="font-sans text-[10px] text-[#827b72]/80 font-medium">
                      {ex.date}
                    </p>
                  </div>

                  {/* Caption / Attribution (if present) */}
                  {ex.caption && (
                    <div className="bg-[#fcfbfa] p-3 border border-[#ece8df]/40 rounded-lg">
                      <p className="font-sans text-[10px] italic text-[#827b72] leading-normal font-medium">
                        {ex.caption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Read More trigger & links */}
                <div className="mt-6 pt-4 border-t border-[#ece8df]/40 flex items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedPastExhib(ex)}
                    className="inline-flex items-center gap-1 bg-[#fcfbfa] hover:bg-[#827b72]/10 text-[#827b72] px-2.5 py-1 rounded-md border border-[#ece8df] font-sans text-[9px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                  >
                    <span>View Record</span>
                    <ArrowRight size={10} />
                  </button>
                  {ex.link && (
                    <a
                      href={ex.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#827b72] hover:text-[#1a1917] font-sans text-[9px] font-bold tracking-wider uppercase transition-all duration-300"
                    >
                      <Globe size={11} />
                      <span>Live Site</span>
                      <ExternalLink size={8} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Zero results state */}
          {filteredPastExhibitions.length === 0 && (
            <div className="text-center py-12 bg-white border border-[#ece8df]/60 rounded-xl max-w-md mx-auto">
              <Archive size={28} className="text-[#827b72]/40 mx-auto mb-3" />
              <p className="font-serif text-base text-[#1a1917]">No historical records found</p>
              <p className="font-sans text-xs text-[#827b72] mt-1">Try broadening your search term</p>
            </div>
          )}

          {/* Show More / Show Few Controls */}
          {filteredPastExhibitions.length > 6 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAllPast(!showAllPast)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1917] hover:bg-[#827b72] text-white border border-[#1a1917] hover:border-[#827b72] rounded-lg font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none"
                id="btn-toggle-show-past"
              >
                <span>{showAllPast ? 'Show Few' : `Explore Full Historical Archive (${filteredPastExhibitions.length})`}</span>
                <ArrowRight size={12} className={`transform transition-transform duration-300 ${showAllPast ? '-rotate-90' : 'rotate-90'}`} />
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Detailed Dialog (AnimatePresence) */}
        <AnimatePresence>
          {selectedExhib && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="exhibition-detail-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExhib(null)}
                className="fixed inset-0 bg-[#121211]/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4 md:p-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-[#faf9f5] border border-[#ece8df] max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative z-10"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedExhib(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-xs hover:bg-white text-[#1a1917] hover:text-[#827b72] rounded-full border border-[#ece8df] transition-colors focus:outline-none cursor-pointer"
                    id="btn-close-modal"
                  >
                    <X size={18} />
                  </button>

                  {/* Header Image banner */}
                  <div className="aspect-video w-full relative bg-[#eae6dc]">
                    <div className="absolute inset-0">
                      <ExhibitionVisual id={selectedExhib.id} title={selectedExhib.title} category={selectedExhib.category} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121211]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-xs font-sans text-[10px] tracking-widest uppercase rounded-full border border-white/20 text-white font-semibold">
                        {selectedExhib.category} Curation
                      </span>
                      <h3 className="font-serif text-2xl md:text-4xl text-white tracking-tight mt-3">
                        {selectedExhib.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Left: Metadata info */}
                      <div className="md:col-span-1 space-y-6">
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                            Curator Role
                          </h4>
                          <p className="font-serif text-base text-[#1a1917]">
                            {selectedExhib.role}
                          </p>
                        </div>

                        {selectedExhib.artist && (
                          <div>
                            <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                              Featured Artist
                            </h4>
                            <p className="font-serif text-base text-[#1a1917]">
                              {selectedExhib.artist}
                            </p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                            Timeline
                          </h4>
                          <p className="font-sans text-xs text-[#5e5850] font-semibold leading-relaxed">
                            {selectedExhib.date}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                            Venue
                          </h4>
                          <p className="font-sans text-xs text-[#5e5850] font-semibold leading-relaxed">
                            {selectedExhib.location}
                          </p>
                        </div>

                        {/* External Resources List */}
                        <div className="pt-6 border-t border-[#ece8df]">
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-3">
                            Exhibition Links & Press
                          </h4>
                          <div className="space-y-3">
                            {selectedExhib.link && (
                              <a
                                href={selectedExhib.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-sans font-bold tracking-wide text-[#1a1917] hover:text-[#827b72] transition-colors py-1 pl-1"
                              >
                                <Globe size={13} className="text-[#827b72]" />
                                <span>Visit Official Exhibition Webpage</span>
                                <ExternalLink size={10} className="opacity-60" />
                              </a>
                            )}

                            {getExhibPress(selectedExhib.id) ? (
                              <div className="space-y-2 pt-1 pl-1">
                                <button
                                  onClick={() => setSelectedPress(getExhibPress(selectedExhib.id) || null)}
                                  className="flex items-center gap-2 text-xs font-sans font-bold tracking-wide text-[#1a1917] hover:text-[#827b72] transition-colors cursor-pointer text-left bg-transparent border-none py-1"
                                >
                                  <Newspaper size={13} className="text-[#827b72]" />
                                  <span>{selectedExhib.reviewLabel || 'Read Curated Review (In-App)'}</span>
                                  <ArrowRight size={12} className="opacity-60 ml-1" />
                                </button>
                                {getExhibPress(selectedExhib.id)?.link && (
                                  <a
                                    href={getExhibPress(selectedExhib.id)?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-xs font-sans font-bold tracking-wide text-[#827b72] hover:text-[#1a1917] transition-colors py-1"
                                  >
                                    <ExternalLink size={13} className="text-[#827b72]" />
                                    <span>Read Original Press Article Online</span>
                                  </a>
                                )}
                              </div>
                            ) : selectedExhib.reviewUrl ? (
                              <a
                                href={selectedExhib.reviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-sans font-bold tracking-wide text-[#1a1917] hover:text-[#827b72] transition-colors py-1 pl-1"
                              >
                                <Newspaper size={13} className="text-[#827b72]" />
                                <span>{selectedExhib.reviewLabel || 'Read Review'}</span>
                                <ExternalLink size={10} className="opacity-60" />
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {/* Right: Curatorial Concept & Bullet details */}
                      <div className="md:col-span-2 space-y-8">
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-3 flex items-center gap-1.5">
                            <Sparkles size={11} className="text-[#827b72]" />
                            Curatorial Concept
                          </h4>
                          <p className="font-sans text-sm text-[#5e5850] leading-relaxed">
                            {selectedExhib.description}
                          </p>
                        </div>

                        {selectedExhib.details && selectedExhib.details.length > 0 && (
                          <div className="pt-6 border-t border-[#ece8df]">
                            <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-4">
                              Exhibition Highlights & Impact
                            </h4>
                            <ul className="space-y-3">
                              {selectedExhib.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-[#5e5850] leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#827b72] shrink-0 mt-1.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Elegant In-App Press Review Reader */}
        <AnimatePresence>
          {selectedPress && (
            <div className="fixed inset-0 z-[60] overflow-y-auto" id="curatorial-press-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPress(null)}
                className="fixed inset-0 bg-[#121211]/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4 md:p-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-[#faf9f5] border border-[#ece8df] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 p-8 md:p-12 text-left"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPress(null)}
                    className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-xs hover:bg-white text-[#1a1917] hover:text-[#827b72] rounded-full border border-[#ece8df] transition-colors focus:outline-none cursor-pointer"
                    id="btn-close-curatorial-press"
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

                  {/* Full Text */}
                  <div className="font-sans text-sm md:text-base text-[#5e5850] leading-relaxed space-y-6 md:columns-1 gap-8 pt-2">
                    {selectedPress.fullText && selectedPress.fullText.map((paragraph, idx) => (
                      <p key={idx} className="break-inside-avoid">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Original citation info */}
                  {selectedPress.link && (
                    <div className="mt-10 pt-6 border-t border-[#ece8df] flex flex-col sm:flex-row justify-between items-center gap-4">
                      <span className="font-sans text-[11px] text-[#827b72] italic font-medium">
                        Preserved for scholarly archive, review, and curatorial reference.
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Dynamic Detailed Dialog for Past Exhibitions (AnimatePresence) */}
        <AnimatePresence>
          {selectedPastExhib && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="past-exhibition-detail-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPastExhib(null)}
                className="fixed inset-0 bg-[#121211]/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4 md:p-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-[#faf9f5] border border-[#ece8df] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 text-left"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPastExhib(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-xs hover:bg-white text-[#1a1917] hover:text-[#827b72] rounded-full border border-[#ece8df] transition-colors focus:outline-none cursor-pointer"
                    id="btn-close-past-modal"
                  >
                    <X size={18} />
                  </button>

                  {/* Header abstract graphic banner */}
                  <div className="aspect-[21/9] w-full relative bg-[#eae6dc] p-8 flex flex-col justify-end border-b border-[#ece8df] overflow-hidden">
                    {selectedPastExhib.image ? (
                      <>
                        <img
                          src={selectedPastExhib.image}
                          alt={selectedPastExhib.title}
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-[#faf9f5]/80 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#827b72_1px,transparent_1px)] [background-size:16px_16px]" />
                    )}
                    <div className="relative z-10 space-y-2">
                      <span className="px-2.5 py-0.5 bg-[#827b72]/10 border border-[#827b72]/20 font-mono text-[8px] tracking-widest uppercase rounded-md text-[#827b72] font-semibold">
                        Harwood Institutional Record
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#1a1917] tracking-tight leading-tight">
                        {selectedPastExhib.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core details */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Left: Timeline & Venue */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                            Timeline
                          </h4>
                          <p className="font-sans text-xs text-[#1a1917] font-semibold leading-relaxed">
                            {selectedPastExhib.date}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                            Institution
                          </h4>
                          <p className="font-sans text-xs text-[#5e5850] font-semibold leading-relaxed">
                            Harwood Museum of Art, Taos, NM
                          </p>
                        </div>
                      </div>

                      {/* Right: Curatorial Summary */}
                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-2 flex items-center gap-1.5">
                            <Sparkles size={11} />
                            Curatorial Context
                          </h4>
                          <p className="font-sans text-xs md:text-sm text-[#5e5850] leading-relaxed">
                            {selectedPastExhib.description}
                          </p>
                        </div>

                        {selectedPastExhib.caption && (
                          <div className="p-3 bg-white border border-[#ece8df]/60 rounded-xl">
                            <h4 className="font-sans text-[9px] tracking-widest uppercase text-[#827b72] font-semibold mb-1">
                              Featured Artwork/Caption Reference
                            </h4>
                            <p className="font-sans text-[11px] text-[#5e5850] italic leading-normal font-medium">
                              {selectedPastExhib.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Highlights Bullets */}
                    {selectedPastExhib.curatorialDetails && selectedPastExhib.curatorialDetails.length > 0 && (
                      <div className="pt-6 border-t border-[#ece8df]">
                        <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold mb-3">
                          Exhibition Focus & Core Highlights
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedPastExhib.curatorialDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#5e5850] leading-relaxed bg-white border border-[#ece8df]/40 p-3 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#827b72] shrink-0 mt-1.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Institutional Archival Disclaimer & External Link */}
                    <div className="pt-6 border-t border-[#ece8df] space-y-4">
                      <div className="flex items-start gap-2.5 text-[#827b72] bg-[#fcfbfa] p-4 rounded-xl border border-[#ece8df]/60">
                        <Archive size={16} className="shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#1a1917]">
                            Record Integrity Preserved
                          </p>
                          <p className="font-sans text-[9px] leading-normal font-medium text-[#827b72]">
                            This is an official curatorial record from the Harwood Museum of Art’s historical collections directory. All dates, artistic titles, and attributions have been preserved directly from the museum's registry.
                          </p>
                        </div>
                      </div>

                      {selectedPastExhib.link && (
                        <div className="flex justify-end pt-1">
                          <a
                            href={selectedPastExhib.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest uppercase text-[#827b72] hover:text-[#1a1917] transition-colors"
                          >
                            <Globe size={13} />
                            <span>Visit Live Exhibition Page</span>
                            <ExternalLink size={10} className="opacity-60" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
