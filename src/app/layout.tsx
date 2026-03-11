import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Matt Graham | Legal Thriller Author",
    template: "%s | Matt Graham",
  },
  description:
    "Matt Graham is a bestselling legal thriller author and former California judge. Explore The Van Nuys Courthouse Legal Thriller Series, featuring Hidden Behind the Robe and Special Directives.",
  keywords: [
    "Matt Graham",
    "legal thriller",
    "courtroom thriller",
    "Hidden Behind the Robe",
    "Special Directives",
    "Van Nuys Courthouse",
    "legal fiction",
    "judge author",
    "California courts",
    "bestselling author",
  ],
  authors: [{ name: "Matt Graham" }],
  creator: "Matt Graham",
  publisher: "Matt Graham",
  metadataBase: new URL("https://mattgrahambook.com"),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mattgrahambook.com",
    siteName: "Matt Graham — Legal Thriller Author",
    title: "Matt Graham | Legal Thriller Author",
    description:
      "Bestselling legal thriller author and former California judge. Explore The Van Nuys Courthouse Legal Thriller Series.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Matt Graham — Legal Thriller Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Graham | Legal Thriller Author",
    description:
      "Bestselling legal thriller author and former California judge. Explore The Van Nuys Courthouse Legal Thriller Series.",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://mattgrahambook.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Matt Graham",
              url: "https://mattgrahambook.com",
              description:
                "Bestselling legal thriller author and former California judge and prosecutor.",
              jobTitle: "Author",
              sameAs: [
                "https://www.facebook.com/mattgrahambooks",
                "https://www.instagram.com/mattgrahambooks",
                "https://www.amazon.com/stores/author/B09PJVZ2VZ",
                "https://www.audible.com/author/Matt-Graham/B09PJVZ2VZ",
              ],
              knowsAbout: [
                "Legal Thrillers",
                "Criminal Law",
                "California Courts",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Matt Graham — Legal Thriller Author",
              url: "https://mattgrahambook.com",
              description:
                "Official website of Matt Graham, bestselling legal thriller author.",
            }),
          }}
        />
      </head>
      <body
        className={`${lora.variable} ${sourceSans.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
