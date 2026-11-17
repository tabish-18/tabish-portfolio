import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        state: 'error',
        message: 'Please resolve the highlighted fields before sending.',
      });
      return;
    }

    // Client-side validation succeeded.
    // As per instruction: Do not pretend a fake backend handled it. Provide direct mailto fallback or clear instructions.
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setStatus({
      state: 'success',
      message: 'Form validated successfully! You can launch your email client directly or connect a service like EmailJS / Formspree.',
      mailtoUrl: mailtoUrl,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090F1E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-slate-700/40 text-xs font-semibold tracking-widest uppercase text-electric-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING TOGETHER
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-600 to-electric-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? Feel free to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/85 border border-slate-700/35 shadow-card space-y-6">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                I am actively open to discussing developer roles, frontend engineering projects, and full-stack opportunities.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-900 border border-slate-700/30 hover:border-electric-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-600/15 border border-electric-400/20 flex items-center justify-center text-electric-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-muted">Email</span>
                    <p className="text-sm font-medium text-white group-hover:text-electric-400 transition-colors break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-900 border border-slate-700/30 hover:border-electric-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-600/15 border border-electric-400/20 flex items-center justify-center text-electric-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-muted">Phone</span>
                    <p className="text-sm font-medium text-white group-hover:text-electric-400 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-900 border border-slate-700/30 hover:border-electric-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#60A5FA] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-muted">LinkedIn</span>
                    <p className="text-sm font-medium text-white group-hover:text-electric-400 transition-colors flex items-center gap-1">
                      <span>linkedin.com/in/pirzada-tabish</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900/80 border border-slate-700/30">
                  <div className="w-10 h-10 rounded-lg bg-electric-600/15 border border-electric-400/20 flex items-center justify-center text-electric-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-muted">Location</span>
                    <p className="text-sm font-medium text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/85 border border-slate-700/35 shadow-card">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-muted mb-1.5">
                      Your Name <span className="text-electric-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-white placeholder-slate-500 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-700/60 focus:border-electric-400'
                      } text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-muted mb-1.5">
                      Your Email <span className="text-electric-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-white placeholder-slate-500 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-700/60 focus:border-electric-400'
                      } text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-muted mb-1.5">
                    Subject <span className="text-electric-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Developer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-white placeholder-slate-500 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-700/60 focus:border-electric-400'
                    } text-sm focus:outline-none transition-colors`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-muted mb-1.5">
                    Message <span className="text-electric-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirement..."
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-white placeholder-slate-500 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-700/60 focus:border-electric-400'
                    } text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-electric-600 to-blue-600 hover:from-electric-500 hover:to-blue-500 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Status Alert Notification */}
              <AnimatePresence>
                {status.state === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 rounded-xl bg-navy-900 border border-electric-400/40 text-xs sm:text-sm text-slate-200 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Form validated! Ready to send.</span>
                    </div>
                    <p className="text-xs text-slate-muted leading-relaxed">
                      To send immediately with your pre-filled inquiry, click the mail button below, or integrate an SMTP backend / EmailJS endpoint.
                    </p>
                    {status.mailtoUrl && (
                      <a
                        href={status.mailtoUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-600 hover:bg-electric-500 text-white text-xs font-semibold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Technical Note */}
              <div className="mt-6 pt-4 border-t border-slate-700/30 flex items-start gap-2 text-[11px] text-slate-muted">
                <Info className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                <span>
                  Backend integration note: The form performs strict client validation and is structured to connect with EmailJS, Formspree, or a custom Express/Next.js SMTP endpoint.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

