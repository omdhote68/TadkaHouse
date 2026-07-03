import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Leaf, Drumstick } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/content';

export default function Menu() {
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const catMatch = activeCat === 'all' || item.category === activeCat || item.type === activeCat;
      const queryMatch =
        query === '' ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase());
      return catMatch && queryMatch;
    });
  }, [activeCat, query]);

  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title={<>A Feast of <span className="gold-text italic">Flavours</span></>}
        subtitle="From sizzling starters to soulful mains, every dish is crafted with authentic Indian recipes and the freshest ingredients."
      />

      <section className="py-12 md:py-20 section-pad">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-full glass text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCat === cat.id
                  ? 'bg-gold-gradient text-ink-base'
                  : 'glass text-white/70 hover:text-gold hover:border-gold/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card p-6 hover:border-gold/20 transition-all duration-500 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'veg' ? (
                      <span className="w-4 h-4 border-2 border-green-500/60 rounded-sm flex items-center justify-center">
                        <Leaf className="w-2 h-2 text-green-500" />
                      </span>
                    ) : (
                      <span className="w-4 h-4 border-2 border-red-500/60 rounded-sm flex items-center justify-center">
                        <Drumstick className="w-2 h-2 text-red-500" />
                      </span>
                    )}
                    <h3 className="font-display text-lg text-white group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display text-xl text-gold">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No dishes found. Try a different search or filter.</p>
          </div>
        )}

        <p className="text-center text-sm text-white/40 mt-12 max-w-xl mx-auto">
          Prices are indicative and may vary. Please contact us for the full menu,
          seasonal specials, and group dining packages.
        </p>
      </section>
    </>
  );
}
