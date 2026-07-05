import { motion } from 'framer-motion';
import {
  FiCpu,
  FiCode,
  FiTerminal,
  FiPenTool,
  FiRepeat,
  FiActivity,
} from 'react-icons/fi';
import { services } from '../data/portfolio';

const icons = [
  <FiCpu />, <FiCode />, <FiTerminal />, <FiPenTool />, <FiRepeat />, <FiActivity />,
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// SERVICES</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">What I Can Offer</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(255,45,85,0.5)' }}
              className="glass rounded-2xl p-6 border border-transparent"
            >
              <span className="text-signal text-2xl mb-4 inline-block">{icons[idx % icons.length]}</span>
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
