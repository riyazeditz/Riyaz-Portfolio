import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// PROJECTS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Things I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden hover:border-signal/50 transition-colors"
            >
              <div className="h-44 bg-gradient-to-br from-panel to-panel2 flex items-center justify-center relative overflow-hidden">
                <FiCpu className="text-6xl text-signal/40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,45,85,0.18),transparent_60%)]" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-muted flex gap-2">
                      <span className="text-signal">▸</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-signal transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-signal transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
