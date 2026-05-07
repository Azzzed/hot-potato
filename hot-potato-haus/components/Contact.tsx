'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  message: string;
};

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', guests: '2', date: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `w-full bg-[#F5ECD7]/80 border border-[#3D1C02]/15 rounded-sm px-4 py-3 text-[#3D1C02] text-sm focus:outline-none focus:border-[#C4572A] transition-colors placeholder-[#3D1C02]/30`;

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 bg-[#F5ECD7]"
      aria-labelledby="contact-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Info */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-[#C4572A] text-xs uppercase tracking-[0.2em] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Reservations
              </span>
            </div>
            <h2
              id="contact-heading"
              className="text-[#3D1C02] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Reserve Your Table or Get in Touch
            </h2>
            <p className="text-[#3D1C02]/60 mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.7 }}>
              We'd love to host you! Fill out the form to reserve a table or send us a message. We'll confirm your reservation within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+16617330676"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#3D1C02] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4572A] transition-colors">
                  <Phone size={16} className="text-[#F5ECD7]" />
                </div>
                <div>
                  <div className="text-[#3D1C02]/50 text-xs uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Phone</div>
                  <div className="text-[#3D1C02] font-medium text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>(661) 733-0676</div>
                </div>
              </a>

              <a
                href="mailto:hello@hotpotatohaus.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#3D1C02] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4572A] transition-colors">
                  <Mail size={16} className="text-[#F5ECD7]" />
                </div>
                <div>
                  <div className="text-[#3D1C02]/50 text-xs uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</div>
                  <div className="text-[#3D1C02] font-medium text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>hello@hotpotatohaus.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#3D1C02] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#F5ECD7]" />
                </div>
                <div>
                  <div className="text-[#3D1C02]/50 text-xs uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Address</div>
                  <div className="text-[#3D1C02] font-medium text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    231 E 12th St, Los Angeles, CA 90015
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/16617330676?text=Hi%2C%20I'd%20like%20to%20make%20a%20reservation%20at%20Hot%20Potato%20Haus!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#1da851] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Reservation
            </a>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {submitted ? (
              <div className="bg-[#3D1C02] text-[#F5ECD7] rounded-sm p-10 text-center">
                <div className="text-5xl mb-4">🥔</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Reservation Received!
                </h3>
                <p className="text-[#F5ECD7]/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We'll confirm your table within 24 hours. See you soon!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#3D1C02]/8 rounded-sm p-8 space-y-5"
                aria-label="Reservation form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Guests
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {['1','2','3','4','5','6','7','8+'].map(n => (
                        <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3D1C02]/50 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any special requests or questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  Send Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
