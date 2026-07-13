import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Calendar, Mail, MapPin, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Curatorial from './components/Curatorial';
import Writing from './components/Writing';
import Press from './components/Press';
import Biography from './components/Biography';
import Contact from './components/Contact';
import ExhibitionVisual from './components/ExhibitionVisual';
import { exhibitionsData, IMAGES } from './data';

export default function App() {
  const [activeSection, setActiveSection] = React.useState<string>('home');

  // Automatically scroll to the top of the page when the section changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const featuredExhibitions = exhibitionsData.filter(ex => ex.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] font-sans antialiased text-[#1a1917]">
      {/* Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Router with Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-24 pb-24"
            >
              {/* Split Landing Hero */}
              <section className="pt-12 md:pt-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Hero Statement */}
                  <div className="lg:col-span-7 space-y-6 md:space-y-8 text-[#1a1917] order-2 lg:order-1">
                    <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase font-bold block">
                      Exhibitions • Collections • Research
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1] font-medium text-[#1a1917]">
                      Curating dialogue between <span className="italic font-normal">legacy</span> and the <span className="italic font-normal">contemporary</span>.
                    </h2>
                    <p className="font-sans text-sm md:text-base text-[#5e5850] leading-relaxed max-w-2xl">
                      Nicole Dial-Kay is an art curator and writer based in Taos, New Mexico. Currently serving as Curator of Exhibitions and Collections at the Harwood Museum of Art, her practice bridges mid-century modernism and contemporary regional expressions, creating spatial stories that invite somatic and mindful connections.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <button
                        onClick={() => setActiveSection('curatorial')}
                        className="bg-[#1a1917] hover:bg-[#827b72] text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                        id="hero-btn-explore"
                      >
                        <span>Explore Exhibitions</span>
                        <ArrowRight size={13} />
                      </button>
                      <button
                        onClick={() => setActiveSection('biography')}
                        className="border border-[#ece8df] hover:border-[#827b72] text-[#827b72] hover:text-[#1a1917] font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none bg-white"
                        id="hero-btn-bio"
                      >
                        <span>Read Biography</span>
                      </button>
                    </div>
                  </div>

                  {/* Hero Visual Block */}
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="relative p-2 bg-white border border-[#ece8df] rounded-2xl shadow-sm max-w-sm mx-auto lg:mx-0">
                      <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#eae6dc]">
                        <img
                          src={IMAGES.portrait}
                          alt="Nicole Dial-Kay Portrait"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter contrast-[1.01] brightness-[0.99] grayscale-[5%]"
                        />
                      </div>
                      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xs px-4 py-2 border border-[#ece8df] rounded-lg shadow-xs flex items-center gap-1.5 font-sans text-[9px] tracking-wider text-[#827b72] font-semibold uppercase">
                        <MapPin size={10} />
                        <span>Taos, New Mexico</span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Highlight Banner */}
              <section className="bg-[#f4f2ea] border-y border-[#ece8df] py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="space-y-2">
                    <span className="font-serif text-3xl font-light text-[#827b72]">15+</span>
                    <h4 className="font-serif text-base font-semibold text-[#1a1917]">Years of Curatorial Practice</h4>
                    <p className="font-sans text-xs text-[#5e5850] leading-relaxed">
                      Leading exhibitions, research, and publications inside premier public galleries and American contemporary art museums.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-serif text-3xl font-light text-[#827b72]">4,700+</span>
                    <h4 className="font-serif text-base font-semibold text-[#1a1917]">Works Managed</h4>
                    <p className="font-sans text-xs text-[#5e5850] leading-relaxed">
                      Overseeing complex collections at the Harwood, bridging historic Southwest devotionals and mid-century avant-gardes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-serif text-3xl font-light text-[#827b72]">WAVE</span>
                    <h4 className="font-serif text-base font-semibold text-[#1a1917]">Public Art Direction</h4>
                    <p className="font-sans text-xs text-[#5e5850] leading-relaxed">
                      Pioneered national Light + Water + Sound public commissions, attracting 40k annual visitors to riverfront sites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Featured Curatorial Project Highlights */}
              <section className="px-6 max-w-7xl mx-auto space-y-12">
                <div className="border-b border-[#ece8df] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.25em] text-[#827b72] uppercase font-bold block mb-2">
                      Exhibition Focus
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1a1917] tracking-tight">
                      Featured Curatorial Projects
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveSection('curatorial')}
                    className="font-sans text-xs tracking-widest uppercase font-semibold text-[#1a1917] hover:text-[#827b72] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer focus:outline-none"
                    id="btn-view-all-projects"
                  >
                    <span>View All Projects</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredExhibitions.slice(0, 3).map((exhib) => (
                    <div
                      key={exhib.id}
                      onClick={() => setActiveSection('curatorial')}
                      className="group cursor-pointer bg-[#fcfbfa] border border-[#ece8df]/40 hover:border-[#827b72]/40 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                      id={`featured-card-${exhib.id}`}
                    >
                      <div className="aspect-video relative overflow-hidden bg-[#eae6dc]">
                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                          <ExhibitionVisual id={exhib.id} title={exhib.title} category={exhib.category} />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors" />
                        <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[9px] tracking-widest uppercase px-2.5 py-0.5 rounded-full font-sans font-semibold text-[#1a1917]">
                          {exhib.year}
                        </span>
                      </div>
                      <div className="p-6 space-y-3">
                        <span className="font-sans text-[9px] tracking-wider uppercase text-[#827b72] font-semibold block">
                          {exhib.category} Exhibition
                        </span>
                        <h4 className="font-serif text-lg text-[#1a1917] group-hover:text-[#827b72] transition-colors duration-300 leading-snug">
                          {exhib.title}
                        </h4>
                        <p className="font-sans text-xs text-[#5e5850] line-clamp-2 leading-relaxed">
                          {exhib.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mini Quotes Callout */}
              <section className="px-6 max-w-3xl mx-auto text-center space-y-6 pt-12">
                <Sparkles size={24} className="text-[#827b72] mx-auto opacity-60" />
                <p className="font-serif text-lg md:text-2xl text-[#1a1917] italic leading-relaxed">
                  "Curator Nicole Dial-Kay has staged a gorgeous, contemplative exhibition that allows the Southwest sun to become the primary medium."
                </p>
                <div className="flex items-center justify-center gap-1.5 font-sans text-xs tracking-wider uppercase font-semibold text-[#827b72]">
                  <span>Southwest Contemporary Review</span>
                  <span>•</span>
                  <button
                    onClick={() => setActiveSection('press')}
                    className="underline hover:text-[#1a1917] focus:outline-none cursor-pointer"
                    id="btn-callout-press"
                  >
                    Read Selected Press
                  </button>
                </div>
              </section>

            </motion.div>
          )}

          {activeSection === 'curatorial' && (
            <motion.div
              key="curatorial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
            >
              <Press />
            </motion.div>
          )}

          {activeSection === 'biography' && (
            <motion.div
              key="biography"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Biography />
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Elegant, Minimal Footer */}
      <footer className="bg-[#1a1917] text-white py-12 md:py-16 border-t border-black px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h4 className="font-serif text-lg tracking-widest uppercase font-semibold">
              Nicole Dial-Kay
            </h4>
            <p className="font-sans text-[10px] tracking-wider text-[#827b72] uppercase font-semibold">
              Curator of Exhibitions & Collections
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-sans text-[11px] tracking-widest uppercase font-semibold text-white/60">
            <button
              onClick={() => setActiveSection('curatorial')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              id="footer-nav-curatorial"
            >
              Curatorial
            </button>
            <button
              onClick={() => setActiveSection('writing')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              id="footer-nav-writing"
            >
              Writing
            </button>
            <button
              onClick={() => setActiveSection('press')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              id="footer-nav-press"
            >
              Press
            </button>
            <button
              onClick={() => setActiveSection('biography')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              id="footer-nav-biography"
            >
              Biography
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              id="footer-nav-contact"
            >
              Contact
            </button>
          </div>

          <div className="text-center md:text-right space-y-1 font-sans text-[10px] text-white/40 font-semibold tracking-wide">
            <p>© 2026 Nicole Dial-Kay. All Rights Reserved.</p>
            <p>Designed with generous Southwest negative space.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
