import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
];

const deliveryLinks = [
  {
    label: 'DoorDash',
    href: 'https://www.doordash.com/store/hot-potato-haus-and-cafe-los-angeles-38723189/89820548/?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
  },
  {
    label: 'Uber Eats',
    href: 'https://www.ubereats.com/store/hot-potato-haus-and-cafe-los-angeles-231-e-12th-st/iLnTjCAiWs-sNFCtATTOow?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
  },
  {
    label: 'Grubhub',
    href: 'https://www.grubhub.com/restaurant/hot-potato-haus-and-cafe-231-east-12th-street-los-angeles/13648320?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2a1200] text-[#F5ECD7]" aria-label="Site footer">
      {/* Top CTA bar */}
      <div className="bg-[#C4572A] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-semibold" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
              Ready to experience the best baked potatoes in Los Angeles?
            </p>
            <p className="text-[#F5ECD7]/70 text-sm mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Visit us today at 231 E 12th St, Downtown LA
            </p>
          </div>
          <a href="#delivery" className="flex-shrink-0 bg-[#F5ECD7] text-[#C4572A] font-semibold px-8 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-white transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Order Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <h2 className="text-[#F5ECD7] text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hot Potato
                </h2>
                <div className="text-[#D4A017] text-xs uppercase tracking-widest mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Haus & Cafe
                </div>
              </div>
              <p className="text-[#F5ECD7]/40 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Premium baked potatoes, artisan coffee, and comfort food in Downtown Los Angeles. Family-owned and made with love.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/hotpotatohausandcafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#F5ECD7]/20 flex items-center justify-center hover:bg-[#C4572A] hover:border-[#C4572A] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[#F5ECD7] text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Navigate
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#F5ECD7]/50 hover:text-[#D4A017] text-sm transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery */}
            <div>
              <h3 className="text-[#F5ECD7] text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Order Online
              </h3>
              <ul className="space-y-2.5">
                {deliveryLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5ECD7]/50 hover:text-[#D4A017] text-sm transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label} →
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-[#F5ECD7] text-xs uppercase tracking-[0.2em] font-semibold mt-8 mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Hours
              </h3>
              <div className="space-y-1.5">
                <p className="text-[#F5ECD7]/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Mon–Fri: 8am – 6pm
                </p>
                <p className="text-[#F5ECD7]/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Sat–Sun: 9am – 5pm
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#F5ECD7] text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://maps.google.com/?q=231+E+12th+St,+Los+Angeles,+CA+90015"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-[#F5ECD7]/50 hover:text-[#D4A017] transition-colors group">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5 group-hover:text-[#D4A017]" />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      231 E 12th St<br />Los Angeles, CA 90015
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+16617330676"
                    className="flex items-center gap-2.5 text-[#F5ECD7]/50 hover:text-[#D4A017] transition-colors">
                    <Phone size={14} className="flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      (661) 733-0676
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@hotpotatohaus.com"
                    className="flex items-center gap-2.5 text-[#F5ECD7]/50 hover:text-[#D4A017] transition-colors">
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      hello@hotpotatohaus.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO local text */}
          <div className="border-t border-[#F5ECD7]/8 pt-8 mb-6">
            <p className="text-[#F5ECD7]/20 text-xs leading-relaxed text-center max-w-4xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Hot Potato Haus & Cafe — the best baked potato restaurant in Los Angeles. Serving Downtown LA's finest comfort food cafe with specialty baked potatoes, artisan coffee, matcha, fresh pastries, and handcrafted smoothies. Located at 231 E 12th St, Los Angeles, CA 90015. Available on DoorDash, Uber Eats, and Grubhub for delivery across Los Angeles.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-[#F5ECD7]/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              © {year} Hot Potato Haus & Cafe. All rights reserved.
            </p>
            <p className="text-[#F5ECD7]/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              231 E 12th St · Los Angeles, CA · (661) 733-0676
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
