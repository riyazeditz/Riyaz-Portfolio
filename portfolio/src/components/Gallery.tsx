import { motion } from 'framer-motion';
import { gallery } from '../data/portfolio';

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">// BEHIND THE SCENES</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">On Site & Off Screen</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl">
          {gallery.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square w-full max-w-[350px] rounded-xl overflow-hidden glass group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs text-muted font-mono">{img.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
