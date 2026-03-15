import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Matt Graham",
  description:
    "Matt Graham is a former California judge and prosecutor turned bestselling legal thriller author. Learn about his 43-year legal career and The Van Nuys Courthouse Legal Thriller Series.",
  openGraph: {
    title: "About Matt Graham — Legal Thriller Author",
    description:
      "Former California judge and prosecutor with 43 years of courtroom experience. Now a bestselling legal thriller author.",
    url: "https://mattgrahambook.com/about",
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
    canonical: "https://mattgrahambook.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              About the Author
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Matt Graham
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              From the courtroom to the page — a 43-year legal career that became
              the foundation for bestselling fiction.
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-cream rounded-xl overflow-hidden border border-border relative">
                <Image
                  src="/images/matt-graham-author.jpg"
                  alt="Matt Graham — legal thriller author"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Quick stats */}
              <div className="mt-8 space-y-4">
                {[
                  { label: "Legal Career", value: "43 Years" },
                  { label: "Felony Trials", value: "200+" },
                  { label: "Appellate Decisions", value: "1,000+" },
                  { label: "Published Novels", value: "2" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-sm text-warm-gray">{stat.label}</span>
                    <span className="font-serif text-lg font-bold text-navy">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-2 prose">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                From the Bench to the Bestseller List
              </h2>

              <p className="text-text-secondary leading-relaxed">
                Matt Graham is a San Fernando Valley native who grew up in Van Nuys
                with a work ethic that would carry him through one of the most
                distinguished legal careers in Los Angeles County history.
              </p>

              <p className="text-text-secondary leading-relaxed">
                After attending California State University, Northridge, and Loyola
                Law School, Graham embarked on a ten-year career as a state
                prosecutor. His talent and tenacity were evident early — by age 30,
                he had successfully argued cases before both the California Supreme
                Court and the United States Supreme Court.
              </p>

              <p className="text-text-secondary leading-relaxed">
                His unlikely rise continued from the prosecutor&apos;s table to the
                Los Angeles County Superior Court bench, where he presided over
                approximately 200 felony trials. He later ascended to the
                California Court of Appeal, where he authored more than 1,000
                appellate decisions over a career spanning more than four decades.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Now retired from the bench, Graham channels those decades of
                front-row experience into fiction. His novels in The Van Nuys
                Courthouse Legal Thriller Series draw from the stranger-than-fiction
                events he witnessed during his decorated career — the conspiring
                judges, the oddballs, the misfits, and the moral gray zones that
                exist behind closed courthouse doors.
              </p>

              <p className="text-text-secondary leading-relaxed">
                His debut novel,{" "}
                <Link href="/books/hidden-behind-the-robe" className="text-navy font-medium hover:text-burgundy">
                  Hidden Behind the Robe
                </Link>
                , earned a 4.6-star rating on Amazon and was named a top award
                winner in the 2022 Reader&apos;s Favorite International Book Award
                Contest in the legal thriller category.
              </p>

              <p className="text-text-secondary leading-relaxed">
                His second novel,{" "}
                <Link href="/books/special-directives" className="text-navy font-medium hover:text-burgundy">
                  Special Directives
                </Link>
                , hit #1 on Amazon&apos;s list of new legal thrillers within 24
                hours of its release in March 2026, earning immediate five-star
                reviews from readers who praised its authenticity and suspense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Explore the Series
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Discover the novels that bring the Los Angeles justice system to life
            with insider authenticity.
          </p>
          <Link
            href="/books"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
          >
            View All Books
          </Link>
        </div>
      </section>

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
                name: "About",
                item: "https://mattgrahambook.com/about",
              },
            ],
          }),
        }}
      />
    </>
  );
}
