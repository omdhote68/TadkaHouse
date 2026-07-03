import { motion } from 'framer-motion';
import {
  Trees, Music, Sparkles, Leaf, Users, ChefHat,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '../Reveal';
import SectionDivider from '../SectionDivider';
import { WHY_CHOOSE_US } from '../../data/content';

const iconMap: Record<string, LucideIcon> = {
  Trees, Music, Sparkles, Leaf, Users, ChefHat,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-section overflow-hidden">
      <div className="section-pad">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Why Choose Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-lg">
              The Tadka House <span className="gold-text italic">Difference</span>
            </h2>
          </Reveal>
        </div>

        <SectionDivider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group glass-card p-8 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
