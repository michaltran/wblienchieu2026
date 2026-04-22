export interface ContentPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  featured?: boolean;
  fileUrl?: string; // optional for downloads
  thumbnail?: string; // optional image
  author?: string;
  viewCount?: number;
}
