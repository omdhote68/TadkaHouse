import { MapPin, Phone, Clock, Navigation, MessageCircle, Car } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { RESTAURANT } from '../data/content';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Get in <span className="gold-text italic">Touch</span></>}
        subtitle="We would love to hear from you. Reach out for reservations, inquiries, or just to say hello."
      />

      <section className="py-12 md:py-20 section-pad">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden h-[500px] border border-white/10">
              <iframe
                title="Tadka House location map"
                src={RESTAURANT.mapEmbed}
                className="w-full h-full grayscale invert opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Contact info */}
          <div className="space-y-6">
            <Reveal>
              <div className="glass-card p-6 flex items-start gap-4 hover:border-gold/20 transition-all">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Our Location</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {RESTAURANT.address.line1}<br />
                    {RESTAURANT.address.line2}<br />
                    {RESTAURANT.address.city}, {RESTAURANT.address.state}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card p-6 flex items-start gap-4 hover:border-gold/20 transition-all">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Phone</h3>
                  <a href={`tel:${RESTAURANT.phoneRaw}`} className="text-muted text-sm hover:text-gold transition-colors">
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card p-6 flex items-start gap-4 hover:border-gold/20 transition-all">
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

            <Reveal delay={0.3}>
              <div className="glass-card p-6 flex items-start gap-4 hover:border-gold/20 transition-all">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">Parking</h3>
                  <p className="text-muted text-sm">Ample parking available beside Bhange Lawn.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
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
      </section>
    </>
  );
}
