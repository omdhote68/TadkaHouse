import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { RESTAURANT, NAV_LINKS } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative bg-ink-section border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-pad relative">
        {/* Newsletter */}
        <div className="glass-card p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="heading-md mb-2">Join Our Table</h3>
            <p className="text-muted max-w-md">
              Subscribe for exclusive offers, new menu previews, and event invitations.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto items-center gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-72 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-gold !px-5">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gold">Tadka</span> House
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {RESTAURANT.tagline}. A premium family garden restaurant in the heart of Nagpur.
            </p>
            <div className="flex gap-3">
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-luxe text-gold/80 mb-5 font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-luxe text-gold/80 mb-5 font-medium">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>
                  {RESTAURANT.address.line1}, {RESTAURANT.address.line2},{' '}
                  {RESTAURANT.address.city}, {RESTAURANT.address.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold transition-colors">
                  {RESTAURANT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-luxe text-gold/80 mb-5 font-medium">
              Opening Hours
            </h4>
            <div className="flex items-center gap-3 text-sm text-muted mb-4">
              <Clock className="w-4 h-4 text-gold" />
              <span>{RESTAURANT.hours}</span>
            </div>
            <p className="text-sm text-muted">Open all 7 days</p>
            <div className="mt-4 flex gap-2">
              {RESTAURANT.dining.map((d) => (
                <span
                  key={d}
                  className="text-xs px-3 py-1.5 rounded-full glass text-white/60"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {RESTAURANT.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>Crafted with care in Nagpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
