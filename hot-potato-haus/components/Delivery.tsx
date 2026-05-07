'use client';

import { useInView } from 'react-intersection-observer';
import { Clock, Star } from 'lucide-react';
import Image from 'next/image';

const platforms = [
  {
    name: 'DoorDash',
    description: 'Fast delivery to your door',
    bg: '#fff1ee',
    borderColor: '#FF3008',
    url: 'https://www.doordash.com/store/hot-potato-haus-and-cafe-los-angeles-38723189/89820548/?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
    eta: '25–40 min',
    logo: (
      <svg viewBox="0 0 200 50" width="140" height="35" role="img" aria-label="DoorDash">
        <rect width="200" height="50" rx="6" fill="#FF3008"/>
        <text x="12" y="34" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="28" fill="white">DoorDash</text>
      </svg>
    ),
    btnColor: '#FF3008',
  },
  {
    name: 'Uber Eats',
    description: 'Order with Uber Eats',
    bg: '#f5f5f0',
    borderColor: '#000000',
    url: 'https://www.ubereats.com/store/hot-potato-haus-and-cafe-los-angeles-231-e-12th-st/iLnTjCAiWs-sNFCtATTOow?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
    eta: '20–35 min',
    logo: (
      <svg viewBox="0 0 200 50" width="140" height="35" role="img" aria-label="Uber Eats">
        <rect width="200" height="50" rx="6" fill="#142328"/>
        <text x="12" y="34" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="white">Uber </text>
        <text x="70" y="34" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#06C167">Eats</text>
      </svg>
    ),
    btnColor: '#142328',
  },
  {
    name: 'Grubhub',
    description: 'Delivered by Grubhub',
    bg: '#fff9f2',
    borderColor: '#F63440',
    url: 'https://www.grubhub.com/restaurant/hot-potato-haus-and-cafe-231-east-12th-street-los-angeles/13648320?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
    eta: '30–45 min',
    logo: (
      <svg viewBox="0 0 200 50" width="140" height="35" role="img" aria-label="Grubhub">
        <rect width="200" height="50" rx="6" fill="#F63440"/>
        <text x="12" y="34" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="26" fill="white">Grubhub</text>
      </svg>
    ),
    btnColor: '#F63440',
  },
];

export default function Delivery() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="delivery"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5ECD7 0%, #EDD9B4 100%)' }}
      aria-labelledby="delivery-heading"
    >
      {/* Background food image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=1600&q=60&fit=crop"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          aria-hidden="true"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#C4572A] text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>Delivery</span>
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
              className={`group block rounded-sm p-8 text-center card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: platform.bg,
                border: `2px solid ${platform.borderColor}20`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-6 h-10">
                {platform.logo}
              </div>

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
                className="inline-block px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all group-hover:opacity-90 group-hover:-translate-y-0.5"
                style={{
                  background: platform.btnColor,
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

        {/* Dine-in info */}
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
