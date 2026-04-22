import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '../lib/api/posts';
import type { ListParams, Post } from '../lib/api/posts';

export function usePosts(params: ListParams) {
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => postsApi.list(params),
    placeholderData: (previousData) => previousData, // Keep previous data while fetching new
  });
}

export function usePublicPosts(params: ListParams) {
  return useQuery({
    queryKey: ['publicPosts', params],
    queryFn: () => postsApi.publicList(params),
    placeholderData: (previousData) => previousData,
  });
}

export function usePublicPostBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ['publicPost', slug],
    queryFn: () => postsApi.publicGetBySlug(slug!),
    enabled: !!slug,
  });
}

export function useSavePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Post>) => {
      if (data.id) {
        return postsApi.update(data.id, data);
      } else {
        return postsApi.create(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

export function useDeletePost() {
   const queryClient = useQueryClient();
   return useMutation({
     mutationFn: (id: string) => postsApi.delete(id),
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ['posts'] });
     }
   });
}

export function usePublishPost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, publish }: { id: string, publish: boolean }) => 
            publish ? postsApi.publish(id) : postsApi.unpublish(id),
        onSuccess: (_data, variables) => {
             queryClient.invalidateQueries({ queryKey: ['posts'] });
             queryClient.invalidateQueries({ queryKey: ['post', variables.id] });
        }
    })
}
