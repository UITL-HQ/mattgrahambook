import type { Metadata } from "next";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore The Van Nuys Courthouse Legal Thriller Series by Matt Graham. Award-winning courtroom thrillers from a former California judge.",
  openGraph: {
    title: "Books by Matt Graham — The Van Nuys Courthouse Legal Thriller Series",
    description:
      "Award-winning courtroom thrillers from a former California judge. Hidden Behind the Robe and Special Directives.",
    url: "https://mattgrahambook.com/books",
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
    canonical: "https://mattgrahambook.com/books",
  },
};

export default function BooksPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              The Van Nuys Courthouse Legal Thriller Series
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              The Books
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Where the line between justice and corruption is thinner than you
              think. Each novel draws from real courtroom experience to deliver
              insider authenticity that only a judge who has seen it all could
              write.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ItemList structured data for book listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "The Van Nuys Courthouse Legal Thriller Series",
            numberOfItems: books.length,
            itemListElement: books.map((book, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://mattgrahambook.com/books/${book.slug}`,
              name: book.title,
            })),
          }),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mattgrahambook.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Books",
                item: "https://mattgrahambook.com/books",
              },
            ],
          }),
        }}
      />
    </>
  );
}
