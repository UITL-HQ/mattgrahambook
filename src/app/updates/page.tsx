import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Latest news, book releases, and updates from legal thriller author Matt Graham.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              News & Announcements
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Updates
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              The latest on new releases, awards, events, and behind-the-scenes
              stories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-12">
            {posts
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post) => (
                <article
                  key={post.slug}
                  className="pb-12 border-b border-border last:border-0"
                >
                  <time className="text-sm text-warm-gray-light">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="font-serif text-2xl font-bold text-navy mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="prose">
                    {post.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-text-secondary leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Want Updates Delivered?
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Subscribe to the mailing list and never miss a new release or
            announcement.
          </p>
          <Link
            href="/#mailing-list"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors text-sm"
          >
            Join the Mailing List
          </Link>
        </div>
      </section>
    </>
  );
}
