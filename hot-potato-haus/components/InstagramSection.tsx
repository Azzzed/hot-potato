'use client';

import { useInView } from 'react-intersection-observer';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const instaPosts = [
  { emoji: '🥔', likes: '234', comments: '18', bg: 'linear-gradient(135deg, #5a2800, #C4572A)' },
  { emoji: '☕', likes: '189', comments: '12', bg: 'linear-gradient(135deg, #3D1C02, #8a4010)' },
  { emoji: '🥪', likes: '312', comments: '24', bg: 'linear-gradient(135deg, #1a4a20, #2d7a35)' },
  { emoji: '🥐', likes: '145', comments: '9', bg: 'linear-gradient(135deg, #8B1A1A, #C4572A)' },
  { emoji: '🍵', likes: '267', comments: '20', bg: 'linear-gradient(135deg, #1a4a20, #4a8a50)' },
  { emoji: '🍓', likes: '198', comments: '14', bg: 'linear-gradient(135deg, #7a1a3a, #D4572A)' },
  { emoji: '🧁', likes: '223', comments: '16', bg: 'linear-gradient(135deg, #2a1a6a, #4a3aaa)' },
  { emoji: '🌮', likes: '156', comments: '11', bg: 'linear-gradient(135deg, #6a3a00, #D4A017)' },
  { emoji: '🥑', likes: '341', comments: '28', bg: 'linear-gradient(135deg, #1a4a1a, #5a9a30)' },
];

export default function InstagramSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="instagram"
      className="py-24 lg:py-36 bg-[#3D1C02]"
      aria-labelledby="instagram-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C4572A]" />
            <Instagram size={18} className="text-[#D4A017]" />
            <div className="w-12 h-px bg-[#C4572A]" />
          </div>
          <h2
            id="instagram-heading"
            className="text-[#F5ECD7]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Follow Our Journey
          </h2>
          <a
            href="https://www.instagram.com/hotpotatohausandcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[#D4A017] text-sm hover:text-[#F5ECD7] transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            @hotpotatohausandcafe
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Instagram grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-3">
          {instaPosts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/hotpotatohausandcafe/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square rounded-sm overflow-hidden transition-all duration-500 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                background: post.bg,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Post content */}
              <div className="w-full h-full flex items-center justify-center">
                <span style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>{post.emoji}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#C4572A]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-4 text-[#F5ECD7] text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <div className="flex items-center gap-1">
                    <Heart size={14} className="fill-current" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className={`text-center mt-10 transition-all duration-800 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://www.instagram.com/hotpotatohausandcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Instagram size={16} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
