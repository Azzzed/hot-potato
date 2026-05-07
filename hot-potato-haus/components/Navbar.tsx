'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#3D1C02]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#C4572A] flex items-center justify-center overflow-hidden border-2 border-[#D4A017]/40">
                <span className="text-[#F5ECD7] font-bold text-sm" style={{ fontFamily: 'serif' }}>HP</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-[#F5ECD7] font-serif text-base font-700 leading-tight tracking-wide" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                  Hot Potato
                </div>
                <div className="text-[#D4A017] text-xs font-sans uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Haus & Cafe
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#F5ECD7]/80 hover:text-[#D4A017] text-sm uppercase tracking-widest font-medium transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+16617330676"
                className="flex items-center gap-2 text-[#F5ECD7]/70 hover:text-[#D4A017] transition-colors text-sm"
              >
                <Phone size={14} />
                <span className="text-xs">(661) 733-0676</span>
              </a>
              <a
                href="#menu"
                className="btn-primary text-xs px-5 py-2.5"
              >
                View Menu
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-[#F5ECD7] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#3D1C02]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#F5ECD7] hover:text-[#D4A017] font-serif text-3xl font-medium transition-colors"
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href="tel:+16617330676"
              className="flex items-center gap-2 text-[#D4A017] text-sm"
            >
              <Phone size={16} />
              (661) 733-0676
            </a>
            <a href="#menu" onClick={() => setMobileOpen(false)} className="btn-primary">
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#3D1C02]/95 backdrop-blur-md border-t border-[#C4572A]/20 px-4 py-3 flex gap-3">
        <a href="#delivery" className="flex-1 btn-primary text-center text-xs py-3">
          Order Now
        </a>
        <a href="#menu" className="flex-1 btn-outline border-[#C4572A] text-[#F5ECD7] text-center text-xs py-3 rounded-sm">
          View Menu
        </a>
      </div>
    </>
  );
}
