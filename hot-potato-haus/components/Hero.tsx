'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hot Potato Haus & Cafe — Premium Baked Potatoes in Los Angeles"
    >
      {/* Background: deep rich warm overlay */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic background with gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a0a00 0%, #3D1C02 40%, #5a2800 70%, #2a1200 100%)',
          }}
        />
        {/* Warm texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(196,87,42,0.6) 0%, transparent 60%),
                              radial-gradient(ellipse at 80% 20%, rgba(212,160,23,0.4) 0%, transparent 50%),
                              radial-gradient(ellipse at 50% 100%, rgba(61,28,2,0.8) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #F5ECD7 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 pt-32">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4A017] text-[#D4A017]" />
            ))}
          </div>
          <span
            className="text-[#D4A017] text-xs uppercase tracking-[0.2em] font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            5-Star Rated · Los Angeles
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <span
            className="block text-[#F5ECD7] leading-none mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            Comfort
          </span>
          <span
            className="block leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #D4A017 0%, #C4572A 50%, #EDD9B4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Food
          </span>
          <span
            className="block text-[#F5ECD7]/70 leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
            }}
          >
            Elevated
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-8 text-[#F5ECD7]/60 max-w-xl mx-auto transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: '700ms',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.7,
            fontWeight: 300,
            letterSpacing: '0.01em',
          }}
        >
          Premium baked potatoes, artisan coffee & handcrafted pastries.
          <br className="hidden sm:block" />
          Your neighborhood comfort food destination in Downtown LA.
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a href="#delivery" className="btn-primary w-full sm:w-auto text-center">
            Order Now
          </a>
          <a href="#menu" className="btn-outline w-full sm:w-auto text-center">
            View Menu
          </a>
          <a
            href="#contact"
            className="text-[#F5ECD7]/60 hover:text-[#D4A017] text-xs uppercase tracking-widest transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Reserve Table →
          </a>
        </div>

        {/* Address strip */}
        <div
          className={`mt-12 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <p
            className="text-[#F5ECD7]/30 text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            231 E 12th St · Los Angeles, CA 90015
          </p>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10" style={{
        background: 'linear-gradient(to top, #F5ECD7 0%, transparent 100%)',
      }} />

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-[#C4572A] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>

      {/* Decorative side elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-20 bg-[#C4572A]/30" />
        <span
          className="text-[#F5ECD7]/20 text-xs uppercase tracking-[0.3em] rotate-90 whitespace-nowrap"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Est. Downtown LA
        </span>
        <div className="w-px h-20 bg-[#C4572A]/30" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-20 bg-[#D4A017]/30" />
        <span
          className="text-[#F5ECD7]/20 text-xs uppercase tracking-[0.3em] rotate-90 whitespace-nowrap"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Open Daily
        </span>
        <div className="w-px h-20 bg-[#D4A017]/30" />
      </div>
    </section>
  );
}
