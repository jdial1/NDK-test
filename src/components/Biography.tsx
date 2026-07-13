import React from 'react';
import { motion } from 'motion/react';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { bioSummary, experienceData, educationData, IMAGES } from '../data';

export default function Biography() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-[#ece8df] pb-8 mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase block mb-3 font-semibold">
            Section 04 / Curriculum Vitae
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1917] tracking-tight">
            Biography & Experience
          </h2>
        </div>

        {/* Narrative & Portrait Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#ece8df]/60 mb-20">
          {/* Portrait headshot in elegant editorial frame */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-3 bg-white border border-[#ece8df] rounded-2xl shadow-sm max-w-md mx-auto lg:mx-0"
            >
              <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#eae6dc]">
                <img
                  src={IMAGES.portraitLinkedIn}
                  alt="Nicole Dial-Kay"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-[1.02] grayscale-[10%]"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg text-[#1a1917] tracking-wide font-medium">
                  Nicole Dial-Kay
                </h3>
                <p className="font-sans text-xs tracking-wider text-[#827b72] uppercase mt-0.5 font-semibold">
                  Taos, New Mexico Headshot
                </p>
              </div>
            </motion.div>
          </div>

          {/* Narrative Biography text */}
          <div className="lg:col-span-7 space-y-6 text-[#1a1917]">
            <span className="font-sans text-[10px] tracking-[0.25em] text-[#827b72] uppercase block font-semibold">
              Curator Statement
            </span>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-snug">
              Investigating localized abstraction, somatic experiences of light, and regional Southwestern art histories.
            </h3>
            
            <div className="space-y-6 pt-4 border-t border-[#ece8df]/60">
              {bioSummary.split('\n\n').map((para, idx) => (
                <p key={idx} className="font-sans text-sm md:text-base text-[#5e5850] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => alert('Nicole Dial-Kay CV PDF download started (Simulated).')}
                className="inline-flex items-center gap-2 bg-[#1a1917] hover:bg-[#827b72] text-white font-sans text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-lg transition-colors focus:outline-none cursor-pointer"
                id="btn-download-cv"
              >
                <Download size={13} />
                <span>Download Full CV (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Education & Credentials */}
          <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-24">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] tracking-tight mb-6 flex items-center gap-2">
                <GraduationCap className="text-[#827b72]" size={22} />
                <span>Education</span>
              </h3>
              <div className="space-y-6 border-l border-[#ece8df] pl-6 ml-2">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#827b72] border-2 border-[#faf9f5]" />
                    <h4 className="font-serif text-base text-[#1a1917] leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-[#827b72] mt-1 uppercase tracking-wider">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] font-sans text-[#5e5850]">
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.details && (
                      <p className="font-sans text-xs text-[#5e5850] leading-relaxed mt-2 italic">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#ece8df]">
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] tracking-tight mb-4 flex items-center gap-2">
                <Award className="text-[#827b72]" size={22} />
                <span>Core Expertise</span>
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Contemporary Art Exhibition Curating',
                  'Museum Collection Management & Stewardship',
                  'Fostering Dialogues Across Diverse Artistic Eras',
                  'Somatic & Public Art Program Development',
                  'Scholarly Catalog & Grant Writing',
                  'Donor, Board, and Collector Relations'
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#5e5850] font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#827b72]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-8">
            <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] tracking-tight mb-8 flex items-center gap-2">
              <Briefcase className="text-[#827b72]" size={22} />
              <span>Professional Timeline</span>
            </h3>
            
            <div className="space-y-12 border-l border-[#ece8df] pl-8 ml-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group" id={`timeline-item-${exp.id}`}>
                  {/* Bullet */}
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#827b72] group-hover:bg-[#1a1917] group-hover:border-[#1a1917] transition-colors duration-300 flex items-center justify-center font-sans text-[8px] font-bold text-[#827b72] group-hover:text-white shrink-0">
                    {exp.logoText}
                  </span>

                  <div className="space-y-2">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{exp.duration}</span>
                    </span>

                    <h4 className="font-serif text-lg md:text-xl text-[#1a1917] group-hover:text-[#827b72] transition-colors duration-300 leading-tight">
                      {exp.role}
                    </h4>

                    <p className="font-sans text-xs font-semibold text-[#5e5850] tracking-wide flex items-center gap-1.5">
                      <span>{exp.institution}</span>
                      <span className="text-[#ece8df]">•</span>
                      <span className="text-[#827b72] flex items-center gap-0.5">
                        <MapPin size={10} />
                        {exp.location}
                      </span>
                    </p>

                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="space-y-2 pt-3">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#5e5850] leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-[#827b72]/60 shrink-0 mt-1.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
