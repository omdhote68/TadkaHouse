import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, MapPin } from 'lucide-react';
import { RESTAURANT } from '../../data/content';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg"
          alt="Tadka House restaurant ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-base/70 via-ink-base/60 to-ink-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-base/80 via-transparent to-ink-base/40" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-gold/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-[8%] w-40 h-40 rounded-full bg-copper/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center section-pad"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="flex items-center gap-1.5 glass px-4 py-2 rounded-full text-sm">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-gold font-medium">{RESTAURANT.rating}</span>
            <span className="text-white/50">·</span>
            <span className="text-white/70">{RESTAURANT.reviewCount} Reviews</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 glass px-4 py-2 rounded-full text-sm text-white/70">
            <MapPin className="w-4 h-4 text-gold" />
            Nagpur
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow mb-6"
        >
          Family Garden Restaurant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="heading-xl max-w-5xl mb-6"
        >
          Where Every Meal
          <br />
          Becomes A <span className="gold-text italic">Celebration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed"
        >
          {RESTAURANT.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/reservations" className="btn-gold w-full sm:w-auto">
            Reserve Table
          </Link>
          <Link to="/menu" className="btn-outline w-full sm:w-auto">
            Explore Menu
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-luxe">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
