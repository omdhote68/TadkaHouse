import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../Reveal';
import Counter from '../Counter';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-ink-section">
      <div className="section-pad">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with parallax */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <motion.img
              style={{ y }}
              src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg"
              alt="Garden dining experience"
              className="absolute inset-0 w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-section via-transparent to-transparent" />
          </div>

          {/* Text + counters */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Experience</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mb-6">
                More Than a Meal —
                <br />
                A <span className="gold-text italic">Memory</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Picture an evening under the stars, the aroma of spices drifting through
                the garden, live music setting the mood, and a table surrounded by the
                people you love. This is the Tadka House experience — crafted with care,
                served with warmth.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: 2400, suffix: '+', label: 'Happy Guests', decimals: 0 },
                { value: 4.8, suffix: '', label: 'Google Rating', decimals: 1 },
                { value: 15, suffix: '+', label: 'Years of Hospitality', decimals: 0 },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={0.3 + i * 0.1}>
                  <div className="text-center md:text-left">
                    <div className="font-display text-4xl md:text-5xl text-gold mb-2">
                      <Counter
                        to={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <p className="text-xs md:text-sm text-muted uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
