import { useQuery } from '@tanstack/react-query';
import { hospitalApi } from '../lib/api/hospital';
import type { ListParams } from '../lib/api/posts';

// DOCTORS
export function usePublicDoctors(params?: ListParams) {
  return useQuery({
    queryKey: ['public', 'doctors', params],
    queryFn: () => hospitalApi.publicListDoctors(params),
  });
}

export function usePublicDoctorBySlug(slug?: string) {
  return useQuery({
    queryKey: ['public', 'doctors', slug],
    queryFn: () => hospitalApi.publicGetDoctorBySlug(slug!),
    enabled: !!slug,
  });
}

// DEPARTMENTS
export function usePublicDepartments(params?: ListParams) {
  return useQuery({
    queryKey: ['public', 'departments', params],
    queryFn: () => hospitalApi.publicListDepartments(params),
  });
}

export function usePublicDepartmentBySlug(slug?: string) {
  return useQuery({
    queryKey: ['public', 'departments', slug],
    queryFn: () => hospitalApi.publicGetDepartmentBySlug(slug!),
    enabled: !!slug,
  });
}

// SERVICES
export function usePublicServices(params?: ListParams) {
  return useQuery({
    queryKey: ['public', 'services', params],
    queryFn: () => hospitalApi.publicListServices(params),
  });
}

export function usePublicServiceBySlug(slug?: string) {
  return useQuery({
    queryKey: ['public', 'services', slug],
    queryFn: () => hospitalApi.publicGetServiceBySlug(slug!),
    enabled: !!slug,
  });
}

// DRUGS
export function usePublicDrugs(params?: ListParams) {
  return useQuery({
    queryKey: ['public', 'drugs', params],
    queryFn: () => hospitalApi.publicListDrugs(params),
  });
}

export function usePublicDrugBySlug(slug?: string) {
  return useQuery({
    queryKey: ['public', 'drugs', slug],
    queryFn: () => hospitalApi.publicGetDrugBySlug(slug!),
    enabled: !!slug,
  });
}
