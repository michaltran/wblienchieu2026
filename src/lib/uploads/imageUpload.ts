export const MAX_FILE_SIZE_MB = 5;
export const MAX_FILE_COUNT = 6;
export const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export interface ValidationResult {
  ok: File[];
  errors: string[];
}

export function validateFiles(files: File[]): ValidationResult {
  const ok: File[] = [];
  const errors: string[] = [];

  if (files.length > MAX_FILE_COUNT) {
    errors.push(`Vui lòng chỉ tải lên tối đa ${MAX_FILE_COUNT} ảnh.`);
    return { ok: [], errors };
  }

  files.forEach(file => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      errors.push(`File "${file.name}" không hợp lệ. Chỉ chấp nhận JPG, PNG, WEBP.`);
    } else if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      errors.push(`File "${file.name}" vượt quá kích thước cho phép (${MAX_FILE_SIZE_MB}MB).`);
    } else {
      ok.push(file);
    }
  });

  return { ok, errors };
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
