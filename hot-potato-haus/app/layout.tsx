import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotpotatohaus.com'),
  title: {
    default: 'Hot Potato Haus & Cafe | Best Baked Potatoes in Los Angeles',
    template: '%s | Hot Potato Haus & Cafe',
  },
  description:
    'Hot Potato Haus & Cafe — premium baked potatoes, artisan coffee, fresh pastries, and comfort food in Downtown Los Angeles. Visit us at 231 E 12th St, LA 90015.',
  keywords: [
    'baked potato restaurant Los Angeles',
    'comfort food cafe Los Angeles',
    'cafe in Downtown LA',
    'best baked potatoes in Los Angeles',
    'artisan cafe Los Angeles',
    'specialty potatoes LA',
    'bakery and cafe Los Angeles',
    'premium cafe downtown LA',
    'hot potato haus',
    'baked potato cafe LA',
    'coffee shop downtown Los Angeles',
    'matcha smoothies LA',
  ],
  authors: [{ name: 'Hot Potato Haus & Cafe' }],
  creator: 'Hot Potato Haus & Cafe',
  publisher: 'Hot Potato Haus & Cafe',
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hotpotatohaus.com',
    siteName: 'Hot Potato Haus & Cafe',
    title: 'Hot Potato Haus & Cafe | Best Baked Potatoes in Los Angeles',
    description:
      'Premium baked potatoes, artisan coffee, fresh pastries and comfort food. Located in Downtown LA at 231 E 12th St.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hot Potato Haus & Cafe — Premium Baked Potatoes in Los Angeles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Potato Haus & Cafe | Best Baked Potatoes in Los Angeles',
    description:
      'Premium baked potatoes, artisan coffee, fresh pastries and comfort food in Downtown LA.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://hotpotatohaus.com',
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Los Angeles',
    'geo.position': '34.0449;-118.2677',
    'ICBM': '34.0449, -118.2677',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'Bakery', 'CafeOrCoffeeShop'],
  '@id': 'https://hotpotatohaus.com',
  name: 'Hot Potato Haus & Cafe',
  description:
    'Premium baked potatoes, artisan coffee, fresh pastries, comfort food, matcha, and smoothies in Downtown Los Angeles.',
  url: 'https://hotpotatohaus.com',
  telephone: '+16617330676',
  email: 'hello@hotpotatohaus.com',
  image: 'https://hotpotatohaus.com/og-image.jpg',
  logo: 'https://hotpotatohaus.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '231 E 12th St',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90015',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0449,
    longitude: -118.2677,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '142',
    bestRating: '5',
    worstRating: '1',
  },
  servesCuisine: ['American', 'Comfort Food', 'Bakery', 'Cafe'],
  priceRange: '$$',
  menu: 'https://hotpotatohaus.com/#menu',
  hasMap: 'https://maps.google.com/?q=231+E+12th+St,+Los+Angeles,+CA+90015',
  sameAs: [
    'https://www.instagram.com/hotpotatohausandcafe/',
    'https://www.doordash.com',
    'https://www.ubereats.com',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3D1C02" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
