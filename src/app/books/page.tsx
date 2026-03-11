import type { Metadata } from "next";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore The Van Nuys Courthouse Legal Thriller Series by Matt Graham. Award-winning courtroom thrillers from a former California judge.",
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
    </>
  );
}
