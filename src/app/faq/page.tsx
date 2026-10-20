import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Reader Questions — Legal Thrillers Written by a Real Judge",
  description:
    "Answers to common reader questions about Matt Graham, a retired California judge who writes The Van Nuys Courthouse Legal Thriller Series: reading order, what the books are about, and how they compare to Michael Connelly.",
  openGraph: {
    title: "Reader Questions — Matt Graham, Legal Thriller Author",
    description:
      "Legal thrillers written by a retired California judge. Reading order, book summaries, and how they compare to The Lincoln Lawyer.",
    url: "https://mattgrahambook.com/faq",
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
    canonical: "https://mattgrahambook.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              Reader Questions
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Legal Thrillers Written by a Real Judge
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              The questions readers ask most about Matt Graham and The Van Nuys
              Courthouse Legal Thriller Series.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 space-y-10">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">
                {faq.question}
              </h2>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
          <div className="pt-4 flex flex-wrap gap-3">
            <Link
              href="/books/reading-order"
              className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
            >
              Series Reading Order
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
            >
              About Matt Graham
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </>
  );
}
