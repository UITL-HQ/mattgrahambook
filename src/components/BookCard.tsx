import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[2/3] bg-cream relative overflow-hidden">
        <Image
          src={book.coverImage}
          alt={`${book.title} by Matt Graham — book cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-navy mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-warm-gray-light mb-3">{book.subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {book.accolades.map((accolade) => (
            <span
              key={accolade}
              className="inline-block text-xs font-medium px-3 py-1 bg-gold/10 text-gold-light rounded-full border border-gold/20"
            >
              {accolade}
            </span>
          ))}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {book.description}
        </p>
        <div className="flex gap-3">
          <Link
            href={`/books/${book.slug}`}
            className="flex-1 text-center px-4 py-2.5 bg-navy hover:bg-navy-light text-white text-sm font-medium rounded-lg transition-colors"
          >
            Learn More
          </Link>
          <a
            href={book.amazonKindle}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 border border-navy text-navy hover:bg-navy hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
