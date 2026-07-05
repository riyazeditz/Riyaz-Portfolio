import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// CERTIFICATIONS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Certifications & Visits</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 flex flex-col hover:border-signal/40 transition-colors"
            >
              <FiAward className="text-signal text-2xl mb-4" />
              <h3 className="font-display font-semibold mb-1 leading-snug">{cert.name}</h3>
              <p className="text-muted text-sm mb-1">{cert.org}</p>
              <p className="font-mono text-xs text-signal mb-4">{cert.date}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white hover:text-signal transition-colors"
                >
                  Verify <FiExternalLink />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
