import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../lib/api/auth';
import type { LoginPayload, AuthUser } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Load user from local storage initially if available or fetch from API
  const { data: user, isLoading } = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: async () => {
      // Optimistically check local storage first
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        return JSON.parse(storedUser) as AuthUser;
      }
      
      const token = localStorage.getItem('accessToken');
      if (!token) return null;
      
      try {
        const user = await authApi.me();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        return null;
      }
    },
    // We can set data immediately if we trust localStorage
    initialData: () => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : undefined;
    }
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(['auth', 'user'], data.user);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      queryClient.setQueryData(['auth', 'user'], null);
      navigate('/admin/login');
    },
  });

  return {
    user,
    isLoading,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
  };
}
