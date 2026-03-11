export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  seriesName: string;
  seriesNumber: number;
  description: string;
  longDescription: string;
  coverImage: string;
  amazonKindle: string;
  amazonPaperback: string;
  amazonAudiobook: string;
  rating: number;
  ratingCount: string;
  releaseDate: string;
  accolades: string[];
}

export const books: Book[] = [
  {
    slug: "hidden-behind-the-robe",
    title: "Hidden Behind the Robe",
    subtitle: "A Courthouse Thriller",
    seriesName: "The Van Nuys Courthouse Legal Thriller Series",
    seriesNumber: 1,
    description:
      "Judge Charles Dunning is the reluctant manager of the Van Nuys courthouse — a building teeming with conspiring judges, oddballs, gossipers, and misfits. When Dunning receives an anonymous allegation of sexual misconduct against Judge William Davis Hyde, his investigation reveals there is more intrigue hiding behind the robe than he could have imagined.",
    longDescription: `Judge Charles Dunning is the reluctant manager of the Van Nuys courthouse — a building teeming with conspiring judges, oddballs, gossipers, and misfits. When Dunning receives an anonymous allegation of sexual misconduct against Judge William Davis Hyde, his investigation reveals there is more intrigue hiding behind the robe than he could have imagined.

Combining issues of privilege, race, and sexual misconduct, Hidden Behind the Robe provides a raw, behind-the-scenes perspective and insight into the legal system that could only have been written by a judge who has seen it all.

Matt Graham's first novel traverses the unexplored inner workings of the raunchy, salacious, often hilarious happenings of the Los Angeles justice system. A compilation of stranger-than-fiction events witnessed during his decorated career, Hidden Behind the Robe will leave readers questioning everything they thought they knew about the people who sit in judgment.`,
    coverImage: "/images/hidden-behind-the-robe.jpg",
    amazonKindle: "https://www.amazon.com/Hidden-Behind-Robe-Courthouse-Thriller-ebook/dp/B09PJ1BQVJ",
    amazonPaperback: "https://www.amazon.com/Hidden-Behind-Robe-Courthouse-Thriller/dp/B09PHD4KN5",
    amazonAudiobook: "https://www.audible.com/pd/Hidden-Behind-the-Robe-Audiobook/B09TG4X5CF",
    rating: 4.6,
    ratingCount: "100+",
    releaseDate: "2022",
    accolades: [
      "4.6 Stars on Amazon",
      "2022 Reader\u2019s Favorite Award Winner \u2014 Legal Thriller",
    ],
  },
  {
    slug: "special-directives",
    title: "Special Directives",
    subtitle: "A Courthouse Thriller",
    seriesName: "The Van Nuys Courthouse Legal Thriller Series",
    seriesNumber: 2,
    description:
      "A progressive District Attorney is elected in Los Angeles with controversial policies about the treatment of juvenile felons. When the DA secures the prison release of a rapist convicted as a juvenile, careers are put on the line and victims are outraged. The supervising judge at the Van Nuys courthouse faces impossible choices about how to address the DA\u2019s directives.",
    longDescription: `A progressive District Attorney is elected in Los Angeles with controversial policies about the treatment of juvenile felons. When the DA secures the prison release of a rapist convicted as a juvenile, careers are put on the line and victims are outraged. The supervising judge at the Van Nuys courthouse faces impossible choices about how to address the DA's directives.

With careers on the line and victims outraged, the supervising judge at the courthouse faces hard choices about how to address the DA's policies. Special Directives is a gripping exploration of justice, politics, and the human cost of ideological crusades played out in the halls of the Los Angeles County Superior Court.

The second installment in The Van Nuys Courthouse Legal Thriller Series, Special Directives delivers the same insider authenticity and page-turning suspense that made Hidden Behind the Robe a Reader's Favorite award winner.`,
    coverImage: "/images/special-directives-front.jpg",
    amazonKindle: "https://www.amazon.com/stores/author/B09PJVZ2VZ",
    amazonPaperback: "https://www.amazon.com/stores/author/B09PJVZ2VZ",
    amazonAudiobook: "https://www.amazon.com/stores/author/B09PJVZ2VZ",
    rating: 5.0,
    ratingCount: "New",
    releaseDate: "March 2026",
    accolades: [
      "#1 New Release on Amazon \u2014 Legal Thrillers",
      "Five-Star Reviews",
    ],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
