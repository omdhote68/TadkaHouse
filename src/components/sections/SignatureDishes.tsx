import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { SIGNATURE_DISHES } from '../../data/content';

export default function SignatureDishes() {
  return (
    <section className="relative py-24 md:py-32 section-pad overflow-hidden">
      <div className="text-center mb-16">
        <Reveal>
          <p className="eyebrow mb-4">Chef's Selection</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-lg">
            Signature <span className="gold-text italic">Dishes</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted max-w-xl mx-auto mt-4">
            Each plate tells a story of tradition, craft, and the bold flavours that define us.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SIGNATURE_DISHES.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="relative h-[420px] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-base via-ink-base/40 to-transparent" />

              {/* Tag */}
              <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full glass text-white/80 font-medium">
                {dish.tag}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="overflow-hidden">
                  <motion.h3 className="font-display text-2xl text-white mb-2">
                    {dish.name}
                  </motion.h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {dish.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-gold">{dish.price}</span>
                  <span className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-ink-base transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Reveal>
          <Link to="/menu" className="btn-outline">
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
