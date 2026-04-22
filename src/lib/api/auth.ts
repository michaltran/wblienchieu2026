import { http } from './http';

export interface LoginPayload {
  usernameOrEmail: string;
  password?: string;
  // Support for legacy/other login methods if needed
}

export interface AuthUser {
  id: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  email?: string;
  avatar?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}

export const authApi = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await http.post<AuthResponse>('/api/auth/login', payload);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await http.post('/api/auth/logout');
  },

  refresh: async (): Promise<{ accessToken: string }> => {
    const response = await http.post<{ accessToken: string }>('/api/auth/refresh');
    return response.data;
  },
  
  me: async (): Promise<AuthUser> => {
    const response = await http.get<AuthUser>('/api/auth/me');
    return response.data;
  }
};
