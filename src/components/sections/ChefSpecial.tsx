import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import Reveal from '../Reveal';
import { SIGNATURE_DISHES } from '../../data/content';

export default function ChefSpecial() {
  const dish = SIGNATURE_DISHES[0]; // Paneer Angara

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-ink-section">
      <div className="section-pad">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-5 h-5 text-gold" />
                <p className="eyebrow">Chef's Special</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mb-6">
                The Signature
                <br />
                <span className="gold-text italic">Paneer Angara</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Our most beloved creation. Charcoal-grilled paneer, kissed by smoke and
                simmered in a rich, fiery gravy that balances heat with depth. It is the
                dish that defines Tadka House — bold, unforgettable, and crafted to be
                shared.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">Price</p>
                  <p className="font-display text-3xl text-gold">{dish.price}</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">Category</p>
                  <p className="font-display text-xl text-white">{dish.tag}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <Reveal>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl overflow-hidden"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-section/60 to-transparent" />
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-3xl border border-gold/20 -z-10" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
