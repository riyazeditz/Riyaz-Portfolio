import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { profile } from '../data/portfolio';

const ROLES = ['Video Editor','Graphic Designer','AI / ML Engineer', 'NLP & Computer Vision', 'Creative Developer', 'UI / UX Designer'];

function useTypingEffect(words: string[], speed = 70, pause = 1500) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Particles() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-signal/60"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(ROLES);

  return (
    <section id="top" className="relative min-h-screen flex items-center grid-bg overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void -z-20" />
      <Particles />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-4">// Open to work </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <div className="h-9 mb-5">
            <span className="font-mono text-signal text-lg sm:text-xl">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-signal ml-1 animate-pulseGlow align-middle" />
          </div>
          <p className="text-muted max-w-md mb-8 leading-relaxed">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href={profile.resumeFile}
              download
              className="magnetic-btn flex items-center gap-2 px-6 py-3 rounded-full bg-signal text-white font-medium hover:shadow-glow hover:-translate-y-0.5"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="magnetic-btn flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-medium hover:border-signal hover:text-signal"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 text-xl text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-signal transition-colors">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 sm:w-80 lg:w-96">
            <div className="relative rounded-3xl overflow-hidden glass">
              <img
                src={profile.heroImage}
                alt={profile.name}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-signal/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-signal flex flex-col items-center gap-1"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <FiChevronDown />
      </motion.a>
    </section>
  );
}
