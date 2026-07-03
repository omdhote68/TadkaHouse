import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32 section-pad overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <Reveal>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Tadka House interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-base/50 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 glass-card p-6 max-w-[200px] hidden md:block"
            >
              <p className="font-display text-4xl text-gold mb-1">15+</p>
              <p className="text-sm text-muted">Years of warm hospitality in Nagpur</p>
            </motion.div>
          </div>
        </Reveal>

        {/* Text side */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-lg mb-6">
              A Garden of <span className="gold-text italic">Flavours</span>
              <br />
              in the Heart of Nagpur
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Tadka House was born from a simple belief — that a meal is never just a meal.
              It is a gathering, a celebration, a memory in the making. Set in the lush
              surroundings of Trimurti Nagar, our family garden restaurant brings authentic
              Indian flavours together with warm hospitality and an ambience that lingers
              long after the last bite.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-muted leading-relaxed mb-8">
              From the sizzle of our signature Dal Tadka to the soulful strains of live
              music under the open sky, every detail is crafted to make your evening
              extraordinary.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-gold font-medium hover:gap-4 transition-all"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
