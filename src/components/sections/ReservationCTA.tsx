import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Phone } from 'lucide-react';
import Reveal from '../Reveal';
import { RESTAURANT } from '../../data/content';

export default function ReservationCTA() {
  return (
    <section className="relative py-24 md:py-32 section-pad overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
            alt="Reserve a table"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-base/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-base via-ink-base/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-10 md:p-16 lg:p-20">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow mb-4">Reservations</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mb-6">
                Reserve Your <span className="gold-text italic">Evening</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Whether it is a family gathering, a birthday celebration, or an intimate
                dinner for two — let us craft an evening you will remember.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Clock className="w-4 h-4 text-gold" />
                  {RESTAURANT.hours}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Users className="w-4 h-4 text-gold" />
                  Family & Group Friendly
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/reservations" className="btn-gold">
                  <Calendar className="w-4 h-4" />
                  Book a Table
                </Link>
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  {RESTAURANT.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
