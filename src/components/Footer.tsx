import Link from "next/link";
import MailingListForm from "./MailingListForm";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Mailing list CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">
            Stay in the Loop
          </h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Get exclusive updates on new releases, behind-the-scenes stories,
            and upcoming events.
          </p>
          <MailingListForm />
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-lg font-bold mb-3">Matt Graham</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Former California judge and prosecutor turned bestselling legal
              thriller author. Creator of The Van Nuys Courthouse Legal Thriller
              Series.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-white/80">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/books", label: "Books" },
                { href: "/updates", label: "Updates" },
                { href: "/press-kit", label: "Press Kit" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-white/80">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/mattgrahambooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mattgrahambooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/stores/author/B09PJVZ2VZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.045 18.02c.072-.116.187-.124.348-.024 2.318 1.546 4.873 2.319 7.668 2.319 2.415 0 4.745-.613 6.99-1.838a.534.534 0 01.358-.105.363.363 0 01.282.132c.072.09.086.2.044.335a.371.371 0 01-.21.227 14.58 14.58 0 01-7.463 2.049c-3.051 0-5.755-.856-8.109-2.57-.154-.106-.194-.238-.109-.396l.001-.129zm21.228-2.194c-.131-.174-.351-.157-.66.049l-.534.37c-.297.206-.505.348-.625.424-.218.138-.469.211-.753.22a1.267 1.267 0 01-.535-.113c-.152-.069-.285-.162-.398-.281a1.038 1.038 0 01-.194-.357 1.155 1.155 0 01-.055-.4c.019-.297.121-.614.307-.95s.424-.654.714-.952c.29-.298.593-.556.91-.772.316-.216.595-.384.838-.504.242-.12.411-.193.506-.219.095-.026.153-.02.175.02.021.039.006.092-.046.159l-.138.199a1.51 1.51 0 00-.182.317c-.082.193-.083.35-.004.47a.622.622 0 00.365.222c.164.041.338.041.522 0 .184-.041.328-.11.432-.209.104-.098.18-.206.23-.323l.052-.124c.042-.14.034-.28-.023-.42a1.128 1.128 0 00-.275-.362 2.053 2.053 0 00-.444-.318 12.174 12.174 0 00-.538-.293l-.39-.199c-.19-.103-.393-.241-.61-.413l-.083-.066a.834.834 0 01-.214-.359c-.067-.194-.04-.383.079-.567l.04-.058c.19-.2.458-.343.803-.425.345-.082.649-.085.913-.009a1.39 1.39 0 01.621.312c.084.08.179.208.285.384s.166.302.18.377l.021.126c.013.077.01.154-.01.231-.02.077-.065.142-.136.196-.071.054-.177.066-.317.037a1.19 1.19 0 01-.404-.165.79.79 0 01-.254-.27.413.413 0 00-.35-.2c-.158 0-.29.078-.396.236a.623.623 0 00-.1.381c.013.143.078.256.196.34.118.085.256.161.414.228.158.068.305.142.44.222.134.08.271.192.411.335.14.143.241.291.302.443.062.153.078.33.048.534-.029.204-.117.375-.263.513a1.16 1.16 0 01-.477.291 2.136 2.136 0 01-.598.102c-.217.005-.4-.026-.547-.094a1.427 1.427 0 01-.385-.246l-.098-.1z" />
                  </svg>
                  Amazon Author Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Matt Graham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
