"use client";

import { useState } from "react";

export default function MailingListForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with mailing list provider (Mailchimp, Brevo, ConvertKit)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-gold font-medium">
        Thanks for subscribing! Check your inbox for a confirmation.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-lg transition-colors text-sm whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
