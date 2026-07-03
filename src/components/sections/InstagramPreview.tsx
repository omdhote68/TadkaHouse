import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Reveal from '../Reveal';
import { RESTAURANT } from '../../data/content';

const INSTA_IMAGES = [
  'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
  'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg',
  'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
  'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
];

export default function InstagramPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="text-center mb-12 section-pad">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-gold" />
            <p className="eyebrow">@tadkahouse</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-lg">
            Follow Our <span className="gold-text italic">Journey</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {INSTA_IMAGES.map((src, i) => (
          <motion.a
            key={i}
            href={RESTAURANT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt="Instagram post"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink-base/0 group-hover:bg-ink-base/40 transition-colors duration-500 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
