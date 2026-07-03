import { motion } from 'framer-motion';
import { Sparkles, Heart, Users, Music } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';
import Marquee from '../components/Marquee';
import ReservationCTA from '../components/sections/ReservationCTA';

const VALUES = [
  { icon: Heart, title: 'Warmth', desc: 'Every guest is family the moment they walk through our doors.' },
  { icon: Sparkles, title: 'Craft', desc: 'Each dish is prepared with intention, honouring authentic recipes.' },
  { icon: Users, title: 'Togetherness', desc: 'We exist to bring people together around a beautiful table.' },
  { icon: Music, title: 'Atmosphere', desc: 'Live music, garden ambience, and evenings that feel alive.' },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>A Celebration of <span className="gold-text italic">Flavour & Family</span></>}
        subtitle="Born in Trimurti Nagar, Tadka House is Nagpur's premier family garden restaurant — where authentic Indian cuisine meets warm, premium hospitality."
      />

      {/* Story section */}
      <section className="py-20 md:py-28 section-pad">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                alt="Tadka House ambience"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-base/50 to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Beginning</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-md mb-6">
                Rooted in <span className="gold-text italic">Tradition</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Tadka House was founded on a simple idea — that dining should be an
                experience, not just a meal. The name "Tadka" itself speaks to our
                philosophy: the final, sizzling tempering that transforms a dish from
                good to unforgettable.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted leading-relaxed mb-6">
                Set beside the beautiful Bhange Lawn in Trimurti Nagar, our garden
                restaurant offers a serene escape from the city — a place where families
                gather, celebrations come alive, and every evening feels special.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-muted leading-relaxed">
                From our signature Dal Tadka to the smoky Paneer Angara, every dish on
                our menu is a tribute to authentic Indian cooking — made fresh, served
                with warmth, and meant to be shared.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee text="Garden Dining · Live Music · Birthday Celebrations · Premium Hospitality" />

      {/* Values */}
      <section className="py-20 md:py-28 bg-ink-section section-pad">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">What We Believe</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-lg">Our <span className="gold-text italic">Values</span></h2>
          </Reveal>
        </div>

        <SectionDivider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                <val.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl mb-3">{val.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* USP strip */}
      <section className="py-20 md:py-28 section-pad">
        <div className="glass-card p-10 md:p-16 text-center">
          <Reveal>
            <h2 className="heading-md mb-8">
              What Makes Us <span className="gold-text italic">Special</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Family Garden Restaurant',
                'Live Music',
                'Beautiful Ambience',
                'Authentic Indian Food',
                'Premium Hospitality',
                'Birthday Celebrations',
                'Outdoor Seating',
              ].map((usp) => (
                <span
                  key={usp}
                  className="px-5 py-2.5 rounded-full glass text-sm text-white/80 hover:text-gold hover:border-gold/30 transition-all cursor-default"
                >
                  {usp}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
