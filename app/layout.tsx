import type {Metadata} from 'next';
import { IBM_Plex_Sans_Arabic, Syne } from 'next/font/google';
import './globals.css'; // Global styles

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'عفاف سعود | خبيرة بناء وتطوير المتاجر الإلكترونية والهويات البصرية',
  description: 'بناء وتطوير متاجر إلكترونية احترافية على منصات سلة وزد، تصميم هويات بصرية متكاملة وشعارات فريدة، والمساعدة في زيادة المبيعات والنمو الرقمي مع عفاف سعود.',
  keywords: [
    'عفاف سعود',
    'تصميم متاجر سلة',
    'تصميم متاجر زد',
    'تطوير متاجر إلكترونية',
    'تصميم هوية بصرية متميزة',
    'تصميم شعارات احترافية',
    'زيادة مبيعات المتاجر',
    'استشارات تجارة إلكترونية',
    'هوية تجارية متكاملة',
    'تصميم متجر إلكتروني',
    'التسويق الرقمي والنمو',
    'بناء علامة تجارية',
  ],
  authors: [{ name: 'عفاف سعود', url: 'https://afafsaud.com' }],
  creator: 'عفاف سعود',
  publisher: 'عفاف سعود',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'عفاف سعود | بناء وتطوير المتاجر الإلكترونية والهويات البصرية',
    description: 'بناء وتطوير متاجر إلكترونية احترافية، تصميم هويات بصرية متكاملة، وزيادة مبيعاتك ونمو علاماتك التجارية مع عفاف سعود.',
    url: 'https://afafsaud.com',
    siteName: 'عفاف سعود للخدمات الرقمية',
    images: [
      {
        url: '/afaf_saud_logo.webp',
        width: 1024,
        height: 1024,
        alt: 'عفاف سعود - بناء متاجر وهويات بصرية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عفاف سعود | بناء وتطوير المتاجر الإلكترونية والهويات البصرية',
    description: 'بناء وتطوير متاجر ومواقع، تصميم هويات بصرية فريدة، وتحسين تجربة المستخدم لزيادة المبيعات الرقمية مع عفاف سعود.',
    images: ['/afaf_saud_logo.webp'],
    creator: '@afafsaud',
  },
  icons: {
    icon: [
      { url: '/afaf_saud_logo.webp?v=2', sizes: 'any', type: 'image/webp' },
    ],
    shortcut: '/afaf_saud_logo.webp?v=2',
    apple: '/afaf_saud_logo.webp?v=2',
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "عفاف سعود - خدمات رقمية وبناء متاجر",
  "image": "https://afafsaud.com/afaf_saud_logo.webp",
  "@id": "https://afafsaud.com/#service",
  "url": "https://afafsaud.com",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "الرياض",
    "addressRegion": "الرياض",
    "postalCode": "",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://twitter.com/afafsaud",
    "https://instagram.com/afafsaud",
    "https://linkedin.com/in/afafsaud"
  ],
  "description": "منصة عفاف سعود المتكاملة لتقديم خدمات تصميم المواقع والمتاجر الإلكترونية على سلة وزد وتصميم الهويات البصرية والشعارات الفريدة وتحسين مبيعات المتاجر.",
  "priceRange": "$$"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${syne.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MG1Y9PXCE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9MG1Y9PXCE');
          `
        }} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#0C0B10] text-[#EDE9F5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
