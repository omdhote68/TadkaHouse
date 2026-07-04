import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9997] transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="section-pad flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gold">Tadka</span>
              <span className="text-white"> House</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group relative text-sm font-medium tracking-wide text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{RESTAURANT.phone}</span>
            </a>
           <a
  href={RESTAURANT.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-gold !py-2.5 !px-6 text-sm"
>
  Reserve Table
</a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9996] lg:hidden bg-ink-base/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-3xl text-white/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
  href={RESTAURANT.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-gold !py-2.5 !px-6 text-sm"
>
  Reserve Table
</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
