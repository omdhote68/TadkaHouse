import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Users, Calendar, Clock, MessageSquare, Check, Loader2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { supabase } from '../lib/supabase';
import { RESTAURANT } from '../data/content';

const TIME_SLOTS = [
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
  '10:00 PM', '10:30 PM', '11:00 PM',
];

export default function Reservations() {
  const [form, setForm] = useState({
    name: '', phone: '', guests: '2', date: '', time: '', special_request: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('reservations').insert({
      name: form.name,
      phone: form.phone,
      guests: parseInt(form.guests),
      date: form.date,
      time: form.time,
      special_request: form.special_request || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    } else {
      setStatus('success');
      setForm({ name: '', phone: '', guests: '2', date: '', time: '', special_request: '' });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title={<>Book Your <span className="gold-text italic">Table</span></>}
        subtitle="Reserve your evening at Tadka House. For large groups or special celebrations, mention it in your request."
      />

      <section className="py-12 md:py-20 section-pad">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="glass-card p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-gold" />
                    </motion.div>
                    <h3 className="heading-md mb-4">Reservation Requested!</h3>
                    <p className="text-muted mb-8 max-w-md mx-auto">
                      Thank you for choosing Tadka House. We will confirm your reservation
                      shortly via phone. For immediate confirmation, please call us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn-gold">
                        <Phone className="w-4 h-4" />
                        Call to Confirm
                      </a>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline"
                      >
                        Make Another Booking
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm text-muted mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm text-muted mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="block text-sm text-muted mb-2">Number of Guests</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                          >
                            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                              <option key={n} value={n} className="bg-ink-card">
                                {n} {n === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                            <option value="10+" className="bg-ink-card">10+ Guests</option>
                          </select>
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-sm text-muted mb-2">Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input
                            type="date"
                            name="date"
                            required
                            min={today}
                            value={form.date}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-colors [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div className="md:col-span-2">
                        <label className="block text-sm text-muted mb-2">Preferred Time</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <select
                            name="time"
                            required
                            value={form.time}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                          >
                            <option value="" className="bg-ink-card">Select a time</option>
                            {TIME_SLOTS.map((t) => (
                              <option key={t} value={t} className="bg-ink-card">{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Special Request */}
                      <div className="md:col-span-2">
                        <label className="block text-sm text-muted mb-2">Special Request (Optional)</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/40" />
                          <textarea
                            name="special_request"
                            value={form.special_request}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Birthday celebration, seating preference, dietary needs..."
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-gold w-full disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Request Reservation'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Quick contact */}
          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <a
                href={RESTAURANT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 hover:border-gold/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp Us</p>
                  <p className="text-sm text-muted">Quick & easy booking</p>
                </div>
              </a>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="glass-card p-6 flex items-center gap-4 hover:border-gold/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-sm text-muted">{RESTAURANT.phone}</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
