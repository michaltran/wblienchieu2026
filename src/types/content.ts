/**
 * ContentPost — interface dùng chung cho các component hiển thị bài viết.
 * Tương thích với cả:
 *   - Mock data cũ (date: string YYYY-MM-DD, tags: string[], thumbnail)
 *   - API Post type (createdAt, coverUrl, isFeatured, tags?)
 *
 * Tất cả field đều optional ngoài slug+title để tránh lỗi khi dùng API.
 */
export interface ContentPost {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  /** Dùng cho mock data cũ: "YYYY-MM-DD" */
  date?: string;
  /** Dùng cho API: ISO timestamp */
  createdAt?: string;
  /** Alias: có thể là date hoặc createdAt */
  publishedAt?: string | null;
  tags?: string[];
  featured?: boolean;
  /** API field: isFeatured */
  isFeatured?: boolean;
  /** URL ảnh từ API */
  coverUrl?: string;
  /** URL ảnh từ mock data */
  thumbnail?: string;
  /** URL file tải về */
  fileUrl?: string;
  author?: string | { id: string; name: string; avatar?: string };
  viewCount?: number;
  type?: string;
  status?: string;
  content?: any;
}

/**
 * PatientPost — interface cho các trang dành cho người bệnh.
 * Tương thích với cả mock data và API Post.
 */
export interface PatientPost {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  /** Mock data category key */
  categoryKey?: string;
  /** Mock data date */
  date?: string;
  /** API date */
  createdAt?: string;
  tags?: string[];
  thumbnail?: string;
  coverUrl?: string;
  featured?: boolean;
  isFeatured?: boolean;
  content?: any;
  type?: string;
  status?: string;
}
