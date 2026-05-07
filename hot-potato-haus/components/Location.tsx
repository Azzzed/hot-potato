'use client';

import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 5:00 PM' },
];

export default function Location() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="location"
      className="py-24 lg:py-36 bg-[#3D1C02]"
      aria-labelledby="location-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C4572A]" />
            <MapPin size={16} className="text-[#D4A017]" />
            <div className="w-12 h-px bg-[#C4572A]" />
          </div>
          <h2
            id="location-heading"
            className="text-[#F5ECD7]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Find Us in Downtown LA
          </h2>
          <p className="mt-4 text-[#F5ECD7]/50 max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300 }}>
            Located in the heart of Downtown Los Angeles, easy to reach by metro or car.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-sm overflow-hidden" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.5!2d-118.267!3d34.044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b7e3b9c5f1%3A0x1234!2s231+E+12th+St%2C+Los+Angeles%2C+CA+90015!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hot Potato Haus & Cafe location map"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Info panel */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Address card */}
            <div className="bg-[#F5ECD7]/8 border border-[#F5ECD7]/10 rounded-sm p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={18} className="text-[#D4A017] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#F5ECD7] font-semibold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Location
                  </h3>
                  <p className="text-[#F5ECD7]/60 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                    231 E 12th St<br />
                    Los Angeles, CA 90015<br />
                    United States
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=231+E+12th+St,+Los+Angeles,+CA+90015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4A017] text-xs uppercase tracking-wider hover:text-[#F5ECD7] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Navigation size={13} />
                Get Directions
              </a>
            </div>

            {/* Hours card */}
            <div className="bg-[#F5ECD7]/8 border border-[#F5ECD7]/10 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-[#D4A017]" />
                <h3 className="text-[#F5ECD7] font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[#F5ECD7]/60 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {h.day}
                    </span>
                    <span className="text-[#F5ECD7] text-sm font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#25D366] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Open Now
                </span>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-[#F5ECD7]/8 border border-[#F5ECD7]/10 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={18} className="text-[#D4A017]" />
                <h3 className="text-[#F5ECD7] font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Call Us
                </h3>
              </div>
              <a
                href="tel:+16617330676"
                className="text-[#D4A017] font-semibold hover:text-[#F5ECD7] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                +1 (661) 733-0676
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
