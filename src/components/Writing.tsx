import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Check, Quote, X } from 'lucide-react';
import { writingsData } from '../data';
import { Writing } from '../types';

export default function WritingComponent() {
  const [selectedEssay, setSelectedEssay] = React.useState<Writing | null>(null);
  const [requestedEssayIds, setRequestedEssayIds] = React.useState<string[]>([]);

  return (
    <section className="py-16 md:py-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-[#ece8df] pb-8 mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase block mb-3 font-semibold">
            Section 02 / Publications
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1917] tracking-tight">
            Writing & Scholarly Essays
          </h2>
          <p className="font-sans text-sm md:text-base text-[#5e5850] max-w-2xl mt-4 leading-relaxed">
            Scholarly catalog essays, critical reviews, and textbook contributions authored by Nicole Dial-Kay. Her writing investigates regional minimalism, Light and Space somatic practices, and public art frameworks.
          </p>
        </div>

        {/* Writings List/Spread */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {writingsData.map((essay, index) => (
            <motion.div
              key={essay.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-8 bg-[#fcfbfa] border border-[#ece8df]/50 rounded-xl hover:border-[#827b72]/50 hover:shadow-md transition-all duration-300"
              id={`writing-card-${essay.id}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6 text-[10px] font-sans tracking-widest uppercase text-[#827b72] font-semibold">
                  <span className="px-2 py-0.5 border border-[#ece8df] bg-[#fcfbfa] rounded-full">
                    {essay.type}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{essay.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] leading-tight mb-3">
                  {essay.title}
                </h3>

                <p className="font-sans text-xs italic tracking-wider text-[#827b72] uppercase mb-4">
                  Published in: <span className="font-semibold text-[#5e5850]">{essay.publication}</span>
                </p>

                <div className="relative mt-6 mb-8 pl-4 border-l-2 border-[#827b72]/40 bg-[#f4f2ea]/20 p-4 rounded-r-lg">
                  <Quote size={18} className="text-[#827b72]/20 absolute top-2 right-2" />
                  <p className="font-sans text-xs text-[#5e5850] leading-relaxed italic">
                    "{essay.excerpt}"
                  </p>
                </div>

                {/* Purchase Links directly on the card if available */}
                {(essay.amazonLink || essay.bamLink) && (
                  <div className="mb-6 p-3 bg-white border border-[#ece8df] rounded-lg flex flex-col gap-2">
                    <span className="font-sans text-[9px] tracking-wider uppercase text-[#827b72] font-bold">
                      Purchase Hardcover Catalogue:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {essay.amazonLink && (
                        <a
                          href={essay.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1a1917] hover:bg-[#827b72] text-white rounded font-sans text-[9px] font-bold uppercase tracking-wider transition-colors duration-300"
                        >
                          <span>Amazon</span>
                          <ArrowUpRight size={9} />
                        </a>
                      )}
                      {essay.bamLink && (
                        <a
                          href={essay.bamLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-[#ece8df] text-[#1a1917] border border-[#ece8df] rounded font-sans text-[9px] font-bold uppercase tracking-wider transition-colors duration-300"
                        >
                          <span>Books-A-Million</span>
                          <ArrowUpRight size={9} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#ece8df]/60">
                <button
                  onClick={() => setSelectedEssay(essay)}
                  className="flex items-center justify-between w-full text-[#1a1917] hover:text-[#827b72] font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none"
                  id={`btn-read-essay-${essay.id}`}
                >
                  <span>Request Full Text / Details</span>
                  <ArrowUpRight size={14} className="transform group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic detail view dialog (AnimatePresence) */}
        <AnimatePresence>
          {selectedEssay && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="essay-detail-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEssay(null)}
                className="fixed inset-0 bg-[#121211]/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4 md:p-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-[#faf9f5] border border-[#ece8df] max-w-2xl w-full rounded-2xl p-6 md:p-10 shadow-2xl relative z-10"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedEssay(null)}
                    className="absolute top-4 right-4 p-2 bg-[#fcfbfa] text-[#1a1917] hover:text-[#827b72] rounded-full border border-[#ece8df] transition-colors focus:outline-none cursor-pointer"
                    id="btn-close-essay-modal"
                  >
                    <X size={16} />
                  </button>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-[10px] font-sans tracking-widest uppercase text-[#827b72] font-semibold">
                      <span>{selectedEssay.type}</span>
                      <span>•</span>
                      <span>{selectedEssay.date}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#1a1917] leading-tight">
                      {selectedEssay.title}
                    </h3>

                    <div className="p-4 bg-[#f4f2ea] border-l-4 border-[#827b72] rounded-r-lg">
                      <p className="font-sans text-xs text-[#5e5850]">
                        <span className="font-semibold block mb-1">Catalog Bibliographic Info:</span>
                        Dial-Kay, Nicole. "{selectedEssay.title}." In <span className="italic">{selectedEssay.publication}</span>, {selectedEssay.date.split(' ')[1] || selectedEssay.date}.
                      </p>
                    </div>

                    {(selectedEssay.amazonLink || selectedEssay.bamLink) && (
                      <div className="flex flex-col gap-2 p-4 bg-white border border-[#ece8df] rounded-xl text-left">
                        <span className="font-sans text-[10px] tracking-wider uppercase text-[#827b72] font-bold">
                          Purchase Printed Catalogue:
                        </span>
                        <div className="flex flex-wrap gap-3 mt-1">
                          {selectedEssay.amazonLink && (
                            <a
                              href={selectedEssay.amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1a1917] hover:bg-[#827b72] text-white rounded-md font-sans text-[10px] font-bold uppercase tracking-wider transition-colors duration-300"
                            >
                              <span>Buy on Amazon</span>
                              <ArrowUpRight size={11} />
                            </a>
                          )}
                          {selectedEssay.bamLink && (
                            <a
                              href={selectedEssay.bamLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#ece8df] text-[#1a1917] border border-[#ece8df] rounded-md font-sans text-[10px] font-bold uppercase tracking-wider transition-colors duration-300"
                            >
                              <span>Buy on Books-A-Million</span>
                              <ArrowUpRight size={11} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 pt-4 border-t border-[#ece8df]">
                      <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold">
                        Extended Abstract & Critical Frame
                      </h4>
                      <p className="font-sans text-sm text-[#5e5850] leading-relaxed">
                        {selectedEssay.excerpt}
                      </p>
                      <p className="font-sans text-sm text-[#5e5850] leading-relaxed pt-2">
                        This scholarly text forms part of Nicole Dial-Kay's ongoing curatorial inquiries into Southwest Modernism and Light-Space phenomenological installations. In her research, Dial-Kay emphasizes the relational experience of material forms, solar rhythms, and localized space, tracing how artists inside and outside the Southwest canon have conceptualized the unique atmosphere and spatial expanses of New Mexico and Colorado.
                      </p>
                    </div>

                    <div className="pt-8 border-t border-[#ece8df] flex flex-col sm:flex-row items-center justify-between gap-4">
                      {requestedEssayIds.includes(selectedEssay.id) ? (
                        <div className="flex items-center gap-2 text-[#827b72] bg-[#f4f2ea] border border-[#ece8df] px-4 py-3 rounded-lg w-full justify-center">
                          <Check size={14} className="text-[#827b72]" />
                          <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-[#1a1917]">Request sent! PDF copy is being prepared for your email</span>
                        </div>
                      ) : (
                        <>
                          <span className="font-sans text-[11px] text-[#827b72] font-semibold italic">
                            Interested in reading the complete text?
                          </span>
                          <button 
                            onClick={() => {
                              setRequestedEssayIds([...requestedEssayIds, selectedEssay.id]);
                            }}
                            className="w-full sm:w-auto px-5 py-2.5 bg-[#1a1917] hover:bg-[#827b72] text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-lg transition-colors focus:outline-none cursor-pointer flex items-center justify-center gap-2"
                            id="btn-request-pdf"
                          >
                            <BookOpen size={13} />
                            Request Scholarly PDF
                          </button>
                        </>
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
