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
  title: "Wingoo - Food & Grocery Delivery | Cashless Delivery Across India",
  description:
    "Wingoo is India's first 100% cashless food and grocery delivery platform serving both urban and rural areas. Fast delivery, online payments, franchise opportunities available.",
  keywords: [
    "Wingoo",
    "food delivery",
    "grocery delivery",
    "cashless delivery",
    "online food order",
    "franchise",
    "India delivery app",
    "quick commerce",
  ],
  authors: [{ name: "Wingoo" }],
  icons: {
    icon: "/wingoo-logo.png",
  },
  openGraph: {
    title: "Wingoo - Food & Grocery Delivery",
    description:
      "India's first 100% cashless food & grocery delivery platform for urban and rural India",
    url: "https://wingoo.com",
    siteName: "Wingoo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wingoo - Food & Grocery Delivery",
    description:
      "India's first 100% cashless food & grocery delivery platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
