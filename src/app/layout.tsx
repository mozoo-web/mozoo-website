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
    <html lang="en-IN" suppressHydrationWarning className="scroll-smooth">
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
      </body>
    </html>
  );
}
