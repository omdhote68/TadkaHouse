import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { REVIEWS, RESTAURANT } from '../data/content';

export default function Reviews() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={<>What Our <span className="gold-text italic">Guests Say</span></>}
        subtitle={`Rated ${RESTAURANT.rating} stars by ${RESTAURANT.reviewCount} happy guests on Google.`}
      />

      {/* Rating summary */}
      <section className="py-12 section-pad">
        <Reveal>
          <div className="glass-card p-10 md:p-16 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div>
                <p className="font-display text-7xl md:text-8xl text-gold mb-2">{RESTAURANT.rating}</p>
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <div className="h-20 w-px bg-white/10" />
              <div className="text-left">
                <p className="font-display text-4xl text-white mb-1">{RESTAURANT.reviewCount}</p>
                <p className="text-muted text-sm">Google Reviews</p>
              </div>
            </div>
            <a
              href={RESTAURANT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Read on Google
            </a>
          </div>
        </Reveal>
      </section>

      {/* Reviews grid */}
      <section className="py-12 md:py-20 section-pad">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              className="glass-card p-8 hover:border-gold/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-white/80 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="font-medium text-white">{review.name}</p>
                  <p className="text-sm text-muted">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
