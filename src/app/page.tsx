import Link from "next/link";
import BookCard from "@/components/BookCard";
import MailingListForm from "@/components/MailingListForm";
import { books } from "@/data/books";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              The Van Nuys Courthouse Legal Thriller Series
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Justice has a story.
              <br />
              <span className="text-burgundy">Matt Graham tells it.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              From 43 years on the bench and in the courtroom, bestselling author
              Matt Graham brings the Los Angeles justice system to life with
              insider authenticity and page-turning suspense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/books"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
              >
                Explore the Series
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-navy text-navy hover:bg-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
              >
                About the Author
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accolades bar */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">#1 Amazon New Release — Legal Thrillers</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">4.6 Stars on Amazon</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Reader&apos;s Favorite Award Winner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              The Books
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The Van Nuys Courthouse Legal Thriller Series — where the line
              between justice and corruption is thinner than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* About excerpt */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              About the Author
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Matt Graham is a San Fernando Valley native who attended Cal State
              Northridge and Loyola Law School. Over a distinguished 43-year legal
              career, he served as a state prosecutor, Los Angeles County Superior
              Court judge, and California Court of Appeal justice.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              By age 30, he had successfully argued cases before both the
              California and United States Supreme Courts. Now he channels those
              decades of courtroom experience into fiction that readers call
              &ldquo;stranger than fiction.&rdquo;
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-navy font-medium hover:text-burgundy transition-colors"
            >
              Read full biography
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mailing list CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold mb-3">
            Never Miss a Release
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Join the mailing list for exclusive updates on new books,
            behind-the-scenes stories, and upcoming events.
          </p>
          <MailingListForm />
        </div>
      </section>
    </>
  );
}
