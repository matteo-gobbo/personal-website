import type { CollectionEntry } from "astro:content";

export const findAdjacentPosts = (
  actualPostSlug: string,
  allPosts: CollectionEntry<"blog">[],
): {
  prev: CollectionEntry<"blog"> | null;
  next: CollectionEntry<"blog"> | null;
} => {
  const sortedPosts = allPosts
    .filter((a) => !!a.data.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt!).getTime() -
        new Date(a.data.publishedAt!).getTime(),
    );

  const currentIndex = sortedPosts.findIndex((p) => p.slug === actualPostSlug);
  const prev = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const next =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  return {
    next,
    prev,
  };
};
