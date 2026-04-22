import type { HealthPost } from "../data/healthPosts";

export interface FilterOptions {
  categorySlug?: string;
  searchQuery?: string;
  sortBy?: "newest" | "oldest" | "a-z";
}

export function filterHealthPosts(posts: HealthPost[], options: FilterOptions): HealthPost[] {
  let filtered = [...posts];

  // 1. Filter by Category
  if (options.categorySlug && options.categorySlug !== "tong-hop") {
    filtered = filtered.filter(p => p.categorySlug === options.categorySlug);
  }

  // 2. Search
  if (options.searchQuery) {
    const q = options.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.excerpt.toLowerCase().includes(q)
    );
  }

  // 3. Sort
  if (options.sortBy) {
    filtered.sort((a, b) => {
      if (options.sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (options.sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (options.sortBy === "a-z") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }

  return filtered;
}

export function paginatePosts(posts: HealthPost[], page: number, limit: number): {
  data: HealthPost[];
  totalPages: number;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    data: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / limit)
  };
}
