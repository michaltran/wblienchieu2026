/**
 * usePublicPosts — hook dùng chung cho tất cả các trang danh sách bài viết public
 * Filter theo type, search query, tag, sort, pagination
 */
import { useQuery } from '@tanstack/react-query';
import { postsApi } from '../lib/api/posts';
import type { PostType } from '../lib/api/posts';

export interface PublicPostsParams {
  type?: PostType;
  search?: string;
  tag?: string;
  page?: number;
  limit?: number;
  sort?: 'newest' | 'oldest';
}

export function usePublicPostsList(params: PublicPostsParams) {
  const { sort, ...rest } = params;
  const apiParams = {
    ...rest,
    status: 'published' as const,
    // Chuyển sort sang order backend hiểu (newest = desc createdAt)
  };

  return useQuery({
    queryKey: ['publicPosts', params],
    queryFn: () => postsApi.publicList(apiParams),
    placeholderData: (prev) => prev,
    staleTime: 1000 * 60 * 2, // cache 2 phút
  });
}
