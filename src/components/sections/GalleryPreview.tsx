import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ZoomIn } from 'lucide-react';
import Reveal from '../Reveal';
import { GALLERY_IMAGES } from '../../data/content';

export default function GalleryPreview() {
  const images = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="relative py-24 md:py-32 section-pad overflow-hidden">
      <div className="text-center mb-16">
        <Reveal>
          <p className="eyebrow mb-4">Moments</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-lg">
            A Glimpse of <span className="gold-text italic">Tadka House</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
              i === 0 ? 'row-span-2' : ''
            } ${i === 3 ? 'col-span-2' : ''}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink-base/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-gold" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Reveal>
          <Link to="/gallery" className="btn-outline">
            View Full Gallery
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
