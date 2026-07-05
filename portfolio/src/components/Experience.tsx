import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow mb-3">// EXPERIENCE</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Where I've Worked</h2>

        <div className="relative pl-8 border-l border-white/10 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full glass flex items-center justify-center text-signal text-xs">
                <FiBriefcase />
              </span>
              <p className="font-mono text-xs text-signal mb-1">{exp.period}</p>
              <h3 className="font-display text-lg font-semibold">
                {exp.role} <span className="text-muted font-normal">· {exp.org}</span>
              </h3>
              <p className="text-muted text-sm mb-3">{exp.location}</p>
              <ul className="space-y-1.5">
                {exp.points.map((p) => (
                  <li key={p} className="text-sm text-muted flex gap-2">
                    <span className="text-signal">▸</span> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
