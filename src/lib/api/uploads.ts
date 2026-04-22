import { http } from './http';

export interface UploadResponse {
  id: string;
  url: string;
  filename: string;
  mimetype: string;
  size: number;
}

export const uploadsApi = {
  uploadImage: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await http.post<UploadResponse>('/api/uploads', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await http.delete(`/api/uploads/${id}`);
  }
};
