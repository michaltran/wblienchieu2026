import { http } from './http';
import type { ListParams, ListResponse } from './posts'; // Re-use the pagination types

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  title?: string;
  specialty?: string;
  specialtyId?: string;
  departmentId?: string;
  experienceYears?: number;
  languages?: string[];
  avatar?: string;
  bio?: string;
  tags?: string[];
  scheduleNote?: string;
  featured?: boolean;
  externalId?: string;
  facility?: string;
  expertise?: any[];
  experience?: any[];
  education?: any[];
  publications?: any[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  block?: 'lam-sang' | 'can-lam-sang' | 'hanh-chinh' | string;
  leaders?: any[];
  teamImage?: string;
  missionText?: string;
  duties?: string[];
  info?: any;
  highlights?: any[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description?: string;
  content?: string;
  image?: string;
  icon?: string;
  price?: number;
  departmentId?: string;
  isFeatured?: boolean;
}

export interface Drug {
  id: string;
  name: string;
  slug: string;
  activeIngredient?: string;
  dosageForm?: string;
  strength?: string;
  manufacturer?: string;
  country?: string;
  registrationNumber?: string;
  indication?: string;
  contraindication?: string;
  dosage?: string;
  sideEffects?: string;
  interactions?: string;
  storage?: string;
  packing?: string;
  price?: number;
  isBHYT?: boolean;
  category?: string;
}

export const hospitalApi = {
  // Doctors
  publicListDoctors: async (params?: ListParams): Promise<ListResponse<Doctor>> => {
    const response = await http.get('/api/hospital/doctors/public', { params });
    return response.data;
  },
  publicGetDoctorBySlug: async (slug: string): Promise<Doctor> => {
    const response = await http.get(`/api/hospital/doctors/public/${slug}`);
    return response.data;
  },

  // Departments
  publicListDepartments: async (params?: ListParams): Promise<ListResponse<Department>> => {
    const response = await http.get('/api/hospital/departments/public', { params });
    return response.data;
  },
  publicGetDepartmentBySlug: async (slug: string): Promise<Department> => {
    const response = await http.get(`/api/hospital/departments/public/${slug}`);
    return response.data;
  },

  // Services
  publicListServices: async (params?: ListParams): Promise<ListResponse<Service>> => {
    const response = await http.get('/api/hospital/services/public', { params });
    return response.data;
  },
  publicGetServiceBySlug: async (slug: string): Promise<Service> => {
    const response = await http.get(`/api/hospital/services/public/${slug}`);
    return response.data;
  },

  // Drugs
  publicListDrugs: async (params?: ListParams): Promise<ListResponse<Drug>> => {
    const response = await http.get('/api/hospital/drugs/public', { params });
    return response.data;
  },
  publicGetDrugBySlug: async (slug: string): Promise<Drug> => {
    const response = await http.get(`/api/hospital/drugs/public/${slug}`);
    return response.data;
  },
};

// Admin APIs for Hospital CRUD
export const doctorsApi = {
  list: async (params: any) => (await http.get('/api/hospital/doctors', { params })).data,
  get: async (id: string | number) => (await http.get(`/api/hospital/doctors/${id}`)).data,
  create: async (data: any) => (await http.post('/api/hospital/doctors', data)).data,
  update: async (id: string | number, data: any) => (await http.patch(`/api/hospital/doctors/${id}`, data)).data,
  remove: async (id: string | number) => (await http.delete(`/api/hospital/doctors/${id}`)).data,
};

export const departmentsApi = {
  list: async (params: any) => (await http.get('/api/hospital/departments', { params })).data,
  get: async (id: string | number) => (await http.get(`/api/hospital/departments/${id}`)).data,
  create: async (data: any) => (await http.post('/api/hospital/departments', data)).data,
  update: async (id: string | number, data: any) => (await http.patch(`/api/hospital/departments/${id}`, data)).data,
  remove: async (id: string | number) => (await http.delete(`/api/hospital/departments/${id}`)).data,
};

export const servicesApi = {
  list: async (params: any) => (await http.get('/api/hospital/services', { params })).data,
  get: async (id: string | number) => (await http.get(`/api/hospital/services/${id}`)).data,
  create: async (data: any) => (await http.post('/api/hospital/services', data)).data,
  update: async (id: string | number, data: any) => (await http.patch(`/api/hospital/services/${id}`, data)).data,
  remove: async (id: string | number) => (await http.delete(`/api/hospital/services/${id}`)).data,
};

export const drugsApi = {
  list: async (params: any) => (await http.get('/api/hospital/drugs', { params })).data,
  get: async (id: string | number) => (await http.get(`/api/hospital/drugs/${id}`)).data,
  create: async (data: any) => (await http.post('/api/hospital/drugs', data)).data,
  update: async (id: string | number, data: any) => (await http.patch(`/api/hospital/drugs/${id}`, data)).data,
  remove: async (id: string | number) => (await http.delete(`/api/hospital/drugs/${id}`)).data,
};
