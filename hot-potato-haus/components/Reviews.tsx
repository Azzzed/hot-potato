'use client';

import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria G.',
    avatar: 'M',
    rating: 5,
    date: '2 weeks ago',
    text: 'The baked potato with salads was absolutely incredible! So loaded with fresh toppings and everything tasted homemade. The coffee was also great. This place is such a hidden gem in Downtown LA.',
    color: '#C4572A',
  },
  {
    name: 'James L.',
    avatar: 'J',
    rating: 5,
    date: '1 month ago',
    text: "Best baked potato I've ever had. Period. The loaded version with meat is filling, fresh, and the flavors are amazing. The staff are so friendly and welcoming. Will definitely be back!",
    color: '#3D1C02',
  },
  {
    name: 'Sofia R.',
    avatar: 'S',
    rating: 5,
    date: '3 weeks ago',
    text: 'The cheese puff pastries are dangerously good — I bought three! The matcha latte was perfectly crafted and not too sweet. Love the cozy atmosphere. My new favorite spot in LA.',
    color: '#D4A017',
  },
  {
    name: 'Kevin T.',
    avatar: 'K',
    rating: 5,
    date: '1 week ago',
    text: 'Ordered on DoorDash and everything arrived perfectly. The baked potato was still hot and loaded with amazing toppings. The Italian sub was also top-notch. Great value for the quality!',
    color: '#8B1A1A',
  },
  {
    name: 'Ana M.',
    avatar: 'A',
    rating: 5,
    date: '2 months ago',
    text: 'A true neighborhood gem. The family that runs this place puts so much love into every dish. The strawberry banana smoothie is fresh and the blueberry muffin is bakery-quality. 10/10.',
    color: '#C4572A',
  },
  {
    name: 'David P.',
    avatar: 'D',
    rating: 5,
    date: '5 days ago',
    text: 'Finally a place in Downtown LA that does comfort food RIGHT. The baked potatoes are the real deal — crispy outside, fluffy inside, and topped beautifully. Coffee is excellent too.',
    color: '#3D1C02',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#D4A017] text-[#D4A017]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="reviews"
      className="py-24 lg:py-36 bg-[#F5ECD7]"
      aria-labelledby="reviews-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#C4572A] text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Guest Reviews
            </span>
            <div className="section-divider" />
          </div>
          <h2
            id="reviews-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#3D1C02',
              letterSpacing: '-0.02em',
            }}
          >
            What Our Guests Say
          </h2>

          {/* Overall rating display */}
          <div className="mt-6 inline-flex items-center gap-4 bg-[#3D1C02] text-[#F5ECD7] px-8 py-4 rounded-sm">
            <div>
              <div className="text-4xl font-bold text-[#D4A017]" style={{ fontFamily: "'Playfair Display', serif" }}>
                5.0
              </div>
              <div className="flex justify-center mt-1">
                <StarRating count={5} />
              </div>
            </div>
            <div className="w-px h-12 bg-[#F5ECD7]/20" />
            <div className="text-left">
              <div className="text-[#F5ECD7] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Google Reviews
              </div>
              <div className="text-[#F5ECD7]/50 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Based on 142+ reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`relative bg-white border border-[#3D1C02]/6 rounded-sm p-6 card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={24}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: review.color }}
              />

              {/* Reviewer info */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#F5ECD7] font-bold flex-shrink-0"
                  style={{ backgroundColor: review.color, fontFamily: "'Playfair Display', serif" }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#3D1C02] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {review.name}
                  </div>
                  <div className="text-[#3D1C02]/40 text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {review.date}
                  </div>
                </div>
                {/* Google logo placeholder */}
                <div className="ml-auto text-xs font-bold opacity-30"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#3D1C02' }}>
                  G
                </div>
              </div>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Text */}
              <p className="mt-3 text-[#3D1C02]/70 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                "{review.text}"
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-12 rounded-b-sm"
                style={{ backgroundColor: review.color }}
              />
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className={`text-center mt-12 transition-all duration-800 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://maps.google.com/?q=Hot+Potato+Haus+Cafe+Los+Angeles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C4572A] hover:text-[#8B1A1A] text-sm transition-colors border-b border-[#C4572A]/30 pb-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Read all reviews on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
