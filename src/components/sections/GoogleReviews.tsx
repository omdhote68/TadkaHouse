import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../Reveal';
import { REVIEWS, RESTAURANT } from '../../data/content';

export default function GoogleReviews() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [auto]);

  const next = () => {
    setAuto(false);
    setActive((p) => (p + 1) % REVIEWS.length);
  };
  const prev = () => {
    setAuto(false);
    setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="relative py-24 md:py-32 section-pad overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-16 relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6">
            <span className="font-display text-lg font-bold text-white">G</span>
            <span className="text-white/60 text-sm">Google Reviews</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-display text-6xl md:text-7xl text-gold">{RESTAURANT.rating}</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-muted text-sm mt-1">{RESTAURANT.reviewCount} Reviews</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="heading-lg">
            Loved by <span className="gold-text italic">Thousands</span>
          </h2>
        </Reveal>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative h-[280px] md:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-display italic">
                "{REVIEWS[active].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{REVIEWS[active].name}</p>
                  <p className="text-sm text-muted">{REVIEWS[active].date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(REVIEWS[active].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAuto(false); setActive(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
