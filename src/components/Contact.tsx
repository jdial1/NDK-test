import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { contactDetails } from '../data';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 1200);
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf9f5] border-t border-[#ece8df]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#827b72] uppercase block mb-3 font-semibold">
                Section 05 / Inquiry
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1a1917] tracking-tight">
                Get in Touch
              </h2>
              <p className="font-sans text-sm md:text-base text-[#5e5850] mt-4 leading-relaxed">
                If you are interested in curatorial collaborations, speaking engagements, artist submissions, or portfolio reviews, please feel free to send a message.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#ece8df]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#ece8df] rounded-xl text-[#827b72]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold">
                    Personal Email
                  </h4>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-serif text-base text-[#1a1917] hover:text-[#827b72] transition-colors mt-0.5 block"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#ece8df] rounded-xl text-[#827b72]">
                  <Globe size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold">
                    Museum Affiliation
                  </h4>
                  <a
                    href={contactDetails.harwoodUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-base text-[#1a1917] hover:text-[#827b72] transition-colors mt-0.5 block"
                  >
                    Harwood Museum of Art
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#ece8df] rounded-xl text-[#827b72]">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold">
                    LinkedIn
                  </h4>
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-base text-[#1a1917] hover:text-[#827b72] transition-colors mt-0.5 block break-all"
                  >
                    linkedin.com/in/nicole-dial-kay
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#ece8df] rounded-xl text-[#827b72]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold">
                    Location
                  </h4>
                  <p className="font-serif text-base text-[#1a1917] mt-0.5">
                    Taos, New Mexico, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#ece8df] p-8 md:p-10 rounded-2xl shadow-xs">
            <h3 className="font-serif text-xl md:text-2xl text-[#1a1917] tracking-tight mb-6">
              Send a Direct Message
            </h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center flex flex-col items-center space-y-4"
                  id="contact-success-msg"
                >
                  <CheckCircle2 size={48} className="text-[#827b72] animate-bounce" />
                  <h4 className="font-serif text-xl text-[#1a1917] tracking-tight font-medium">
                    Message Sent Successfully
                  </h4>
                  <p className="font-sans text-xs text-[#5e5850] max-w-sm leading-relaxed">
                    Thank you for reaching out. Nicole Dial-Kay will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 border border-[#ece8df] hover:border-[#827b72] text-[#827b72] hover:text-[#1a1917] font-sans text-xs font-semibold tracking-widest uppercase rounded-lg transition-colors focus:outline-none cursor-pointer"
                    id="btn-send-another"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g., Emily Carter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#faf9f5] border border-[#ece8df] rounded-lg px-4 py-3 font-sans text-xs text-[#1a1917] focus:outline-none focus:border-[#827b72] focus:bg-white transition-all placeholder:text-[#827b72]/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g., emily@gallery.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#faf9f5] border border-[#ece8df] rounded-lg px-4 py-3 font-sans text-xs text-[#1a1917] focus:outline-none focus:border-[#827b72] focus:bg-white transition-all placeholder:text-[#827b72]/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold block">
                      Organization / Affiliation
                    </label>
                    <input
                      type="text"
                      id="organization"
                      placeholder="e.g., Mountain Contemporary Museum"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#faf9f5] border border-[#ece8df] rounded-lg px-4 py-3 font-sans text-xs text-[#1a1917] focus:outline-none focus:border-[#827b72] focus:bg-white transition-all placeholder:text-[#827b72]/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-[10px] tracking-widest uppercase text-[#827b72] font-semibold block">
                      Message / Inquiry *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, exhibition concept, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#faf9f5] border border-[#ece8df] rounded-lg px-4 py-3 font-sans text-xs text-[#1a1917] focus:outline-none focus:border-[#827b72] focus:bg-white transition-all placeholder:text-[#827b72]/40 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#1a1917] hover:bg-[#827b72] disabled:bg-[#827b72]/60 text-white font-sans text-xs font-semibold tracking-widest uppercase py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                      id="btn-submit-form"
                    >
                      {status === 'submitting' ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
