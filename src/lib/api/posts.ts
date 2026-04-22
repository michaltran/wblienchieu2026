import { http } from './http';

export type PostStatus = 'draft' | 'published';
export type PostType = 'news' | 'health' | 'training' | 'procurement' | 'adminReform' | 'recruitment' | 'other';

export interface Post {
  id: string;
  title: string;
  slug: string;
  type: PostType;
  status: PostStatus;
  excerpt?: string;
  content: any; // HTML string or JSON if using rich editor
  coverUrl?: string;
  tags?: string[];
  categoryId?: string | null;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  authorId?: string;
  author?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface ListParams {
  page?: number;
  limit?: number;
  type?: PostType;
  status?: PostStatus;
  search?: string;
  tag?: string;
  categoryId?: string;
  categorySlug?: string;
}

export interface ListResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export const postsApi = {
  list: async (params: ListParams): Promise<ListResponse<Post>> => {
    const response = await http.get<ListResponse<Post>>('/api/posts', { params });
    return response.data;
  },

  publicList: async (params: ListParams): Promise<ListResponse<Post>> => {
    const response = await http.get<ListResponse<Post>>('/api/posts/public', { params });
    return response.data;
  },

  publicGetBySlug: async (slug: string): Promise<Post> => {
    const response = await http.get<Post>(`/api/posts/public/${slug}`);
    return response.data;
  },

  get: async (id: string): Promise<Post> => {
    const response = await http.get<Post>(`/api/posts/${id}`);
    return response.data;
  },

  create: async (data: Partial<Post>): Promise<Post> => {
    const response = await http.post<Post>('/api/posts', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Post>): Promise<Post> => {
    const response = await http.put<Post>(`/api/posts/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await http.delete(`/api/posts/${id}`);
  },

  publish: async (id: string): Promise<Post> => {
    const response = await http.post<Post>(`/api/posts/${id}/publish`);
    return response.data;
  },

  unpublish: async (id: string): Promise<Post> => {
    const response = await http.post<Post>(`/api/posts/${id}/unpublish`);
    return response.data;
  }
};
