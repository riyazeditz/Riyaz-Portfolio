import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { achievements } from '../data/portfolio';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-signal">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// ACHIEVEMENTS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Milestones</h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 text-center">
            <Counter to={12000} suffix="+" />
            <p className="text-muted text-sm mt-2 font-mono">₹ earned in retail sales</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <Counter to={3} />
            <p className="text-muted text-sm mt-2 font-mono">Certifications earned</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <Counter to={2} />
            <p className="text-muted text-sm mt-2 font-mono">AI chatbots shipped</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <FiStar className="text-signal text-xl mb-3" />
              <h3 className="font-display font-semibold mb-2">{a.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
