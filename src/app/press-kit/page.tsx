import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press kit for Matt Graham, bestselling legal thriller author. Download author photos, book covers, and bio for media inquiries.",
  openGraph: {
    title: "Press Kit — Matt Graham, Legal Thriller Author",
    description:
      "Download author photos, book covers, and bios for interviews, features, and reviews.",
    url: "https://mattgrahambook.com/press-kit",
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
    canonical: "https://mattgrahambook.com/press-kit",
  },
};

export default function PressKitPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              For Media
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Everything you need for interviews, features, and reviews.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          {/* Short Bio */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Short Bio
            </h2>
            <div className="bg-cream rounded-xl p-6 border border-border">
              <p className="text-text-secondary leading-relaxed">
                Matt Graham is a bestselling legal thriller author and former
                California judge. Over a 43-year legal career, he served as a
                state prosecutor, Los Angeles County Superior Court judge, and
                California Court of Appeal justice — presiding over 200+ felony
                trials and authoring 1,000+ appellate decisions. His Van Nuys
                Courthouse Legal Thriller Series has earned a Reader&apos;s
                Favorite Award and a #1 Amazon new release ranking.
              </p>
            </div>
          </div>

          {/* Long Bio */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Long Bio
            </h2>
            <div className="bg-cream rounded-xl p-6 border border-border prose">
              <p className="text-text-secondary leading-relaxed">
                Matt Graham is a San Fernando Valley native who attended
                California State University, Northridge, and Loyola Law School
                before embarking on one of the most distinguished legal careers
                in Los Angeles County history.
              </p>
              <p className="text-text-secondary leading-relaxed">
                His ten-year career as a state prosecutor was marked by
                extraordinary ambition — by age 30, he had successfully argued
                cases before both the California and United States Supreme
                Courts. He went on to serve as a Los Angeles County Superior
                Court judge, presiding over approximately 200 felony trials,
                before ascending to the California Court of Appeal, where he
                authored more than 1,000 appellate decisions over a career
                spanning more than four decades.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Now retired from the bench, Graham draws on those decades of
                front-row legal experience to write The Van Nuys Courthouse
                Legal Thriller Series. His debut novel, Hidden Behind the Robe,
                earned a 4.6-star Amazon rating and was named a top award winner
                in the 2022 Reader&apos;s Favorite International Book Award
                Contest. His second novel, Special Directives, hit #1 on
                Amazon&apos;s list of new legal thrillers within 24 hours of its
                March 2026 release.
              </p>
            </div>
          </div>

          {/* Books at a Glance */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Books at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-border">
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  Hidden Behind the Robe
                </h3>
                <p className="text-sm text-warm-gray-light mb-3">
                  Book 1 &middot; Published 2022
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>4.6 stars on Amazon</li>
                  <li>2022 Reader&apos;s Favorite Award — Legal Thriller</li>
                  <li>Available: Kindle, Paperback, Audiobook</li>
                </ul>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-border">
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  Special Directives
                </h3>
                <p className="text-sm text-warm-gray-light mb-3">
                  Book 2 &middot; Published March 2026
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>#1 Amazon New Release — Legal Thrillers</li>
                  <li>Five-Star Reviews</li>
                  <li>Available on Amazon</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Downloadable Assets */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Downloadable Assets
            </h2>
            <p className="text-text-secondary mb-6">
              High-resolution images for press use. Please credit &ldquo;Matt
              Graham&rdquo; when using these materials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Author Headshot", src: "/images/matt-graham-author.jpg" },
                { label: "Hidden Behind the Robe Cover", src: "/images/hidden-behind-the-robe.jpg" },
                { label: "Special Directives Cover", src: "/images/special-directives.jpg" },
              ].map((asset) => (
                <a
                  key={asset.label}
                  href={asset.src}
                  download
                  className="bg-cream rounded-xl p-4 border border-border text-center hover:shadow-md transition-shadow block"
                >
                  <div className="aspect-square relative mb-3 rounded-lg overflow-hidden bg-white">
                    <img
                      src={asset.src}
                      alt={asset.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-navy">{asset.label}</p>
                  <p className="text-xs text-warm-gray-light mt-1">Click to download</p>
                </a>
              ))}
            </div>
          </div>

          {/* Media Contact */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Media Contact
            </h2>
            <div className="bg-cream rounded-xl p-6 border border-border">
              <p className="text-text-secondary">
                For interview requests, review copies, and press inquiries,
                please reach out via the{" "}
                <a href="/contact" className="text-navy font-medium hover:text-burgundy">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
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
                name: "Press Kit",
                item: "https://mattgrahambook.com/press-kit",
              },
            ],
          }),
        }}
      />
    </>
  );
}
