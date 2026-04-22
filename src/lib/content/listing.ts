import type { ContentPost } from "../../types/content";

export function filterByQuery(posts: ContentPost[], query: string): ContentPost[] {
  if (!query.trim()) return posts;
  const q = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(q) || 
    post.excerpt.toLowerCase().includes(q)
  );
}

export function filterByTag(posts: ContentPost[], tag: string | null): ContentPost[] {
  if (!tag) return posts;
  return posts.filter(post => post.tags.includes(tag));
}

export function sortByDate(posts: ContentPost[], direction: 'desc' | 'asc' = 'desc'): ContentPost[] {
  return [...posts].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return direction === 'desc' ? db - da : da - db;
  });
}

export function paginate(posts: ContentPost[], pageSize: number, currentPage: number): ContentPost[] {
  const start = (currentPage - 1) * pageSize;
  return posts.slice(start, start + pageSize);
}
