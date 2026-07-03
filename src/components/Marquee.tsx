import { motion } from 'framer-motion';

export default function Marquee({ text, repeat = 4 }: { text: string; repeat?: number }) {
  const items = Array(repeat * 2).fill(text);
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5 bg-ink-section">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl text-white/[0.06] mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-gold/30 text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
