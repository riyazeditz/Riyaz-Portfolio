import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi';
import { profile } from '../data/portfolio';

// Set these up at https://www.emailjs.com and drop the IDs in a .env file
// (see .env.example) if you'd rather have messages land in your inbox.
// Until then — or any time it fails — the form falls back to WhatsApp
// automatically, so a message always reaches you.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'sent-whatsapp';

function openWhatsApp(name: string, email: string, message: string) {
  const text = `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
  const url = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('user_name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('user_email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // No EmailJS credentials configured — go straight to WhatsApp.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      openWhatsApp(name, email, message);
      setStatus('sent-whatsapp');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('sent');
      form.reset();
    } catch (err) {
      // Email failed for some reason — still get the message through via WhatsApp.
      console.error(err);
      openWhatsApp(name, email, message);
      setStatus('sent-whatsapp');
      form.reset();
    }
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// CONTACT</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Let's Build Something</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-1 gap-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-signal/40 transition-colors"
              >
                <FiMail className="text-signal text-xl" />
                <span className="text-sm">{profile.email}</span>
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-signal/40 transition-colors"
              >
                <FiMessageCircle className="text-signal text-xl" />
                <span className="text-sm">Chat on WhatsApp — {profile.phone}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-signal/40 transition-colors"
              >
                <FiPhone className="text-signal text-xl" />
                <span className="text-sm">{profile.phone}</span>
              </a>
              <div className="glass rounded-2xl p-5 flex items-center gap-4">
                <FiMapPin className="text-signal text-xl" />
                <span className="text-sm">{profile.location}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass h-64">
              <iframe
                title="Location map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Vandalur,Chennai,Tamil+Nadu&output=embed"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                required
                className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm outline-none border border-white/10 focus:border-signal transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                required
                className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm outline-none border border-white/10 focus:border-signal transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm outline-none border border-white/10 focus:border-signal transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="magnetic-btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-signal text-white font-medium hover:shadow-glow disabled:opacity-60"
            >
              <FiSend />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-center text-green-400">Message sent — thank you! I'll reply soon.</p>
            )}
            {status === 'sent-whatsapp' && (
              <p className="text-sm text-center text-green-400">
                Opening WhatsApp with your message — hit send there and I'll reply soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

