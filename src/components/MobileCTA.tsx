import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { RESTAURANT } from '../data/content';

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9990] glass border-t border-white/10 px-4 py-3 flex items-center gap-3">
      <a
        href={`tel:${RESTAURANT.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-white/80 text-sm font-medium"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>
      <a
        href={RESTAURANT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-white/80 text-sm font-medium"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href="/reservations"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-ink-base text-sm font-medium"
      >
        <Calendar className="w-4 h-4" />
        Reserve
      </a>
    </div>
  );
}
