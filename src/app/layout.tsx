import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Mozoo - Food & Grocery Delivery | 100% Cashless Delivery in India",
  description:
    "Mozoo is India's first 100% cashless food and grocery delivery platform. Order food from local restaurants, get groceries delivered fast. Serving urban and rural India. Franchise opportunities available.",
  keywords: [
    "Mozoo",
    "Mozoo delivery",
    "food delivery India",
    "grocery delivery India",
    "cashless delivery",
    "online food order",
    "online grocery order",
    "food delivery app",
    "grocery delivery app",
    "franchise opportunity India",
    "delivery franchise",
    "Mozoo franchise",
    "cashless food delivery",
    "rural delivery India",
    "quick commerce India",
    "food delivery near me",
    "grocery delivery near me",
    "online food delivery",
    "instant grocery delivery",
    "UPI payment delivery",
    "digital payment food delivery",
    "Mozoo food delivery",
    "Mozoo grocery delivery",
    "delivery service India",
    "food order online",
    "restaurant delivery",
    "mart delivery",
    "taluka delivery",
    "village delivery service",
  ],
  authors: [{ name: "Mozoo", url: "https://mozoo.in" }],
  creator: "Mozoo",
  publisher: "Mozoo",
  metadataBase: new URL("https://mozoo.in"),
  alternates: {
    canonical: "https://mozoo.in",
  },
  icons: {
    icon: "/mozoo-logo.png",
    apple: "/mozoo-logo.png",
  },
  openGraph: {
    title: "Mozoo - Food & Grocery Delivery | 100% Cashless",
    description:
      "India's first 100% cashless food & grocery delivery platform. Fast delivery to urban and rural India. Order now on Mozoo!",
    url: "https://mozoo.in",
    siteName: "Mozoo",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/hero-banner.webp",
        width: 1200,
        height: 685,
        alt: "Mozoo Food & Grocery Delivery Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozoo - Food & Grocery Delivery | 100% Cashless",
    description:
      "India's first 100% cashless food & grocery delivery platform. Order food & groceries online.",
    images: ["/hero-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Grocery Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mozoo",
              "url": "https://mozoo.in",
              "logo": "https://mozoo.in/mozoo-logo.png",
              "description": "India's first 100% cashless food and grocery delivery platform serving urban and rural India.",
              "telephone": "+91-9823166155",
              "email": "support@mozoo.in",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9823166155",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Marathi"]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mozoo",
              "url": "https://mozoo.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mozoo.in/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Food and Grocery Delivery",
              "provider": {
                "@type": "Organization",
                "name": "Mozoo"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": "100% cashless food and grocery delivery across urban and rural India. Franchise opportunities available.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-foreground`}
      >
        {children}
        <Toaster />

        {/* WhatsApp Floating Button - Mobile Responsive */}
        <a
          href="https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20your%20Mozoo%20Services.%20Please%20provide%20me%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] group"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          {/* Tooltip - hidden on mobile (hover not available), visible on desktop */}
          <span className="hidden sm:block absolute -top-12 right-0 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
            Chat with us!
            <span className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45" />
          </span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 animate-bounce-subtle">
            <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.38L1.056 31.2l6.064-1.952c2.52 1.68 5.52 2.656 8.884 2.656C24.826 31.904 32 24.728 32 16.004S24.826 0 16.004 0zm9.312 22.592c-.392 1.104-1.936 2.02-3.172 2.288-.848.18-1.956.324-5.688-1.224-4.776-1.98-7.848-6.828-8.084-7.144-.228-.316-1.932-2.576-1.932-4.916s1.224-3.488 1.66-3.964c.436-.476.952-.596 1.268-.596.316 0 .632.004.908.016.292.012.684-.112 1.068.816.392.948 1.332 3.256 1.448 3.492.116.236.196.512.04.828-.156.316-.236.512-.472.788-.236.276-.496.616-.708.828-.236.236-.484.492-.208.964.276.472 1.228 2.024 2.636 3.28 1.812 1.616 3.34 2.116 3.812 2.352.472.236.748.196 1.024-.12.276-.316 1.18-1.38 1.496-1.856.316-.476.632-.392 1.068-.236.436.156 2.756 1.3 3.228 1.536.472.236.788.356.904.548.116.196.116 1.116-.276 2.22z"/>
            </svg>
          </div>
        </a>
      </body>
    </html>
  );
}
