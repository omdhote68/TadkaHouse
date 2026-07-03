import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import Reveal from '../Reveal';
import { RESTAURANT } from '../../data/content';

export default function LocationPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-section overflow-hidden">
      <div className="section-pad">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Find Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-lg">
              Visit <span className="gold-text italic">Tadka House</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full min-h-[400px] border border-white/10">
              <iframe
                title="Tadka House location"
                src={RESTAURANT.mapEmbed}
                className="w-full h-full grayscale invert opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <Reveal>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Address</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {RESTAURANT.address.line1}, {RESTAURANT.address.line2},{' '}
                    {RESTAURANT.address.city}, {RESTAURANT.address.state}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Opening Hours</h3>
                  <p className="text-muted text-sm">{RESTAURANT.hours}</p>
                  <p className="text-muted text-sm">Open all 7 days</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Reservations</h3>
                  <a
                    href={`tel:${RESTAURANT.phoneRaw}`}
                    className="text-muted text-sm hover:text-gold transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={RESTAURANT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex-1"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={RESTAURANT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
