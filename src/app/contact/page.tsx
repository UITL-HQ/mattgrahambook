import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Matt Graham. For press inquiries, reader questions, speaking engagements, and general correspondence.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Contact
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Have a question, press inquiry, or just want to say hello? I&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-warm-gray mb-3">
                  Follow Along
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.facebook.com/mattgrahambooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-burgundy text-sm transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mattgrahambooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-burgundy text-sm transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/stores/author/B09PJVZ2VZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-burgundy text-sm transition-colors"
                    >
                      Amazon Author Page
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-warm-gray mb-3">
                  For Media
                </h3>
                <p className="text-sm text-text-secondary">
                  Interview requests, review copies, and press inquiries are
                  welcome. Visit the{" "}
                  <a href="/press-kit" className="text-navy font-medium hover:text-burgundy">
                    Press Kit
                  </a>{" "}
                  for downloadable assets.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
