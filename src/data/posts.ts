export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "special-directives-hits-number-one",
    title: "Special Directives Hits #1 on Amazon",
    date: "2026-03-05",
    excerpt:
      "Within 24 hours of its release, Special Directives reached #1 on Amazon\u2019s list of new legal thrillers.",
    content: `I\u2019m thrilled to share that Special Directives \u2014 the second novel in The Van Nuys Courthouse Legal Thriller Series \u2014 hit #1 on Amazon\u2019s list of new legal thrillers within just one day of its release on March 4, 2026.

Thank you to every reader who picked up a copy, left a review, or shared the book with a friend. Your support means the world.

If you haven\u2019t grabbed your copy yet, Special Directives is available now on Amazon in Kindle, paperback, and audiobook formats.`,
  },
  {
    slug: "special-directives-five-star-reviews",
    title: "Five-Star Reviews Pour In for Special Directives",
    date: "2026-03-07",
    excerpt:
      "Readers are calling Special Directives \u201Ca gripping, can\u2019t-put-it-down legal thriller.\u201D",
    content: `The early reviews for Special Directives are in, and I\u2019m grateful and humbled by the response. Readers have praised the authenticity of the courtroom scenes, the moral complexity of the characters, and the page-turning pacing.

One reviewer wrote: \u201CSpecial Directives is everything a legal thriller should be \u2014 tense, smart, and impossible to put down.\u201D

If you\u2019ve read the book, I\u2019d love to hear your thoughts. Please consider leaving a review on Amazon \u2014 it helps more readers discover the series.`,
  },
  {
    slug: "readers-favorite-award-hidden-behind-the-robe",
    title: "Hidden Behind the Robe Wins Reader\u2019s Favorite Award",
    date: "2022-12-15",
    excerpt:
      "Hidden Behind the Robe was named a top award winner in the 2022 Reader\u2019s Favorite Book Contest in the legal thriller category.",
    content: `I\u2019m honored to announce that Hidden Behind the Robe has been named a top award winner in the 2022 Reader\u2019s Favorite International Book Award Contest in the legal thriller category.

The Reader\u2019s Favorite contest is one of the largest and most respected international book award contests, and being recognized alongside so many talented authors is a true privilege.

Thank you to the Reader\u2019s Favorite judges and to every reader who has supported this book since its release. This award is as much yours as it is mine.`,
  },
];
