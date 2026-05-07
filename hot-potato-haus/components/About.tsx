'use client';

import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '100%', label: 'Fresh Ingredients' },
  { value: '15+', label: 'Menu Items' },
  { value: 'LA', label: 'Downtown Local' },
];

const values = [
  {
    icon: '🥔',
    title: 'Signature Baked Potatoes',
    desc: 'Our hand-selected potatoes are slow-baked to golden perfection, loaded with premium toppings and fresh salads.',
  },
  {
    icon: '☕',
    title: 'Artisan Coffee & Matcha',
    desc: 'From silky lattes to ceremonial matcha, every cup is crafted with care by our baristas using specialty beans.',
  },
  {
    icon: '🥐',
    title: 'Handcrafted Pastries',
    desc: 'Baked fresh daily — cheese puffs, muffins, and seasonal treats made with real butter and quality ingredients.',
  },
];

function useReveal() {
  return useInView({ threshold: 0.15, triggerOnce: true });
}

export default function About() {
  const [ref, inView] = useReveal();

  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 bg-[#F5ECD7] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Warm background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #C4572A 0%, transparent 70%)', transform: 'translate(40%, -40%)' }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: visual block */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Main image frame */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #3D1C02 0%, #C4572A 50%, #D4A017 100%)' }}
              >
                {/* Placeholder styled as food image */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                  <div className="text-8xl opacity-80">🥔</div>
                  <div className="text-center">
                    <p className="text-[#F5ECD7] font-serif text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Made with Love
                    </p>
                    <p className="text-[#F5ECD7]/60 text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Every bite crafted to perfection
                    </p>
                  </div>
                </div>
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(245,236,215,0.3) 10px, rgba(245,236,215,0.3) 11px)`,
                  }}
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-[#3D1C02] text-[#F5ECD7] p-6 rounded-sm shadow-2xl w-40">
                <div className="text-3xl font-bold font-serif text-[#D4A017]" style={{ fontFamily: "'Playfair Display', serif" }}>5.0</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4A017] text-sm">★</span>
                  ))}
                </div>
                <div className="text-[#F5ECD7]/60 text-xs mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Google Rating
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-2 border-[#C4572A]/40 rounded-sm" />
            </div>
          </div>

          {/* Right: text content */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[#C4572A] text-xs uppercase tracking-[0.2em] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Our Story
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-[#3D1C02] leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              A Family Kitchen,{' '}
              <em className="text-[#C4572A] not-italic" style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                A Neighborhood
              </em>{' '}
              Tradition
            </h2>

            <p className="text-[#3D1C02]/70 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300 }}>
              Born in the heart of Downtown Los Angeles, Hot Potato Haus & Cafe is a family-run kitchen where comfort food meets artisan craft. We believe the best meals begin with fresh, quality ingredients and end with a smile.
            </p>
            <p className="text-[#3D1C02]/70 leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300 }}>
              Our signature baked potatoes are slow-roasted to golden perfection and loaded with your choice of premium toppings. Paired with house-made salads, specialty coffee, and fresh-baked pastries — every visit feels like home.
            </p>

            {/* Value props */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#3D1C02] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#C4572A] transition-colors duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-[#3D1C02] font-semibold text-sm uppercase tracking-wider mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {v.title}
                    </h3>
                    <p className="text-[#3D1C02]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#3D1C02]/10 border border-[#3D1C02]/10 rounded-sm overflow-hidden transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#F5ECD7] px-6 py-8 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#C4572A] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </div>
              <div className="text-[#3D1C02]/50 text-xs uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
