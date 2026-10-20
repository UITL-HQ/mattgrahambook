import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import { AUTHOR_ID, SERIES_ID } from "@/data/author";

export const metadata: Metadata = {
  title: "The Van Nuys Courthouse Series in Order",
  description:
    "The Van Nuys Courthouse Legal Thriller Series by Matt Graham in reading order: 1. Hidden Behind the Robe (2022), 2. Special Directives (2026).",
  openGraph: {
    title: "The Van Nuys Courthouse Legal Thriller Series in Order",
    description:
      "Matt Graham's courthouse thrillers in reading order: Hidden Behind the Robe, then Special Directives.",
    url: "https://mattgrahambook.com/books/reading-order",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Matt Graham — Legal Thriller Author",
      },
    ],
  },
  alternates: {
    canonical: "https://mattgrahambook.com/books/reading-order",
  },
};

const ordered = [...books].sort((a, b) => a.seriesNumber - b.seriesNumber);

export default function ReadingOrderPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              Reading Order
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              The Van Nuys Courthouse Series in Order
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Read Matt Graham&apos;s courthouse thrillers in publication order:
              Hidden Behind the Robe first, then Special Directives. Both are set
              in the Van Nuys courthouse in Los Angeles and written by a retired
              California judge.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ol className="mx-auto max-w-4xl px-6 py-16 space-y-12">
          {ordered.map((book) => (
            <li key={book.slug} className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-start">
              <div className="w-full max-w-[200px] mx-auto sm:max-w-none sm:col-span-1 aspect-[2/3] relative rounded-lg overflow-hidden border border-border shadow">
                <Image
                  src={book.coverImage}
                  alt={`${book.title} by Matt Graham — book cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="sm:col-span-3">
                <p className="text-sm font-medium uppercase tracking-widest text-gold mb-2">
                  Book {book.seriesNumber} &middot; {book.releaseDate}
                </p>
                <h2 className="font-serif text-3xl font-bold text-navy mb-3">
                  {book.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {book.description}
                </p>
                <Link
                  href={`/books/${book.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
                >
                  More about {book.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "The Van Nuys Courthouse Legal Thriller Series in reading order",
            about: { "@id": SERIES_ID },
            author: { "@id": AUTHOR_ID },
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            itemListElement: ordered.map((book) => ({
              "@type": "ListItem",
              position: book.seriesNumber,
              name: book.title,
              url: `https://mattgrahambook.com/books/${book.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
