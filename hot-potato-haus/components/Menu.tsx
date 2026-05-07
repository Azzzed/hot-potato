'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  emoji: string;
  image: string; // Unsplash URL — swap for /images/kaggle/filename.jpg from your dataset
};

type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'potatoes',
    label: 'Potatoes',
    emoji: '🥔',
    items: [
      {
        name: 'Baked Potato with 2 Salads',
        description: 'Perfectly slow-roasted potato topped with your choice of two house-made salads and fresh toppings.',
        price: '$11.99',
        tag: 'Fan Favorite',
        emoji: '🥔',
        image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80&fit=crop',
      },
      {
        name: 'Baked Potato with 2 Salads & Meat',
        description: 'Our signature baked potato with two salads plus your choice of seasoned ground beef, chicken, or turkey.',
        price: '$14.99',
        tag: 'Best Seller',
        emoji: '🥔',
        image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80&fit=crop',
      },
      {
        name: 'Plain Potato with Butter & Cheese',
        description: 'Classic simplicity — golden roasted potato with creamy butter and melted cheese.',
        price: '$7.99',
        emoji: '🧈',
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    emoji: '🥪',
    items: [
      {
        name: 'Italian Deli Sandwich',
        description: 'Layered salami, ham, fresh avocado, tomato, lettuce and cheese on housemade bread.',
        price: '$12.99',
        tag: 'Popular',
        emoji: '🥪',
        image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80&fit=crop',
      },
      {
        name: 'Club Sandwich',
        description: 'Turkey, bacon, fresh veggies and creamy mayo on toasted artisan bread.',
        price: '$11.99',
        emoji: '🥪',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    emoji: '☕',
    items: [
      {
        name: 'Hot Latte',
        description: 'Velvety steamed milk and double espresso for the perfect balance of rich and smooth.',
        price: '$5.50',
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&fit=crop',
      },
      {
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk and silky foam — a timeless classic.',
        price: '$5.00',
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&q=80&fit=crop',
      },
      {
        name: 'Americano',
        description: 'Bold espresso shots pulled fresh and diluted to your preferred strength.',
        price: '$4.00',
        emoji: '🖤',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80&fit=crop',
      },
      {
        name: 'Cortado',
        description: 'Espresso cut with a small amount of warm milk for a balanced, bold drink.',
        price: '$4.50',
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80&fit=crop',
      },
      {
        name: 'Macchiato',
        description: 'Intense espresso lightly stained with a dollop of foamed milk.',
        price: '$4.50',
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&q=80&fit=crop',
      },
      {
        name: 'Iced Latte',
        description: 'Double espresso over ice with cold milk — refreshing and energizing.',
        price: '$5.50',
        tag: 'Popular',
        emoji: '🧊',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'matcha',
    label: 'Matcha',
    emoji: '🍵',
    items: [
      {
        name: 'Matcha Latte',
        description: 'Ceremonial grade matcha whisked with oat milk for a creamy, earthy sip.',
        price: '$6.00',
        tag: 'New',
        emoji: '🍵',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80&fit=crop',
      },
      {
        name: 'Iced Matcha Latte',
        description: 'Cold milk blended with premium matcha over ice — vibrant green and refreshing.',
        price: '$6.00',
        emoji: '🍵',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    emoji: '🥐',
    items: [
      {
        name: 'Savory Cheese Puff',
        description: 'Warm, flaky pastry filled with gooey melted cheese — baked fresh every morning.',
        price: '$3.50',
        emoji: '🥐',
        image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&q=80&fit=crop',
      },
      {
        name: 'Sweet Cheese Puff',
        description: 'Buttery pastry with sweet cream cheese filling, dusted with powdered sugar.',
        price: '$3.50',
        emoji: '🥐',
        image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&q=80&fit=crop',
      },
      {
        name: 'Blueberry Muffin',
        description: 'Bursting with fresh blueberries, golden-topped and perfectly moist.',
        price: '$3.00',
        tag: 'Daily Bake',
        emoji: '🫐',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80&fit=crop',
      },
      {
        name: 'Chocolate Muffin',
        description: 'Rich double chocolate muffin with melted chocolate chips throughout.',
        price: '$3.00',
        emoji: '🍫',
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'smoothies',
    label: 'Smoothies',
    emoji: '🥤',
    items: [
      {
        name: 'Strawberry Banana Smoothie',
        description: 'Blended fresh strawberries and banana with yogurt and a touch of honey.',
        price: '$7.00',
        tag: 'Fresh Daily',
        emoji: '🍓',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    emoji: '🫖',
    items: [
      {
        name: 'Classic Black Tea',
        description: 'Premium loose-leaf black tea, steeped to your desired strength.',
        price: '$3.00',
        emoji: '🫖',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80&fit=crop',
      },
      {
        name: 'Chamomile Herbal',
        description: 'Gentle and floral chamomile tea — perfect for a moment of calm.',
        price: '$3.50',
        emoji: '🌼',
        image: 'https://images.unsplash.com/photo-1597481499666-5f634d39b3ff?w=400&q=80&fit=crop',
      },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    emoji: '🥛',
    items: [
      {
        name: 'Fresh Lemonade',
        description: 'Hand-squeezed lemonade with just the right balance of tart and sweet.',
        price: '$4.00',
        emoji: '🍋',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80&fit=crop',
      },
      {
        name: 'Agua de Jamaica',
        description: 'Traditional hibiscus agua fresca — refreshing and naturally vibrant.',
        price: '$4.00',
        tag: 'House Made',
        emoji: '🌺',
        image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80&fit=crop',
      },
    ],
  },
];

function MenuCard({ item, inView, delay }: { item: MenuItem; inView: boolean; delay: number }) {
  return (
    <div
      className={`group relative bg-white border border-[#3D1C02]/8 rounded-sm overflow-hidden card-hover cursor-default transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Food image */}
      <div className="relative h-40 overflow-hidden bg-[#EDD9B4]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 group-hover:scale-110"
        />
        {/* Warm overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1C02]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {item.tag && (
          <span
            className="absolute top-3 left-3 bg-[#C4572A] text-[#F5ECD7] text-xs px-2 py-0.5 rounded-full uppercase tracking-wider z-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600 }}
          >
            {item.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-[#3D1C02] font-semibold leading-tight flex-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem' }}
          >
            {item.name}
          </h3>
          <span
            className="text-[#C4572A] font-bold text-base flex-shrink-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.price}
          </span>
        </div>
        <p
          className="text-[#3D1C02]/55 leading-relaxed text-sm mt-2"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {item.description}
        </p>
      </div>

      {/* Bottom accent on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C4572A] to-[#D4A017] w-0 group-hover:w-full transition-all duration-500 rounded-b-sm" />
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('potatoes');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const active = menuData.find((c) => c.id === activeCategory) ?? menuData[0];

  return (
    <section
      id="menu"
      className="py-24 lg:py-36"
      style={{ background: 'linear-gradient(180deg, #EDD9B4 0%, #F5ECD7 100%)' }}
      aria-labelledby="menu-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#C4572A] text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Menu
            </span>
            <div className="section-divider" />
          </div>
          <h2
            id="menu-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#3D1C02',
              letterSpacing: '-0.02em',
            }}
          >
            Made Fresh, Every Day
          </h2>
          <p
            className="mt-4 text-[#3D1C02]/60 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300 }}
          >
            From our signature baked potatoes to handcrafted coffee — each item made with care and quality ingredients.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`menu-filter-btn flex-shrink-0 flex items-center gap-1.5 ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.items.map((item, i) => (
            <MenuCard key={item.name} item={item} inView={inView} delay={i * 80} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[#3D1C02]/50 text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Order online for pickup or delivery
          </p>
          <a href="#delivery" className="btn-primary inline-block">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
