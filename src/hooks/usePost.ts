import { useQuery } from '@tanstack/react-query';
import { postsApi } from '../lib/api/posts';

export function usePost(id: string) {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postsApi.get(id),
    enabled: !!id, // Only fetch if id exists
  });
}
