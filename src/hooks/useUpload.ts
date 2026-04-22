import { useMutation } from '@tanstack/react-query';
import { uploadsApi } from '../lib/api/uploads';

export function useUploadImage() {
  return useMutation({
    mutationFn: (file: File) => uploadsApi.uploadImage(file),
  });
}
