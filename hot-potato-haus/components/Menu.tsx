'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  emoji: string;
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
      },
      {
        name: 'Baked Potato with 2 Salads & Meat',
        description: 'Our signature baked potato with two salads plus your choice of seasoned ground beef, chicken, or turkey.',
        price: '$14.99',
        tag: 'Best Seller',
        emoji: '🥔',
      },
      {
        name: 'Plain Potato with Butter & Cheese',
        description: 'Classic simplicity — golden roasted potato with creamy butter and melted cheese.',
        price: '$7.99',
        emoji: '🧈',
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
      },
      {
        name: 'Club Sandwich',
        description: 'Turkey, bacon, fresh veggies and creamy mayo on toasted artisan bread.',
        price: '$11.99',
        emoji: '🥪',
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
      },
      {
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk and silky foam — a timeless classic.',
        price: '$5.00',
        emoji: '☕',
      },
      {
        name: 'Americano',
        description: 'Bold espresso shots pulled fresh and diluted to your preferred strength.',
        price: '$4.00',
        emoji: '🖤',
      },
      {
        name: 'Cortado',
        description: 'Espresso cut with a small amount of warm milk for a balanced, bold drink.',
        price: '$4.50',
        emoji: '☕',
      },
      {
        name: 'Macchiato',
        description: 'Intense espresso lightly stained with a dollop of foamed milk.',
        price: '$4.50',
        emoji: '☕',
      },
      {
        name: 'Iced Latte',
        description: 'Double espresso over ice with cold milk — refreshing and energizing.',
        price: '$5.50',
        tag: 'Popular',
        emoji: '🧊',
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
      },
      {
        name: 'Iced Matcha Latte',
        description: 'Cold milk blended with premium matcha over ice — vibrant green and refreshing.',
        price: '$6.00',
        emoji: '🍵',
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
      },
      {
        name: 'Sweet Cheese Puff',
        description: 'Buttery pastry with sweet cream cheese filling, dusted with powdered sugar.',
        price: '$3.50',
        emoji: '🥐',
      },
      {
        name: 'Blueberry Muffin',
        description: 'Bursting with fresh blueberries, golden-topped and perfectly moist.',
        price: '$3.00',
        tag: 'Daily Bake',
        emoji: '🫐',
      },
      {
        name: 'Chocolate Muffin',
        description: 'Rich double chocolate muffin with melted chocolate chips throughout.',
        price: '$3.00',
        emoji: '🍫',
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
      },
      {
        name: 'Chamomile Herbal',
        description: 'Gentle and floral chamomile tea — perfect for a moment of calm.',
        price: '$3.50',
        emoji: '🌼',
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
      },
      {
        name: 'Agua de Jamaica',
        description: 'Traditional hibiscus agua fresca — refreshing and naturally vibrant.',
        price: '$4.00',
        tag: 'House Made',
        emoji: '🌺',
      },
    ],
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group relative bg-white border border-[#3D1C02]/8 rounded-sm p-5 card-hover cursor-default">
      {item.tag && (
        <span
          className="absolute top-4 right-4 bg-[#C4572A] text-[#F5ECD7] text-xs px-2 py-0.5 rounded-full uppercase tracking-wider"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600 }}
        >
          {item.tag}
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{item.emoji}</span>
            <h3
              className="text-[#3D1C02] font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem' }}
            >
              {item.name}
            </h3>
          </div>
          <p
            className="text-[#3D1C02]/55 leading-relaxed text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {item.description}
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <span
            className="text-[#C4572A] font-bold text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.price}
          </span>
        </div>
      </div>
      {/* Bottom accent on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C4572A] to-[#D4A017] w-0 group-hover:w-full transition-all duration-400 rounded-b-sm" />
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

        {/* Category filters — horizontal scroll on mobile */}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.items.map((item, i) => (
            <div
              key={item.name}
              className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <MenuCard item={item} />
            </div>
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
