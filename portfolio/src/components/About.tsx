import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { profile, strengths, languages, education } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow mb-3"
        >
          // ABOUT
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl font-bold mb-12"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-muted leading-relaxed mb-6">{profile.objective}</p>

            <h3 className="font-display font-semibold mb-3 text-white">Strengths</h3>
            <ul className="space-y-2 mb-6">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-muted text-sm">
                  <FiCheckCircle className="text-signal mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="font-display font-semibold mb-3 text-white">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span
                  key={l}
                  className="px-3 py-1 rounded-full text-xs font-mono glass text-muted"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="font-display font-semibold mb-6 text-white">Education</h3>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {education.map((ed) => (
                <div key={ed.id} className="relative">
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-signal shadow-glow-sm" />
                  <p className="font-mono text-xs text-signal mb-1">{ed.period}</p>
                  <h4 className="font-display font-semibold text-white">{ed.degree}</h4>
                  <p className="text-muted text-sm">{ed.school}</p>
                  <p className="text-muted text-sm">{ed.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
