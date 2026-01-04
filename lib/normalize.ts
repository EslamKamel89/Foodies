export class FormValidationError extends Error {
  constructor(public field: string, public message: string) {
    super(message);
  }
}

export function getString(form: FormData, key: string): string {
  const value = form.get(key);
  if (typeof value != "string") {
    throw new FormValidationError(key, `${key} is required and must be string`);
  }
  return value;
}
export function getOptionalString(form: FormData, key: string): string | null {
  const value = form.get(key);
  if (value == null) return value;
  if (typeof value != "string")
    throw new FormValidationError(key, `${key} must be string`);
  return value.trim() === "" ? null : value.trim();
}
export function getFile(form: FormData, key: string): File {
  const value = form.get(key);
  if (value == null) {
    throw new FormValidationError(key, `${key} is required`);
  }
  if (!(value instanceof File)) {
    throw new FormValidationError(key, `${key} must be a valid image`);
  }
  if (value.size === 0) {
    throw new FormValidationError(key, `${key} must be a valid image`);
  }
  return value;
}
export function getOptionalFile(form: FormData, key: string): File | null {
  const value = form.get(key);
  if (value == null) return null;
  if (!(value instanceof File)) {
    throw new FormValidationError(key, `${key} must be a valid Image`);
  }
  if (value.size === 0) return null;
  return value;
}
