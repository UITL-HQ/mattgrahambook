// Stable JSON-LD ids so every page's Book/Series markup points at one author entity.
// AI search engines use these (plus sameAs) to tell this Matt Graham apart from the
// many others with the same name.
export const AUTHOR_ID = "https://mattgrahambook.com/#author";
export const SERIES_ID = "https://mattgrahambook.com/#series";

export const AUTHOR_SAME_AS = [
  "https://www.facebook.com/mattgrahambooks",
  "https://www.instagram.com/mattgrahambooks",
  "https://www.amazon.com/stores/author/B0GR63SR29",
  "https://www.amazon.com/stores/author/B09PJVZ2VZ",
  "https://www.audible.com/author/Matt-Graham/B0GR63SR29",
];
