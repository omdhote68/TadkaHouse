import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { RESTAURANT } from '../data/content';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      body: 'When you make a reservation, we collect your name, phone number, number of guests, preferred date and time, and any special requests you provide. We do not collect payment information through this website.',
    },
    {
      title: 'How We Use Your Information',
      body: 'Your information is used solely to process and confirm your reservation, and to communicate with you about your booking. We may use your phone number to send reservation confirmations or updates.',
    },
    {
      title: 'Information Sharing',
      body: 'We do not sell, trade, or share your personal information with third parties. Your data is stored securely and is accessible only to authorized Tadka House staff for reservation management.',
    },
    {
      title: 'Data Security',
      body: 'We take reasonable measures to protect your personal information using industry-standard security practices. Your reservation data is stored in a secure, access-controlled database.',
    },
    {
      title: 'Your Rights',
      body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us directly.',
    },
    {
      title: 'Contact Us',
      body: `For any privacy-related questions, please contact us at ${RESTAURANT.phone} or visit us at ${RESTAURANT.address.line1}, ${RESTAURANT.address.city}.`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={<>Privacy <span className="gold-text italic">Policy</span></>}
        subtitle="Your privacy matters to us. This policy explains how we handle your information."
      />

      <section className="py-12 md:py-20 section-pad">
        <div className="max-w-3xl mx-auto space-y-8">
          <Reveal>
            <p className="text-muted leading-relaxed">
              At {RESTAURANT.fullName}, we are committed to protecting your privacy. This
              policy outlines how we collect, use, and safeguard your information when you
              use our website and services.
            </p>
          </Reveal>

          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <div className="glass-card p-6 md:p-8">
                <h2 className="font-display text-xl text-gold mb-3">{section.title}</h2>
                <p className="text-muted leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <p className="text-sm text-white/40 text-center pt-4">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
