import type { Metadata } from "next";
import Link from "next/link";
import { getBookBySlug } from "@/data/books";

const book = getBookBySlug("hidden-behind-the-robe")!;

export const metadata: Metadata = {
  title: "Hidden Behind the Robe — A Courthouse Thriller",
  description: book.description,
  openGraph: {
    title: "Hidden Behind the Robe by Matt Graham",
    description: book.description,
    type: "book" as "website",
    url: "https://mattgrahambook.com/books/hidden-behind-the-robe",
  },
};

export default function HiddenBehindTheRobePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Book cover placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-[2/3] bg-white rounded-xl shadow-lg border border-border flex flex-col items-center justify-center text-center p-8">
                <span className="font-serif text-3xl font-bold text-navy leading-tight mb-2">
                  {book.title}
                </span>
                <span className="text-warm-gray">{book.subtitle}</span>
                <span className="mt-4 text-sm text-warm-gray-light">
                  Matt Graham
                </span>
                <span className="mt-2 text-xs text-warm-gray-light">
                  Book {book.seriesNumber}
                </span>
              </div>
            </div>

            {/* Book details */}
            <div className="lg:col-span-2">
              <p className="text-sm font-medium uppercase tracking-widest text-gold mb-3">
                {book.seriesName} &middot; Book {book.seriesNumber}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-warm-gray mb-6">{book.subtitle}</p>

              {/* Accolades */}
              <div className="flex flex-wrap gap-3 mb-8">
                {book.accolades.map((accolade) => (
                  <span
                    key={accolade}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-gold/10 text-navy rounded-full border border-gold/20"
                  >
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {accolade}
                  </span>
                ))}
              </div>

              {/* Buy buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={book.amazonKindle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Kindle Edition
                </a>
                <a
                  href={book.amazonPaperback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Paperback
                </a>
                <a
                  href={book.amazonAudiobook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Audiobook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-navy mb-6">
            About the Book
          </h2>
          <div className="prose">
            {book.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org Book structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: {
              "@type": "Person",
              name: "Matt Graham",
              url: "https://mattgrahambook.com",
            },
            description: book.description,
            url: "https://mattgrahambook.com/books/hidden-behind-the-robe",
            bookFormat: "https://schema.org/EBook",
            isbn: "9798792077287",
            numberOfPages: 300,
            genre: "Legal Thriller",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: book.rating,
              bestRating: 5,
              ratingCount: 100,
            },
            award: "2022 Reader's Favorite Award — Legal Thriller",
          }),
        }}
      />

      {/* Next in series CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold mb-3">
            Next in the Series
          </p>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Special Directives
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            The second installment in The Van Nuys Courthouse Legal Thriller
            Series. #1 New Release on Amazon.
          </p>
          <Link
            href="/books/special-directives"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
          >
            View Special Directives
          </Link>
        </div>
      </section>
    </>
  );
}
