import { useQuery } from '@tanstack/react-query';
import { contentApi } from '../lib/api/content';
import type { ListParams } from '../lib/api/posts';

export function usePublicBanners(position: string = 'home_hero') {
  return useQuery({
    queryKey: ['public', 'banners', position],
    queryFn: () => contentApi.publicListBanners(position),
  });
}

export function usePublicAlbums(params?: ListParams) {
  return useQuery({
    queryKey: ['public', 'albums', params],
    queryFn: () => contentApi.publicListAlbums(params),
  });
}

export function usePublicSettings() {
  return useQuery({
    queryKey: ['public', 'settings'],
    queryFn: () => contentApi.publicGetSettings(),
  });
}

export function usePublicMedia(params?: Omit<ListParams, 'type'> & { type?: string; albumId?: string }) {
  return useQuery({
    queryKey: ['public', 'media', params],
    queryFn: () => contentApi.publicListMedia(params as any),
  });
}
