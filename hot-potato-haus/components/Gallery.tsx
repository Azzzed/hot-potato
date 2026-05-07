'use client';

import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';
import Image from 'next/image';

// These use Unsplash food photography as live placeholders.
// To use your Kaggle dataset images instead, replace each `src` with
// the local path, e.g. "/images/kaggle/filename.jpg"
const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=600&q=80&fit=crop',
    title: 'Loaded Baked Potato',
    subtitle: 'Signature item',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop',
    title: 'Artisan Latte',
    subtitle: 'House roast',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&q=80&fit=crop',
    title: 'Italian Sub',
    subtitle: 'Freshly made',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&q=80&fit=crop',
    title: 'Cheese Puff',
    subtitle: 'Daily baked',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80&fit=crop',
    title: 'Matcha Latte',
    subtitle: 'Ceremonial grade',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80&fit=crop',
    title: 'Fresh Smoothie',
    subtitle: 'Blended daily',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80&fit=crop',
    title: 'Blueberry Muffin',
    subtitle: 'House recipe',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop',
    title: 'Fresh Salads',
    subtitle: 'House-made',
    tall: true,
  },
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
              className={`masonry-item group instagram-item rounded-sm cursor-pointer transition-all duration-500 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`relative ${item.tall ? 'aspect-[3/4]' : 'aspect-square'} rounded-sm overflow-hidden bg-[#2a1200]`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1C02]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                  <p className="text-[#F5ECD7] text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </p>
                  <p className="text-[#D4A017] text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.subtitle}
                  </p>
                </div>
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
