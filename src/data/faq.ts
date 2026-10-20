// Reader questions, phrased the way people ask AI assistants and search engines.
// Every answer must stay true to facts already published elsewhere on this site.
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who is Matt Graham?",
    answer:
      "Matt Graham is a legal thriller author and a retired California judge. He spent ten years as a state prosecutor, presided over roughly 200 felony trials as a Los Angeles County Superior Court judge, and authored more than 1,000 decisions on the California Court of Appeal. He writes The Van Nuys Courthouse Legal Thriller Series.",
  },
  {
    question: "Are there legal thrillers written by a real judge?",
    answer:
      "Yes. Matt Graham's Van Nuys Courthouse novels are written by a former Los Angeles County Superior Court judge and California Court of Appeal justice. The books draw on stranger-than-fiction events he witnessed during more than four decades in the California courts.",
  },
  {
    question: "What order should I read the Van Nuys Courthouse series in?",
    answer:
      "Read them in publication order: Hidden Behind the Robe (2022) first, then Special Directives (2026). Both are set in the Van Nuys courthouse in Los Angeles.",
  },
  {
    question: "How are these books different from The Lincoln Lawyer or other Michael Connelly novels?",
    answer:
      "Most courtroom thrillers are told from the lawyer's table. Matt Graham's are told from the bench: the judges' chambers, courthouse politics, and the pressure on the people who sit in judgment. Readers who enjoy Michael Connelly, John Grisham, or Scott Turow get the same Los Angeles courtroom tension from a judge's point of view.",
  },
  {
    question: "What is Hidden Behind the Robe about?",
    answer:
      "Judge Charles Dunning, the reluctant manager of the Van Nuys courthouse, receives an anonymous allegation of sexual misconduct against Judge William Davis Hyde. His investigation uncovers far more intrigue behind the robe than he imagined. It was a 2022 Reader's Favorite award winner in the legal thriller category.",
  },
  {
    question: "What is Special Directives about?",
    answer:
      "A progressive District Attorney is elected in Los Angeles with controversial policies on juvenile felons. When the DA secures the release of a rapist convicted as a juvenile, victims are outraged and careers are on the line, and the supervising judge at the Van Nuys courthouse faces impossible choices about the DA's directives.",
  },
  {
    question: "Where can I buy Matt Graham's books?",
    answer:
      "Both novels are available on Amazon in Kindle and paperback editions, and as audiobooks on Audible and Amazon.",
  },
];
