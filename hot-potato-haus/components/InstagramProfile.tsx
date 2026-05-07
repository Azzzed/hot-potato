'use client';

import { useInView } from 'react-intersection-observer';
import { Instagram, Heart, MapPin, Link as LinkIcon, Grid3x3 } from 'lucide-react';
import Image from 'next/image';

// 9-post grid — swap src for /images/kaggle/filename.jpg from your Kaggle dataset
const posts = [
  {
    src: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=500&q=80&fit=crop',
    alt: 'Loaded baked potato',
    likes: '234',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80&fit=crop',
    alt: 'Artisan latte with latte art',
    likes: '189',
  },
  {
    src: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=80&fit=crop',
    alt: 'Italian deli sandwich',
    likes: '312',
  },
  {
    src: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&q=80&fit=crop',
    alt: 'Fresh cheese puff pastry',
    likes: '145',
  },
  {
    src: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&q=80&fit=crop',
    alt: 'Matcha latte',
    likes: '267',
  },
  {
    src: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&q=80&fit=crop',
    alt: 'Fresh strawberry banana smoothie',
    likes: '198',
  },
  {
    src: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&q=80&fit=crop',
    alt: 'Blueberry muffin',
    likes: '223',
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80&fit=crop',
    alt: 'Fresh salad bowl',
    likes: '341',
  },
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80&fit=crop',
    alt: 'Iced latte',
    likes: '156',
  },
];

export default function InstagramProfile() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="instagram"
      className="py-24 lg:py-36 bg-[#F5ECD7]"
      aria-labelledby="instagram-heading"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="section-divider" />
            <Instagram size={16} className="text-[#C4572A]" />
            <div className="section-divider" />
          </div>
          <h2
            id="instagram-heading"
            className="text-[#3D1C02]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Follow Us on Instagram
          </h2>
        </div>

        {/* Instagram profile card */}
        <div
          className={`bg-white rounded-sm border border-[#3D1C02]/8 overflow-hidden shadow-sm transition-all duration-800 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Profile header */}
          <div className="px-6 pt-6 pb-5 border-b border-[#3D1C02]/8">
            <div className="flex items-start gap-5 sm:gap-8">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white"
                  style={{
                    background: 'linear-gradient(135deg, #F4C430, #F77737, #C13584, #833AB4)',
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative">
                    <Image
                      src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=200&q=80&fit=crop&crop=center"
                      alt="Hot Potato Haus profile"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                {/* Instagram gradient ring */}
                <div
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: 'linear-gradient(135deg, #F4C430, #F77737, #C13584, #833AB4)',
                    filter: 'blur(4px)',
                    opacity: 0.5,
                  }}
                />
              </div>

              {/* Profile info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3
                    className="text-[#3D1C02] font-semibold text-base sm:text-lg truncate"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    hotpotatohausandcafe
                  </h3>
                  <a
                    href="https://www.instagram.com/hotpotatohausandcafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded border border-[#3D1C02]/20 text-[#3D1C02] hover:bg-[#3D1C02] hover:text-[#F5ECD7] hover:border-[#3D1C02] transition-all flex-shrink-0"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Instagram size={12} />
                    Follow
                  </a>
                </div>

                {/* Stats */}
                <div className="flex gap-5 mb-3">
                  {[
                    { value: '9', label: 'posts' },
                    { value: '1.2K', label: 'followers' },
                    { value: '348', label: 'following' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <span className="font-bold text-sm text-[#3D1C02]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.value}</span>
                      <span className="text-[#3D1C02]/50 text-xs ml-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="hidden sm:block">
                  <p className="text-[#3D1C02] text-sm font-semibold mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Hot Potato Haus & Cafe 🥔
                  </p>
                  <p className="text-[#3D1C02]/60 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Premium baked potatoes, artisan coffee & pastries<br />
                    📍 231 E 12th St, Downtown Los Angeles
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={11} className="text-[#C4572A] flex-shrink-0" />
                    <span className="text-[#C4572A] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Los Angeles, California</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio — mobile */}
            <div className="sm:hidden mt-3">
              <p className="text-[#3D1C02] text-sm font-semibold mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Hot Potato Haus & Cafe 🥔
              </p>
              <p className="text-[#3D1C02]/60 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Premium baked potatoes, artisan coffee & pastries · 📍 Downtown LA
              </p>
            </div>
          </div>

          {/* Grid tab bar */}
          <div className="flex border-b border-[#3D1C02]/8">
            <div className="flex-1 flex items-center justify-center gap-2 py-3 border-t-2 border-[#3D1C02]">
              <Grid3x3 size={14} className="text-[#3D1C02]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3D1C02]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Posts
              </span>
            </div>
          </div>

          {/* 3×3 photo grid */}
          <div className="grid grid-cols-3 gap-0.5 bg-[#3D1C02]/5">
            {posts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/hotpotatohausandcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden bg-[#EDD9B4] transition-all duration-500 ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${200 + i * 50}ms` }}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 22vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#3D1C02]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Heart size={16} className="text-white fill-white" />
                  <span className="text-white text-sm font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {post.likes}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-5 flex items-center justify-between">
            <p className="text-[#3D1C02]/50 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              See our latest dishes & daily specials
            </p>
            <a
              href="https://www.instagram.com/hotpotatohausandcafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#3D1C02] hover:text-[#C4572A] transition-colors uppercase tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <LinkIcon size={12} />
              @hotpotatohausandcafe
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
