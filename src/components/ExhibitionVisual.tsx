import React from 'react';
import { motion } from 'motion/react';
import { Compass, Eye, Maximize2, ShieldAlert } from 'lucide-react';

interface ExhibitionVisualProps {
  id: string;
  title: string;
  category: string;
  className?: string;
}

export default function ExhibitionVisual({ id, title, category, className = '' }: ExhibitionVisualProps) {
  // Render bespoke custom-designed visual frames depending on the exhibition ID.
  // This guarantees elegant, museum-grade, 100% relevant and NON-AI-generated visual graphics
  // that represent the real curatorial concepts.

  if (id === 'out-of-the-box') {
    return (
      <div className={`relative w-full h-full bg-[#f4f1ea] overflow-hidden flex flex-col justify-between p-6 select-none ${className}`}>
        {/* Subtle Agnes Martin-inspired minimalist hand-drawn grid background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, #827b72 1px, transparent 1px),
            linear-gradient(to bottom, #827b72 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }} />

        {/* abstract geometric layers of Taos Modernists */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-40 h-40">
            {/* Sand-colored textured block */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#eae3d2] rounded-xs border border-[#827b72]/10 mix-blend-multiply" />
            
            {/* Earthy ochre circle */}
            <div className="absolute top-6 left-6 w-28 h-28 rounded-full bg-[#dccca3]/70 mix-blend-multiply" />
            
            {/* Rust-red subtle geometric focal point */}
            <div className="absolute bottom-2 right-2 w-20 h-20 bg-[#c07a60]/50 rounded-xs mix-blend-multiply flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
            </div>
          </div>
        </div>

        {/* Minimalist Catalog Typography */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#827b72] uppercase font-semibold">
            CENTENNIAL 1923-2023
          </span>
          <span className="font-sans text-[8px] tracking-widest text-[#827b72]/60 uppercase">
            CATALOGUE VOL. I
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-sm font-medium tracking-tight text-[#1a1917] max-w-[80%] uppercase leading-tight mb-1">
            Out of the Box
          </h4>
          <p className="font-mono text-[8px] tracking-wider text-[#827b72] uppercase">
            Taos Modernism & Devotional Art
          </p>
        </div>
      </div>
    );
  }

  if (id === 'debbie-long') {
    return (
      <div className={`relative w-full h-full bg-[#1c1a17] overflow-hidden flex flex-col justify-between p-6 select-none ${className}`}>
        {/* Shifting radial sunlight glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.15, 0.3, 0.2, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
}}
            className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#e29578] via-[#e29578]/40 to-[#83c5be]/10 blur-2xl"
          />
        </div>

        {/* Hand-crafted wooden structure and glass optics mockup */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-36 h-36 border border-[#827b72]/20 rounded-full flex items-center justify-center bg-[#24221f]/40 backdrop-blur-xs">
            {/* Custom Blown-glass lens representation */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-28 h-28 rounded-full border border-dashed border-[#827b72]/40 p-2 flex items-center justify-center"
            >
              {/* Refracted color patterns */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f28482]/20 via-[#f7d1cd]/5 to-[#84a59d]/20 blur-xs" />
            </motion.div>
            <div className="absolute w-4 h-4 rounded-full bg-white/20 border border-white/40 shadow-inner" />
          </div>
        </div>

        {/* Somatic light-house headers */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#827b72] uppercase">
            SOLAR CHAMBER
          </span>
          <span className="font-sans text-[8px] tracking-widest text-[#827b72]/60 uppercase">
            GLASS OPTICS
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-sm font-medium tracking-widest text-white/90 uppercase leading-none mb-1">
            Light-House
          </h4>
          <p className="font-mono text-[8px] tracking-wider text-[#827b72] uppercase">
            Debbie Long site-specific install
          </p>
        </div>
      </div>
    );
  }

  if (id === 'gus-foster') {
    return (
      <div className={`relative w-full h-full bg-[#1a1917] overflow-hidden flex flex-col justify-between p-6 select-none ${className}`}>
        {/* Technical panoramic view finder grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, #827b72 1px, transparent 1px)
          `,
          backgroundSize: '10% 100%'
        }} />

        {/* Center horizontal view scale */}
        <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
          <div className="w-full h-[1px] bg-[#827b72]/20 relative">
            {/* Viewfinder tick marks */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex justify-between w-full px-2">
              {[0, 45, 90, 135, 180, 225, 270, 315, 360].map((deg) => (
                <div key={deg} className="flex flex-col items-center">
                  <div className="h-2 w-[1px] bg-[#827b72]/40" />
                  <span className="font-mono text-[7px] text-[#827b72]/60 mt-1">{deg}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Mountain Silhouette contour line */}
        <div className="absolute inset-x-0 bottom-12 h-20 opacity-30 pointer-events-none flex items-end">
          <svg className="w-full h-full text-[#827b72]" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,20 L15,12 L30,16 L45,6 L60,11 L75,3 L90,14 L100,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Coordinates and Camera tech info */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#827b72] uppercase">
            360° CONTINUOUS HORIZON
          </span>
          <span className="font-sans text-[8px] tracking-widest text-[#827b72]/60 uppercase">
            CIRKUT PANORAMIC 1940
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-sm font-medium tracking-tight text-white/90 uppercase leading-none mb-1">
            Plaza, Peaks, and Plains
          </h4>
          <p className="font-mono text-[8px] tracking-wider text-[#827b72] uppercase">
            Alpine Summit Retrospective
          </p>
        </div>
      </div>
    );
  }

  if (id === 'wave-festival') {
    return (
      <div className={`relative w-full h-full bg-[#0a0a0d] overflow-hidden flex flex-col justify-between p-6 select-none ${className}`}>
        {/* Shimmering, fluid neon light projections representing Blue River */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              x: [-10, 10, -10],
              y: [-15, 15, -15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-10 -left-10 w-80 h-80 bg-[#1d3557]/30 rounded-full blur-3xl mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [15, -15, 15],
              y: [10, -10, 10]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#457b9d]/20 rounded-full blur-3xl mix-blend-screen"
          />
        </div>

        {/* Digital Sinusoid Light Projections */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-24 text-[#83c5be]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q15,-2 30,10 T60,10 T90,10 T100,10" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M0,12 Q20,18 40,12 T80,12 T100,12" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Festival headers */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#827b72] uppercase">
            LIGHT + WATER + SOUND
          </span>
          <span className="font-sans text-[8px] tracking-widest text-[#827b72]/60 uppercase">
            CO PUBLIC ART
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-sm font-medium tracking-wider text-white/95 uppercase leading-none mb-1">
            WAVE FESTIVAL
          </h4>
          <p className="font-mono text-[8px] tracking-wider text-[#827b72] uppercase">
            Interactive Mountain Installations
          </p>
        </div>
      </div>
    );
  }

  if (id === 'in-dialogue-moderns') {
    return (
      <div className={`relative w-full h-full bg-[#f4f3ed] overflow-hidden flex flex-col justify-between p-6 select-none ${className}`}>
        {/* Dialogue composition: Left vs Right */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="w-1/2 h-full bg-[#1a1917]/5 relative border-r border-[#827b72]/15 flex items-center justify-center">
            {/* Mid-century pure geometry (Agnes Martin / Emil Bisttram circle) */}
            <div className="w-24 h-24 rounded-full border border-[#1a1917]/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-[#1a1917]/30" />
            </div>
            <span className="absolute bottom-4 left-4 font-mono text-[7px] text-[#827b72]/60 uppercase tracking-widest">
              HISTORIC MODERNS
            </span>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center relative">
            {/* Loose contemporary brush/line vector */}
            <div className="w-24 h-24 flex items-center justify-center">
              <svg className="w-16 h-16 text-[#827b72]/40" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2,18 C8,2 12,18 18,2" />
              </svg>
            </div>
            <span className="absolute bottom-4 right-4 font-mono text-[7px] text-[#827b72]/60 uppercase tracking-widest text-right">
              CONTEMPORARY RESPONSE
            </span>
          </div>
        </div>

        {/* dialogue labels */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#827b72] uppercase">
            ROTATING REINSTALLATIONS
          </span>
          <span className="font-sans text-[8px] tracking-widest text-[#827b72]/60 uppercase">
            TAOS MODERNISM
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-sm font-medium tracking-tight text-[#1a1917] uppercase leading-none mb-1">
            In Dialogue
          </h4>
          <p className="font-mono text-[8px] tracking-wider text-[#827b72] uppercase">
            Permanent Collections Reinstalled
          </p>
        </div>
      </div>
    );
  }

  // Fallback default minimalist card
  return (
    <div className={`w-full h-full bg-[#f4f2ea] border border-[#ece8df] flex flex-col justify-between p-6 select-none ${className}`}>
      <span className="font-mono text-[8px] tracking-widest text-[#827b72] uppercase">
        {category} PROJECT
      </span>
      <div className="my-auto">
        <h4 className="font-serif text-base font-medium text-[#1a1917] leading-tight mb-2">
          {title}
        </h4>
        <div className="w-8 h-[1px] bg-[#827b72] opacity-40" />
      </div>
      <span className="font-sans text-[8px] text-[#827b72]/60 tracking-wider">
        CURATORIAL FOLIO
      </span>
    </div>
  );
}
