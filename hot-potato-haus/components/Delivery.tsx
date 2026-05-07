'use client';

import { useInView } from 'react-intersection-observer';
import { Truck, Clock, Star } from 'lucide-react';

const platforms = [
  {
    name: 'DoorDash',
    description: 'Fast delivery to your door',
    color: '#FF3008',
    bg: '#fff1ee',
    emoji: '🔴',
    url: 'https://www.doordash.com/store/hot-potato-haus-cafe-los-angeles/',
    eta: '25–40 min',
  },
  {
    name: 'Uber Eats',
    description: 'Order with Uber Eats',
    color: '#000000',
    bg: '#f5f5f0',
    emoji: '⚫',
    url: 'https://www.ubereats.com/store/hot-potato-haus-cafe',
    eta: '20–35 min',
  },
  {
    name: 'Postmates',
    description: 'Delivered by Postmates',
    color: '#1A1A2E',
    bg: '#eef0f8',
    emoji: '📦',
    url: 'https://postmates.com/',
    eta: '30–45 min',
  },
];

export default function Delivery() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="delivery"
      className="py-24 lg:py-36"
      style={{ background: 'linear-gradient(180deg, #F5ECD7 0%, #EDD9B4 100%)' }}
      aria-labelledby="delivery-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <Truck size={16} className="text-[#C4572A]" />
            <div className="section-divider" />
          </div>
          <h2
            id="delivery-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#3D1C02',
              letterSpacing: '-0.02em',
            }}
          >
            Order Delivery
          </h2>
          <p className="mt-4 text-[#3D1C02]/60 max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300 }}>
            Enjoy Hot Potato Haus from the comfort of your home. Available on your favorite delivery apps.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {platforms.map((platform, i) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-sm p-8 text-center card-hover border border-[#3D1C02]/8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: platform.bg,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4">{platform.emoji}</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: platform.color,
                }}
              >
                {platform.name}
              </h3>
              <p className="text-[#3D1C02]/60 text-sm mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {platform.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-[#3D1C02]/50 text-xs mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Clock size={12} />
                <span>{platform.eta}</span>
              </div>
              <div
                className="inline-block px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all group-hover:opacity-90"
                style={{
                  background: platform.color,
                  color: '#fff',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                }}
              >
                Order Now →
              </div>
            </a>
          ))}
        </div>

        {/* Or pickup info */}
        <div className={`mt-12 text-center transition-all duration-800 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-3 bg-[#3D1C02] text-[#F5ECD7] px-8 py-4 rounded-sm">
            <Star size={16} className="text-[#D4A017]" />
            <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Or visit us at <strong>231 E 12th St, Los Angeles</strong> for dine-in
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
