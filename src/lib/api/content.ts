import { http } from './http';
import type { ListParams, ListResponse } from './posts';

export interface Banner {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image: string;                // trường backend trả về
  mobileImage?: string;
  link?: string;
  buttonText?: string;
  position?: string;
  isActive?: boolean;
  orderIndex?: number;
}

export interface Setting {
  id: string;
  key: string;
  value: string;
  group?: string;
  type?: string;
}

export interface Album {
  id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  status: string;
}

export interface Media {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'image' | 'video';
  publicId?: string;
  youtubeId?: string;
  tags?: string[];
  albumId?: string;
  createdAt: string;
}

export const contentApi = {
  // Banners
  publicListBanners: async (position: string = 'homepage_hero'): Promise<Banner[]> => {
    const response = await http.get('/api/banners/public', { params: { position } });
    return response.data;
  },

  // Albums
  publicListAlbums: async (params?: ListParams): Promise<ListResponse<Album>> => {
    const response = await http.get('/api/albums/public', { params });
    return response.data;
  },
  
  // Media
  publicListMedia: async (params?: Omit<ListParams, 'type'> & { type?: string; albumId?: string }): Promise<ListResponse<Media>> => {
    const response = await http.get('/api/media/public', { params });
    return response.data;
  },

  // Settings
  publicGetSettings: async (): Promise<Record<string, string>> => {
    const response = await http.get('/api/settings/public');
    return response.data;
  },
};
