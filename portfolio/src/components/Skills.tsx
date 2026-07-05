import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiPenTool,
  FiUsers,
} from 'react-icons/fi';
import { skills } from '../data/portfolio';

const categoryIcons: Record<string, ReactNode> = {
  Programming: <FiCode />,
  'AI / ML': <FiCpu />,
  Database: <FiDatabase />,
  Design: <FiPenTool />,
  'Soft Skills': <FiUsers />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// SKILLS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">What I Work With</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 hover:border-signal/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-signal text-xl">{categoryIcons[category]}</span>
                <h3 className="font-display font-semibold">{category}</h3>
              </div>

              <div className="space-y-4">
                {list.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-mono text-muted mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-signal to-signalglow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
