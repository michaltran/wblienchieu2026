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

// Timeline item — lưu trong Settings key: hospital.timeline
export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

// Hospital map item — cấu trúc cho Settings key: hospital.maps
export interface HospitalMapSetting {
  id: string;
  title: string;
  level: string;
  imageUrl: string;   // URL ảnh đưa lên Cloudinary thông qua admin
  description?: string;
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

  // Settings — trả về Record<key, value> cho toàn bộ settings public
  publicGetSettings: async (): Promise<Record<string, string>> => {
    const response = await http.get('/api/settings/public');
    return response.data;
  },

  // Helper: lấy timeline từ settings (parse JSON)
  publicGetTimeline: async (): Promise<TimelineItem[]> => {
    try {
      const settings = await contentApi.publicGetSettings();
      const raw = settings['hospital.timeline'];
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  // Helper: lấy maps từ settings (parse JSON)
  publicGetHospitalMaps: async (): Promise<HospitalMapSetting[]> => {
    try {
      const settings = await contentApi.publicGetSettings();
      const raw = settings['hospital.maps'];
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },
};
