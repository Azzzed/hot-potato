'use client';

import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';

const galleryItems = [
  { emoji: '🥔', title: 'Loaded Baked Potato', subtitle: 'Signature item', bg: 'linear-gradient(135deg, #5a2800, #C4572A)', tall: true },
  { emoji: '☕', title: 'Artisan Latte', subtitle: 'House roast', bg: 'linear-gradient(135deg, #3D1C02, #7a3a10)', tall: false },
  { emoji: '🥪', title: 'Italian Sub', subtitle: 'Freshly made', bg: 'linear-gradient(135deg, #1a4a20, #2d7a35)', tall: false },
  { emoji: '🥐', title: 'Cheese Puff', subtitle: 'Daily baked', bg: 'linear-gradient(135deg, #8B1A1A, #C4572A)', tall: true },
  { emoji: '🍵', title: 'Matcha Latte', subtitle: 'Ceremonial grade', bg: 'linear-gradient(135deg, #1a4a20, #4a8a50)', tall: false },
  { emoji: '🍓', title: 'Fresh Smoothie', subtitle: 'Blended daily', bg: 'linear-gradient(135deg, #7a1a3a, #C4572A)', tall: false },
  { emoji: '🧁', title: 'Blueberry Muffin', subtitle: 'House recipe', bg: 'linear-gradient(135deg, #2a1a6a, #4a3aaa)', tall: false },
  { emoji: '🥗', title: 'Fresh Salads', subtitle: 'House-made', bg: 'linear-gradient(135deg, #1a4a20, #3D7A25)', tall: true },
];

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="gallery"
      className="py-24 lg:py-36 bg-[#3D1C02] overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C4572A]" />
            <Camera size={16} className="text-[#D4A017]" />
            <div className="w-12 h-px bg-[#C4572A]" />
          </div>
          <h2
            id="gallery-heading"
            className="text-[#F5ECD7]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            A Feast for the Eyes
          </h2>
          <p className="mt-4 text-[#F5ECD7]/50 max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300 }}>
            Every dish is crafted to be as beautiful as it is delicious.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`masonry-item instagram-item rounded-sm cursor-pointer transition-all duration-500 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`relative ${item.tall ? 'aspect-[3/4]' : 'aspect-square'} rounded-sm overflow-hidden`}
                style={{ background: item.bg }}
              >
                {/* Content */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <span style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>{item.emoji}</span>
                  <div className="text-center px-3">
                    <p className="text-[#F5ECD7] text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </p>
                    <p className="text-[#F5ECD7]/50 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Hover overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={24} className="text-[#F5ECD7]" />
                  <span className="text-[#F5ECD7] text-xs mt-2 uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    View
                  </span>
                </div>

                {/* Grain overlay */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-800 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://www.instagram.com/hotpotatohausandcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F5ECD7]/60 hover:text-[#D4A017] text-sm transition-colors uppercase tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span>See More on Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
