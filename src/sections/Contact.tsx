import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // List of known disposable / temporary email domains
  const DISPOSABLE_EMAIL_DOMAINS = new Set([
    '10minutemail.com', '10minutemail.net', '10minutemailbox.com', '20minutemail.com',
    'tempmail.com', 'temp-mail.org', 'temp-mail.io', 'tempmail.net', 'tempmailo.com', 'tempail.com',
    'dispostable.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.biz', 'guerrillamail.org',
    'guerrillamail.de', 'guerrillamailblock.com', 'sharklasers.com', 'grr.la', 'pokemail.net', 'spam4.me',
    'mailinator.com', 'mailinator2.com', 'mailin8r.com', 'notmailinator.com', 'suremail.info',
    'yopmail.com', 'yopmail.net', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf', 'nospam.ze.tc',
    'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf', 'moncourrier.fr.nf', 'monemail.fr.nf',
    'trashmail.com', 'trashmail.net', 'trashmail.me', 'trashmail.io', 'rcpt.at', 'curryrasen.de',
    'fakeinbox.com', 'getairmail.com', 'throwawaymail.com', 'throwaway.email', 'getnada.com',
    'abcvg.com', 'boximail.com', 'mohmal.com', 'emailondeck.com', 'crazymailing.com',
    'maildrop.cc', 'inboxkitten.com', 'mytemp.email', 'generator.email', 'tempinbox.com',
    'burnermail.io', 'dropmail.me', 'fakemailgenerator.com', 'harakirimail.com', 'tmail.ws',
    'discard.email', 'discardmail.com', 'spambog.com', 'tempmailaddress.com', 'mytempemail.com',
    'mailcatch.com', 'eyepaste.com', 'mytempmail.org', 'zillamail.com', 'dayrep.com', 'teleworm.us',
    'armyspy.com', 'cuvox.de', 'fleckens.hu', 'gustr.com', 'jourrapide.com', 'rhyta.com',
    'superrito.com', 'einrot.com', 'chacuo.net', 'zoemail.org', 'inboxalias.com', 'trash-mail.at',
    'wegwerfmail.de', 'binkmail.com', 'safetymail.info', 'spamfree24.org', 'deadaddress.com'
  ]);

  const DUMMY_DOMAINS = new Set([
    'test.com', 'example.com', 'example.org', 'sample.com', 'domain.com', 'foo.com', 'bar.com',
    'asdf.com', 'fake.com', 'dummy.com', 'none.com', 'nowhere.com', 'invalid.com', 'mail.com'
  ]);

  const validateEmail = (emailStr: string): string | null => {
    const trimmed = emailStr.trim().toLowerCase();
    if (!trimmed) return 'Email address is required';

    // Strict RFC-compliant regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid, complete email address (e.g. yourname@gmail.com)';
    }

    const parts = trimmed.split('@');
    if (parts.length !== 2) return 'Invalid email structure';
    const [local, domain] = parts;

    if (local.length < 2) return 'Email username is too short';
    if (!domain.includes('.')) return 'Email domain must include an extension (e.g. .com, .edu)';

    const tld = domain.split('.').pop() || '';
    if (tld.length < 2) return 'Invalid domain extension';

    // Check disposable domain blacklist
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      return 'Temporary / disposable emails are not allowed. Please use your genuine personal, university, or work email.';
    }

    // Check dummy / placeholder domains
    if (DUMMY_DOMAINS.has(domain)) {
      return 'Please provide an active, genuine email address.';
    }

    // Check heuristic patterns for disposable mail
    const disposableKeyword = /(temp[-_]?mail|dispos(able|e)|throwaway|trash[-_]?mail|fake[-_]?mail|fake[-_]?inbox|guerrilla|mailinator|10minute|20minute|burner[-_]?mail|spambox|mohmal|yopmail|generator[-_]?email|anonym(ous)?[-_]?mail)/i;
    if (disposableKeyword.test(domain)) {
      return 'Temporary / disposable emails are blocked. Please use an active, genuine email address.';
    }

    return null;
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Your name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please enter a valid name (at least 2 characters)';
    }

    const emailError = validateEmail(formData.email);
    if (emailError) errs.email = emailError;

    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a descriptive message (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Send real email via formsubmit.co directly to sharvilpawar123@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${portfolioData.personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        fallbackMailto();
      }
    } catch {
      fallbackMailto();
    } finally {
      setLoading(false);
    }
  };

  const fallbackMailto = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Sharvil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const emailSubject = encodeURIComponent("Project Inquiry - Sharvil Pawar");
  const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${emailSubject}`;
  const webGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${emailSubject}`;

  const handleEmailAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Detect mobile devices (Android / iOS)
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // On mobile, native mailto: opens Gmail app compose directly with:
      // From: [sender's active account]
      // To: sharvilpawar123@gmail.com
      // Subject: Project Inquiry - Sharvil Pawar
      return;
    }
    // On desktop, open Gmail Web compose in a new browser tab
    e.preventDefault();
    window.open(webGmailLink, '_blank', 'noopener,noreferrer');
  };

  const socials = [
    { icon: Linkedin, label: 'LINKEDIN', sub: 'PRIMARY PROFESSIONAL', url: portfolioData.socials.linkedin.url },
    { icon: Github, label: 'GITHUB', sub: 'CODE & REPOSITORIES', url: portfolioData.socials.github.url },
    { icon: Instagram, label: 'INSTAGRAM', sub: 'PERSONAL', url: portfolioData.socials.instagram.url },
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#f8fafc] dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f97316]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          label="CONTACT"
          title="LET'S CONNECT"
          subtitle="Have an opportunity, AI project, research collaboration, or question? Send a message directly to my inbox."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white leading-tight mb-4">
                LET'S BUILD <br /><span className="text-[#f97316]">SOMETHING</span><br />INTELLIGENT.
              </h3>
              <p className="font-sans text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed max-w-lg font-normal">
                Whether you want to discuss AI models, full-stack architectures, student collaborations, or internships, my inbox is always open.
              </p>
            </div>

            {/* Direct Email Card — Single unified action opening Gmail */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] shadow-sm dark:shadow-none space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#475569] dark:text-[#888] uppercase tracking-wider">
                  DIRECT EMAIL INBOX
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Inbox Active" />
              </div>

              {/* One clean clickable Email Box that opens Gmail directly */}
              <a
                href={mailtoLink}
                onClick={handleEmailAction}
                className="group/mail flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#cbd5e1] dark:border-[#272727] hover:border-[#f97316] transition-all cursor-pointer"
                title="Click to compose email to Sharvil Pawar"
                data-cursor
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#f97316]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#0f172a] dark:text-white group-hover/mail:text-[#f97316] transition-colors truncate">
                    {portfolioData.personal.email}
                  </span>
                </div>
                <span className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#f97316] text-black font-mono text-xs font-bold tracking-wider group-hover/mail:bg-[#ea6c0a] transition-all shadow-sm shrink-0 w-full sm:w-auto">
                  OPEN GMAIL ↗
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              {socials.map(({ icon: Icon, label, sub, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 transition-all flex items-center justify-between group shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f8fafc] dark:bg-[#1a1a1a] flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white">{label}</h4>
                      <span className="font-mono text-[10px] text-[#475569] dark:text-[#555555] font-medium">{sub}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#475569] dark:text-[#555555] group-hover:text-[#f97316] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] shadow-sm dark:shadow-none"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e2e8f0] dark:border-[#1f1f1f]">
              <h4 className="font-mono text-sm font-bold text-[#0f172a] dark:text-white tracking-wider uppercase flex items-center gap-2">
                <Send className="w-4 h-4 text-[#f97316]" /> SEND A MESSAGE
              </h4>
              <span className="font-mono text-[10px] text-[#ea580c] dark:text-[#f97316] font-semibold bg-[#f97316]/10 px-2.5 py-1 rounded-full border border-[#f97316]/25">
                DELIVERS TO INBOX
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#f97316]/40 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#f97316]/15 border border-[#f97316] flex items-center justify-center text-[#f97316] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="font-display text-xl font-bold text-[#0f172a] dark:text-white">
                  MESSAGE TRANSMITTED!
                </h5>
                <p className="font-sans text-xs sm:text-sm text-[#334155] dark:text-[#a3a3a3] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Your message has been sent to{' '}
                  <span className="text-[#f97316] font-semibold font-mono">{portfolioData.personal.email}</span>.
                  I will review and get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#f1f5f9] dark:bg-[#222] border border-[#cbd5e1] dark:border-[#333] text-xs font-mono text-[#0f172a] dark:text-white hover:border-[#f97316] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-[#475569] dark:text-[#777] mb-2 uppercase font-medium">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sharvil Pawar"
                    className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] dark:bg-[#0d0d0d] border ${
                      errors.name ? 'border-red-400' : 'border-[#cbd5e1] dark:border-[#272727]'
                    } text-[#0f172a] dark:text-white placeholder-[#94a3b8] dark:placeholder-[#444] focus:outline-none focus:border-[#f97316] transition-colors font-sans text-sm`}
                  />
                  {errors.name && <p className="font-mono text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="email" className="block font-mono text-xs text-[#475569] dark:text-[#777] uppercase font-medium">
                      YOUR EMAIL *
                    </label>
                    <span className="font-mono text-[10px] text-[#475569] dark:text-[#777]">
                      Genuine address required (temp emails blocked)
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@gmail.com / name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] dark:bg-[#0d0d0d] border ${
                      errors.email ? 'border-red-400' : 'border-[#cbd5e1] dark:border-[#272727]'
                    } text-[#0f172a] dark:text-white placeholder-[#94a3b8] dark:placeholder-[#444] focus:outline-none focus:border-[#f97316] transition-colors font-sans text-sm`}
                  />
                  {errors.email && <p className="font-mono text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-[#475569] dark:text-[#777] mb-2 uppercase font-medium">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sharvil, I'd like to talk about an AI project / internship..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] dark:bg-[#0d0d0d] border ${
                      errors.message ? 'border-red-400' : 'border-[#cbd5e1] dark:border-[#272727]'
                    } text-[#0f172a] dark:text-white placeholder-[#94a3b8] dark:placeholder-[#444] focus:outline-none focus:border-[#f97316] transition-colors font-sans text-sm resize-none`}
                  />
                  {errors.message && <p className="font-mono text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-cursor
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#f97316] text-black font-mono text-xs font-bold tracking-wider hover:bg-[#ea6c0a] transition-all shadow-orange-glow cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND TO SHARVILPAWAR123@GMAIL.COM →</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
