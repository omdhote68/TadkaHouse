import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-px bg-gradient-to-r from-transparent to-gold/40"
      />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-2 h-2 bg-gold rotate-45"
      />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-px bg-gradient-to-l from-transparent to-gold/40"
      />
    </div>
  );
}
